import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Button from '../components/common/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { retrieveCourseExams } from '../redux/actions/course';
import useToken from '../hooks/useToken';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import AccordionModules from '../components/class/AccordionModules';

function Class() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);

	const accessToken = useToken();

	const moduleId = queryParams.get('moduleId');
	const contentId = queryParams.get('contentId');

	const modulesData = useSelector((state) => state.course.data.modules);

	const module = modulesData?.find((m) => m.id === moduleId);
	const content = module?.contents.find((c) => c.id === contentId);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const enrollmentsUser = useSelector(
		(state) => state.auth.data.user?.enrollments,
	);
	const enrollment = enrollmentsUser?.find((enroll) => enroll.courseId === id);

	useEffect(() => {
		if (!enrollment) navigate(`/courses/${id}?access=false`);
	}, [enrollment, id, navigate]);

	function handlePrevContent(e) {
		e.preventDefault();

		if (module.moduleSequence === 1 && content.contentSequence === 1) {
			navigate(`/courses/${id}`);
		} else if (content.contentSequence === 1) {
			const modulePrev = modulesData[module.moduleSequence - 2];
			const lastContentId =
				modulePrev.contents[modulePrev.contents.length - 1].id;
			navigate(
				`/courses/${id}/modules?moduleId=${modulePrev.id}&contentId=${lastContentId}`,
			);
		} else {
			const contentPrev = module.contents[content.contentSequence - 2];
			navigate(
				`/courses/${id}/modules?moduleId=${module.id}&contentId=${contentPrev.id}`,
			);
		}
	}

	function handleNextContent(e) {
		e.preventDefault();
		const lenModules = modulesData.length;
		const lenContents = module.contents.length;
		const isLastModule = module.moduleSequence === lenModules;
		const isLastContent = content.contentSequence === lenContents;

		if (isLastModule) {
			Swal.fire({
				icon: 'info',
				title: 'Ujian',
				text: 'Selanjutnya kamu akan mengerjakan ujian, apakah kamu sudah siap?',
				showDenyButton: true,
				position: 'center',
				confirmButtonColor: '#008D91',
				denyButtonColor: 'gray',
				confirmButtonText: 'Ya, siap',
				denyButtonText: `Nanti deh`,
			}).then((result) => {
				if (result.isConfirmed) {
					dispatch(retrieveCourseExams(accessToken, id)).then((res) =>
						navigate(
							`/courses/${id}/exams?questionId=${res.data.course.exams.questions[0].id}`,
						),
					);
				} else if (result.isDenied) {
					Swal.close();
				}
			});
		} else if (isLastContent) {
			const moduleNext = modulesData[module.moduleSequence];
			const nextContentOnModuleNextId = moduleNext.contents[0].id;
			navigate(
				`/courses/${id}/modules?moduleId=${moduleNext.id}&contentId=${nextContentOnModuleNextId}`,
			);
		} else {
			navigate(
				`/courses/${id}/modules?moduleId=${module.id}&contentId=${
					module.contents[content.contentSequence].id
				}`,
			);
		}
	}

	return (
		<>
			<Navbar variant="secondary" />

			<main className="mx-[6px] pt-40 px-2 md:mx-[145px]">
				<div className="md:my-[36px]">
					<h1 className="font-bold text-2xl text-[#2E3646] md:font-bold md:text-4xl">
						Bagian <span>{module.moduleSequence}</span> :{' '}
						<span id="module-name">{module.moduleName}</span>
					</h1>
					<p
						id="sub-materi"
						className="text-xs text-slate-700 mt-[8px] md:mt-[32px] md:text-2xl">
						{content.contentDescription}.
					</p>
				</div>

				<div className="md:flex md:space-x-20">
					<div className="md:basis-3/4">
						<div
							id="materi"
							className="mt-[34px]">
							{content.contentType === 'video' ? (
								<iframe
									className="w-full h-[240px] md:h-[525px]"
									src={content.content}
									title={content.contentDescription}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
							) : (
								<div
									dangerouslySetInnerHTML={{ __html: content.content }}
									className="text-[#2E3646] border border-slate-300 rounded-md p-3 max-h-[360px] md:max-h-[560px] overflow-scroll"
								/>
							)}
						</div>

						<div className="my-[34px] md:my-[46px] flex justify-between">
							<Button
								variant="secondary"
								onClick={handlePrevContent}>
								Materi Sebelumnya
							</Button>
							<Button onClick={handleNextContent}>Materi Selanjutnya</Button>
						</div>
					</div>

					<div
						id="list-materi"
						className="my-[34px] rounded-[10px] border border-slate-300 md:h-fit md:basis-1/4">
						<AccordionModules
							courseId={id}
							modulesData={modulesData}
						/>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}

export default Class;

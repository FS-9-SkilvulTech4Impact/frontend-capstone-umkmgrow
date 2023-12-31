import ErrorImg from '@/assets/images/error/error.png';

function ErrorPage() {
	return (
		<div className="flex flex-col justify-center items-center space-y-5 h-[90vh]">
			<img
				src={ErrorImg}
				className="w-[300px] md:w-[500px]"
				alt="error_server"
			/>
			<p className="text-center mx-20">
				Maap, server kami down nih. Coba refresh lagi nanti, ya!
			</p>
		</div>
	);
}

export default ErrorPage;

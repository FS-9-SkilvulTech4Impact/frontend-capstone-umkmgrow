import React from "react";
import Logo from "../../assets/Logo.svg";
import LogoSkilvul from "../../assets/LogoSkilvul.png";

// testtt

function Certificate() {
  return (
    <div className="body-font font-poppins">
      <nav className="flex justify-between bg-[#E5F2FA] px-[154px] py-4 border-b-2">
        <div className="mr-16 cursor-pointer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="mr-auto">
          <ul className="flex gap-6 cursor-pointer">
            <li>Beranda</li>
            <li>Tentang</li>
            <li>Kelas</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md text-[#008D91]">
            Login
          </button>
          <button className="px-4 py-1 border-2 border-[#008D91] rounded-md bg-[#008D91] text-white">
            Daftar
          </button>
        </div>
      </nav>

      <main>
        <section>
          <div className="mt-[130px] px-[154px] mb-8">
            <h1 className="font-bold text-xl mb-2">
              Sertifikat Pemasaran Digital
            </h1>
            <p className="text-[16px]">
              Selamat! Anda telah menyelesaikan kelas Pemasaran Digital dengan
              baik.
              <br />
              Segera aplikasikan pengetahuan baru Anda, ya!
            </p>
          </div>

          <div className="px-[154px] md:flex md:justify-between mb-8">
            <img 
              className="w-[750px] rounded-md"
              src="../../assets/sertifikat.png" 
              alt="sertifikat"  
            />
            
            <div className="bg-[#E5F2FA] px-10 py-8 rounded-lg text-center">
              <div className="flex justify-center">
                <img
                  className="border-2 border-[#008d91] rounded-[100%] p-4"
                  src="../../assets/LogoSkilvul.png"
                  alt="avatar"
                />
              </div>
              
              <h4 className="font-semibold text-[20px] mb-3 mt-3">
                Rico Mardiansyah
              </h4>
              
              <p className="text-slate-500 text-[14px]">Bussiness</p>
              
              <h4 className="font-medium text-[20px] mb-28 mt-3">
                Pemasaran Digital
              </h4>
              
              <p>Bagikan Sertifikat :</p>
              
              <div className="flex justify-center gap-2 mt-2 mb-16">
                <a href="">
                  <img className="w-6" src="../../assets/Facebook.svg" alt="" />
                </a>
                
                <a href="">
                  <img className="w-6" src="../../assets/Linkedin.svg" alt="" />
                </a>
                
                <a href="">
                  <img className="w-6" src="../../assets/Instagram.svg" alt="" />
                </a>
                
                <a href="">
                  <img className="w-6" src="../../assets/Twitter.svg" alt="" />
                </a>
              </div>
              
              <button className="bg-[#008d91] rounded-xl px-5 py-2 text-white">
                Cetak Sertifikat
              </button>
            </div>
          </div>

          <div className="px-[154px]">
            <a href="">
              <button className="w-full border-2 border-[#008D91] py-2 rounded-md text-[#008D91] font-medium">
                Lihat detail kelas  
              </button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#E5F2FA]">
        <div className="px-[154px] pt-8 pb-16 flex justify-between border-b-2">
          <div>
            <img src={Logo} alt="" />
            <p className="mt-2">Berkembang Bersama UMKM Grow</p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Kontak</h4>
            <p>umkmgrowfs9@gmail.com</p>
            <p>+02198765432</p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold">Features</h4>
            <p>Beranda</p>
            <p>Tentang</p>
            <p>Kelas</p>
            <p>Kontak</p>
          </div>
          
          <div>
            <img src={LogoSkilvul} alt="" />
          </div>
        </div>
        
        <div className="px-[154px] flex justify-between py-4">
          <div>
            <p>Copyright @2023 UMKM Grow. All rights reserved</p>  
          </div>
          
          <div className="flex gap-10">
            <p>Syarat dan Ketentuan</p>
            <p>Kebijakan Privasi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Certificate;


import Image from "next/image";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Hero() {



  return (
    // <section className="min-h-screen bg-black text-white">
    // <section className="relative min-h-screen bg-black text-white">
    <section className="relative min-h-screen overflow-hidden bg-black pb-5 text-white">
      
      {/* Background Glow */}
<div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px]"></div>

<div className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 lg:flex-row lg:justify-between">

        {/* Left Side */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
        
  {/* <p className="mb-4 text-lg text-blue-500"> */}
  <p className="mb-4 animate-pulse text-lg text-blue-500">
    👋 Hi, I'm
  </p>

  <h1 className="text-6xl font-extrabold leading-tight lg:text-7xl">
  Walid <br />
  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
    Azim Pansari
  </span>
</h1>

  <h2 className="mt-6 text-2xl font-semibold text-gray-300">
    IT Support Engineer | WordPress Developer | Network Administrator
  </h2>

  <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
    I build responsive websites, manage IT infrastructure,
    troubleshoot hardware and networking issues, and create
    reliable digital solutions for businesses.
  </p>
    <div className="mt-10 flex flex-wrap gap-5">
  <a
  href="/resume.pdf"
  download
  className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-4 py-3 font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-700"
>
  <FaDownload className="text-sm" />
  Download Resume
</a>

    <button className="group inline-flex items-center gap-3 rounded-full border border-gray-600 px-8 py-3    font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-500 hover:scale-105">
    View Projects
    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
</div>
  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">

  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

  <span className="text-sm font-medium text-green-400">
    Available for Full-Time Opportunities
  </span>

</div>
  <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start text-center">

  <div>
    <h3 className="text-3xl font-bold text-blue-500">2+</h3>
    <p className="text-gray-400">Years Experience</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-500">20+</h3>
    <p className="text-gray-400">Projects Completed</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-blue-500">15+</h3>
    <p className="text-gray-400">Technologies</p>
  </div>

</div>
<div className="mt-10 flex items-center gap-5">


  <a
    href="#"
    className="rounded-full border border-gray-700 p-3 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
  >
    <FaGithub size={22} />
  </a>

  <a
    href="#"
    className="rounded-full border border-gray-700 p-3 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="#"
    className="rounded-full border border-gray-700 p-3 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
  >
    <FaEnvelope size={22} />
  </a>

</div>
</div>

        {/* Right Side */}
        {/* <div className="flex w-full justify-center lg:w-1/2"> */}
        <div className="flex w-full justify-center lg:w-1/2 lg:-mt-38">

    <div className="relative">

        {/* Glow */}

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Outer Ring */}
        <div className="absolute -inset-6 rounded-full border border-blue-500/20"></div>

        {/* Second Ring */}
        <div className="absolute -inset-12 rounded-full border border-blue-500/10"></div>

        {/* Blue Dot */}
        <div className="absolute right-10 top-10 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_25px_#3b82f6]"></div>

        {/* Circle */}

        <div className="relative flex h-[520px] w-[520px] items-end justify-center overflow-hidden rounded-full border-4 border-blue-500/40">
        
            <Image
              src="/images/Profile.png"
              alt="Walid Pansari"
              width={450}
              height={650}
              className="absolute bottom-[-60] left-1/2 w-[420px] -translate-x-1/2 object-contain"
              // className="absolute top-4 left-1/2 w-[360px] -translate-x-1/2 object-contain transition-all duration-500 hover:scale-105"
              priority
              loading="eager"
            />
        </div>

    </div>

</div>

      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"></div>

    </section >
  );
}
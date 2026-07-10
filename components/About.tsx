import Reveal from "./animations/Reveal";
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-24 text-white"
    >
      <Reveal>
      <div className="mx-auto max-w-7xl px-6">
        
        
        {/* Heading */}
        <div className="mb-4 h-1 w-20 rounded-full bg-blue-500"></div>
        <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-500">
          About Me
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Know More About{" "}
          <span className="text-blue-500">Me</span>
        </h2>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="text-lg leading-9 text-gray-400">
              I'm Walid Azim Pansari, an IT Support Engineer,
              WordPress Developer and Network Administrator
              passionate about creating responsive websites,
              solving technical problems and building reliable
              digital solutions.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">
              I enjoy learning new technologies and continuously
              improving my skills in Web Development,
              Networking and IT Infrastructure.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

  <div>
    <h4 className="text-sm text-gray-500">Name</h4>
    <p className="mt-1 font-semibold">Walid Azim Pansari</p>
  </div>

  <div>
    <h4 className="text-sm text-gray-500">Location</h4>
    <p className="mt-1 font-semibold">Maharashtra, India</p>
  </div>

  <div>
    <h4 className="text-sm text-gray-500">Email</h4>
    <p className="mt-1 font-semibold">
      walidpansari0@gmail.com
    </p>
  </div>

  <div>
    <h4 className="text-sm text-gray-500">Experience</h4>
    <p className="mt-1 font-semibold">
      2+ Years
    </p>
  </div>

</div>
          </div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl border border-gray-800 bg-[#0B1220] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-3xl font-bold text-blue-500">
                2+
              </h3>

              <p className="mt-2 text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0B1220] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-3xl font-bold text-blue-500">
                20+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0B1220] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-3xl font-bold text-blue-500">
                15+
              </h3>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-[#0B1220] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-3xl font-bold text-blue-500">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>
      </Reveal>
    </section>
  );
}
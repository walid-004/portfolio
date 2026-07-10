export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      tech: "Next.js • React • Tailwind CSS",
      desc: "A modern responsive portfolio website showcasing my skills, experience and projects.",
    },
    {
      title: "ISEES Education Website",
      tech: "WordPress • Elementor",
      desc: "Developed and customized the official ISEES Education website with a responsive design.",
    },
    {
      title: "Power BI Sales Dashboard",
      tech: "Power BI",
      desc: "Interactive sales dashboard with KPIs, charts and business insights.",
    },
    {
      title: "Advanced Excel Dashboard",
      tech: "Microsoft Excel",
      desc: "Created a dynamic sales dashboard using Pivot Tables, Charts and Slicers.",
    },
    {
      title: "Responsive Website Collection",
      tech: "HTML • CSS",
      desc: "A collection of responsive websites including landing pages and modern layouts.",
    },
    {
      title: "Login Page UI",
      tech: "HTML • CSS",
      desc: "Modern responsive login page with clean user interface design.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-4 h-1 w-20 rounded-full bg-blue-500"></div>

        <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-500">
          Projects
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0B1220] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              {/* Screenshot */}

              <div className="flex h-52 items-center justify-center bg-[#111827]">

                <span className="text-gray-500">
                  Project Screenshot
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-2 text-blue-500">
                  {project.tech}
                </p>

                <p className="mt-5 leading-7 text-gray-400">
                  {project.desc}
                </p>

                <div className="mt-8 flex gap-4">

                  <button className="rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700">
                    Live Demo
                  </button>

                  <button className="rounded-lg border border-gray-700 px-5 py-2 transition hover:border-blue-500">
                    GitHub
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
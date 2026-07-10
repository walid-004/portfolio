export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-4 h-1 w-20 rounded-full bg-blue-500"></div>

        <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-500">
          Experience
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          My <span className="text-blue-500">Experience</span>
        </h2>

        {/* Experience Card */}

        <div className="mt-16 rounded-2xl border border-gray-800 bg-[#0B1220] p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">

          <div className="flex flex-col justify-between gap-4 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold">
                IT Support Engineer
              </h3>

              <p className="mt-2 text-lg text-blue-500">
                ISEES Technologies LLP
              </p>

            </div>

            <div>

              <span className="rounded-full border border-blue-500 px-5 py-2 text-sm">
                Jan 2024 - Jun 2026
              </span>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-8">

            Responsible for IT Support, Hardware Troubleshooting,
            Networking, WordPress Website Development,
            Desktop Support, Software Installation,
            Microsoft Office, Data Entry and Technical Assistance.

          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div>✔ Hardware Troubleshooting</div>

            <div>✔ Networking</div>

            <div>✔ WordPress Development</div>

            <div>✔ Desktop Support</div>

            <div>✔ Advanced Excel</div>

            <div>✔ Technical Support</div>

            <div>✔ Data Entry</div>

            <div>✔ Software Installation</div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-4 h-1 w-20 rounded-full bg-blue-500"></div>

        <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-500">
          Contact
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Have a project, job opportunity or collaboration idea?
          Feel free to contact me anytime.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6">
              <h3 className="text-xl font-semibold text-blue-500">
                📧 Email
              </h3>

              <p className="mt-3 text-gray-300">
                walidpansari0@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6">
              <h3 className="text-xl font-semibold text-blue-500">
                📱 Phone
              </h3>

              <p className="mt-3 text-gray-300">
                +91 832 933 4395
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0B1220] p-6">
              <h3 className="text-xl font-semibold text-blue-500">
                📍 Location
              </h3>

              <p className="mt-3 text-gray-300">
                Mahad, Raigad, Maharashtra
              </p>
            </div>

          </div>

          {/* Right Side */}

          <form className="rounded-2xl border border-gray-800 bg-[#0B1220] p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="mb-5 w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="mb-5 w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="mb-6 w-full rounded-lg border border-gray-700 bg-transparent p-4 outline-none focus:border-blue-500"
            ></textarea>

            <button
              className="w-full rounded-lg bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        {/* Left */}
        <div>

          <h2 className="text-2xl font-bold">
            Walid <span className="text-blue-500">Azim Pansari</span>
          </h2>

          <p className="mt-2 text-gray-400">
            IT Support Engineer | WordPress Developer | Network Administrator
          </p>

        </div>

        {/* Center */}

        <ul className="flex gap-6 text-gray-400">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500">

        © 2026 Walid Azim Pansari. All Rights Reserved.

      </div>

    </footer>
  );
}
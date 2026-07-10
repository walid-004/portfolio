// import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
          src="/Logo.svg"
          alt="Logo"
          className="h-10 w-auto"
        />

</div>

        {/* Menu */}
        <ul className="hidden gap-8 md:flex">
          <li>
            <a className="relative transition duration-300 hover:text-blue-500" href="#">Home</a>
          </li>

          <li>
            <a className="relative transition duration-300 hover:text-blue-500" href="#about">About</a>
          </li>

          <li>
            <a className="relative transition duration-300 hover:text-blue-500" href="#skills">Skills</a>
          </li>

          <li>
            <a className="relative transition duration-300 hover:text-blue-500" href="#projects">Projects</a>
          </li>

          <li>
            <a className="relative transition duration-300 hover:text-blue-500" href="#contact">Contact</a>
          </li>
        </ul>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700">
          Hire Me
        </button>

      </div>
    </nav>
  );
}
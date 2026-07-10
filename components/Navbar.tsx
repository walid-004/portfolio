// import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800/70 bg-black/80 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
          src="/Logo.svg"
          alt="Logo"
          className="h-8 w-auto sm:h-10"
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
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700 md:block">
          Hire Me
        </button>
        <button className="text-3xl md:hidden">
  <HiMenuAlt3 />
</button>
      </div>
    </nav>
  );
}
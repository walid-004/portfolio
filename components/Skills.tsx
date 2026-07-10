import Reveal from "./animations/Reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaReact,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { MdComputer } from "react-icons/md";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={50} className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={50} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={50} className="text-yellow-400" />,
    },
    {
      name: "React",
      icon: <FaReact size={50} className="text-cyan-400" />,
    },
    {
      name: "WordPress",
      icon: <FaWordpress size={50} className="text-sky-500" />,
    },
    {
      name: "C Programming",
      icon: <MdComputer size={50} className="text-gray-300" />,
    },
    {
      name: "C++",
      icon: <MdComputer size={50} className="text-blue-400" />,
    },
    {
      name: "SQL",
      icon: <FaDatabase size={50} className="text-green-400" />,
    },
    {
      name: "Hardware & Networking",
      icon: <MdComputer size={50} className="text-gray-300" />,
    },
    {
      name: "Advanced Excel",
      icon: <FaChartBar size={50} className="text-green-500" />,
    },
    {
      name: "Google Sheets",
      icon: <FaChartBar size={50} className="text-lime-500" />,
    },
    {
      name: "Power BI",
      icon: <FaChartBar size={50} className="text-yellow-500" />,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black py-24 text-white"
    >
        <Reveal>
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-4 h-1 w-20 rounded-full bg-blue-500"></div>

        <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-500">
          Skills
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="rounded-2xl border border-gray-800 bg-[#0B1220] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >

              <div className="mb-5 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}
'use client'
import React from 'react'
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import { RiBootstrapLine } from 'react-icons/ri'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiPostgresql,
  SiFigma,
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'React Native', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'postgreSql', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'BootStrap', icon: RiBootstrapLine },
  { name: 'REST API', icon: SiPostman },
  { name: 'C', icon: SiC },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Illustrator', icon: DiIllustrator },
  { name: 'Figma', icon: SiFigma },
  { name: 'Photoshop', icon: DiPhotoshop },
]



const TechSidebar = () => {
  return (
    <div className="w-full overflow-hidden  p-8">
      <div className="flex gap-10 whitespace-nowrap animate-skill-slide">

        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-lg font-semibold  uppercase"
            >
              <Icon className="text-6xl hover:scale-105 cursor-pointer text-sky-800/80" />
              <span className='opacity-20'>{skill.name}</span>
            </div>
          )
        })}

        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-2 text-lg font-semibold  uppercase"
            >
              <Icon className="text-6xl  hover:scale-105 cursor-pointer text-sky-800/80" />
              <span className='opacity-20'>{skill.name}</span>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default TechSidebar

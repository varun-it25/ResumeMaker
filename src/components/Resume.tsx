import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Resume = () => {
  const resumeData = useSelector((state: RootState) => state.resume)

  return (
    <div className="flex-1 h-full flex bg-accent flex-col border-r p-4 space-y-10 items-center overflow-auto">
      <div
        className="aspect-[1/1.414] w-[20rem] bg-background max-w-full shadow-md rounded-md py-5 px-5 space-y-2"
        style={{ fontFamily: `Lato, sans-serif` }}
      >
        {/* Contact Section */}
        <div className="space-y-[1px]">
          <p className="text-center text-[0.71rem] font-medium">{resumeData.contact.name}</p>
          <div className="w-full flex justify-center items-center space-x-1.5">
            <div className="flex items-center text-[0.375rem] space-x-1">
              <Phone size={6} />
              <p>{resumeData.contact.phone}</p>
            </div>
            <div className="flex items-center text-[0.375rem] space-x-0.5">
              <Mail size={6} />
              <p>{resumeData.contact.email}</p>
            </div>
            <div className="flex items-center text-[0.375rem] space-x-0.5">
              <Linkedin size={6} />
              <p>{resumeData.contact.linkedin}</p>
            </div>
            <div className="flex items-center text-[0.375rem] space-x-0.5">
              <Github size={6} />
              <p>{resumeData.contact.github}</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="w-full">
          <div>
            <p className="text-[8px] font-bold">Education</p>
            <div className="h-[0.06px] w-full bg-foreground"></div>
          </div>
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="-space-y-[1px] pt-1">
              <div className="flex items-center text-[7px] justify-between pr-0.5">
                <p>{edu.institution}</p>
                <p>{edu.duration}</p>
              </div>
              <div className="flex items-center text-[7px] justify-between pr-0.5 font-bold italic">
                <p>{edu.degree}</p>
                <p>{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="w-full">
          <div>
            <p className="text-[8px] font-bold">Experience</p>
            <div className="h-[0.06px] w-full bg-foreground"></div>
          </div>
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="-space-y-[1px] pt-1 pl-[6px]">
              <div className="flex items-center text-[7px] justify-between pr-0.5">
                <p className="font-bold">{exp.company}</p>
                <p>{exp.duration}</p>
              </div>
              <div className="flex items-center text-[6.4px] justify-between pr-0.5 italic pl-[3px]">
                <p>{exp.position}</p>
                <p>{exp.location}</p>
              </div>
              <div className="pl-[8px] w-full mt-[2px] space-y-[3px]">
                {exp.responsibilities.map((resp, index) => (
                  <div key={index} className="text-[6.2px] flex w-full space-x-[4px]">
                    <div className="bg-foreground w-[2px] h-[2px] rounded-full mt-[3.8px] aspect-square"></div>
                    <p className="leading-[8px]">{resp}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="w-full">
          <div>
            <p className="text-[8px] font-bold">Projects</p>
            <div className="h-[0.06px] w-full bg-foreground"></div>
          </div>
          {resumeData.projects.map((project) => (
            <div key={project.id} className="-space-y-[1px] pt-1 pl-[6px]">
              <div className="flex items-center text-[6.2px] justify-between pr-0.5">
                <div className="flex items-center space-x-[1.5px] flex-1">
                  <p className="font-bold text-nowrap">{project.name}</p>
                  <p>|</p>
                  <p className="italic">{project.technologies}</p>
                </div>
                <p>{project.status}</p>
              </div>
              <div className="pl-[8px] w-full mt-[2px] space-y-[3px]">
                {project.description.map((desc, index) => (
                  <div key={index} className="text-[6.2px] flex w-full space-x-[4px]">
                    <div className="bg-foreground w-[2px] h-[2px] rounded-full mt-[3.8px] aspect-square"></div>
                    <p className="leading-[8px]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <div>
            <p className="text-[8px] font-bold">Technical Skills</p>
            <div className="h-[0.06px] w-full bg-foreground"></div>
          </div>
          {resumeData.skills.map((skillCategory) => (
            <div key={skillCategory.id} className="pt-1 pl-[6px]">
              <div className="text-[6.2px] flex w-full space-x-[4px]">
                <div className="bg-foreground w-[2px] h-[2px] rounded-full mt-[3.8px] aspect-square"></div>
                <p className="leading-[8px]">
                  <span className="font-bold">{skillCategory.category}:</span> {skillCategory.skills.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        {resumeData.achievements.length > 0 && (
          <div className="w-full">
            <div>
              <p className="text-[8px] font-bold">Achievements</p>
              <div className="h-[0.06px] w-full bg-foreground"></div>
            </div>
            {resumeData.achievements.map((achievement) => (
              <div key={achievement.id} className="pt-1 pl-[6px]">
                <div className="text-[6.2px] flex w-full space-x-[4px]">
                  <div className="bg-foreground w-[2px] h-[2px] rounded-full mt-[3.8px] aspect-square"></div>
                  <p className="leading-[8px]">
                    <span className="font-bold">{achievement.title}</span> - {achievement.description} (
                    {achievement.date})
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Resume
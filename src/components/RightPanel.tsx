import type React from "react"

import { useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import AboutForm from "./AboutForm"
import EducationForm from "./EducationForm"
import EmptyForm from "./EmptyForm"
import ExperienceForm from "./ExperienceForm"
import ProjectsForm from "./ProjectsForm"
import SkillsForm from "./SkillsForm"
import AchievementForm from "./AchievementForm"

const RightPanel = () => {
  const section = useSelector((state: RootState) => state.section.value)

  const sectionComponents: Record<string, React.ReactNode> = {
    About: <AboutForm />,
    Education: <EducationForm />,
    Experience: <ExperienceForm />,
    Project: <ProjectsForm />,
    Skill: <SkillsForm />,
    Achievement: <AchievementForm />,
  }

  return (
    <div className="hidden sm:block w-[24rem] pl-8 my-4 mr-4 pr-4 overflow-auto pb-8">
      {sectionComponents[section] || <EmptyForm />}
    </div>
  )
}

export default RightPanel
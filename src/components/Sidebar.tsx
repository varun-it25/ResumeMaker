import { useSelector, useDispatch } from "react-redux"
import { setSection } from "@/redux/store"
import type { RootState } from "@/redux/store"
import { User, GraduationCap, Briefcase, Code, Award, Lightbulb } from "lucide-react"

const sectionItems = [
  { id: "About", label: "About", icon: User },
  { id: "Education", label: "Education", icon: GraduationCap },
  { id: "Experience", label: "Experience", icon: Briefcase },
  { id: "Project", label: "Projects", icon: Code },
  { id: "Skill", label: "Skills", icon: Lightbulb },
  { id: "Achievement", label: "Achievements", icon: Award },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const currentSection = useSelector((state: RootState) => state.section.value)

  const handleSectionClick = (sectionId: string) => {
    dispatch(setSection(sectionId))
  }

  return (
    <div className="w-64 bg-accent/30 border-r p-4 overflow-auto">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Resume Sections</h2>
        {sectionItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                currentSection === item.id ? "bg-primary text-primary-foreground" : "hover:bg-accent text-foreground"
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
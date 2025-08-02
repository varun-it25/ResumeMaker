import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateSkills } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const SkillsForm = () => {
  const dispatch = useDispatch()
  const skills = useSelector((state: RootState) => state.resume.skills)
  const [formData, setFormData] = useState(skills)

  const handleInputChange = (id: string, field: string, value: string | string[]) => {
    setFormData((prev) => prev.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)))
  }

  const addSkillCategory = () => {
    const newSkill = {
      id: Date.now().toString(),
      category: "",
      skills: [""],
    }
    setFormData((prev) => [...prev, newSkill])
  }

  const removeSkillCategory = (id: string) => {
    setFormData((prev) => prev.filter((skill) => skill.id !== id))
  }

  const addSkill = (categoryId: string) => {
    setFormData((prev) =>
      prev.map((skill) => (skill.id === categoryId ? { ...skill, skills: [...skill.skills, ""] } : skill)),
    )
  }

  const removeSkill = (categoryId: string, index: number) => {
    setFormData((prev) =>
      prev.map((skill) =>
        skill.id === categoryId ? { ...skill, skills: skill.skills.filter((_, i) => i !== index) } : skill,
      ),
    )
  }

  const updateSkill = (categoryId: string, index: number, value: string) => {
    setFormData((prev) =>
      prev.map((skill) =>
        skill.id === categoryId
          ? {
              ...skill,
              skills: skill.skills.map((s, i) => (i === index ? value : s)),
            }
          : skill,
      ),
    )
  }

  const handleSave = () => {
    dispatch(updateSkills(formData))
  }

  const handleReset = () => {
    setFormData(skills)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Technical Skills</h2>
        <Button onClick={addSkillCategory} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {formData.map((skillCategory, index) => (
        <Card key={skillCategory.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Skill Category {index + 1}</CardTitle>
              <Button onClick={() => removeSkillCategory(skillCategory.id)} variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label>Category Name</Label>
              <Input
                value={skillCategory.category}
                onChange={(e) => handleInputChange(skillCategory.id, "category", e.target.value)}
                placeholder="e.g., Programming Languages"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Skills</Label>
                <Button onClick={() => addSkill(skillCategory.id)} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Skill
                </Button>
              </div>
              <div className="space-y-2">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex space-x-2">
                    <Input
                      value={skill}
                      onChange={(e) => updateSkill(skillCategory.id, skillIndex, e.target.value)}
                      placeholder="Enter skill"
                      className="flex-1"
                    />
                    <Button onClick={() => removeSkill(skillCategory.id, skillIndex)} variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex space-x-2 pt-4">
        <Button onClick={handleSave} className="flex-1">
          Save Changes
        </Button>
        <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent">
          Reset
        </Button>
      </div>
    </div>
  )
}

export default SkillsForm
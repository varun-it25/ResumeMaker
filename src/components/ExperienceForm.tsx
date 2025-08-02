import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateExperience } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const ExperienceForm = () => {
  const dispatch = useDispatch()
  const experience = useSelector((state: RootState) => state.resume.experience)
  const [formData, setFormData] = useState(experience)

  const handleInputChange = (id: string, field: string, value: string | string[]) => {
    setFormData((prev) => prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      location: "",
      responsibilities: [""],
    }
    setFormData((prev) => [...prev, newExperience])
  }

  const removeExperience = (id: string) => {
    setFormData((prev) => prev.filter((exp) => exp.id !== id))
  }

  const addResponsibility = (expId: string) => {
    setFormData((prev) =>
      prev.map((exp) => (exp.id === expId ? { ...exp, responsibilities: [...exp.responsibilities, ""] } : exp)),
    )
  }

  const removeResponsibility = (expId: string, index: number) => {
    setFormData((prev) =>
      prev.map((exp) =>
        exp.id === expId ? { ...exp, responsibilities: exp.responsibilities.filter((_, i) => i !== index) } : exp,
      ),
    )
  }

  const updateResponsibility = (expId: string, index: number, value: string) => {
    setFormData((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              responsibilities: exp.responsibilities.map((resp, i) => (i === index ? value : resp)),
            }
          : exp,
      ),
    )
  }

  const handleSave = () => {
    dispatch(updateExperience(formData))
  }

  const handleReset = () => {
    setFormData(experience)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Experience</h2>
        <Button onClick={addExperience} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {formData.map((exp, index) => (
        <Card key={exp.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
              <Button onClick={() => removeExperience(exp.id)} variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Company</Label>
                <Input
                  value={exp.company}
                  onChange={(e) => handleInputChange(exp.id, "company", e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <Label>Duration</Label>
                <Input
                  value={exp.duration}
                  onChange={(e) => handleInputChange(exp.id, "duration", e.target.value)}
                  placeholder="e.g., Feb 2025 - July 2025"
                />
              </div>
            </div>

            <div>
              <Label>Position</Label>
              <Input
                value={exp.position}
                onChange={(e) => handleInputChange(exp.id, "position", e.target.value)}
                placeholder="Enter position title"
              />
            </div>

            <div>
              <Label>Location</Label>
              <Input
                value={exp.location}
                onChange={(e) => handleInputChange(exp.id, "location", e.target.value)}
                placeholder="Enter location"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Responsibilities</Label>
                <Button onClick={() => addResponsibility(exp.id)} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              <div className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex space-x-2">
                    <Textarea
                      value={resp}
                      onChange={(e) => updateResponsibility(exp.id, respIndex, e.target.value)}
                      placeholder="Describe your responsibility"
                      className="flex-1"
                      rows={2}
                    />
                    <Button onClick={() => removeResponsibility(exp.id, respIndex)} variant="ghost" size="sm">
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

export default ExperienceForm
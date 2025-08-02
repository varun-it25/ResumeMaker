"use client"

import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateEducation } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const EducationForm = () => {
  const dispatch = useDispatch()
  const education = useSelector((state: RootState) => state.resume.education)
  const [formData, setFormData] = useState(education)

  const handleInputChange = (id: string, field: string, value: string) => {
    setFormData((prev) => prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      duration: "",
      gpa: "",
    }
    setFormData((prev) => [...prev, newEducation])
  }

  const removeEducation = (id: string) => {
    setFormData((prev) => prev.filter((edu) => edu.id !== id))
  }

  const handleSave = () => {
    dispatch(updateEducation(formData))
  }

  const handleReset = () => {
    setFormData(education)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Education</h2>
        <Button onClick={addEducation} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>

      {formData.map((edu, index) => (
        <Card key={edu.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Education {index + 1}</CardTitle>
              <Button onClick={() => removeEducation(edu.id)} variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label>Institution Name</Label>
              <Input
                value={edu.institution}
                onChange={(e) => handleInputChange(edu.id, "institution", e.target.value)}
                placeholder="Enter institution name"
              />
            </div>

            <div>
              <Label>Degree</Label>
              <Input
                value={edu.degree}
                onChange={(e) => handleInputChange(edu.id, "degree", e.target.value)}
                placeholder="Enter degree"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Duration</Label>
                <Input
                  value={edu.duration}
                  onChange={(e) => handleInputChange(edu.id, "duration", e.target.value)}
                  placeholder="e.g., 2021-2025"
                />
              </div>
              <div>
                <Label>GPA/Grade</Label>
                <Input
                  value={edu.gpa}
                  onChange={(e) => handleInputChange(edu.id, "gpa", e.target.value)}
                  placeholder="e.g., CGPA: 7.5"
                />
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

export default EducationForm
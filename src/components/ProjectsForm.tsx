import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateProjects } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const ProjectsForm = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state: RootState) => state.resume.projects)
  const [formData, setFormData] = useState(projects)

  const handleInputChange = (id: string, field: string, value: string | string[]) => {
    setFormData((prev) => prev.map((project) => (project.id === id ? { ...project, [field]: value } : project)))
  }

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      technologies: "",
      status: "",
      description: [""],
    }
    setFormData((prev) => [...prev, newProject])
  }

  const removeProject = (id: string) => {
    setFormData((prev) => prev.filter((project) => project.id !== id))
  }

  const addDescription = (projectId: string) => {
    setFormData((prev) =>
      prev.map((project) =>
        project.id === projectId ? { ...project, description: [...project.description, ""] } : project,
      ),
    )
  }

  const removeDescription = (projectId: string, index: number) => {
    setFormData((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? { ...project, description: project.description.filter((_, i) => i !== index) }
          : project,
      ),
    )
  }

  const updateDescription = (projectId: string, index: number, value: string) => {
    setFormData((prev) =>
      prev.map((project) =>
        project.id === projectId
          ? {
              ...project,
              description: project.description.map((desc, i) => (i === index ? value : desc)),
            }
          : project,
      ),
    )
  }

  const handleSave = () => {
    dispatch(updateProjects(formData))
  }

  const handleReset = () => {
    setFormData(projects)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Button onClick={addProject} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>

      {formData.map((project, index) => (
        <Card key={project.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Project {index + 1}</CardTitle>
              <Button onClick={() => removeProject(project.id)} variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Project Name</Label>
                <Input
                  value={project.name}
                  onChange={(e) => handleInputChange(project.id, "name", e.target.value)}
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <Label>Status</Label>
                <Input
                  value={project.status}
                  onChange={(e) => handleInputChange(project.id, "status", e.target.value)}
                  placeholder="e.g., Live, In Progress"
                />
              </div>
            </div>

            <div>
              <Label>Technologies</Label>
              <Input
                value={project.technologies}
                onChange={(e) => handleInputChange(project.id, "technologies", e.target.value)}
                placeholder="e.g., React.js, Node.js, MongoDB"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Description</Label>
                <Button onClick={() => addDescription(project.id)} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
              <div className="space-y-2">
                {project.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex space-x-2">
                    <Textarea
                      value={desc}
                      onChange={(e) => updateDescription(project.id, descIndex, e.target.value)}
                      placeholder="Describe your project"
                      className="flex-1"
                      rows={2}
                    />
                    <Button onClick={() => removeDescription(project.id, descIndex)} variant="ghost" size="sm">
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

export default ProjectsForm
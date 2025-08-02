import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateAchievements } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { useState } from "react"

const AchievementForm = () => {
  const dispatch = useDispatch()
  const achievements = useSelector((state: RootState) => state.resume.achievements)
  const [formData, setFormData] = useState(achievements)

  const handleInputChange = (id: string, field: string, value: string) => {
    setFormData((prev) =>
      prev.map((achievement) => (achievement.id === id ? { ...achievement, [field]: value } : achievement)),
    )
  }

  const addAchievement = () => {
    const newAchievement = {
      id: Date.now().toString(),
      title: "",
      description: "",
      date: "",
    }
    setFormData((prev) => [...prev, newAchievement])
  }

  const removeAchievement = (id: string) => {
    setFormData((prev) => prev.filter((achievement) => achievement.id !== id))
  }

  const handleSave = () => {
    dispatch(updateAchievements(formData))
  }

  const handleReset = () => {
    setFormData(achievements)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Achievements</h2>
        <Button onClick={addAchievement} size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Achievement
        </Button>
      </div>

      {formData.map((achievement, index) => (
        <Card key={achievement.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Achievement {index + 1}</CardTitle>
              <Button onClick={() => removeAchievement(achievement.id)} variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label>Achievement Title</Label>
              <Input
                value={achievement.title}
                onChange={(e) => handleInputChange(achievement.id, "title", e.target.value)}
                placeholder="Enter achievement title"
              />
            </div>

            <div>
              <Label>Description</Label>
              <Textarea
                value={achievement.description}
                onChange={(e) => handleInputChange(achievement.id, "description", e.target.value)}
                placeholder="Describe your achievement"
                rows={3}
              />
            </div>

            <div>
              <Label>Date/Year</Label>
              <Input
                value={achievement.date}
                onChange={(e) => handleInputChange(achievement.id, "date", e.target.value)}
                placeholder="e.g., 2024"
              />
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

export default AchievementForm
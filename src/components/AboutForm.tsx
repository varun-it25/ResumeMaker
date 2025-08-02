import { useSelector, useDispatch } from "react-redux"
import { type RootState, updateContact } from "@/redux/store"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const AboutForm = () => {
  const dispatch = useDispatch()
  const contact = useSelector((state: RootState) => state.resume.contact)
  const [formData, setFormData] = useState(contact)

  const handleInputChange = (field: keyof typeof contact, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    dispatch(updateContact(formData))
  }

  const handleReset = () => {
    setFormData(contact)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <Label htmlFor="linkedin">LinkedIn Username</Label>
          <Input
            id="linkedin"
            value={formData.linkedin}
            onChange={(e) => handleInputChange("linkedin", e.target.value)}
            placeholder="Enter your LinkedIn username"
          />
        </div>

        <div>
          <Label htmlFor="github">GitHub Username</Label>
          <Input
            id="github"
            value={formData.github}
            onChange={(e) => handleInputChange("github", e.target.value)}
            placeholder="Enter your GitHub username"
          />
        </div>

        <div className="flex space-x-2 pt-4">
          <Button onClick={handleSave} className="flex-1">
            Save Changes
          </Button>
          <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AboutForm;
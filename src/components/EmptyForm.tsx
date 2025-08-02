import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

const EmptyForm = () => {
  return (
    <Card className="h-full flex items-center justify-center">
      <CardContent className="text-center py-12">
        <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Select a Section</h3>
        <p className="text-muted-foreground">Choose a section from the sidebar to start editing your resume.</p>
      </CardContent>
    </Card>
  )
}

export default EmptyForm
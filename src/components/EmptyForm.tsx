import { SaveOff } from "lucide-react"

const EmptyForm = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="font-semibold mb-1">
          No Section Selected
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium">
          Please select a section of your resume to begin editing.
        </p>
        <SaveOff size={60} className="dark:text-zinc-600 text-zinc-300" aria-hidden="true" />
    </div>
  )
}

export default EmptyForm
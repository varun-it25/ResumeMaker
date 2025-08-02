import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Moon, UploadCloudIcon, Share2, Download, Settings, User, LogOut, ChevronRight, Copy } from "lucide-react"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type Theme = "light" | "dark"

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("resume-app-theme") as Theme) || "light"
    }
    return "light"
  })
  const [fileName, setFileName] = useState<string>("Varun's Resume")
  const [isFileNameSelected, setSelectFileName] = useState<boolean>(false)

  useEffect(() => {
    document.documentElement.classList.remove(theme === "light" ? "dark" : "light")
    document.documentElement.classList.add(theme)
    localStorage.setItem("resume-app-theme", theme)
  }, [theme])

  const focusOut = () => {
    setSelectFileName(false)
    if (fileName.trim() === "") {
      setFileName("Varun's Resume")
    }
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const handleDownload = () => {
    window.print()
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://www.resumo.com/resume/varun-kangotra")
  }

  return (
    <header className="px-6 py-3 flex justify-between items-center border-b bg-white dark:bg-zinc-900 dark:border-zinc-800 transition-colors">
      {/* Logo */}
      <div className="flex items-center space-x-2 font-semibold">
        <img src="https://cdn-icons-png.flaticon.com/512/6614/6614677.png" alt="Logo" className="w-8 h-8" />
        <span className="text-lg text-zinc-800 dark:text-zinc-100">ResumO</span>
      </div>

      {/* Filename & Badge */}
      <div className="relative flex items-center space-x-4 max-w-sm">
        {isFileNameSelected ? (
          <Input
            className="w-fit border-0 border-b border-zinc-300 dark:border-zinc-700 dark:bg-transparent rounded-none font-medium text-zinc-700 dark:text-zinc-200 bg-transparent focus-visible:ring-0 focus-visible:border-zinc-900 dark:focus-visible:border-white focus-visible:outline-none"
            placeholder="Varun's Resume"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            onBlur={focusOut}
            autoFocus
          />
        ) : (
          <div className="relative pr-1" onClick={() => setSelectFileName(true)}>
            <p className="font-medium hover:underline cursor-pointer">{fileName}</p>
          </div>
        )}
        <Badge className="bg-accent text-accent-foreground">
          <UploadCloudIcon className="mr-1 h-4 w-4" />2 min ago
        </Badge>
      </div>

      {/* Buttons & User */}
      <div className="flex space-x-3 items-center">
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Resume</DialogTitle>
              <DialogDescription>
                <div className="space-y-2.5">
                  <p>Anyone who has this link will be able to view this.</p>
                  <div className="relative">
                    <Input
                      placeholder="https://www.resumo.com/resume/varun-kangotra"
                      type="text"
                      readOnly
                      value="https://www.resumo.com/resume/varun-kangotra"
                    />
                    <div
                      className="absolute cursor-pointer bottom-1.5 right-2 hover:bg-accent w-6 h-6 rounded-md flex justify-center items-center"
                      onClick={handleCopyLink}
                    >
                      <Copy size={12} />
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Button onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>

        {/* Profile Popover */}
        <Popover>
          <PopoverTrigger>
            <div className="w-10 h-10 rounded-full bg-accent overflow-hidden">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Profile Pic"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-fit mr-3">
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 border-b pb-2">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile Pic"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="-space-y-1 -mt-0.5">
                  <p className="text-lg font-semibold text-foreground">Varun Kangotra</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">varunkangotra.it25@gmail.com</p>
                </div>
              </div>
              <div className="space-y-2 py-4">
                <div className="flex items-center justify-between hover:bg-accent p-2 rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <User className="mr-2 text-zinc-700 dark:text-zinc-400" size={18} />
                    <span className="font-medium text-accent-foreground text-sm">Profile</span>
                  </div>
                  <ChevronRight size={16} className="text-zinc-500 dark:text-zinc-600" />
                </div>
                <div className="flex items-center justify-between hover:bg-accent p-2 rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <Settings className="mr-2 text-zinc-700 dark:text-zinc-400" size={18} />
                    <span className="font-medium text-accent-foreground text-sm">Settings</span>
                  </div>
                  <ChevronRight size={16} className="text-zinc-500 dark:text-zinc-600" />
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="secondary" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <>
                      <Sun className="mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Button variant="destructive">
                  <LogOut className="mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}

export default Navbar
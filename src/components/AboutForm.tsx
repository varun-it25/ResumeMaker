import { Input } from "@/components/ui/input"
import { Github, Linkedin, Mail, Phone, User } from "lucide-react";
import { useState } from "react"
import LeetCodeBlack from '@/assets/images/leetcode-icon-black.png'
import LeetCodeWhite from '@/assets/images/leetcode-icon-white.png'

type Theme = "light" | "dark";

const AboutForm = () => {
    const [name, setName] = useState<string>('');
    
    const [theme, ] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
          return (localStorage.getItem("resume-app-theme") as Theme) || "light";
        }
        return "light";
    });
    
    return (
        <div>
            <h2 className='font-semibold mb-1'>About Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your about section of resume here.</p>

            <div className="space-y-6">

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Name</p>
                    <Input placeholder="Enter your name here" type="text" onChange={e => setName(e.target.value)} value={name} className="pl-10" />
                    <User className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Phone No</p>
                    <Input placeholder="Enter phone no. here" type="tel" className="pl-10" />
                    <Phone className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Email Id</p>
                    <Input placeholder="Enter your email here" type="email" className="pl-10" />
                    <Mail className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">LinkedIn Profile</p>
                    <Input placeholder="Enter your linkedin profile" type="text" className="pl-10" />
                    <Linkedin className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Github Profile</p>
                    <Input placeholder="Enter your github url" type="text" className="pl-10" />
                    <Github className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Leetcode Profile</p>
                    <Input placeholder="Enter your leetcode profile" type="text" className="pl-10" />
                    <img className="absolute bottom-2.5 left-4 w-3.5" src={theme === 'dark' ?LeetCodeWhite :LeetCodeBlack} />
                </div>

            </div>
        </div>
    )
}

export default AboutForm;
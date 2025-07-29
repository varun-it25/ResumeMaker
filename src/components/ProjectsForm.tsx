import { Input } from "@/components/ui/input"
import { Link, PencilRuler, WholeWord, X } from "lucide-react";
import { useState } from "react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "./ui/textarea";

const ProjectsForm = () => {
    const [name, setName] = useState<string>('');
    
    return (
        <div>
            <h2 className='font-semibold mb-1'>Project Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your projects section of resume here.</p>

            <div className="space-y-6">

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Project Name</p>
                    <Input placeholder="Enter project name here" type="text" onChange={e => setName(e.target.value)} value={name} className="pl-10" />
                    <WholeWord className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Technologies Used</p>
                    <Input placeholder="Enter tech you used" type="text" className="pl-10" />
                    <div className="relative">
                      <PencilRuler className="absolute bottom-5.5 left-4 text-accent-foreground" size={15} />
                    </div>
                    <div className="flex items-center space-x-1.5 overflow-auto">
                      {/* <div className="text-xs pl-1 italic text-accent font-semibold">No Skills Added</div> */}
                      <div className="border rounded-full px-3 dark:shadow-foreground py-0.5 flex items-center space-x-1.5">
                        <p className="text-[0.7rem]">React</p>
                        <div className="bg-accent p-0.5 hover:bg-red-600 hover:text-white hover:rotate-90 duration-400 rounded-full cursor-pointer text-foreground">
                          <X size={8} />
                        </div>
                      </div>

                    </div>
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Live URL</p>
                    <Input placeholder="Enter project url here" type="text" onChange={e => setName(e.target.value)} value={name} className="pl-10" />
                    <Link className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Description of project</p>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Paragraph 1" className="" />
                    </RadioGroup>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Paragraph 2" className="" />
                    </RadioGroup>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Paragraph 2" className="" />
                    </RadioGroup>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Paragraph 2" className="" />
                    </RadioGroup>
                </div>

            </div>
        </div>
    )
}

export default ProjectsForm;
import { Code2, Database, Frame, Languages, X } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SkillsForm = () => {
    return (
        <div>
            <h2 className='font-semibold mb-1'>Skill Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your skills section of resume here.</p>

            <div className="space-y-6">

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Programing Languages</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose languages you know" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="c++">C++</SelectItem>
                            <SelectItem value="c">C</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="js">JavaScript</SelectItem>
                            <SelectItem value="py">Python</SelectItem>
                            <SelectItem value="ts">TypeScript</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative">
                      <Languages className="absolute bottom-5.5 left-4 text-accent-foreground" size={15} />
                    </div>

                    <div className="flex items-center space-x-1.5 overflow-auto">
                      {/* <div className="text-xs pl-1 italic text-accent font-semibold">No Skills Added</div> */}
                      <div className="border rounded-full px-3 dark:shadow-foreground py-0.5 flex items-center space-x-1.5">
                        <p className="text-[0.7rem]">C++</p>
                        <div className="bg-accent p-0.5 hover:bg-red-600 hover:text-white hover:rotate-90 duration-400 rounded-full cursor-pointer text-foreground">
                          <X size={8} />
                        </div>
                      </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Databases</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose databases you know" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="postgres-sql">PostGres SQL</SelectItem>
                            <SelectItem value="sql">SQL</SelectItem>
                            <SelectItem value="mongodb">MongoDB</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative">
                      <Database className="absolute bottom-5.5 left-4 text-accent-foreground" size={15} />
                    </div>

                    <div className="flex items-center space-x-1.5 overflow-auto">
                      {/* <div className="text-xs pl-1 italic text-accent font-semibold">No Skills Added</div> */}
                      <div className="border rounded-full px-3 dark:shadow-foreground py-0.5 flex items-center space-x-1.5">
                        <p className="text-[0.7rem]">PostGres</p>
                        <div className="bg-accent p-0.5 hover:bg-red-600 hover:text-white hover:rotate-90 duration-400 rounded-full cursor-pointer text-foreground">
                          <X size={8} />
                        </div>
                      </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Frameworks</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose frameworks you know" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="react">React</SelectItem>
                            <SelectItem value="vue">Vue</SelectItem>
                            <SelectItem value="angular">Angular</SelectItem>
                            <SelectItem value="node">Node</SelectItem>
                            <SelectItem value="spring-boot">Spring Boot</SelectItem>
                            <SelectItem value="django">Django</SelectItem>
                            <SelectItem value="flask">Flask</SelectItem>
                            <SelectItem value="fast-api">FastAPI</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative">
                      <Frame className="absolute bottom-5.5 left-4 text-accent-foreground" size={15} />
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

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Developer Tools</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose dev tools here" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="vscode">VsCode</SelectItem>
                            <SelectItem value="github">GitHub</SelectItem>
                            <SelectItem value="figma">Figma</SelectItem>
                            <SelectItem value="postman">Postman</SelectItem>
                            <SelectItem value="vercel">Vercel</SelectItem>
                            <SelectItem value="firebase">FireBase</SelectItem>
                        </SelectContent>
                    </Select>

                    <div className="relative">
                      <Code2 className="absolute bottom-5.5 left-4 text-accent-foreground" size={15} />
                    </div>

                    <div className="flex items-center space-x-1.5 overflow-auto">
                      {/* <div className="text-xs pl-1 italic text-accent font-semibold">No Skills Added</div> */}
                      <div className="border rounded-full px-3 dark:shadow-foreground py-0.5 flex items-center space-x-1.5">
                        <p className="text-[0.7rem]">VsCode</p>
                        <div className="bg-accent p-0.5 hover:bg-red-600 hover:text-white hover:rotate-90 duration-400 rounded-full cursor-pointer text-foreground">
                          <X size={8} />
                        </div>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillsForm;
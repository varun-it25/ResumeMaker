import { Input } from "@/components/ui/input"
import { Building, MapPin, PencilRuler, User, X } from "lucide-react";
import React, { useState } from "react"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const ExperienceForm = () => {
    const [name, setName] = useState<string>('');

    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();
    
    return (
        <div>
            <h2 className='font-semibold mb-1'>Experience Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your experience section of resume here.</p>

            <div className="space-y-6">
                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Company</p>
                    <Input placeholder="Enter company name here" type="text" onChange={e => setName(e.target.value)} value={name} className="pl-10" />
                    <Building className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Working Status</p>
                    <RadioGroup defaultValue="relieved" className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="relieved" id="relieved" />
                            <Label htmlFor="relieved">Relieved</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="working" id="working" />
                            <Label htmlFor="working">Working</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Duration</p>
                    <div className="flex items-center space-x-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" data-empty={!startDate} className="data-[empty=true]:text-muted-foreground flex-1 justify-start text-left font-normal">
                                    <CalendarIcon />
                                    {startDate ? format(startDate, "PPP") : <span>Join Date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                            </PopoverContent>
                        </Popover>
                        <p className="italic text-xs">to</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" data-empty={!endDate} className="data-[empty=true]:text-muted-foreground flex-1 justify-start text-left font-normal">
                                    <CalendarIcon />
                                    {endDate ? format(endDate, "PPP") : <span>Relieve date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Role</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose your role here" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="frontend developer">Frontend Developer</SelectItem>
                            <SelectItem value="backend developer">Backend Developer</SelectItem>
                            <SelectItem value="full stack developer">Full Stack Developer</SelectItem>
                            <SelectItem value="software developer">Software Developer</SelectItem>
                            <SelectItem value="ui/ux designer">UI/UX Designer</SelectItem>
                        </SelectContent>
                    </Select>
                    <User className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Prefix</p>
                    <RadioGroup defaultValue="na" className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="na" id="na" />
                            <Label htmlFor="none">None</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="jr" id="jr" />
                            <Label htmlFor="jr">Jr. (Junior)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sr" id="sr" />
                            <Label htmlFor="remote">Sr. (Senior)</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Job Type</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose job type here" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fulltime">Full Time</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                    </Select>
                    <User className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Location Type</p>
                    <RadioGroup defaultValue="onsite" className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="onsite" id="onsite" />
                            <Label htmlFor="onsite">On Site</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="remote" id="remote" />
                            <Label htmlFor="remote">Remote</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hybrid" id="hybrid" />
                            <Label htmlFor="hybrid">Hybrid</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-3 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Location</p>
                    <Input placeholder="Enter company location here" type="text" className="pl-10" />
                    <MapPin className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Skills Used</p>
                    <Input placeholder="Enter skills you used" type="text" className="pl-10" />
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

            </div>
        </div>
    )
}

export default ExperienceForm;
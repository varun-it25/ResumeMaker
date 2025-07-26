import * as React from "react"
import { Input } from "@/components/ui/input"
import { Book, PencilRuler, School, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"


const EducationForm = () => {
    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();

    return (
        <div>
            <h2 className='font-semibold mb-1'>Education Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your education section of resume here.</p>

            <div className="space-y-4">

                <div className="space-y-2 relative">
                    <p className="text-xs pl-0.5 italic font-medium">College Name</p>
                    <Input placeholder="Enter your college name" type="text" className="pl-10" />
                    <School className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-2">
                    <p className="text-xs pl-0.5 italic font-medium">Current Status</p>
                    <RadioGroup defaultValue="completed" className="flex space-x-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="completed" id="completed" />
                            <Label htmlFor="completed">Completed</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="pursuing" id="pursuing" />
                            <Label htmlFor="pursuing">Pursuing</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <p className="text-xs pl-0.5 italic font-medium">Duration</p>
                    <div className="flex items-center space-x-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" data-empty={!startDate} className="data-[empty=true]:text-muted-foreground flex-1 justify-start text-left font-normal">
                                    <CalendarIcon />
                                    {startDate ? format(startDate, "PPP") : <span>Start Date</span>}
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
                                    {endDate ? format(endDate, "PPP") : <span>Finish date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="space-y-2 relative">
                    <p className="text-xs pl-0.5 italic font-medium">CGPA</p>
                    <Input placeholder="Enter your CGPA here" type="number" className="pl-10" />
                    <Star className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-2 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Course</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose your course here" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="B.Tech">B.Tech</SelectItem>
                            <SelectItem value=" ">Coming soon...</SelectItem>
                        </SelectContent>
                    </Select>
                    <Book className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

                <div className="space-y-2 relative">
                    <p className="text-xs pl-0.5 italic font-medium">Branch</p>
                    <Select>
                        <SelectTrigger className="w-full pl-10">
                            <SelectValue placeholder="Choose your branch here" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="IT">Information Technology (IT)</SelectItem>
                            <SelectItem value="CS">Computer Science (CS)</SelectItem>
                        </SelectContent>
                    </Select>
                    <PencilRuler className="absolute bottom-2.5 left-4 text-accent-foreground" size={15} />
                </div>

            </div>
        </div>
    )
}

export default EducationForm;
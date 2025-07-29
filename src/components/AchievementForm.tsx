import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "./ui/textarea";

const AchievementForm = () => {
    
    return (
        <div>
            <h2 className='font-semibold mb-1'>Achievement Section</h2>
            <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Edit your achievements section of resume here.</p>

            <div className="space-y-6">

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Achievement 1</p>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Write your description here" className="" />
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Achievement 2</p>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Write your description here" className="" />
                    </RadioGroup>
                </div>

                <div className="space-y-3">
                    <p className="text-xs pl-0.5 italic font-medium">Achievement 3</p>
                    <RadioGroup defaultValue="relieved" className="flex items-center">
                        <RadioGroupItem value="relieved" id="relieved" />
                        <Textarea placeholder="Write your description here" className="" />
                    </RadioGroup>
                </div>

            </div>
        </div>
    )
}

export default AchievementForm;
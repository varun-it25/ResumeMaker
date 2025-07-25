import { Code2, GraduationCap, HandPlatter, Layout, User } from "lucide-react"

type cardProps = {
  id: number,
  label: String,
  icon: any,
  onClick: () => void
}

const sections = [
  {
    label: 'About',
    icon: <User size={18} className="dark:text-zinc-300 text-zinc-500" />
  },
  {
    label: 'Education',
    icon: <GraduationCap size={18} className="dark:text-zinc-300 text-zinc-500" />
  },
  {
    label: 'Experience',
    icon: <HandPlatter size={18} className="dark:text-zinc-300 text-zinc-500" />
  },
  {
    label: 'Projects',
    icon: <Layout size={18} className="dark:text-zinc-300 text-zinc-500" />
  },
  {
    label: 'Tech Skills',
    icon: <Code2 size={18} className="dark:text-zinc-300 text-zinc-500" />
  },
]

function Card({id, label, icon, onClick}: cardProps){
  return (
    <div key={id} className="w-full cursor-pointer hover:bg-accent hover:bg-opacity-0 shadow-md shadow-accent rounded-md aspect-square border flex flex-col justify-center items-center space-y-2 mb-4" onClick={onClick}>
      <div className="w-8 h-8 rounded-full flex justify-center border items-center">
        {icon}
      </div>
      <p className="text-xs font-medium">{label}</p>
    </div>
  )
}

const Sidebar = ({setSection} : {setSection: () => void}) => {
  return (
    <div className='hidden sm:block w-[16rem] border-r px-8 py-4 overflow-auto'>
      <h2 className='font-semibold mb-1'>Resume Sections</h2>
      <p className='text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium'>Navigate through the sections of your resume.</p>
      <div className="grid grid-cols-2 gap-x-4 overflow-auto">
        {
          sections.map((item, i) => {
            return <Card id={i} label={item.label} icon={item.icon} onClick={setSection} />
          })
        }
      </div>
    </div>
  )
}

export default Sidebar
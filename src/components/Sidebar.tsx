import { Code2, GraduationCap, HandPlatter, Layout, Trophy, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "@/redux/slices/section";
import React, { useCallback } from "react";
import clsx from "clsx";

interface RootState {
  section: {
    value: string;
  };
}

type CardProps = {
  label: string;
  icon: React.ReactNode;
};

const sections = [
  { label: 'About', icon: <User size={18} className="dark:text-zinc-300 text-zinc-500" /> },
  { label: 'Education', icon: <GraduationCap size={18} className="dark:text-zinc-300 text-zinc-500" /> },
  { label: 'Experience', icon: <HandPlatter size={18} className="dark:text-zinc-300 text-zinc-500" /> },
  { label: 'Project', icon: <Layout size={18} className="dark:text-zinc-300 text-zinc-500" /> },
  { label: 'Skill', icon: <Code2 size={18} className="dark:text-zinc-300 text-zinc-500" /> },
  { label: 'Achievement', icon: <Trophy size={18} className="dark:text-zinc-300 text-zinc-500" /> },
];

const Card = React.memo(({ label, icon }: CardProps) => {
  const dispatch = useDispatch();
  const section = useSelector((state: RootState) => state.section.value);

  const isActive = label === section;

  const handleClick = useCallback(() => {
    dispatch(setSection(label));
  }, [dispatch, label]);

  return (
    <div className={clsx('w-full cursor-pointer hover:bg-accent shadow-md shadow-accent rounded-md aspect-square border flex flex-col justify-center items-center space-y-2 mb-4', isActive && 'bg-accent hover:bg-transparent hover:border-foreground')} onClick={handleClick}>
      <div className={clsx('w-8 h-8 rounded-full flex justify-center border items-center shadow', isActive && 'bg-accent')}>
        {icon}
      </div>
      <p className="text-xs font-medium">{label}</p>
    </div>
  );
});

const Sidebar = () => {
  return (
    <div className="hidden sm:block w-[16rem] border-r px-8 py-4 overflow-auto">
      <h2 className="font-semibold mb-1">Resume Sections</h2>
      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-6 font-medium">Navigate through the sections of your resume.</p>
      <div className="grid grid-cols-2 gap-x-4 overflow-auto">
        {sections.map((item, i) => (
          <Card key={i} label={item.label} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
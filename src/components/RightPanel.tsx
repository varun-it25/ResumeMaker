import { useSelector } from 'react-redux';
import AboutForm from './AboutForm';
import EducationForm from './EducationForm';
import EmptyForm from './EmptyForm';
import ExperienceForm from './ExperienceForm';
import ProjectsForm from './ProjectsForm';
import SkillsForm from './SkillsForm';

interface RootState {
  section: {
    value: string;
  };
}

const RightPanel = () => {
  const section = useSelector((state: RootState) => state.section.value);

  const sectionComponents: Record<string, React.ReactNode> = {
    'About': <AboutForm />,
    'Education': <EducationForm />,
    'Experience': <ExperienceForm />,
    'Projects': <ProjectsForm />,
    'Skills': <SkillsForm />,
  };

  return (
    <div className="hidden sm:block w-[24rem] border-l pl-8 py-4 mr-4 pr-4 overflow-auto pb-8">
      {sectionComponents[section] || <EmptyForm />}
    </div>
  );
};

export default RightPanel;
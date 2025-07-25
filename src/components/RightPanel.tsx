import AboutForm from "./AboutForm";
import EducationForm from "./EducationForm";

const RightPanel = ({section}: {section: string}) => {
  return (
    <div className='hidden sm:block w-[24rem] border-l px-8 py-4 overflow-auto pb-8'>
      {
        section === 'about' && <AboutForm />
      }
      {
        section === 'education' && <EducationForm />
      }
    </div>
  )
}

export default RightPanel
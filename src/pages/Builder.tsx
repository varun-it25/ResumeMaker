import Navbar from '@/components/Navbar';
import Resume from '@/components/Resume';
import RightPanel from '@/components/RightPanel';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

const Builder = () => {
  const [section, setSection] = useState<string>('about');

  function setter(){
    if(section === 'about'){
      setSection('education');
    } else{
      setSection('about');
    }
  }


  return (
    <div className="text-foreground bg-background w-screen h-[100dvh] overflow-hidden">
      <div className="flex flex-col h-full">
        <Navbar />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar setSection={setter} />
          <Resume />
          <RightPanel section={section} />
        </div>
      </div>
    </div>
  );
};

export default Builder;
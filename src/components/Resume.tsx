function Paper(){
  return (
    <div className="aspect-[1/1.414] w-[20rem] max-w-full bg-accent shadow-md rounded-md" />
  )
}

const Resume = () => {
  return (
    <div className="flex-1 h-full flex flex-col border-r p-4 space-y-10 items-center overflow-auto">
      <Paper />
    </div>
  );
};

export default Resume;

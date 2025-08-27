export default function AboutWindow() {
  return (
    <div className="flex flex-row w-full h-64">
      {/* scroll through projects */}
      <div className="flex flex-col overflow-y-scroll border-r-[3px] w-1/3">
        {/* individual project */}
        <div className="">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="border-b-[3px] p-4">
                    <h3>project {i + 1}</h3>
                    <p>this will be a short description of the project</p>
                </div>
            ))}
        </div>
      </div>

      {/* project info */}
      <div className="flex flex-col overflow-y-scroll p-4">project</div>
    </div>
  );
}

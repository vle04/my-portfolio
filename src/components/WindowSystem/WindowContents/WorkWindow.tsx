import ToolTab from "@/components/ToolTab";

export default function AboutWindow() {
  return (
    <div className="flex flex-row w-full h-100">
      {/* scroll through projects */}
      <div className="flex flex-col overflow-y-scroll border-r-[3px] min-w-[400px]">
        {/* individual project */}
        <div className="">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-b-[3px] px-8 py-4 hover:bg-gray-200">
              <h3>project {i + 1}</h3>
              <p>this will be a short description of the project</p>
            </div>
          ))}
        </div>
      </div>

      {/* project info */}
      <div className="flex flex-col overflow-y-scroll px-8 py-4 min-w-[650px] w-full gap-4">
        <div className="flex flex-row items-center justify-between">
          <h2>FreeBites</h2>
          <p>software developer, 2023 - present</p>
        </div>

        <div>
          <h4>overview</h4>
          <p>
            FreeBites is an app made by students for students, notifying them of
            free food opportunities on campus, namely from various club or
            organization events. the app currently on the app store!{" "}
          </p>
        </div>

        <div>
            <h4>tools</h4>
            <div>
                <ToolTab/>
            </div>
        </div>
      </div>
    </div>
  );
}

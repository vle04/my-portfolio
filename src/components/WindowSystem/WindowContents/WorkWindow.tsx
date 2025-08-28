import ToolTab from "@/components/ToolTab";
import StockPhoto from "@/public/images/stock-photo.png";
import Image from "next/image";

export default function AboutWindow() {
  return (
    <div className="flex flex-row w-full h-115">
      {/* scroll through projects */}
      <div className="flex flex-col overflow-y-scroll border-gray-300 border-r-[3px] min-w-[400px]">
        {/* individual project */}
        <div className="">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border-b-[3px] border-gray-300 px-8 py-4 hover:bg-gray-300">
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

        <div className="flex flex-col gap-2">
          <h4>overview</h4>
          <p>
            FreeBites is an app made by students for students, notifying them of
            free food opportunities on campus, namely from various club or
            organization events. the app is currently on the app store!{" "}
          </p>
        </div>

        <div className="flex flex-col gap-2">
            <h4>tools</h4>
            <div className="flex flex-row flex-wrap gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <ToolTab key={i} text={"tool " + (i + 1)}/>
                ))}
            </div>
        </div>
        
        <Image src={StockPhoto} alt="stock photo" className="w-full my-4"/>
        <p>probably some more text down here</p>

        {/* pagination, make component for buttons*/}
        <div className="flex flex-row justify-between">
            <p className="hover:text-gray-300">back</p>
            <p className="hover:text-gray-300">next</p>
        </div>
      </div>
    </div>
  );
}

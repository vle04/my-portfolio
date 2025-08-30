"use client";

import ToolTab from "@/components/ToolTab";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { Project } from "@/types/project";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/sanity/lib/portableTextComponents";

export default function WorkWindow() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProj, setSelectedProj] = useState<Project | null>(null);

  // fetch projects
  useEffect(() => {
    client.fetch(projectsQuery).then((data) => {
      setProjects(data);
      // if (data.length > 0) setSelectedProj(data[0]); // select first proj by default
    });
  });

  return (
    <div className="flex flex-row w-full h-115">
      {/* scroll through projects */}
      <div className="flex flex-col overflow-y-scroll border-gray-300 border-r-[3px] min-w-[400px]">
        {/* individual project */}
        {projects.map((proj) => (
          <div
            key={proj._id}
            onClick={() => {
              setSelectedProj(proj);
            }}
            className={`border-b-[3px] border-gray-300 px-8 py-4 hover:bg-gray-200 cursor-pointer ${
              selectedProj?._id === proj._id ? "bg-gray-200" : ""
            }`}
          >
            <h3>{proj.title}</h3>
            <p>this will be a short description of the project</p>
          </div>
        ))}
      </div>

      {/* project info */}
      <div className="flex flex-col overflow-y-scroll px-8 py-4 min-w-[650px] w-full gap-4">
        {selectedProj ? (
          <>
            <div className="flex flex-row items-center justify-between">
              <h2>{selectedProj.title}</h2>
              <p>{selectedProj.details}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4>overview</h4>
              <p>{selectedProj.overview}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4>tools</h4>
              <div className="flex flex-row flex-wrap gap-2">
                {selectedProj.tools?.map((tool: string, i: number) => (
                  <ToolTab key={i} text={tool} />
                ))}
              </div>
            </div>

            {/* <Image src={StockPhoto} alt="stock photo" className="w-full my-4" />
            <p>probably some more text down here</p> */}

            <div className="prose">
              <PortableText value={selectedProj.body} components={portableTextComponents}/>
            </div>

            {/* pagination, make component for buttons*/}
            <div className="flex flex-row justify-between">
              <p className="hover:text-gray-300">back</p>
              <p className="hover:text-gray-300">next</p>
            </div>
          </>
        ) : (
          <p>select a project to view details</p>
        )}
      </div>
    </div>
  );
}

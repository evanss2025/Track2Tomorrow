import "../App.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const name = localStorage.getItem("name");

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-3xl text-blue-500 mb-3">
        Hey, {name}, welcome!
      </h1>
      <div className="flex gap-4 w-full min-h-[400px] max-h=[60vh] justify-center">
        <div className="basis-2/3 w-2/3 bg-slate-200 rounded-lg p-8">
          <Roadmap />
        </div>
        {/* <div className="basis-1/3 w-1/3 bg-slate-200 rounded-lg"></div> */}
      </div>
    </div>
  );
}

function Roadmap() {
  return (
    <div className="grid grid-cols-3 space-2">
      <div className="col-span-2">
        <RoadmapAction
          isCurrent={false}
          name="Explore and Plan"
          img="/explorationPlanning.png"
          link="/explore"
        />
      </div>
      <div className="col-span-1 pt-6 pr-6">
        {/* top right angle dotted line vector img (see figma but simplified to just the top right corner */}
        <div className="w-full h-full border-t-[7px] border-r-[7px] border-black border-dashed rounded-tr-xl"></div>
      </div>
      <div className="col-span-1 pt-16 pl-6">
        <div className="w-full h-full border-t-[7px] border-l-[7px] border-black border-dashed rounded-tl-xl"></div>
      </div>
      <div className="col-span-2">
        <RoadmapAction
          isCurrent={true}
          name="Academic Preparation"
          img="/academicPrep.png"
          dialogContent={<AcademicPreparationDemo />}
        />
      </div>
      <div className="col-span-1">
        <RoadmapAction
          isCurrent={false}
          name="Internships"
          link="/extracurriculars"
        />
      </div>
      <div className="col-span-2 pt-10">
        <div className="w-full h-full border-t-[7px] border-r-[7px] border-black border-dashed rounded-tr-xl"></div>
      </div>
      <div className="col-span-1 pt-16 pl-6">
        <div className="w-full h-full border-t-[7px] border-l-[7px] border-black border-dashed rounded-tl-xl"></div>
      </div>
      <div className="col-span-2">
        <RoadmapAction
          isCurrent={false}
          name="Financial Aid"
          img="/finaid.png"
          link="/finaid"
        />
      </div>
    </div>
  );
}

const backgroundColors = () => {};

function RoadmapAction({ isCurrent, name, img, dialogContent, link }) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`rounded-full bg-white py-3 ${img ? "px-8" : "px-6"} ${
        isCurrent && "border-[7px] border-blue-500"
      } mb-4 flex gap-3 justify-between items-center`}
    >
      <div className="">
        <div className={`${isCurrent ? "text-2xl" : "text-xl"} font-bold`}>
          {name}
        </div>
        <button
          className="text-sm text-blue-500 underline"
          onClick={() => {
            // if theres a dialog to open, open that otherwise open the link attached
            if (dialogContent) {
              setIsOpen(true);
              return;
            } else if (link) {
              window.location.href = link;
            }
          }}
        >
          View task
        </button>
      </div>
      {img && (
        <img className={`${isCurrent ? "h-24" : "h-20"} w-auto`} src={img} />
      )}

      {!link && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-24 bg-black/25 backdrop-blur-sm">
            <Dialog.Panel className="w-full max-w-[48rem] rounded-lg bg-white p-6">
              <div className="flex items-center">
                <div className="self-stretch w-2/3">
                  <div className="text-3xl font-bold whitespace-nowrap w-max">
                    {name}
                  </div>
                  {dialogContent}
                </div>
                {img && (
                  <div className="w-1/3">
                    <img className="w-full h-auto" src={img} />
                  </div>
                )}
              </div>
              <button
                className="bg-blue-200 w-full rounded p-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
}

function AcademicPreparationDemo() {
  return (
    <div>
      {/* <div className="w-full bg-blue-200 px-6 py-2.5 text-sm rounded-full flex flex-nowrap">
        <input
          type="text"
          className="focus:ring-0 focus:outline-none focus:border-0 outline-none bg-transparent placeholder-blue-400/80 w-full text-blue-500"
          placeholder="Ask your personalized AI tutor..."
        />
      </div> */}

      <div className="grid grid-cols-2 gap-4">
        <Card
          title="AP Courses"
          description="If offered at your school, look into taking rigorous classes like AP Calculus AB, AP Physics, or AP English Language and Composition."
          link="https://ap.collegeboard.org/"
        />
        <Card
          title="Khan Academy"
          description="Get resources for standardized testing like the SAT and ACT as well as review content from your classes"
          link="https://www.khanacademy.org/"
        />
      </div>
    </div>
  );
}

function Card({ title, description, link }) {
  return (
    <a href={link}>
      <div className="w-full rounded-lg bg-slate-200 relative block">
        <div className="card-header bg-gradient-to-br from-blue-300 to-indigo-400 rounded-t-lg h-18 w-full"></div>
        <div className="p-4">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </a>
  );
}

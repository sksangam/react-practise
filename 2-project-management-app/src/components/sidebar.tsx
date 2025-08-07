import type { ProjectProp } from "./project";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

type SidebarProps = {
  selectedProject: ProjectProp | "new" | null;
  onAddProject: (newProject: ProjectProp | "new" | null) => void;
  projects: ProjectProp[];
};

const Sidebar = ({ onAddProject, projects }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-100 border-r border-gray-300">
      <div className="p-4">
        <h2 className="md: mt-10 text-2xl text-blue-900 font-bold">
          Your Projects
        </h2>

        <Button className="mt-5" onClick={() => onAddProject("new")}>
          <Plus />
          Add Project
        </Button>

        <ul className="mt-5 space-y-1">
          {projects.map((project) => (
            <li
              key={project.title}
              className="w-full border border-blue-700 p-2 font-semibold cursor-pointer"
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

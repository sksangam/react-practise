import { PackagePlus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import type { ProjectProp } from "./project";

type NoProjectProps = {
  onAddProject: (newProject: ProjectProp | "new" | null) => void;
};

const NoProject = ({ onAddProject }: NoProjectProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <PackagePlus size={48} />
      <h2 className="text-2xl font-semibold">No Project selected</h2>
      <p className="text-xl my-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={() => onAddProject("new")}>
        <Plus />
        Create New Project
      </Button>
    </div>
  );
};

export default NoProject;

import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import { useState } from "react";

export type ProjectProp = {
  title: string;
  description: string;
  dueDate: Date;
};

const Project = () => {
  const [projectState, setProjectState] = useState({
    selectedProject: null as ProjectProp | "new" | null,
    projects: [] as ProjectProp[],
  });

  const addProject = (newProject: ProjectProp | "new" | null) => {
    setProjectState((prev) => {
      if (newProject === "new") {
        return {
          ...prev,
          selectedProject: "new",
        };
      }

      if (newProject == null) {
        return {
          ...prev,
          selectedProject: null,
        };
      }
      const isDuplicate = prev.projects.some(
        (p) => p.title.toLowerCase() == newProject.title.toLowerCase()
      );

      if (isDuplicate) {
        return {
          ...prev,
          selectedProject: newProject, // maybe still select it
        };
      }

      const updatedProjects = [...prev.projects, newProject];

      return {
        selectedProject: newProject,
        projects: updatedProjects,
      };
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        selectedProject={projectState.selectedProject}
        onAddProject={addProject}
        projects={projectState.projects}
      />
      <Dashboard
        selectedProject={projectState.selectedProject}
        onAddProject={addProject}
      />
    </div>
  );
};

export default Project;

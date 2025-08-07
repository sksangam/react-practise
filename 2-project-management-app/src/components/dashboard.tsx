import NewProject from "./new-project";
import NoProject from "./no-project";
import type { ProjectProp } from "./project";

type DashboardProps = {
  selectedProject: ProjectProp | "new" | null;
  onAddProject: (newProject: ProjectProp | "new" | null) => void;
};

const Dashboard = ({ selectedProject, onAddProject }: DashboardProps) => {
  return (
    <div className="flex-1 bg-white">
      <div className="p-4">
        {selectedProject == null ? (
          <NoProject onAddProject={onAddProject} />
        ) : (
          <NewProject onAddProject={onAddProject} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

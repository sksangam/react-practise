import { useRef } from "react";
import type { ProjectProp } from "./project";

type NewProjectProps = {
  onAddProject: (newProject: ProjectProp) => void;
};

const NewProject = ({ onAddProject }: NewProjectProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value.trim() || "";
    const desc = descRef.current?.value.trim() || "";
    const dueDate = dueDateRef.current?.value || "";

    if (!title || !desc || !dueDate) {
      alert("All fields are mandatory");
      return;
    }

    const newProject: ProjectProp = {
      title,
      description: desc,
      dueDate: new Date(dueDate),
    };

    onAddProject(newProject);

    //reset fields
    titleRef.current!.value = "";
    descRef.current!.value = "";
    dueDateRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto shadow p-6 rounded"
    >
      <div className="text-right">
        <button
          type="submit"
          className="text-grey rounded mr-2 px-4 py-2 mt-2 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-1 mt-2 cursor-pointer"
        >
          Add Task
        </button>
      </div>
      <div>
        <label
          htmlFor="title"
          className="block font-medium mb-1 text-left uppercase"
        >
          Title
        </label>
        <input
          ref={titleRef}
          type="text"
          id="title"
          className="w-full border rounded p-2"
          placeholder="Enter task title"
        />
      </div>
      <div>
        <label
          htmlFor="desc"
          className="block font-medium mb-1 text-left uppercase"
        >
          Description
        </label>
        <textarea
          ref={descRef}
          id="desc"
          className="w-full border rounded p-2"
          placeholder="Enter task description"
        />
      </div>
      <div>
        <label
          htmlFor="duedate"
          className="block font-medium mb-1 text-left uppercase"
        >
          Due Date
        </label>
        <input
          ref={dueDateRef}
          type="date"
          id="duedate"
          className="w-full border rounded p-2"
          placeholder="Enter task title"
        />
      </div>
    </form>
  );
};

export default NewProject;

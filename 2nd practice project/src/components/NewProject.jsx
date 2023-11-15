import { useRef } from "react";
import Input from "./Input.jsx";
import WarningModal from "./WarningModal.jsx";

export default function NewProject({ onSaveProject, onCancelProject}) {
  // in tailwind custom class w-[35rem] using []

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const warningModal = useRef();

  function handleSaveProject() {
    if (
      title.current.value.trim === "" ||
      description.current.value === "" ||
      dueDate.current.value === ""
    ) {
      warningModal.current.open();
      return;
    }

    const newProjectData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    onSaveProject(newProjectData);
  }

  return (
    <div className="w-[35rem] mt-16">
      <WarningModal ref={warningModal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provie a valid value for every input field</p>
      </WarningModal>

      <menu className="flex item-center justify-end gap-4 my-4">
        <li>
          <button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSaveProject}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input input="text" ref={title} labelName="Title" />

        <Input ref={description} labelName="Description" textarea />

        <Input type="date" ref={dueDate} labelName="Due Date" />
      </div>
    </div>
  );
}

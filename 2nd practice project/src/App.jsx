import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import { useState } from "react";

// array of objects that store information regarding descption, dates and  due date

function App() {
  const [currProjects, setCurrProjects] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  //const [currSelectedProject, setSelectedProject] = useState({})
  // const noProject = currProjects.selectedProjectID === undefined;
  // const initialProject = currProjects.selectedProjectID === null;

  function handleInitialProject() {
    setCurrProjects((prevCurrProjects) => {
      return {
        ...prevCurrProjects,
        selectedProjectID: null,
      };
    });
  }

  function handleCancel() {
    setCurrProjects((prevCurrProjects) => {
      return {
        ...prevCurrProjects,
        selectedProjectID: undefined,
      };
    });
  }

  function handleSaveProject(newProjectData) {
    const projectID = Math.random();
    const newProject = { ...newProjectData, id: projectID };

    setCurrProjects((prevCurrProjects) => {
      return {
        ...prevCurrProjects,
        //selectedProjectID: undefined,
        selectedProjectID: projectID,
        projects: [...prevCurrProjects.projects, newProject],
      };
    });
  }

  function handleSelectProject(id){

    setCurrProjects(prevCurrProjects=>{
      return {
        ...prevCurrProjects,
        selectedProjectID: id
      }
    })
  }

  function handleDelete(id){

    setCurrProjects(prevCurrProjects=>{

      // const projectToBeRemoved = prevCurrProjects.projects.find(project=>project.id ===id)

      // const removeIndex = prevCurrProjects.projects.indexOf(projectToBeRemoved)

      // const updatedProjects = prevCurrProjects.projects.splice(removeIndex,1)

      return {
        ...prevCurrProjects,
        // projects: [...updatedProjects],

        projects: prevCurrProjects.projects.filter(
          project=> project.id != currProjects.selectedProjectID
        ),
        selectedProjectID: undefined
      }
    })
  }

  let content;

  if (currProjects.selectedProjectID === undefined) {
    content = <NoProjectSelected onNewProject={handleInitialProject} />;
  } else if (currProjects.selectedProjectID === null) {
    content = (
      <NewProject
        onSaveProject={handleSaveProject}
        onCancelProject={handleCancel}
      />
    );
  } else {
    const selectedProject = currProjects.projects.find(project=>project.id ===currProjects.selectedProjectID)
    content = <Project data={selectedProject} onDelete={handleDelete}/>
  }

  console.log(currProjects);

  return (
    // h-screen take all available height
    // flex makes the components side by side instead if top and bottom

    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={currProjects.projects}
        onNewProject={handleInitialProject}
        selectedProjectID={currProjects.selectedProjectID}
        onSelectProject={handleSelectProject}
      />

      {content}

    </main>
  );
}

export default App;

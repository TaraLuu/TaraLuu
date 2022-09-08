const ProjectList = ({projects}) => {
return(
  <div className="project-list"> 
    <h1>Project List:</h1>
    {projects.map(p => {
    return(
      <div className="project" key={p.id} id={p.id}>
        <label>Project Name: {p.name}</label>
        <p>Description: {p.description}</p>
        <p>Utilized tools: {p.tool}</p>
      </div>)})
      }
  </div>
)}
export default ProjectList;

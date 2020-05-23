import React from 'react';
import './Sidebar.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {

    let projectlist = props.projects.map((project)=>{
        return <button className="projectname" 
                    key={project.id}
                    onClick={()=>props.handleCurrentProject(project.id)}
                >
                    {project.name}
                    <span>
                        <FontAwesomeIcon icon={ faTrash } 
                            size='1x'
                            onClick={()=>props.handleDeleteProject(project.id)} 
                        />
                    </span>
               </button>
    })

    return(
        <div className="sider">
            <button className="addprojectbtn" onClick={props.handleProjectName}>+ ADD PROJECT</button>

            <div className="projectList">
                {projectlist}
            </div>
        </div>
    )
}

export default Sidebar;
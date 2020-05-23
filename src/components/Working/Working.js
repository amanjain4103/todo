import React from 'react';
import './Working.css'
import { faTrash ,faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Working = (props) => {



    var tasklist = props.tasks.map((task)=>{
        return <button key={task.key}>
                    <span className="checksquare">
                        <FontAwesomeIcon icon={ faCheckSquare } 
                                    size='1x'
                                    // onClick={()=>props.handleDeleteProject(project.id)} 
                        />
                    </span>

                    <span className="trash">
                    <FontAwesomeIcon icon={ faTrash } 
                            size='1x'
                            // onClick={()=>props.handleDeleteProject(project.id)} 
                        />    
                    </span>
                    {task.text}
                    
                </button>
    })


    return (
        <div className="working">
            <form onSubmit={props.handleAdd}>
                <input type="text" className="taskadder" 
                    value={props.currentText} 
                    onChange={props.handleTask} 
                />
                <button type="submit">+</button>
            </form>
            <div className="taskprint">
                
                {tasklist}
                
            </div>

        </div>
    )
}

export default Working;
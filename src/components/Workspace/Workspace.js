import React from 'react';
import './Workspace.css';
import Working from '../Working/Working';
import Completed from '../Completed/Completed';


const WorkSpace = (props) => {

    var newtasks= props.tasks.filter((workingTask)=>{
        return workingTask.isCompleted===false;
    })

    var completedTasks= props.currentProject.tasks.filter((completedTask)=>{
        return completedTask.isCompleted===true;
    })
  

    return(
        <div className="workhere">
            <Working handleTask={props.handleTask}
                handleAdd={props.handleAdd}
                currentText={props.currentText}
                // workingTasks={workingTasks}
                tasks={newtasks}
            />
            <Completed completedTasks={completedTasks}/>
        </div>
    )
}

export default WorkSpace;
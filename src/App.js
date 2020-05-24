import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';
import './App.css';

var temp=Date.now();

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route:"main",
      projects:[{ "projectKey":temp,
                 "name":"welcome"}
      ],
      tasks:[{"taskKey":temp,
              "text":"this is sample text",
              "isCompleted":false,
              "projectKey":temp}
      ],
      currentProjectId:temp,
      currentText:""
    }
  }






  handleLogin = (event)=>{
        this.setState({
          route:"loggedin"
        })
      }
    
  handleLogout = (event)=>{
    this.setState({
      route:"main"
    })
  }

  //adding project functionality button in maintained
  //triggered when add project button is clicked 
  handleProjectName = () => {
    var newProjectName = prompt("Enter project name");
    if(newProjectName!==null){
      if(newProjectName.trim()!==""){

        var newProject = { "projectKey":Date.now(),"name":newProjectName } 
        var updatedProjects = [...this.state.projects,newProject];
        
        this.setState({
          projects:updatedProjects
        })
        
      }
    }
    
  }

  //this is deleting project and also tasks associated with that project
  //triggered when trash icon of project is clicked 
  handleDeleteProject = (projectKey) => {
    
    //asking for confirmation 
    var areYouSure = window.confirm("Are you sure, this will delete your project");
    
    if(areYouSure){

      //deleting projects
      var updatedProject = this.state.projects.filter((project)=>{
        return project.projectKey!==projectKey
      })
      this.setState({
        projects:updatedProject
      })

      //deleting tasks
      var updatedtasks = this.state.tasks.filter((task)=>{
        return task.projectKey!==projectKey
      })

      this.setState({
        tasks:updatedtasks
      })

    }

  }

  //this will update the state of currentProjectId
  //triggered when you click on project name
  handleCurrentProjectId = (currentprojectid) =>{
    this.setState({currentProjectId:currentprojectid})
  }


  //this will update the input field by updating currentText state
  //called when change is detected in task adding input box
  updateCurrentText = (event) => {
    this.setState({currentText:event.target.value})
  }

  //this will create new task having current projectKey
  //triggered when + button is clicked 
  handleAdd = (event) => {
    event.preventDefault(); 
    let textTyped = this.state.currentText
    
    if(textTyped!==null){
      if(textTyped.trim()!==""){
        var newTask = {"taskKey":Date.now(),
          "text":this.state.currentText,
          "isCompleted":false,
          "projectKey":this.state.currentProjectId 
        }
        
        var updatedTasks = [...this.state.tasks,newTask];
        this.setState({tasks:updatedTasks,currentText:""})

      }
    }
  }

  //this will delete task simply using filter on taskKey
  //triggered when you click trash icon of any task
  handleDeleteTask = (taskkey) => {
    
    var updatedTasks = this.state.tasks.filter((task)=>{
      return task.taskKey!==taskkey
    })

    this.setState({tasks:updatedTasks})
  }


  //this will get task having just checked check square set isCompleted property of that task to true
  //triggered when you click on check square icon
  handleCheckSquare = (taskkey) => {
    var updatedTasks = this.state.tasks.filter((task)=>{
      return task.taskKey!==taskkey
    })

    var completedTask = this.state.tasks.filter((task)=>{
      return task.taskKey===taskkey
    })
    completedTask[0].isCompleted=true;
    updatedTasks.push(completedTask[0]);

    this.setState({tasks:updatedTasks})
  }

  render(){
    return (
      <div>
        <Navbar currentRoute={this.state.route} 
                handleLogin={this.handleLogin} 
                handleLogout={this.handleLogout}
        />

        <Sidebar 
                 handleProjectName={this.handleProjectName} 
                 projects={this.state.projects}
                 handleDeleteProject={this.handleDeleteProject}
                 handleCurrentProjectId={this.handleCurrentProjectId}
                 />

        <Workspace 
                   handleAdd={this.handleAdd}
                   currentText={this.state.currentText}
                   currentProjectId={this.state.currentProjectId}
                   tasks={this.state.tasks}
                   updateCurrentText={this.updateCurrentText}
                   handleDeleteTask ={this.handleDeleteTask}
                   handleCheckSquare={this.handleCheckSquare}
        />
      </div>
    )
  }
}

export default App;








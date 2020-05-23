import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';
import './App.css';

var tasks =[];
var temp=Date.now();

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      route:"main",
      projects:[
        { "id":temp,
          "name":"welcome",
          "tasks":[
            {"key":temp, "text":"this is a sample task" , "isCompleted":false}
          
          ]
        }
      ],
      currentTask:{},
      currentText:"",
      currentProjectId:temp,
      currentProject:{ "id":temp,
      "name":"welcome",
      "tasks":[
        {"key":temp , "text":"this is a sample task" , "isCompleted":false}
      
      ]
    }
    };
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
  
  handleProjectName = () => {
    var projectName = prompt("enter project name");
    if(projectName!==null){
      if(projectName.trim()!==""){
        this.setState({
          projects:[...this.state.projects,{"id":Date.now(),
                                            "name":projectName,
                                            "tasks":[
                                              {"key":Date.now()-22222 , "text":"this is a sample task" , "isCompleted":false}
                                            ]
                                           }
          ]
        });
      }
    }

  }

  handleDeleteProject = (id)=>{
    var updateProjects = this.state.projects.filter((project)=>{
      return project.id!==id
    }) 
    this.setState({
      projects:updateProjects
    })
  }

  handleTask =(event)=>{
    this.setState({
      currentText:event.target.value
    })
  }

  handleAdd =(event)=>{
    event.preventDefault();
    

    if(this.state.currentText!==null){
      if(this.state.currentText.trim()!==""){
        var tempCurrentTask={"key":Date.now() , "text":this.state.currentText , "isCompleted":false}
        if(this.state.currentProject.id===temp){
          tasks=[...tasks,tempCurrentTask]
        }else{
          tasks=[...this.state.currentProject.tasks,tempCurrentTask]
        }
        this.setState({
          currentTask:tempCurrentTask,
          currentText:""
        },function(){
          
        })

        var myprojects = this.state.projects;
        //finds project I want to modify in list of projects
        let method = () =>{
          for(let i=0;i<myprojects.length;i++){
            if(myprojects[i].id===this.state.currentProjectId){
              myprojects[i].tasks.push(this.state.currentTask);
            }
          }
          
        }
        setTimeout(method,150)
        this.setState({
          projects:myprojects
        })
        console.log(tasks)
      } 
    }

    //adding global tasks
    

  }

  //note that argument and state currentprojectid has difference in its uppercasr and lowercase
  handleCurrentProject = (currentprojectid) =>{
    
    this.setState({
      currentProjectId:currentprojectid
    })

    var tempProject = this.state.projects.filter((project)=>{
      return project.id===currentprojectid
    })
    var thisProject = tempProject[0];
    tasks=[...thisProject.tasks]
    this.setState({
      currentProject:thisProject
    })
    
  }

  render(){
    return (
      <div>
        <Navbar currentRoute={this.state.route} 
                handleLogin={this.handleLogin} 
                handleLogout={this.handleLogout}
        />

        <Sidebar handleProjectName={this.handleProjectName} 
                 projects={this.state.projects}
                 handleDeleteProject={this.handleDeleteProject}
                 handleCurrentProject={this.handleCurrentProject}
                 
        />

        <Workspace handleTask={this.handleTask}
                   handleAdd={this.handleAdd}
                   currentText={this.state.currentText}
                   currentProject={this.state.currentProject}
                   tasks={tasks}
        />
      </div>
    )
  }
}

export default App;

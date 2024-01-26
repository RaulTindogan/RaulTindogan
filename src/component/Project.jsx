import React from 'react'



function Project() {
  const listProjects = [
    {
      projectTitle: "MusicaLibre",
      webLink: "https://raultindogan.github.io/MusicaLibre/",
      githubLink: "https://github.com/RaulTindogan/MusicaLibre",
      usedTools: [
        "fa-brands fa-react project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/MusicaLibre.PNG"
    },
    {
      projectTitle: "RecipeHero",
      webLink: "https://raultindogan.github.io/recipehero/",
      githubLink: "https://github.com/RaulTindogan/recipehero",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/recipehero.PNG"
    },
    {
      projectTitle: "Pomodoro Timer",
      webLink: "https://raultindogan.github.io/Pomodoro-Timer/",
      githubLink: "https://github.com/RaulTindogan/Pomodoro-Timer",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/pomodoro-project-2.PNG"
    }, 
    {
      projectTitle: "Basic Calculator",
      webLink: "https://raultindogan.github.io/Basic-Calculator/",
      githubLink: "https://github.com/RaulTindogan/Basic-Calculator",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/basic-calculator-project-2.PNG"
    },
    {
      projectTitle: "Todo List",
      webLink: "https://raultindogan.github.io/ToDoList/",
      githubLink: "https://github.com/RaulTindogan/ToDoList",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/todo-app-project-2.PNG"
    },
    {
      projectTitle: "NFT-card",
      webLink: "https://raultindogan.github.io/NFT-Card/",
      githubLink: "https://github.com/RaulTindogan/NFT-Card",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
      ],
      projectImage: "assets/projects/ntf-card-project-2.PNG"
    },
    {
      projectTitle: "New Year Countdown",
      webLink: "https://raultindogan.github.io/NewYearCountDown/",
      githubLink: "https://github.com/RaulTindogan/NewYearCountDown",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/countdown-project-2.PNG"
    },
    {
      projectTitle: "XYZ Pattern Generator",
      webLink: "https://raultindogan.github.io/xyzPatterGenerator/",
      githubLink: "https://github.com/RaulTindogan/xyzPatterGenerator",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/pattern-generator-project-2.PNG"
    },
    {
      projectTitle: "Password Generator",
      webLink: "https://raultindogan.github.io/SecPass/",
      githubLink: "https://github.com/RaulTindogan/SecPass",
      usedTools: [
        "fa-brands fa-html5 project__used-tools", 
        "fa-brands fa-css3-alt project__used-tools",
        "fa-brands fa-square-js project__used-tools"
      ],
      projectImage: "assets/projects/secpass-2.PNG"
    },
  ];

  return (
    <section className="main__project" id="project">
      <h2>MY PROJECTS</h2>
      <div className="projects-container">
        {listProjects.map((element, index) => (
            <div key={index} className="project__project-container">
              <img className="project__image" src={element.projectImage} alt="MusicaLibre" />
              <h3 className="project__title">{element.projectTitle}</h3>
              <div className="project__tools">
              {element.usedTools && element.usedTools.map((tool, toolIndex) => (
                <i key={toolIndex} className={tool}></i>
              ))}
              </div>
              <div className="project__icon-container">
                <a className="project-btn" href={element.webLink} target='_blank'>View App <i className="fa-regular fa-eye"></i></a>
                <a className="project-btn" href={element.githubLink} target='_blank'>View Code <i className="fa-brands fa-github"></i></a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Project
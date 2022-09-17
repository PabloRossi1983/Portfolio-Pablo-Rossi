const myProjects = [
    {
        name: "Mercadolibre",
        projectLink: "https://www.mercadolibre.com.ar/",
        codeLink: "https://github.com/PabloRossi1983",
        img: "./img/mercadolibre.png"
    },
    {
        name: "Band Lab",
        projectLink: "https://www.bandlab.com/feed",
        codeLink: "https://github.com/PabloRossi1983",
        img: "./img/bandlab.png"
    },
    {
        name: "Wikipedia",
        projectLink: "https://es.wikipedia.org/wiki/Wikipedia:Portada",
        codeLink: "https://github.com/PabloRossi1983",
        img: "./img/wikipedia.png"
    },
    {
        name: "Wheather Channel",
        projectLink: "https://weather.com/es-US/tiempo/10dias/l/Rosario+Provincia+de+Santa+Fe+Argentina?canonicalCityId=1bf41759f6ae2d09d23db21393be6e8b9ee9bf2dff898becdfc60c59e612e9bd",
        codeLink: "https://github.com/PabloRossi1983",
        img: "./img/wheather.png"
    }
]

window.addEventListener("DOMContentLoaded", function(){
    displayProjects(myProjects)
    displayDetail()
})

const displayProjects = (projects)=> {
    const projectCont = document.getElementById("projects-container");
    let mapedProjects = projects.map((el)=> `<div id="item-container" class="item-container">
                                             <h3 class="project-title" 
                                             data-proj=${el.projectLink}
                                             data-code=${el.codeLink}
                                             data-img=${el.img}>${el.name}</h3>
                                             </div>`
    ).join("")
    projectCont.innerHTML = mapedProjects;
}

const displayProject = (project) =>{
    const projectDisplay = document.getElementById("project-display")
    const projDisplay = document.getElementById("proj-display-cont");
    const proj =  project.currentTarget.dataset.proj;    
    const code =  project.currentTarget.dataset.code;
    const projImg = project.currentTarget.dataset.img;
    const detailHtml =  `<div id="proj-display-cont" class="proj-display-cont fade-in">
                          <div class="proj-link-cont">
                              <h3 class="project-link-title">Go to...</h3>
                              <h3 class="project-link"><a href=${proj} target="_blank">project</a></h3>
                              <h3 class="project-link"><a href=${code} target="_blank">code</a></h3>
                          </div>
                          <div class="img-proj-cont">
                            <img class="img-proj" src=${projImg} alt="profile-foto"/>
                          </div>
                        </div>`

    projDisplay === null?
        projectDisplay.innerHTML = detailHtml:       
        (projDisplay.classList.add("fade-out"),
        setTimeout(()=>projectDisplay.innerHTML = detailHtml , 200))

}

const displayDetail = ()=> {

    const projectTitle = document.querySelectorAll(".project-title");
    
    projectTitle.forEach((el)=> el.addEventListener("click", function(e){
        displayProject(e)     
})) 
}

 

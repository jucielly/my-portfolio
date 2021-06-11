const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const projectsSection = document.querySelector(".projects-section");
const experienceSection = document.querySelector(".experience-section")
const header = document.querySelector(".header")
const contacts = document.querySelector('.contacts')
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navProjects = document.querySelector(".nav-projects");
const navContacts = document.querySelector(".nav-contacts");
const navExperience = document.querySelector(".nav-experience")
const menuCheck = document.querySelector("#menu-btn")
const logo = document.querySelector(".logo")

const handleScroll = (btn, section) =>
    btn.addEventListener('click', () => {
        menuCheck.checked = false
        section.scrollIntoView({
            behavior: "smooth"
        })

    })


handleScroll(navAbout, aboutSection)
handleScroll(navSkills, skillsSection)
handleScroll(navProjects, projectsSection)
handleScroll(navContacts, contacts)
handleScroll(navExperience, experienceSection)
handleScroll(logo, header)
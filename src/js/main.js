const aboutSection = document.querySelector(".about-section");
const skillsSection = document.querySelector(".skills-section");
const projectsSection = document.querySelector(".projects-section");
const contacts = document.querySelector('.contacts')
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navProjects = document.querySelector(".nav-projects");
const navContacts = document.querySelector(".nav-contacts");

const handleScroll = (btn, section) => {
    return btn.addEventListener('click', () => section.scrollIntoView({
        behavior: "smooth"
    }))
}

handleScroll(navAbout, aboutSection)
handleScroll(navSkills, skillsSection)
handleScroll(navProjects, projectsSection)
handleScroll(navContacts,contacts)
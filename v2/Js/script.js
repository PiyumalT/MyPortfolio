
function toggleProjectsVisibility() {
    const projects = document.querySelectorAll(".project");
    
    projects.forEach(project => {
        if (project.style.opacity === "0" || project.style.opacity === "") {
            project.style.opacity = "1";
            project.style.maxHeight = "1000px"; // Expand project
        } else {
            project.style.opacity = "0";
            project.style.maxHeight = "0"; // Collapse project
            
        }
    });

    const projectsdetailsc = document.querySelectorAll(".projects_Details_container");
    projectsdetailsc.forEach(projects_Details_container => {
        if (projects_Details_container.style.opacity === "0" || projects_Details_container.style.opacity === "") {
            projects_Details_container.style.opacity = "1";
            projects_Details_container.style.maxHeight = "10000px"; // Expand projectsdetails
        } else {
            projects_Details_container.style.opacity = "0";
            projects_Details_container.style.maxHeight = "0"; // Collapse projectsdetails
            
        }
    });

}

function toggleEducationDetails() {
    const educationDetailsContainers = document.querySelectorAll(".education-details-container");
    const educationDetails = document.querySelectorAll(".education-detail");

    educationDetailsContainers.forEach(educationDetailContainer => {
        if (educationDetailContainer.style.maxHeight === "0px" || !educationDetailContainer.style.maxHeight) {
            educationDetailContainer.style.maxHeight = educationDetailContainer.scrollHeight + "px"; // Expand container
            educationDetailContainer.style.opacity = "1"; // Show container
        } else {
            educationDetailContainer.style.maxHeight = "0px"; // Collapse container
            educationDetailContainer.style.opacity = "0"; // Hide container
        }
    });

    educationDetails.forEach(educationDetail => {
        if (educationDetail.style.maxHeight === "0px" || !educationDetail.style.maxHeight) {
            educationDetail.style.maxHeight = educationDetail.scrollHeight + "px"; // Expand detail
            educationDetail.style.opacity = "1"; // Show detail
        } else {
            educationDetail.style.maxHeight = "0px"; // Collapse detail
            educationDetail.style.opacity = "0"; // Hide detail
        }
    });
}


function toggleSkillBoxes() {
    const skillBoxes = document.querySelectorAll(".skill-box");

    skillBoxes.forEach(skillBox => {
        if (skillBox.style.maxHeight === "0px" || !skillBox.style.maxHeight) {
            skillBox.style.maxHeight = skillBox.scrollHeight + "px"; // Expand box
            skillBox.style.opacity = "1"; // Show detail
        
        } else {
            skillBox.style.maxHeight = "0px"; // Collapse box
            skillBox.style.opacity = "0"; // Hide detail
        }
    });
}




// Get an image of a single project
const androidProject = window.document.querySelector(".android>.project_item");
const projectImage = androidProject?.querySelector("img");
console.log("image of the first project image:");
console.log(projectImage?.src);

// Get all project items with an image

const allPorjects = document.querySelectorAll(".project_item");

// Covnert to arry
const allProjectsArray = Array.from(allPorjects);
const projectsWithImage = Array.from(
	allProjectsArray.filter(function (element) {
		return element.querySelector("img") as HTMLImageElement;
	})
);

console.log(`There are ${projectsWithImage.length} projects with images`);

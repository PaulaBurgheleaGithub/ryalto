const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
	const visibility = menu.getAttribute('data-visible');
	/***option1***/
	// if (visibility === "false")
	// 	menu.setAttribute('data-visible', "true");
	// 	navToggle.setAttribute("aria-expanded", "true");
	// else
	// 	menu.setAttribute('data-visible', "false");
	// 	navToggle.setAttribute("aria-expanded", "false");
	
	/***option2***/
	menu.setAttribute("data-visible", visibility === "false" ? true : false);
	navToggle.setAttribute("aria-expanded", visibility === "false" ? true : false);
});

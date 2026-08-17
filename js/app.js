buildNavMenus();
renderPlayfields();
buildFooter();

function buildFooter()
{
	var footer = document.querySelector("#footer");

	var p1 = document.createElement("p");
	p1.innerText = "© 2024-2026 Dunspixel";

	var p2 = document.createElement("p");
	p2.innerText = "Last Updated 17/08/2026";

	var p3 = document.createElement("p");
	var githubLink = document.createElement("a");
	githubLink.href = "https://github.com/Dunspixel/ospin-guide";
	githubLink.innerText = "GitHub";
	p3.appendChild(githubLink);

	var p4 = document.createElement("p");
	p4.innerText = "Licensed under "
	var licenseLink = document.createElement("a");
	licenseLink.href = "https://github.com/Dunspixel/ospin-guide/blob/main/LICENSE";
	licenseLink.innerText = "CC-BY-SA-4.0";
	p4.appendChild(licenseLink);

	footer.appendChild(p1);
	footer.appendChild(p2);
	footer.appendChild(p3);
	footer.appendChild(p4);
}

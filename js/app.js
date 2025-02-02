buildNavMenus();
renderPlayfields();
buildFooter();

function buildFooter()
{
	var footer = document.querySelector("#footer");

	var p1 = document.createElement("p");
	p1.innerText = "© 2024-2025 Dunspixel";

	var p2 = document.createElement("p");
	p2.innerText = "Last Updated 02/02/2025";

	var p3 = document.createElement("p");
	var githubLink = document.createElement("a");
	githubLink.href = "https://github.com/Dunspixel/ospin-guide";
	githubLink.innerText = "GitHub";
	p3.appendChild(githubLink);

	footer.appendChild(p1);
	footer.appendChild(p2);
	footer.appendChild(p3);
}

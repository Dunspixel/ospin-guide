function toggleMobileNav()
{
    var overlay = document.querySelector(".nav-overlay");

    if (overlay.style.display == "block")
    {
        overlay.style.display = "none";
    }
    else
    {
        overlay.style.display = "block";
    }
}

function buildNavMenus()
{
    renderMenuOPiece();
    var navContainers = document.querySelectorAll(".nav-container");
    navContainers.forEach(nav => buildNavMenu(nav));
}

function buildNavMenu(nav)
{
    addChapter(nav, "Introduction", "index.html");

    addChapter(nav, "Chapter 1: General Concepts", "chapter1.html");
    addSection(nav, "Rotation", "chapter1.html#rotation");
    addSection(nav, "Wall Kicks", "chapter1.html#wallkicks");
    addSection(nav, "Wiki Links", "chapter1.html#wikis");
    addSection(nav, "\"Versions of Tetris\"?", "chapter1.html#semantics-rant");

    addChapter(nav, "Chapter 2: Guideline Tetris", "chapter2.html");
    addSection(nav, "Move-Reset Lock Delay", "chapter2.html#move-reset");
    addSection(nav, "Tetris Effect and Initial Rotation", "chapter2.html#effect-irs");
    addSection(nav, "Puyo Puyo Tetris and Stack Overlap \"O-Spins\"", "chapter2.html#ppt-overlap");
    addSection(nav, "Tetris Stardust and Actual O-Spins", "chapter2.html#stardust");
    addSection(nav, "Useful Notes", "chapter2.html#guideline-notes");

    addChapter(nav, "Chapter 3: Non-Guideline Tetris", "chapter3.html");
    addSection(nav, "Tetris The Absolute The Grand Master 2 The RO Medal PLUS", "chapter3.html#tgm2");
    addSection(nav, "Tetris 64 and its Inexplicably Obscure Rotation System", "chapter3.html#t64");
    addSection(nav, "Sega Tetris (1999) and Piece Joining", "chapter3.html#sega99");
    addSection(nav, "Special Block Positioning", "chapter3.html#special-blocks");
    addSection(nav, "Audio Cues", "chapter3.html#audio");

    addChapter(nav, "Chapter 4: Tetris-like Stackers", "chapter4.html");
    addSection(nav, "Aquamino and Stack Manipulation", "chapter4.html#aquamino");
    addSection(nav, "Ascension's Extensive Wall Kicks", "chapter4.html#asc");
    addSection(nav, "Nuketris and Worm Mode", "chapter4.html#nuketris");
    addSection(nav, "Polyform's Asymmetrical O-Spins", "chapter4.html#polyform");
    addSection(nav, "Spirit Drop and Re-Hold", "chapter4.html#spirit-drop");
    addSection(nav, "Techmino's Transformative O-Spins", "chapter4.html#techmino");
    addSection(nav, "TETR.IO's All-Spin", "chapter4.html#tetrio");
    addSection(nav, "Tetrs and Ocular Rotation", "chapter4.html#tetrs");
    addSection(nav, "Jstris and O-Spin Memes", "chapter4.html#jstris");
    addSection(nav, "Hakairis [Placeholder]", "chapter4.html#hakairis");
    addSection(nav, "Tetris Best [Placeholder]", "chapter4.html#best");
    addSection(nav, "Tetris Return [Placeholder]", "chapter4.html#return");
    addSection(nav, "Useful Notes", "chapter4.html#stacker-notes");

    addChapter(nav, "Chapter 5: Closing Thoughts", "chapter5.html");
    addSection(nav, "Feedback", "chapter5.html#feedback");
    addSection(nav, "Unsolved Problems", "chapter5.html#unsolved");
    addSection(nav, "Stacker Profiles", "chapter5.html#profiles");
    addSection(nav, "Contact", "chapter5.html#contact");
    addSection(nav, "Random Ramblings", "chapter5.html#ramblings");
}

function addChapter(nav, text, url)
{
    var div = document.createElement("div");
    div.classList.add("nav-chapter");
    addLink(div, text, url);
    nav.appendChild(div);
}

function addSection(nav, text, url)
{
    var div = document.createElement("div");
    div.classList.add("nav-section");
    addLink(div, text, url);
    nav.appendChild(div);
}

function addLink(div, text, url)
{
    var link = document.createElement("a");
    link.innerText = text;
    link.href = url;
    div.appendChild(link);
}

function renderMenuOPiece()
{
    var icon = document.querySelector(".nav-icon");

    var row1 = document.createElement("div");
    row1.classList.add("nav-icon-row");

    var row2 = document.createElement("div");
    row2.classList.add("nav-icon-row");

    var cell1 = document.createElement("div");
    cell1.classList.add("nav-icon-cell");

    var cell2 = document.createElement("div");
    cell2.classList.add("nav-icon-cell");

    var cell3 = document.createElement("div");
    cell3.classList.add("nav-icon-cell");

    var cell4 = document.createElement("div");
    cell4.classList.add("nav-icon-cell");

    row1.appendChild(cell1);
    row1.appendChild(cell2);
    row2.appendChild(cell3);
    row2.appendChild(cell4);
    icon.appendChild(row1);
    icon.appendChild(row2);
}

function renderPlayfields()
{
	var containers = document.querySelectorAll(".playfield-container");
	containers.forEach(container => renderPlayfield(container));
}

function renderPlayfield(container)
{
	var isFlag = Array.from(container.classList).includes("container-flag");
	var playfield = document.createElement("div");
	playfield.classList.add("playfield");

	if (isFlag)
	{
		playfield.classList.add("playfield-flag")
	}

	const rowTokenRegex = /\/(.*?)\//g;
	const captionTokenRegex = /~(.*?)~/;
	var rowTokens = container.innerText.match(rowTokenRegex);
	var captionToken = container.innerHTML.match(captionTokenRegex);

	rowTokens.forEach(token => playfield.appendChild(renderRow(token, isFlag, rowTokens.length)));

	if (captionToken !== null)
	{
		var captionDiv = document.createElement("div");
		captionDiv.classList.add("playfield-caption");
		captionDiv.innerHTML = captionToken[0].replace(/~/g, '');
		playfield.appendChild(captionDiv);
	}

	container.innerText = "";
	container.appendChild(playfield);
}

function renderRow(rowToken, isFlag, rowCount)
{
	var row = document.createElement("div");
	row.classList.add("playfield-row");

	if (isFlag)
	{
		row.classList.add("row-flag");
		row.classList.add("playfield-flag-" + rowCount);
	}

	const cellTokenRegex = /\[(.*?)\]/g;
	var cellTokens = rowToken.match(cellTokenRegex);
	cellTokens.forEach(token => row.appendChild(renderCell(token)));

	return row;
}

function renderCell(cellToken)
{
	var cell = document.createElement("div");
	cell.classList.add("playfield-cell");

	const classMappings =
	[
		["G", "playfield-cell-grey"],
		["D", "playfield-cell-dark"],
		["I", "playfield-cell-cyan"],
		["J", "playfield-cell-blue"],
		["L", "playfield-cell-orange"],
		["O", "playfield-cell-yellow"],
		["S", "playfield-cell-green"],
		["T", "playfield-cell-purple"],
		["Z", "playfield-cell-red"],
		["P", "playfield-cell-pink"],
		["V", "playfield-cell-darkgreen"],
		["p", "playfield-puyo"],
		["m", "playfield-muted"],
	];

	classMappings.forEach(mapping =>
	{
		if (cellToken.includes(mapping[0]))
		{
			cell.classList.add(mapping[1]);
		}
	});

	return cell;
}

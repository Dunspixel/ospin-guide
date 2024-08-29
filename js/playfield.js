function renderPlayfields()
{
    var playfields = document.querySelectorAll(".playfield");
    playfields.forEach(playfield => renderPlayfield(playfield));
}

function renderPlayfield(playfield)
{
    var playfieldRows = playfield.querySelectorAll(".playfield-row");
    playfieldRows.forEach(row => renderRow(row));
}

function renderRow(row)
{
    const tokenRegex = /\[(.*?)\]/g;
    var rowContent = row.innerText;
    var cellTokens = rowContent.match(tokenRegex);
    row.innerText = "";
    cellTokens.forEach(token => row.appendChild(renderCell(token)));
}

function renderCell(cellToken)
{
    var cell = document.createElement("div");
    cell.classList.add("playfield-cell");

    const classMappings =
    [
        ["G", "playfield-cell-grey"],
        ["D", "playfield-cell-dark"],
        ["B", "playfield-cell-bright"],
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

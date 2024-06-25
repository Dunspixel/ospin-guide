function renderPlayfields()
{
    var playfields = document.querySelectorAll(".playfield-container");

    playfields.forEach(function(playfield)
    {
        var playfieldRows = playfield.querySelectorAll(".playfield-row");

        var templateCellF = document.querySelector("#template-playfield-cell-f");
        var templateCellG = document.querySelector("#template-playfield-cell-g");
        var templateCellD = document.querySelector("#template-playfield-cell-d");
        var templateCellI = document.querySelector("#template-playfield-cell-i");
        var templateCellJ = document.querySelector("#template-playfield-cell-j");
        var templateCellL = document.querySelector("#template-playfield-cell-l");
        var templateCellO = document.querySelector("#template-playfield-cell-o");
        var templateCellS = document.querySelector("#template-playfield-cell-s");
        var templateCellT = document.querySelector("#template-playfield-cell-t");
        var templateCellZ = document.querySelector("#template-playfield-cell-z");
        var templateCellP = document.querySelector("#template-playfield-cell-p");
        
        var cellF = templateCellF.content.cloneNode(true).querySelector(".playfield-cell");
        var cellG = templateCellG.content.cloneNode(true).querySelector(".playfield-cell");
        var cellD = templateCellD.content.cloneNode(true).querySelector(".playfield-cell");
        var cellI = templateCellI.content.cloneNode(true).querySelector(".playfield-cell");
        var cellJ = templateCellJ.content.cloneNode(true).querySelector(".playfield-cell");
        var cellL = templateCellL.content.cloneNode(true).querySelector(".playfield-cell");
        var cellO = templateCellO.content.cloneNode(true).querySelector(".playfield-cell");
        var cellS = templateCellS.content.cloneNode(true).querySelector(".playfield-cell");
        var cellT = templateCellT.content.cloneNode(true).querySelector(".playfield-cell");
        var cellZ = templateCellZ.content.cloneNode(true).querySelector(".playfield-cell");
        var cellP = templateCellP.content.cloneNode(true).querySelector(".playfield-cell");

        playfieldRows.forEach(function(row)
        {
            var rowContent = row.innerText;
            rowContent = rowContent.replaceAll("[F]", cellF.outerHTML);
            rowContent = rowContent.replaceAll("[G]", cellG.outerHTML);
            rowContent = rowContent.replaceAll("[D]", cellD.outerHTML);
            rowContent = rowContent.replaceAll("[I]", cellI.outerHTML);
            rowContent = rowContent.replaceAll("[J]", cellJ.outerHTML);
            rowContent = rowContent.replaceAll("[L]", cellL.outerHTML);
            rowContent = rowContent.replaceAll("[O]", cellO.outerHTML);
            rowContent = rowContent.replaceAll("[S]", cellS.outerHTML);
            rowContent = rowContent.replaceAll("[T]", cellT.outerHTML);
            rowContent = rowContent.replaceAll("[Z]", cellZ.outerHTML);
            rowContent = rowContent.replaceAll("[P]", cellP.outerHTML);
            row.innerHTML = rowContent;
        });
    });
}

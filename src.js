"use strict"; // 'cause I like better type checking nyeh

/***************/
/* Made by Ara */
/***************/




// this isn't -required-, but will help making sure all the objects have the right variables
// if this isn't spitting out warnings and for some reason your new possesesPlayers checkbox isn't working, check the spelling on the filter!! possesesPlayers != posses[s]esPlayers!!!!
let checkForVariables = ["name"];
let evidenceTypes = ["EMF5","spiritbox","writing","DOTS","UV","gorb","freezing"]

//NOTE: each 'Generation' has to have a single 'top level' element. NOT multiple. Wrap things in divs if you have to.
//the top level element is what gets disabledTristate and disabledGhost tags
let checkboxGeneration = `
<div class="tristateLabel" onmouseover="hoverTriState('[evidenceName]')" onmouseout="unhoverTriState('[evidenceName]')">
    <input type="checkbox" id="[evidenceName] tristate" onclick="toggleTristate(this, '[evidenceName]')">[evidenceName]
</div>`;

let ghostGeneration = `
<div class="[name] ghost" onclick="showGhostInfo('[name]')" onmouseover="showEvidenceInfoFor('[name]')" onmouseout="hideEvidenceInfoFor('[name]')">
    [name]
</div>`;

let ghostInfoGeneration = `<p>
    <p>[hoverInfo]</p>
    <code style="font-size: 10px;">debugInfo: [debugInfo]</code>
</p>`;

let db = [];

{
    db.push({
        name: "spirit",
        EMF5: true,
        spiritbox: true,
        writing: true,
        DOTS: false,
        UV: false,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "wraith",
        EMF5: true,
        spiritbox: true,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "phantom",
        EMF5: false,
        spiritbox: true,
        writing: false,
        DOTS: true,
        UV: true,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "polter",
        EMF5: false,
        spiritbox: true,
        writing: true,
        DOTS: false,
        UV: true,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "banshee",
        EMF5: false,
        spiritbox: false,
        writing: false,
        DOTS: true,
        UV: true,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "jinn",
        EMF5: true,
        spiritbox: false,
        writing: false,
        DOTS: false,
        UV: true,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "mare",
        EMF5: false,
        spiritbox: true,
        writing: true,
        DOTS: false,
        UV: false,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "revenant",
        EMF5: false,
        spiritbox: false,
        writing: true,
        DOTS: false,
        UV: false,
        gorb: true,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "shade",
        EMF5: true,
        spiritbox: false,
        writing: true,
        DOTS: false,
        UV: false,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "demon",
        EMF5: false,
        spiritbox: false,
        writing: true,
        DOTS: false,
        UV: true,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "yurei",
        EMF5: false,
        spiritbox: false,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: true,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "oni",
        EMF5: true,
        spiritbox: false,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "yokai",
        EMF5: false,
        spiritbox: true,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "hantu",
        EMF5: false,
        spiritbox: false,
        writing: false,
        DOTS: false,
        UV: true,
        gorb: true,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "goryo",
        EMF5: true,
        spiritbox: false,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "myling",
        EMF5: true,
        spiritbox: false,
        writing: true,
        DOTS: false,
        UV: true,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "onryo",
        EMF5: false,
        spiritbox: true,
        writing: false,
        DOTS: false,
        UV: false,
        gorb: true,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "the-twins",
        EMF5: true,
        spiritbox: true,
        writing: false,
        DOTS: false,
        UV: false,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "raiju",
        EMF5: true,
        spiritbox: false,
        writing: false,
        DOTS: true,
        UV: false,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "obake",
        EMF5: true,
        spiritbox: false,
        writing: false,
        DOTS: false,
        UV: true,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "the-mimic",
        EMF5: false,
        spiritbox: true,
        writing: false,
        DOTS: false,
        UV: true,
        gorb: true,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "moroi",
        EMF5: false,
        spiritbox: true,
        writing: true,
        DOTS: false,
        UV: false,
        gorb: false,
        freezing: true,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "deogen",
        EMF5: false,
        spiritbox: true,
        writing: true,
        DOTS: true,
        UV: false,
        gorb: false,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    db.push({
        name: "thaye",
        EMF5: false,
        spiritbox: false,
        writing: true,
        DOTS: true,
        UV: false,
        gorb: true,
        freezing: false,
        hoverInfo: "TODO: FILL OUT"
    });
    console.log(" -- " + db.length + " spooky entities recorded.")
}


/**********************************/
/* No more changes required below */
/**********************************/













let globalFilter = {};
let evidenceDB = {};
let spookyInfoDOM;

function init() {
    if(dbObjectChecks()) {
        console.warn("DB objects missing some variable types :(");
        console.log("\n");
    }

    globalFilter = {};

    spookyInfoDOM = document.getElementById("spookyInfo").getElementsByClassName("inner")[0]
    generateDOM();
}

function dbObjectChecks() {
    let anyMatches = false;

    for(var entry in db) {
        for(var v in checkForVariables) {
            if(db[entry][checkForVariables[v]] == undefined) {
                console.warn("-- WARNING: " + db[entry].name + "." + checkForVariables[v] + " doesn't exist!");
                anyMatches = true;
            }
        }
        for(var v in evidenceTypes) {
            if(db[entry][evidenceTypes[v]] == undefined) {
                console.warn("-- WARNING: " + db[entry].name + "." + evidenceTypes[v] + " doesn't exist!");
                anyMatches = true;
            }
        }
    }

    return anyMatches;
}

function generateDOM() {
    let evidenceDOM = document.getElementById("toggles").getElementsByClassName("inner")[0];
    let evidenceHTMLStr = "";
    for(var evidence in evidenceTypes) {
        let evidenceName = evidenceTypes[evidence].replaceAll(" ","-");
        evidenceHTMLStr += checkboxGeneration.replaceAll("[evidenceName]",evidenceName);
    }
    evidenceDOM.innerHTML = evidenceHTMLStr;

    let node = evidenceDOM.firstElementChild;
    for(var i in evidenceTypes) {
        var evidence = evidenceTypes[i];
        evidenceDB[evidence] = {
            name: evidence,
            dom: node,
            className: node.className
        };
        node = node.nextElementSibling;
    }

    //generate ghosties
    let spookiesDOM = document.getElementById("spookies").getElementsByClassName("inner")[0];
    let spookiesHTMLStr = "";
    for(var ghost in db) {
        spookiesHTMLStr += ghostGeneration.replaceAll("[name]",db[ghost].name);
    }
    spookiesDOM.innerHTML = spookiesHTMLStr;
    
    node = spookiesDOM.firstElementChild;
    for(var ghost in db) {
        db[ghost]._myNode = node;
        db[ghost]._myNodeClassName = node.className;
        node = node.nextElementSibling;
    }

    document.getElementById("spookyInfo").getElementsByClassName("inner")[0].innerHTML = "";
}

function domFixGhost(ghost) {
    let hoverState = "";
    if(ghost._hoverState == true) {
        hoverState = "ghostShowEvidenceOnTrue";
    }
    else if(ghost._hoverState == false) {
        hoverState = "ghostShowEvidenceOnFalse";
    }

    let disabledState = "";
    if(ghost.disabledState != undefined) { delete ghost.disabledState; }
    for(var i in Object.keys(globalFilter)) {
        var str = Object.keys(globalFilter)[i];
        var filter = globalFilter[str];
        if(ghost[str] != undefined && ghost[str] != filter) {
            disabledState = "disabledGhost";
            ghost.disabledState = true;
        }
    }

    ghost._myNode.className = ghost._myNodeClassName + " " + hoverState + " " + disabledState;
}

function toggleTristate(checkbox, stringName) {
    let filterMode = undefined;

    if (checkbox.readOnly) {
        checkbox.checked = false;
        checkbox.readOnly = false;
        filterMode = undefined; // no filter
    }
    else if (!checkbox.checked) {
        checkbox.readOnly = true; 
        checkbox.indeterminate = true;
        filterMode = false; // filter only accepts NOT having this evidence
    }
    else {
        filterMode = true; // filter only accepts HAVING this evidence
    }

    if(filterMode == undefined) {
        delete globalFilter[stringName];
    }
    else {
        globalFilter[stringName] = filterMode;
    }

    for(var i in db) {
        let ghost = db[i];
        domFixGhost(ghost);
    }

    for(var i in evidenceDB) {
        domFixEvidence(evidenceDB[i]);
    }

    //console.log(globalFilter);
}

let hovering = false;
function hoverTriState(stringName) {
    for(var i in db) {
        var ghost = db[i];
        if(ghost[stringName] != undefined) {
            ghost._hoverState = ghost[stringName];
        }
        else {
            ghost.hoverState = "not defined";
        }
        domFixGhost(ghost);
    }

    hovering = true;
}

function unhoverTriState(stringName) {
    if(hovering) {
        hovering = false;

        for(var i in db) {
            let ghost = db[i];
            delete ghost._hoverState;
            domFixGhost(ghost);
        }
    }
}

let curGhost = undefined;
function showGhostInfo(ghostName) {
    for(var ghost in db) {
        if(db[ghost].name == ghostName) {
            curGhost = ghostName;
            let debugInfo = escapeHtml(JSON.stringify(db[ghost]));
            spookyInfoDOM.innerHTML = ghostInfoGeneration.replaceAll("[hoverInfo]", db[ghost].hoverInfo).replaceAll("[debugInfo]", debugInfo);
            return;
        }
    }
}

function hideGhostInfo(ghostName) {
    if(curGhost == ghostName) {
        curGhost = undefined;
        spookyInfoDOM.innerHTML = "";
    }
}

function domFixEvidence(evidence) {
    let hoverState = "";
    if(evidence._showEvidence == true) {
        hoverState = "tristateShowEvidenceOnTrue";
    }
    else if(evidence._showEvidence == false) {
        hoverState = "tristateShowEvidenceOnFalse";
    }

    let disabled = true;
    console.log("CHECKING " + evidence.name)
    if(globalFilter[evidence.name] != undefined) {
        disabled = false;
    }
    else {
        for(var i in db) {
            let ghost = db[i];
            console.log("ghostie " + i + " (" + ghost.name + "): " + (ghost.disabledState == undefined) + " - " + (ghost[evidence.name] == true));
            console.log(ghost);
            console.log(evidence);
    
            if(ghost.disabledState == undefined && ghost[evidence.name] == true) {
                console.log("not disabling!");
                disabled = false;
                break;
            }
        }
    }
    let disabledState = disabled ? "disabledTristate" : "";

    console.log("getting to stuff??");
    evidence.dom.className = evidence.className + " " + hoverState + " " + disabledState;
}

let curEvidenceGhost = undefined;
function showEvidenceInfoFor(ghostName) {
    for(var i in db) {
        let ghost = db[i];
        if(ghost.name == ghostName) {
            curEvidenceGhost = ghostName;

            for(var i2 in evidenceDB) {
                var evidence = evidenceDB[i2];

                if(evidence.name != undefined) {
                    evidence._showEvidence = ghost[evidence.name];
                }

                domFixEvidence(evidence);
            }
            return;
        }
    }
}

function hideEvidenceInfoFor(ghostName) {
    if(curEvidenceGhost != undefined && curEvidenceGhost == ghostName) {
        curEvidenceGhost = undefined;

        for(var i in evidenceDB) {
            var evidence = evidenceDB[i];

            if(evidence._showEvidence != undefined) {
                delete evidence._showEvidence;
                domFixEvidence(evidence);
            }
        }
    }
}

const escapeHtml = (unsafe) => {
    return unsafe.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}

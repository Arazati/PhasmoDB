"use strict"; // 'cause I like better type checking nyeh

let db = [];

function init() {
    // all entries go here
    db.push({
        name: "Ghost",
        flickersLights: true,
        possessesPlayers: true,
        stabsPlayers: false
    });
    db.push({
        name: "Demon",
        flickersLights: true,
        possessesPlayers: false,
        stabsPlayers: true
    });
    
    if(dbObjectChecks()) {
        console.error("DB objects missing some variable types :(");
        console.log("\n");
    }

    updateDOM();

    var firstVar = undefined; // or true or false or a number or w/e to match
    var secondVar = undefined; // these will be the result of the tri-state checkboxes or whatever
    var triStateFlickersLights = true;

    let filterObject = {};
    if(firstVar != undefined) filterObject["firstVar"] = firstVar;
    if(secondVar != undefined) filterObject["secondVar"] = secondVar;
    if(triStateFlickersLights != undefined) filterObject["flickersLights"] = triStateFlickersLights;

    var filteredObjects = getFilteredDB(filterObject);

    for(var matchedPhasmoEntity in filteredObjects) {
        console.log("Could be a " + filteredObjects[matchedPhasmoEntity].name + "!");
        // setup table/whatever for listing off all the spooky ghosties
    }
    // ^ how you actually use the stuff
}

function dbObjectChecks() {
    // this isn't -required-, but will help making sure all the objects have the right variables
    // if this isn't spitting out warnings and for some reason your new possesesPlayers checkbox isn't working, check the spelling on the filter!! possesesPlayers != posses[s]esPlayers!!!!

    let checkForVariables = ["name","flickersLights","possessesPlayers","stabsPlayers","dummyVariable"];
    let anyMatches = false;

    for(var entry in db) {
        for(var v in checkForVariables) {
            if(db[entry][checkForVariables[v]] == undefined) {
                console.log("-- WARNING: " + db[entry].name + "." + checkForVariables[v] + " doesn't exist!");
                anyMatches = true;
            }
        }
    }

    return anyMatches;
}

// this is where you would actually want to check checkboxes and then update a fancy "matches" table or something
function updateDOM() {
    let filter = {
        // only add things to this list that HAVE to be matched
        // you can have 'stabsPlayers: false' IF the player specifically wants to only find things that CAN'T stab players
        // 3 way checkboxes for all conditions
        // true, false, and unset

        flickersLights: true,
        possessesPlayers: true,
        //stabsPlayers: false
    };

    let filteredDB = getFilteredDB(filter);

    console.log("-- NEW FILTERED RESULTS: --")
    console.log("filter; ");
    console.log(filter);
    console.log("\n")
    console.log("results; (" + filteredDB.length + " match[es])");
    console.log(filteredDB);
    console.log("\n\n");

    // other examples

    filter = {
        flickersLights: true,
        stabsPlayers: true
    };
    filteredDB = getFilteredDB(filter);

    console.log("-- NEW FILTERED RESULTS: --")
    console.log("filter; ");
    console.log(filter);
    console.log("\n")
    console.log("results; (" + filteredDB.length + " match[es])");
    console.log(filteredDB);
    console.log("\n\n");

    //

    filter = {
        flickersLights: true,
        possessesPlayers: false,
    };
    filteredDB = getFilteredDB(filter);

    console.log("-- NEW FILTERED RESULTS: --")
    console.log("filter; ");
    console.log(filter);
    console.log("\n")
    console.log("results; (" + filteredDB.length + " match[es])");
    console.log(filteredDB);
    console.log("\n\n");

    //

    filter = {
        flickersLights: true,
    };
    filteredDB = getFilteredDB(filter);

    console.log("-- NEW FILTERED RESULTS: --")
    console.log("filter; ");
    console.log(filter);
    console.log("\n")
    console.log("results; (" + filteredDB.length + " match[es])");
    console.log(filteredDB);
    console.log("\n\n");
}

// this function can be left entirely untouched
function getFilteredDB(filter) {
    let filteredDB = [];

    entryLoop: for(var entry in db) {
        for(var v in filter) {
            if(filter[v] == undefined) continue;
            if(db[entry][v] != filter[v]) {
                // console.log("Unmatched filter: " + db[entry].name + "." + v + " - " + db[entry][v] + " != " + filter[v]);
                continue entryLoop;
            }
        }

        filteredDB.push(db[entry]);
        // console.log("Successfully matched with " + db[entry].name);
    }

    return filteredDB;
}
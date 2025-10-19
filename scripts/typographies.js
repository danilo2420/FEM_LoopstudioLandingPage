// *** 
// This script sets and modifies the typographies of the different elements
// You have to define the fonts for the different elements in the typographiesArray below
// You also have to set the widths that define the different device versions
// *** 


// Set the value for these variables

const versionMinWidth = {
    "mobile": 0,
    "tablet": 600,
    "desktop": 1100
}

const typographiesArray = [
    {
        "element": ".testDiv",
        "typographies": {
            "mobile": "tp1",
            "tablet": "tp2",
            "desktop": "tp3"
        }
    }
]

// Script
let currVersion = "";

function typographiesMain() {
    setTypographies();
    window.onresize = () => setTypographies();
}

// Functions
function setTypographies() {
    // Check what version is relevant now and whether it has changed
    const version = calculateVersion();
    if (version == "") return;
    console.log("Hello");

    // Go through all the elements and change their typography
    for (let elementObject of typographiesArray) {
        const severalElements = document.querySelectorAll(elementObject.element);
        for (const element of severalElements) {
            setElementTypography(elementObject, element, version);    
        }
    }
}

function calculateVersion() {
    // Only returns a version if it's different from the previous one
    const screenWidth = window.screen.width;
    if (screenWidth < versionMinWidth["tablet"]) {
        if (currVersion == "mobile") return "";
        currVersion = "mobile";
        return "mobile";
    } else if (screenWidth < versionMinWidth["desktop"]) {
        if (currVersion == "tablet") return "";
        currVersion = "tablet";
        return "tablet";
    } else {
        if (currVersion == "desktop") return "";
        currVersion = "desktop";
        return "desktop";
    }
}

function setElementTypography(elementObject, element, version) {
    // Remove previous typography
    for (const cssClass of element.classList) {
        if (cssClass.startsWith("tp")) {
            element.classList.remove(cssClass);
        }
    }
    // Add new typography as a function of the version
    element.classList.add(elementObject.typographies[version]);
}

typographiesMain();

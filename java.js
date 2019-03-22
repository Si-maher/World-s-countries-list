// CREATE THE CONST'S AND TARGET THE BUTTONS FROM THE HTML Document.
// MAKE IT MORE READABLE BY NAMING THE CONSTS WITH THE SAME CLASS-NAME FROM HTML
// ADD EVENTLISTENER FOR THE TWO SEARCH BUTTONS. THE 'CLICK' REPRESENTS THE EVENT AND THE NAME AFTER THE COMMA REPRESENTS THE FUNCTION NAMES THAT WILL BE USED LATER

const searchByInitials = document.querySelector(".search-by-initials");
searchByInitials.addEventListener("click", searchCountriesByInitials);
searchByInitials.addEventListener("click", generateDiv);
// =========
const searchByAny = document.querySelector(".search-by-any");
searchByAny.addEventListener("click", searchCountriesByAny);
searchByAny.addEventListener("click", generateDiv2);
// ========
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keyup", generateDiv);
searchBox.addEventListener("keyup", generateDiv2);
// =====================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================

// CREATE A FUNCTION THAT WILL SERCH THROUGH THE ARRAY LIST LOOKING FOR COUNTRIES BY THERE INITIALS
function searchCountriesByInitials() {
  const searchKey = searchBox.value; /*THE BOX WHERE THE USER INPUTS VALUE*/

  const searchResult = countries.filter(element => {
    return element.toUpperCase().startsWith(searchKey.toUpperCase());
  });
  return searchResult;
}

// =============================================================================
// =============================================================================
// =============================================================================
function searchCountriesByAny() {
  const searchKey = searchBox.value;
  const pattern = new RegExp(searchKey, "gi");

  const searchResult = countries.filter(element => {
    return element.match(pattern);
  });
  return searchResult;
}
// CREATE A FUNCTION THAT WILL GENERATE NEW DIVS FOR THE RESULTS

function generateDiv() {
  clearItem();
  const resultBox = document.querySelector(
    ".result-section"
  ); /*CLASS -NAME FROM HTML*/

  const newCountries = searchCountriesByInitials(); /*THE RESULTS FROM THE FUNCTION ....'ByINITIAL' BECOME A NEW CONST*/

  const el = newCountries.forEach(element => {
    const createSpan = document.createElement(
      "span"
    ); /* NEW SPAN ELEMENT CREATED*/
    const newDiv = document.createElement("div"); /* NEW DIV ELEMENT CREATED*/
    newDiv.setAttribute("class", "country-div"); /*ASSIGN THE NEW DIV A CLASS*/
    createSpan.textContent = element; /*INSERT CONTENT OF EACH ELEMENT WHICH WILL BE A COUNTRIE'S NAME*/
    newDiv.style.background = `${rgbGenerator()}`; /*RANDOM COLOR BECOMES THE BACKGROUND*/
    newDiv.appendChild(createSpan); /*ADD THE SPAN TO THE NEWDIV*/
    resultBox.appendChild(newDiv); /*ADD THE NEWDIV TO THE RESULTBOX*/
  });

  if (searchBox.value === "") {
    resultBox.style.display = "none";
  } else {
    resultBox.style.display = "block";
  }
}
// ================================================================================
//Search is some certain characters exist such as "land"
// function searchCountriesByAny () {

//
function generateDiv2() {
  clearItem();
  const resultBox = document.querySelector(
    ".result-section"
  ); /*CLASS -NAME FROM HTML*/

  const newCountries = searchCountriesByAny(); /*THE RESULTS FROM THE FUNCTION ....'ByINITIAL' BECOME A NEW CONST*/

  const el = newCountries.forEach(element => {
    const createSpan = document.createElement(
      "span"
    ); /* NEW SPAN ELEMENT CREATED*/
    const newDiv = document.createElement("div"); /* NEW DIV ELEMENT CREATED*/
    newDiv.setAttribute("class", "country-div"); /*ASSIGN THE NEW DIV A CLASS*/
    createSpan.textContent = element; /*INSERT CONTENT OF EACH ELEMENT WHICH WILL BE A COUNTRIE'S NAME*/
    newDiv.style.background = `${rgbGenerator()}`; /*RANDOM COLOR BECOMES THE BACKGROUND*/
    newDiv.appendChild(createSpan); /*ADD THE SPAN TO THE NEWDIV*/
    resultBox.appendChild(newDiv); /*ADD THE NEWDIV TO THE RESULTBOX*/
  });

  if (searchBox.value === "") {
    resultBox.style.display = "none";
  } else {
    resultBox.style.display = "block";
  }
}
function rgbGenerator() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = `rgb(${blue},${blue},${blue})`;
  return rgb;
}

function clearItem() {
  const removeDiv = document.querySelectorAll(".country-div");
  removeDiv.forEach(element => {
    element.remove();
  });
}

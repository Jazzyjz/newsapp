
// 🔥🔥🔥HEADER🔥🔥🔥
let ctaButton = document.querySelector('#cta-button');
let newsLetterDiv = document.querySelector('.footer');

ctaButton.addEventListener('click', function() {
    newsLetterDiv.scrollIntoView();
});


// 🔥🔥🔥 Variables 🔥🔥🔥
// API LINKS BY NEWS TOPIC
let headlineNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let businessNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let entertainmentNews = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let generalNews = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let healthNews = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let scienceNews = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let sportsNews = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f93aeec5d3ac4aab85825744ef51f35a";
let techNews = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f93aeec5d3ac4aab85825744ef51f35a";

// TILE 1 SELECTORS
let imageDisplay = document.querySelector('#image-display');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let summary = document.querySelector('#summary');
let btn1 = document.querySelector('#btn1');
let img = document.createElement('img');

// TILE 2 SELECTORS
let imageDisplay2 = document.querySelector('#image-display2');
let title2 = document.querySelector('#title2');
let author2 = document.querySelector('#author2');
let summary2 = document.querySelector('#summary2');
let btn2 = document.querySelector('#btn2');
let img2 = document.createElement('img');

// TILE 3 SELECTORS
let imageDisplay3 = document.querySelector('#image-display3');
let title3 = document.querySelector('#title3');
let author3 = document.querySelector('#author3');
let summary3 = document.querySelector('#summary3');
let btn3 = document.querySelector('#btn3');
let img3 = document.createElement('img');

// TILE 4 SELECTORS
let imageDisplay4 = document.querySelector('#image-display4');
let title4 = document.querySelector('#title4');
let author4 = document.querySelector('#author4');
let summary4 = document.querySelector('#summary4');
let btn4 = document.querySelector('#btn4');
let img4 = document.createElement('img');

// BUTTON SELECTORS 
let  businessBtn = document.querySelector('#business');
let  entertainmentBtn = document.querySelector('#entertainment');
let  generalBtn = document.querySelector('#general');
let  healthBtn = document.querySelector('#health');
let  scienceBtn = document.querySelector('#science');
let  sportsBtn = document.querySelector('#sports');
let  techBtn = document.querySelector('#tech');

// ARRAYS
let imageDisplays = [imageDisplay, imageDisplay2, imageDisplay3, imageDisplay4];
let titles = [title, title2, title3, title4];
let authors = [author, author2, author3, author4];
let summaries = [summary, summary2, summary3, summary4];
let btns = [btn1, btn2, btn3, btn4];
let imgs = [img, img2, img3, img4];


// 🔥🔥🔥 NEWS FUNCTION 🔥🔥🔥
function fetchNews(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.articles.length; i++) {
                if (data.articles[i].urlToImage == null || data.articles[i].urlToImage == undefined) {
                    imgs[i].src = "assets/unavailable.png";
                } else {
                    imgs[i].src = data.articles[i].urlToImage;
                }
                imageDisplays[i].appendChild(imgs[i]);
                titles[i].textContent = data.articles[i].title;
                authors[i].textContent = data.articles[i].author;
                summaries[i].textContent = data.articles[i].description;
                btns[i].onclick = function () {
                    window.location.href = data.articles[i].url;
                }
            };
        }
 )};
fetchNews(headlineNews);

// 🔥🔥🔥 EVENT LISTENERS 🔥🔥🔥
businessBtn.addEventListener('click', function () {
    fetchNews(businessNews);
});

entertainmentBtn.addEventListener('click', function () {
    fetchNews(entertainmentNews);
});

generalBtn.addEventListener('click', function () {
    fetchNews(generalNews);
});

healthBtn.addEventListener('click', function () {
    fetchNews(healthNews);
});

scienceBtn.addEventListener('click', function () {
    fetchNews(scienceNews);
});

sportsBtn.addEventListener('click', function () {
    fetchNews(sportsNews);
});

techBtn.addEventListener('click', function () {
    fetchNews(techNews);
});



// Jasmin's Variables and Functions
//BUTTONS
let NycBtn = document.querySelector('#NYC')
let BouBtn = document.querySelector('#BOU')
let DtxBtn = document.querySelector('#DTX')

//NY
let Name = document.querySelector('#name');
let temp = document.querySelector('#temp');
let foreCast = document.querySelector('#Forecast');

let Name2 = document.querySelector('#name2');
let temp2 = document.querySelector('#temp2');
let foreCast2 = document.querySelector('#Forecast2');

let Name3 = document.querySelector('#name3');
let temp3 = document.querySelector('#temp3');
let foreCast3 = document.querySelector('#Forecast3');

let Name4 = document.querySelector('#name4');
let temp4 = document.querySelector('#temp4');
let foreCast4 = document.querySelector('#Forecast4');

//BOU
let Name5 = document.querySelector('#name5');
let temp5 = document.querySelector('#temp5');
let foreCast5 = document.querySelector('#Forecast5');

let Name6 = document.querySelector('#name6');
let temp6 = document.querySelector('#temp6');
let foreCast6 = document.querySelector('#Forecast6');

let Name7 = document.querySelector('#name7');
let temp7 = document.querySelector('#temp7');
let foreCast7 = document.querySelector('#Forecast7');

let Name8 = document.querySelector('#name8');
let temp8 = document.querySelector('#temp8');
let foreCast8 = document.querySelector('#Forecast8');

//DTX
let day9 = document.querySelector('#name9');
let temp9 = document.querySelector('#temp9');
let foreCast9 = document.querySelector('#Forecast9');

let day10 = document.querySelector('#name10');
let temp10 = document.querySelector('#temp10');
let foreCast10 = document.querySelector('#Forecast10');

let Name11 = document.querySelector('#name11');
let temp11 = document.querySelector('#temp11');
let foreCast11 = document.querySelector('#Forecast11');

let Name12 = document.querySelector('#name12');
let temp12 = document.querySelector('#temp12');
let foreCast12 = document.querySelector('#Forecast12');

// Request Forecast for NY
async function getForecast() {
    const response = await fetch("https://api.weather.gov/gridpoints/OKX/40,74/forecast?units=us");
    const data = await response.json();
    return data;
}

async function callForecast(){
    const foreCast = await getForecast();
    Name.textContent= properties.periods[0].name;
    temp.textContent = foreCast.properties.periods[0].temperature;
    foreCast.textContent = foreCast.properties.periods[0].detailedForecast;

    Name2.textContent= foreCast.properties.periods[1].name;
    temp2.textContent = foreCast.properties.periods[1].temperature;
    foreCast2.textContent = foreCast.properties.periods[1].detailedForecast;

    Name3.textContent= foreCast.properties.periods[3].name;
    temp3.textContent = foreCast.properties.periods[3].temperature;
    foreCast3.textContent = foreCast.properties.periods[3].detailedForecast;

    Name4.textContent= foreCast.properties.periods[4].name;
    temp4.textContent = foreCast.properties.periods[4].temperature;
    foreCast4.textContent = foreCast.properties.periods[4].detailedForecast;

console.log(foreCast)
}

let forecastDataDisplayed = false;
async function callForecast() {
    if (forecastDataDisplayed) {
        // Clear the data from the HTML elements
        Name.textContent = "";
        temp.textContent = "";
        foreCast.textContent = "";
        Name2.textContent = "";
        temp2.textContent = "";
        foreCast2.textContent = "";
        Name3.textContent = "";
        temp3.textContent = "";
        foreCast3.textContent = "";
        Name4.textContent = "";
        temp4.textContent = "";
        foreCast4.textContent = "";
        forecastDataDisplayed = false;
    } else {
        const foreCast = await getForecast();
        Name.textContent = foreCast.properties.periods[0].name;
        temp.textContent = foreCast.properties.periods[0].temperature;
        foreCast.textContent = foreCast.properties.periods[0].detailedForecast;
        Name2.textContent = foreCast.properties.periods[1].name;
        temp2.textContent = foreCast.properties.periods[1].temperature;
        foreCast2.textContent = foreCast.properties.periods[1].detailedForecast;
        Name3.textContent = foreCast.properties.periods[3].name;
        temp3.textContent = foreCast.properties.periods[3].temperature;
        foreCast3.textContent = foreCast.properties.periods[3].detailedForecast;
        Name4.textContent = foreCast.properties.periods[4].name;
        temp4.textContent = foreCast.properties.periods[4].temperature;
        foreCast4.textContent = foreCast.properties.periods[4].detailedForecast;
        console.log(foreCast);
        forecastDataDisplayed = true;
    }
}

// Request Forecast for BOU
async function getForecast2() {
    const response2 = await fetch("https://api.weather.gov/gridpoints/BOU/40,105/forecast?units=us");
    const data2 = await response2.json();
    return data2;
}
async function callForecast2(){
    const foreCast2 = await getForecast2();
    Name5.textContent = properties.periods[0].name;
    temp5.textContent = properties.periods[0].temperature;
    foreCast5.textContent = foreCast.properties.periods[0].detailedForecast;

    Name6.textContent= foreCast.properties.periods[1].name;
    temp6.textContent = foreCast.properties.periods[1].temperature;
    foreCast6.textContent = foreCast.properties.periods[1].detailedForecast;

    Name7.textContent= foreCast.properties.periods[3].name;
    temp7.textContent = foreCast.properties.periods[3].temperature;
    foreCast7.textContent = foreCast.properties.periods[3].detailedForecast;

    Name8.textContent= foreCast.properties.periods[4].name;
    temp8.textContent = foreCast.properties.periods[4].temperature;
    foreCast8.textContent = foreCast.properties.periods[4].detailedForecast;

console.log(foreCast2)
}
let forecastDataDisplayed2 = false;
async function callForecast2() {
    if (forecastDataDisplayed2) {
        // Clear the data from the HTML elements
        Name5.textContent = "";
        temp5.textContent = "";
        foreCast5.textContent = "";
        Name6.textContent = "";
        temp6.textContent = "";
        foreCast6.textContent = "";
        Name7.textContent = "";
        temp7.textContent = "";
        foreCast7.textContent = "";
        Name8.textContent = "";
        temp8.textContent = "";
        foreCast8.textContent = "";
        forecastDataDisplayed2 = false;
    } else {
        const foreCast2 = await getForecast2();
        Name5.textContent = foreCast.properties.periods[0].name;
        temp5.textContent = foreCast.properties.periods[0].temperature;
        foreCast5.textContent = foreCast.properties.periods[0].detailedForecast;
        Name6.textContent = foreCast.properties.periods[1].name;
        temp6.textContent = foreCast.properties.periods[1].temperature;
        foreCast6.textContent = foreCast.properties.periods[1].detailedForecast;
        Name7.textContent = foreCast.properties.periods[3].name;
        temp7.textContent = foreCast.properties.periods[3].temperature;
        foreCast7.textContent = foreCast.properties.periods[3].detailedForecast;
        Name8.textContent = foreCast.properties.periods[4].name;
        temp8.textContent = foreCast.properties.periods[4].temperature;
        foreCast8.textContent = foreCast.properties.periods[4].detailedForecast;
        console.log(foreCast2);
        forecastDataDisplayed2 = true;
    }
}

// Request Forecast for DTX
async function getForecast3() {
    const response3 = await fetch("https://api.weather.gov/gridpoints/ALY/32,96/forecast?units=us");
    const data3 = await response3.json();
    return data3;
}
async function callForecast3(){
    const foreCast3 = await getForecast3();
    day9.textContent = foreCast.properties.periods[0].name;
    temp9.textContent = foreCast.properties.periods[0].temperature;
    foreCast9.textContent = foreCast.properties.periods[0].detailedForecast;

    day10.textContent= foreCast.properties.periods[1].name;
    temp10.textContent = foreCast.properties.periods[1].temperature;
    foreCast10.textContent = foreCast.properties.periods[1].detailedForecast;

    Name11.textContent= foreCast.properties.periods[3].name;
    temp11.textContent = foreCast.properties.periods[3].temperature;
    foreCast11.textContent = foreCast.properties.periods[3].detailedForecast;

    Name12.textContent= foreCast.properties.periods[4].name;
    temp12.textContent = foreCast.properties.periods[4].temperature;
    foreCast12.textContent = foreCast.properties.periods[4].detailedForecast;

console.log(foreCast3)
}
//event listeners
NycBtn.addEventListener('click', callForecast);
BouBtn.addEventListener('click', callForecast2);
DtxBtn.addEventListener('click', callForecast3);

// Kyle's Variable and Functions
const signUp = e =>
{
  let formData =
  {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    pwd: document.getElementById('pwd').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
  console.log(localStorage.getItem('formData'));
  e.preventDefault();
  updateLocalStorageDisplay();

  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pwd').value = '';

};

// Function to update the displayed local storage
function updateLocalStorageDisplay()
{
    // Retrieve data from local storage
    var storedData = localStorage.getItem('formData');

        // Check if there is data in local storage
        if (storedData)
        {
            // Parse the data from string to object (if needed)
            var parsedData = JSON.parse(storedData);

            // Update the HTML with the stored data
            var dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = '<pre>' + JSON.stringify(parsedData, null, 2) + '</pre>';
        } 
        else
        {
            // No data found in local storage
            var dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = 'No data found.';
        }
}

// Get reference to the submit button
var submitButton = document.getElementById('Newsletter');

// Add event listener to the submit button
submitButton.addEventListener('click', function () {
  // Call the signUp function
  signUp();
  updateLocalStorageDisplay();
});

// Get reference to the clear button
var clearButton = document.getElementById('clearButton');

// Add event listener to the clear button
clearButton.addEventListener('click', function () {
  // Clear the input values
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pwd').value = '';

  // Clear the local storage
  localStorage.clear();
  updateLocalStorageDisplay();

  // Redirect the user to a new page
  window.location.href = 'newpage.html';
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

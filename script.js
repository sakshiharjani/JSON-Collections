let outputElement = document.getElementById('outputElement');
let genreOutput = document.getElementById('genreOutput');
let outputGrid = document.getElementById('outputGrid');


let jsonDatabase = [
  {
    "genre" : "chill",
    "name" : "atlas hour (beats)",
    "artist" : "oh, the joy",
    "dateReleased" : 2020,
    "picture_url" : "chillOne.jpg",
    "color" : "#e56572",
    "boxShadow" : "3px 3px 3px #483D8B",
    "genreColor" : "#483D8B",
    "features" : ["9pm in vancouver", "1am in nyc", "4am in seoul"]
  },
  {
    "genre" : "sad",
    "name" : "Stranger in the Alps",
    "artist" : "Phoebe Bridgers",
    "dateReleased" : 2018,
    "picture_url" : "sadOne.jpg",
    "color" : "#a1b8c0",
    "boxShadow" : "3px 3px 3px #6e725b",
    "genreColor" : "#6e725b",
    "features" : ["Smoke Signals", "Motion Sickness", "Would You Rather"]
  },
  {
    "genre" : "mood booster",
    "name" : "Map of the Soul : 7",
    "artist" : "BTS",
    "dateReleased" : 2020,
    "picture_url" : "moodBooster.jpg",
    "color" : "#505bb5",
    "boxShadow" : "3px 3px 3px #f3d658",
    "genreColor" : "#f3d658",
    "features" : ["Boy With Luv (ft. Halsey)", "Black Swan", "ON"]
  },
  {
    "genre" : "love",
    "name" : "Lover",
    "artist" : "Taylor Swift",
    "dateReleased" : 2019,
    "picture_url" : "loveOne.png",
    "color" : "#ffbcbe",
    "boxShadow" : "3px 3px 3px #c54f7e",
    "genreColor" : "#c54f7e",
    "features" : ["Cruel Summer", "Lover", "Daylight"]
  },
  {
    "genre" : "empowered",
    "name" : "Ungodly Hour",
    "artist" : "Chloe x Halle",
    "dateReleased" : 2020,
    "picture_url" : "empoweredOne.jpg",
    "color" : "#797979",
    "boxShadow" : "3px 3px 3px #c99462",
    "genreColor" : "#c99462",
    "features" : ["Baby Girl", "Ungodly Hour", "Lonely"]
  },
  {
    "genre" : "reflective",
    "name" : "Melodrama",
    "artist" : "Lorde",
    "dateReleased" : 2017,
    "picture_url" : "reflectiveOne.png",
    "color" : "#b6bad8",
    "boxShadow" : "3px 3px 3px #135ecf",
    "genreColor" : "#135ecf",
    "features" : ["Green Light", "The Lourve", "Liability"]
  },
  {
    "genre" : "upbeat",
    "name" : "Spider-Man: Into the Spider-verse",
    "artist" : "Various Artists",
    "dateReleased" : 2018,
    "picture_url" : "upbeatOne.jpg",
    "color" : "#d61c34",
    "boxShadow" : "3px 3px 3px #031d98",
    "genreColor" : "#031d98",
    "features" : ["Sunflower", "Way Up", "Elevate"]
  },
]

  for (var i = 0; i < jsonDatabase.length; i++) {
    createElementProper(jsonDatabase[i]);
  }

  function createElementProper(incomingJSON) {
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON["color"];
    newContentElement.classList.add("background");

    let genre = document.createElement("H3");
    genre.classList.add('genre');
    genre.innerHTML = incomingJSON['genre'];
    genre.style.color = incomingJSON["genreColor"];
    newContentElement.appendChild(genre);

    let nameOfWork = document.createElement("H4");
    nameOfWork.classList.add('nameOfWork');
    nameOfWork.innerHTML = "album: &nbsp " + incomingJSON['name'];
    newContentElement.appendChild(nameOfWork);

    let artist = document.createElement("H4");
    artist.innerHTML = "artist: &nbsp " + incomingJSON["artist"];
    artist.style.color = incomingJSON['genreColor'];
    newContentElement.appendChild(artist);

    let year = document.createElement("H4");
    year.classList.add('year');
    year.innerHTML = incomingJSON["dateReleased"];
    newContentElement.appendChild(year);

    let featuresHeader = document.createElement("H5");
    featuresHeader.innerHTML = "features:";
    newContentElement.appendChild(featuresHeader);

    let features = document.createElement("UL");
    newContentElement.appendChild(features);

    for (var i = 0; i < incomingJSON['features'].length; i++) {
      var songList = incomingJSON['features'][i];
      var newSong = document.createElement("DIV");
      newSong.innerHTML = songList;
      newSong.style.color = incomingJSON["genreColor"];
      features.appendChild(newSong);
    }

    let albumArt = document.createElement("IMG");
    albumArt.classList.add("albumImage");
    albumArt.src = incomingJSON['picture_url'];
    albumArt.style.boxShadow = incomingJSON["boxShadow"];
    newContentElement.appendChild(albumArt);


    outputGrid.appendChild(newContentElement);

}

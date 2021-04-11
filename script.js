let outputElement = document.getElementById('outputElement');
let genreOutput = document.getElementById('genreOutput');
let outputGrid = document.getElementById('outputGrid');

// let genreIndex = ["chill", "sad", "happy", "love"];
//
//
// createGenres(genreIndex)
// // function genre(incoming) {
//   for (let i=0; i<genreIndex.length; i++) {
//     createGenres(genreIndex[i]);
//
//   }
// }

let jsonDatabase = [
  {
    "genre" : "chill",
    "name" : "atlas hour (beats)",
    "artist" : "oh, the joy",
    "dateReleased" : 2020,
    "picture_url" : "chillOne.jpg",
    "color" : "#e56572",
    "boxShadow" : "3px 3px 3px #483D8B",
    "genreColor" : "#483D8B"
  },
  {
    "genre" : "sad",
    "name" : "Stranger in the Alps",
    "artist" : "Phoebe Bridgers",
    "dateReleased" : 2018,
    "picture_url" : "sadOne.jpg",
    "color" : "#a1b8c0",
    "boxShadow" : "3px 3px 3px #6e725b",
    "genreColor" : "#6e725b"

  },
  {
    "genre" : "mood booster",
    "name" : "Map of the Soul : 7",
    "artist" : "BTS",
    "dateReleased" : 2020,
    "picture_url" : "sadOne.jpg",
    "color" : "#a1b8c0",
    "boxShadow" : "3px 3px 3px #6e725b",
    "genreColor" : "#6e725b"

  }
]

  for (var i = 0; i < jsonDatabase.length; i++) {
    createElementProper(jsonDatabase[i]);
  }

  function createElementProper(incomingJSON) {
    let newContentElement = document.createElement("DIV");
    newContentElement.style.backgroundColor = incomingJSON["color"];
    newContentElement.classList.add("background");

    let genre = document.createElement("H3");
    genre.classList.add('contentTitle');
    genre.innerHTML = incomingJSON['genre'];
    genre.style.color = incomingJSON["genreColor"];
    newContentElement.appendChild(genre);

    let nameOfWork = document.createElement("H4");
    nameOfWork.innerHTML = "album: &nbsp " + incomingJSON['name'];
    newContentElement.appendChild(nameOfWork);

    let artist = document.createElement("H4");
    artist.innerHTML = "artist: &nbsp " + incomingJSON["artist"];
    newContentElement.appendChild(artist);

    let year = document.createElement("H4");
    year.classList.add('year');
    year.innerHTML = incomingJSON["dateReleased"];
    newContentElement.appendChild(year);

    let albumArt = document.createElement("IMG");
    albumArt.classList.add("albumImage");
    albumArt.src = incomingJSON['picture_url'];
    albumArt.style.boxShadow = incomingJSON["boxShadow"];
    newContentElement.appendChild(albumArt);


    outputGrid.appendChild(newContentElement);

}

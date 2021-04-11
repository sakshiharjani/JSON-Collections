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
  "color" : "#BC8F8F"
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
    newContentElement.appendChild(genre);

    let nameOfWork = document.createElement("H4");
    nameOfWork.innerHTML = "album: &nbsp " + incomingJSON['name'];
    newContentElement.appendChild(nameOfWork);

    let artist = document.createElement("H4");
    artist.innerHTML = "artist: &nbsp " + incomingJSON["artist"];
    newContentElement.appendChild(artist);

    let year = document.createElement("H4");
    year.innerHTML = incomingJSON["dateReleased"];
    newContentElement.appendChild(year);

    let albumArt = document.createElement("IMG");
    albumArt.classList.add("albumImage");
    albumArt.src = incomingJSON['picture_url'];
    newContentElement.appendChild(albumArt);

    outputGrid.appendChild(newContentElement);

}

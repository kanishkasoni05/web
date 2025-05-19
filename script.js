console.log("Welcome to Spotify");
//initalize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},
    {songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg"},

]

//audioElement.play()
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
// listen to events
myProgressBar.addEventListener('timeupdate', ()=> {
   console.log('timeupdate');
   //update seekbar

})
document.getElementById('searchInput').addEventListener('input', function(){
    let input = this.ariaValueMax.toLowerCase();
    let songItems = document.querySelectorAll('.songItem');
    songItems.forEach(item => {
        let songName = item.querySelector('span').innerText.toLowerCase();
        if(songName.includes(input)){
            item.style.display = 'flex';
        } else{
            item.style.display = 'none';
        }
    });
});

let song = [
    { songName: "Arbi Ghode", filePath: "song/1.mp3", coverPath: "cover/masoom.jpg", duration: "08:24" },
    { songName: "2 Khatole", filePath: "song/2.mp3", coverPath: "cover/masoom2.jpg", duration: "02:03" },
    { songName: "Weapon", filePath: "song/3.mp3", coverPath: "cover/masoom.jpg", duration: "10:01" },
    { songName: "Chand", filePath: "song/4.mp3", coverPath: "cover/masoom2.jpg", duration: "00:11" },
    { songName: "Nature", filePath: "song/5.mp3", coverPath: "cover/nature.jpg", duration: "07:14" },
    { songName: "Court Me Goli", filePath: "song/6.mp3", coverPath: "cover/nature.jpg", duration: "01:26" },
    { songName: "Bandook 2", filePath: "song/7.mp3", coverPath: "cover/nature.jpg", duration: "06:02" }
  ];
  
  let songContainer = document.getElementById("songList");
  let searchInput = document.getElementById("searchInput");
  
  function renderSongs(filteredSongs) {
    songContainer.innerHTML = "";
  
    if (filteredSongs.length === 0) {
      songContainer.innerHTML = `<p style="color:red; font-size: 20px;">No such result found</p>`;
      return;
    }
  
    filteredSongs.forEach((song, index) => {
      let songDiv = document.createElement("div");
      songDiv.classList.add("songItem");
      songDiv.innerHTML = `
        <img src="${song.coverPath}" alt="cover">
        <span>${song.songName}</span>
        <span class="timestamp">${song.duration}</span>
      `;
      songContainer.appendChild(songDiv);
    });
  }
  
  // Initial render
  renderSongs(songs);
  
  // Search functionality
  searchInput.addEventListener("input", () => {
    let query = searchInput.value.toLowerCase();
    let filtered = songs.filter(song => song.songName.toLowerCase().includes(query));
    renderSongs(filtered);
  });
  

function showSongs(albumTitle) {
    const obj = JSON.parse(text);
    // Set the album title in the song list
    document.getElementById('album-title').textContent = albumTitle;

    const songsList = document.getElementById('songs');
    songsList.innerHTML = '';

    // Add songs dynamically (for demo purposes, you can replace with your data)
    const songs = ['Hurricane', 'Zari', 'The Code','Doomsday Blue','Rim Tim Tagi Dim','Teresa and Maria','Mon amour','Europapa','Jako','Özünlə Apar','La Noia'];
    const lang=['English','Greek','English','English','English','Ukranian','French','Dutch','Armenian','Azerbaijani','Italian'];

    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song} -  (${lang[index]})`;
        li.addEventListener('click', () => playSong(song)); // Pass song title to playSong function
        songsList.appendChild(li);
    });

    // Show the song list overlay
    document.getElementById('song-list').style.display = 'block';
}

// Function to play a song
function playSong(songTitle) {
    // Replace with actual logic to load and play the song
    const audioPlayer = document.getElementById('audio-player');
    // Assuming songs are stored in a 'music' folder and have '.mp3' extension
    const songUrl = `music/${songTitle}.mp3`; // Adjust the path based on your file structure

    audioPlayer.src = songUrl;
    audioPlayer.play();
}

// Close song list overlay

    document.addEventListener('DOMContentLoaded', function () {
        const songListOverlay = document.getElementById('song-list');
        songListOverlay.addEventListener('click', function (event) {
            if (event.target === songListOverlay) {
                songListOverlay.style.display = 'none';
            }
        });
    });
    

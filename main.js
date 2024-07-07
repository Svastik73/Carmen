
function showSongs(albumTitle) {
    // Set the album title in the song list
    document.getElementById('album-title').textContent = albumTitle;
    const songsList = document.getElementById('songs');
    songsList.innerHTML = '';
if(albumTitle=='Eurovision 2024'){
    // Add songs dynamically (for demo purposes, you can replace with your data)
    const songs = ['Hurricane', 'Zari', 'The Code','Doomsday Blue','Rim Tim Tagi Dim','Teresa and Maria','Mon amour','Europapa','Jako','Özünlə Apar','La Noia'];
    const lang=['English','Greek','English','English','English','Ukranian','French','Dutch','Armenian','Azerbaijani','Italian'];
  
    songs.forEach((song, index) => {
        let li=document.createElement('li');
        li.textContent = `${song} -  (${lang[index]})`;
        
        li.addEventListener('click', () => playSong(song,lang[index])); // Pass song title to playSong function 
        songsList.appendChild(li);
    });
}
else if(albumTitle=='GTA')
{
    const songs = ['Lady Hear Me tonight','Radio Gaga'];
    const lang=['Modjo','Queen'];
  
    songs.forEach((song, index) => {
        let li=document.createElement('li');
        li.textContent = `${song} - by ${lang[index]}`;
        
        li.addEventListener('click', () => playSong(song,lang[index])); // Pass song title to playSong function 
        songsList.appendChild(li);
    });
}

    // Show the song list overlay
    document.getElementById('song-list').style.display = 'block';
}


function playSong(songTitle, langu) {
    const ik = document.getElementById('banneri');
    const audioPlayer = document.getElementById('audio-player');
    const overlay = document.getElementById('music-player-overlay');

    const imageUrlJPEG = `image/Eurovision 2024/${songTitle}.jpeg`; // JPEG image URL
    const imageUrlJPG = `image/Eurovision 2024/${songTitle}.jpg`;   // JPG image URL
    const songUrl = `music/${songTitle}.mp3`;                       // Song URL

    // Log URLs to check if they are correct
    console.log('Image URL (JPEG):', imageUrlJPEG);
    console.log('Image URL (JPG):', imageUrlJPG);
    console.log('Song URL:', songUrl);

    // Set the image source
    ik.src = imageUrlJPEG; // Default to JPEG, change if needed
    const banneri2 = document.getElementById('banneri2');
    banneri2.textContent = songTitle;

    // Check if the JPEG image exists, if not, use JPG
    const img = new Image();
    img.onload = function() {
        console.log('Image loaded successfully:', imageUrlJPEG);
    };
    img.onerror = function() {
        console.log('Image not found, trying JPG:', imageUrlJPG);
        ik.src = imageUrlJPG; // Use JPG if JPEG not found
    };
    img.src = imageUrlJPEG;

    // Set the audio source and play
    audioPlayer.src = songUrl;
    audioPlayer.play();

    // Show the overlay
    overlay.style.display = 'block';
}



    document.addEventListener('DOMContentLoaded', function () {
        const songListOverlay = document.getElementById('song-list');
        songListOverlay.addEventListener('click', function (event) {
            if (event.target === songListOverlay) {
                songListOverlay.style.display = 'none';
            }
        });
       
    // Show image again when clicking on the music player
    const musicPlayer = document.getElementById('music-player');
    musicPlayer.addEventListener('click', function () {
        const ik = document.getElementById('banneri');
        if (ik.src) {
            ik.style.display = 'block';
        }
    });
    });
    

function toggleImage() {
    const imag = document.getElementById("banneri");
    imag.classList.toggle("hidden");
    const inputPlaceholder = document.getElementById('searchInput');
 
}
const messages = [
    "Search...🎷",
    "🌄Hover upon song names :)",
    "Suggest More songs"
    
];

let currentMessageIndex = 0;
const inputPlaceholder = document.getElementById('searchInput');

function changePlaceholder() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    inputPlaceholder.placeholder = messages[currentMessageIndex];
    setTimeout(changePlaceholder, 5000); // Change every 5 seconds (5000 milliseconds)
}

// Start the placeholder change loop
setTimeout(changePlaceholder, 5000);
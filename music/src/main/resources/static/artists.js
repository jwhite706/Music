// Grab the three parts of the page we need to work with.
const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

// Run this function whenever the search form is submitted (button click or Enter).
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // stop the browser from reloading the page

    const q = input.value.trim();
    if (q === "") return;

    results.textContent = "Searching...";

    // Ask YOUR Java server, which asks Deezer.
    const response = await fetch("/api/search/artists?q=" + encodeURIComponent(q));
    const json = await response.json();

    results.textContent = ""; // clear "Searching..."

    // Deezer puts the list of artists in json.data
    for (const artist of json.data) {
        const row = document.createElement("div");
        row.className = "result";

        const photo = document.createElement("img");
        photo.src = artist.picture_small;
        photo.className = "result-photo";

        const name = document.createElement("span");
        name.textContent = artist.name;

        const button = document.createElement("button");
        button.textContent = "+ Add";

        row.append(photo, name, button);
        results.appendChild(row);
    }
});

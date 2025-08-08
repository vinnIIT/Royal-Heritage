const allCards = [
  {
    img: "kaila_DEVI.png",
    title: "Kaila Devi Fair - Karauli",
    desc: "The Kaila Devi Fair is a vibrant religious gathering held every year in the Chaitra month (March-April) at the Kaila Devi Temple, located about 23 km from Karauli, Rajasthan, dedicated to Goddess Kaila Devi. The atmosphere becomes lively with folk music, traditional dances, and local rituals, making it both a spiritual and cultural celebration. The fair also features temporary bazaars, stalls, and communal meals (langar) served by devotees. It showcases the deep-rooted faith and traditions of the region, and is a major event in the religious calendar of Rajasthan."
  },

  {
    img: "PushKAR_MELA.png",
    title: "Pushkar Fair - Ajmer",
    desc: "The Pushkar Fair, held every year in the holy town of Pushkar near Ajmer, is one of the most iconic and globally renowned festivals of Rajasthan. Celebrated during Kartik Purnima (October–November), it is a vibrant blend of spiritual devotion and colorful Rajasthani culture. The fair is famous for being the world’s largest camel and livestock fair, where thousands of camels, horses, and cattle are traded amidst traditional music, folk dance, competitions, and cultural performances. Devotees also take a sacred dip in the Pushkar Lake, believing it to cleanse sins. Pushkar Fair is a majestic experience that attracts tourists and photographers from across the globe, offering a unique glimpse into Rajasthan’s royal and rural charm."
  },
  {
    img: "Gangaur.png",
    title: "Gangaur Festival - Jaipur",
    desc: "The Gangaur Festival, celebrated with grandeur in Jaipur, is one of Rajasthan’s most graceful and culturally rich festivals, symbolizing marital fidelity, love, and prosperity. Dedicated to Goddess Gauri (Parvati), it is especially significant for women, who dress in vibrant traditional attire, apply mehendi, and carry beautifully decorated idols of Gauri through the streets in colorful processions. Held in March–April, right after Holi, the festival showcases folk music, dance, and traditional rituals. In Jaipur, the celebrations are particularly royal, with elephants, chariots, palanquins, and performers adding charm to the procession. The Gangaur Festival offers a timeless experience, connecting deeply with heritage, devotion, and royal elegance — making it a must-see cultural event in Rajasthan."
  },
  {
    img: "Machkund_DHo.png",
    title: "Machkund Mela - Dholpur",
    desc: "The sacred ghats and serene waters of Machkund Lake in Dholpur, lies a festival that whispers the ancient soul of Rajasthan — the Machkund Festival. Pilgrims from across the region gather to take a holy dip in the sacred kund, believed to wash away sins and purify the soul.With its spiritual energy, historical architecture, and untouched cultural purity, the Machkund Festival offers a soul-soothing escape into the divine essence of Rajasthan — far from the noise, yet deep in tradition."
  },
  {
    img: "royal_festivalOFMewar.jpg",
    title: "Mewar Festival – Udaipur",
    desc: "The Marwar Festival is a vibrant celebration of the rich folk culture, music, and dance traditions of Rajasthan's Marwar region. Held in the majestic city of Jodhpur, the festival honors the valiant heroes and legendary kings of Rajasthan through captivating performances of folk songs, traditional dances like Ghoomar and Kalbeliya, and stunning horse shows. Set against the backdrop of Mehrangarh Fort and Umaid Bhawan Palace, the entire city comes alive with color, rhythm, and royal splendor. The Marwar Festival is a visual and cultural feast that draws tourists from all over the world, offering an authentic glimpse into the regal heritage of Rajasthan."
  },
  {
    img: "teej.png",
    title: "Teej Festival - Jaipur",
    desc: "Teej Festival is one of the most colorful and joyful celebrations in Jaipur, dedicated to the reunion of Lord Shiva and Goddess Parvati. Celebrated during the monsoon season, married women dress in green sarees, adorn themselves with bangles and mehendi, and pray for the long life of their husbands. The festival features a grand procession of Goddess Teej through the streets of Jaipur, with beautifully decorated palanquins, traditional dancers, and folk music. The city becomes vibrant with fairs, sweets like ghewar, and swings hung on trees. Teej reflects the cultural richness and festive spirit of Rajasthan, especially in the royal city of Jaipur."
  },
];

let cardsPerPage = 6;
let currentIndex = 0;

function loadMoreCards() {
  const container = document.querySelector('.card_container');
  const nextCards = allCards.slice(currentIndex, currentIndex + cardsPerPage);

  nextCards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card_1");
    cardDiv.innerHTML = `
      <div class="image">
        <img src="${card.img}" alt="">
      </div>
      <div class="fest_head">
        <h2>${card.title}</h2>
      </div>
      <div class="fest_para">
        <p>${card.desc}</p>
      </div>
      <button class="readMoreBtn" onclick="toggleReadMore(this)">Read More</button>
    `;
    container.appendChild(cardDiv);
  });

  currentIndex += cardsPerPage;

  // Hide the button if no more cards left
  if (currentIndex >= allCards.length) {
    document.getElementById("LoadBtn").style.display = "none";
  }
}

// Function to toggle the read more/less functionality
function toggleReadMore(button) {
  const paraDiv = button.previousElementSibling; // Get .fest_para
  paraDiv.classList.toggle("expanded");

  if (paraDiv.classList.contains("expanded")) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
}

// Hamburger Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
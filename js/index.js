const RANDOM = document.querySelector("#random");
const LINKS = [
  "https://en.wikipedia.org/wiki/Dungeons_%26_Dragons",
  "https://en.wikipedia.org/wiki/Magic:_The_Gathering",
  "https://en.wikipedia.org/wiki/Blade_Runner",
  "https://en.wikipedia.org/wiki/Pavement_(band)",
  "https://en.wikipedia.org/wiki/Cat",
  "https://en.wikipedia.org/wiki/Cormac_McCarthy",
  "https://en.wikipedia.org/wiki/Invincible_(comics)",
  "https://en.wikipedia.org/wiki/Lego",
  "https://en.wikipedia.org/wiki/Bourbon_whiskey",
  "https://en.wikipedia.org/wiki/Mad_Max:_Fury_Road",
  "https://en.wikipedia.org/wiki/Aristotle",
  "https://en.wikipedia.org/wiki/Ludwig_Wittgenstein",
  "https://en.wikipedia.org/wiki/Beck",
];

const randomLink = () => {
  let i = Math.floor(Math.random() * LINKS.length);
  console.log(i + " " + LINKS.length);
  console.log(LINKS[i]);
  return LINKS[i];
};

RANDOM.onclick = () => {
  RANDOM.setAttribute("href", randomLink());
};

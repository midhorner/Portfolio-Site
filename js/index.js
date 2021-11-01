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
  "https://en.wikipedia.org/wiki/Noam_Chomsky",
  "https://en.wikipedia.org/wiki/Ted_Lasso",
  "https://en.wikipedia.org/wiki/The_Good_Place",
  "https://en.wikipedia.org/wiki/Beer",
  "https://en.wikipedia.org/wiki/Calvin_and_Hobbes",
  "https://en.wikipedia.org/wiki/Ori_and_the_Blind_Forest",
  "https://en.wikipedia.org/wiki/Wok",
  "https://en.wikipedia.org/wiki/Stardew_Valley",
  "https://en.wikipedia.org/wiki/Ishmael_(Quinn_novel)",
  "https://en.wikipedia.org/wiki/Pinkerton_(album)",
  "https://en.wikipedia.org/wiki/The_Hustler_(film)",
];

const randomLink = () => {
  let i = Math.floor(Math.random() * LINKS.length);
  RANDOM.setAttribute("href", LINKS[i]);
};

RANDOM.addEventListener("mousedown", randomLink);

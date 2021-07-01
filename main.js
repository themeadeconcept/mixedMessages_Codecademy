/*************************/
/*   Vital Escargot!!!   */
/*************************/

/*************************/
/* -Author: Torrey Meade */
/* -Version: 1           */
/***************************************/
/*  This project is my tribute to Lori */
/*  Beth Denberg, Danny Tamberelli,    */
/*  Keenan Thompson, and the cast of   */
/*  Nickelodeon's All That!!           */
/***************************************/

let vitalArray = [
  "Mirror, Mirror, on the Wall...",
  "At FINE restaurants...",
  "The early bird gets the worm...",
  "Breaking up is hard to do...",
  "Twinkle Twinkle little star...",
  "If you look under your arm and find a glob of mayonaisse...",
  "When the going gets tough, the tough get going...",
  "When in Rome, do as Romans do...",
  "Jack and Jill went up the hill to fetch a pail of water...",
  "a bird in the hand is worth two in the bush...",
  "You are what you eat...",
  "After you eat, wait 20 minutes before swimming...",
  "It's easy to milk a cow...",
];
let infoArray = [
  "you won't feel any better but you'll smell like ham!",
  "I am the mayor of mud CITY!  AND YOU ARE ALL OF MY MUD PEOPLE!!",
  "NA NA NA BOO BOO!",
  "RUN LIKE THE WIND!  That ain't SANTA!",
  "don't lick the new kid!",
  "the crazy person says Ayayayayaya!",
];
let pierreEscargot = [
  "  Also, I have not showered in 36 days",
  "  Also, don't put bacon fat on my toilet seat!",
  "  Also, congratulations on your smelly sombrero!",
  "  Also, keep your hands off my chicken nuggets!",
  "  Also, can I borrow your brother's pretty brassiere!?",
  "  Also, your Grandfather looks pretty in that wedding dress!",
];

const randomMessage = (vital, info, pierre) => {
  let message = [];

  // randomly selects a message from vital array
  let vitalMsg = vital[Math.floor(Math.random() * vital.length)];
  message.push(vitalMsg);

  // randomly selects a message from info array
  let infoMsg = info[Math.floor(Math.random() * info.length)];
  message.push(infoMsg);

  // randomly selects a message from Pierre Escargot array
  let pierreMsg = pierre[Math.floor(Math.random() * pierre.length)];
  message.push(pierreMsg);

  // Joins all the pushed messages and returns it
  return message.join();
};

console.log(randomMessage(vitalArray, infoArray, pierreEscargot));

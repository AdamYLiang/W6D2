const HanoiGame = require("./game.js");
const HanoiView = require("./hanoi-view.js");

$( () => {
  console.log("did this work");
  const rootEl = $('.hanoiStacks');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
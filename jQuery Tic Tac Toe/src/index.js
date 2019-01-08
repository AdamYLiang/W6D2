const View =  require('./ttt-view.js'); // require appropriate file 
const Game = require('./game.js'); // require appropriate file

  $(() => {
    const $figure = $('.ttt'); 
    const g = new Game();

    const tttView = new View(g, $figure);
    // tttView.setupBoard();

    const $ul = $(".grid");
    $ul.on('click', 'li', (e) => tttView.bindEvents(e));

 
    
  });

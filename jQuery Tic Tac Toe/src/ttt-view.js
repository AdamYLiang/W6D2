class View {
  constructor(game, $el) {
    this.game = game; 
    this.container = $el;
    this.setupBoard();
  }

  bindEvents(event) {
    const pos = [parseInt(event.target.id[0]),  
                parseInt(event.target.id[2])];
    try {
      (this.game.playMove(pos));
    }
    catch (err) { 
      alert('Invalid move. Try again.');
    }
      
    this.makeMove($(event.target));
  }

  makeMove($square) {
    $square.addClass(this.game.currentPlayer);
    if(this.game.isOver()){
      $(".tile").css("background", "white");
      $(`.${this.game.currentPlayer}`).css("background", "green");
      $('.grid').off('click');
      $('.tile').css("cursor", "default");
      $('body').append('<h1 class="win">You Win</h1>');
    }
  }

  setupBoard() {
    const $ul = this.container.append("<ul class='grid'></ul>");
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        $('.grid').append(`<li class="tile" id='${[i,j]}'> </li>`);
      }   
    }
  }
}

module.exports = View;

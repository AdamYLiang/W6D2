class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.clickedTowers = undefined;
        this.setupTowers();

        this.$el.on('click', 'ul', (ev) => this.clickTower(ev));
    }

    setupTowers() {
        for(let i = 0; i <= 2; i++){
            $(".hanoiStacks").append(`<ul class="stack" id="${i}"></ul>`);
            $("#0.stack").append(`<li class="disk-${i + 1}"></li>`);
        }
    }

    render() {
        const $towers = this.$el.find('ul');
        $towers.removeClass(); 
        
        for(let i = 0; i < 3; i++) {

        }
        
    }
    
    clickTower(event) {
        //event is the actual stack 
        //this.clicked = null;
        if (this.clickedTowers === undefined) {
            this.clickedTowers = event.currentTarget.id; 
        } else {
            let endIdx = event.currentTarget.id; 
            if(this.game.isValidMove(this.clickedTowers, endIdx)) {
                this.game.move(this.clickedTowers, endIdx);
                this.render();
            } else {
                alert("Invalid Move");
            }

            this.clickedTowers = undefined; 
        }
        //if clicked is null 
        //set clicked to the event
        
        //else 
        //try to move things becuase now its 2 clicks
    }
}

module.exports = View;
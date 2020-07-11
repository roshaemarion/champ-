class Game{
    constructor(){

    }
    getgameState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
        gamestate=data.val()
    })
    }

    updategameState(state){
    var gameStateref = database.ref('/')
    gameStateref.update({
        gameState:state
    })

    }
    startgame(){
        if (gamestate===0){
            player=new Player();
            player.getplayercount();
            form=new Form();
            form.display();
        }
    }

    
}
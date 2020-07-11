var gamestate=0;
var playercount=0;
var database
var player,form,game;
function setup (){
    var canvas = createCanvas (400,400)
    database=firebase.database();
    game=new Game()
    game.getgameState()
    game.startgame()
}

function draw (){

}
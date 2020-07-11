class Player{
    constructor(){

    


    }

    getplayercount(){
        var playercountref = database.ref('playerCount')
        playercountref.on("value",function(data){
            playercount=data.val()
        })
    }
        updateplayercount(count){
            var playercountref=database.ref('/')
            playercountref.update({
                playerCount:count
            })
        }
        updateplayername(name){
            var playerindex = "player"+playercount
            var playerref= database.ref(playerindex)
            playerref.set({
                playername:name
            })
        }


}
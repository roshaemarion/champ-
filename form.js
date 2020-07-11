class Form {
    constructor(){

    }
    display(){
        var title = createElement ("h1")
        title.html("Real Racing R")
        title.position(130,0)

        var inputbox = createInput("name")
        inputbox.position(130,160)
        
        var button = createButton("ok")
        button.position(250,200)


        var greeting = createElement("h3")

        button.mousePressed(function(){
            inputbox.hide()
            button.hide()

            var name= inputbox.value()
            playercount = playercount+1
            

            player.updateplayername(name)

            player.updateplayercount(playercount)
            greeting.html("HI champ"+name)

            greeting.position(130,160)
        })
    }
}
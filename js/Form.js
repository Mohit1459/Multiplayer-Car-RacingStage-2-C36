class Form{
    constructor(){}
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position (200,200)
        var input = createInput("Name")
        var button = createButton("Play")
        var gretting = createElement('h3')
        input.position (300,300)
        button.position (350,350)

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name =input.value();

            playerCount = playerCount+1;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+ name);
            greeting.position(150,150);
        })
    }
}
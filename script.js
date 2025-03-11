document.getElementById('yes-btn').addEventListener('click', function () {
    document.body.innerHTML = '<h1 style="font-size: 3rem; color: white;">Yay! I love you Vedanti ❤🎆</h1>';
    let fireworks = document.createElement("div");
    fireworks.style.position = "fixed";
    fireworks.style.width = "100vw";
    fireworks.style.height = "100vh";
    fireworks.style.background = "url('https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif') no-repeat center center";
    fireworks.style.backgroundSize = "cover";
    document.body.appendChild(fireworks);
});

document.getElementById('no-btn').addEventListener('mouseenter', function () {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById('no-btn').addEventListener('click', function () {
    document.body.innerHTML = '<h1 style="font-size: 3rem; color: white;">Are you sure? 😢</h1>';
    let sadGif = document.createElement("img");
    sadGif.src = "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif";
    sadGif.style.width = "300px";
    sadGif.style.display = "block";
    sadGif.style.margin = "auto";
    document.body.appendChild(sadGif);
    
    let confirmButton = document.createElement("button");
    confirmButton.innerText = "Yes 💖";
    confirmButton.style.padding = "15px 30px";
    confirmButton.style.fontSize = "1.5rem";
    confirmButton.style.marginTop = "20px";
    confirmButton.onclick = function () {
        document.body.innerHTML = '<h1 style="font-size: 3rem; color: white;">Yay! I love you Vedanti ❤🎆</h1>';
        let fireworks = document.createElement("div");
        fireworks.style.position = "fixed";
        fireworks.style.width = "100vw";
        fireworks.style.height = "100vh";
        fireworks.style.background = "url('https://media.giphy.com/media/3ohhwytHcusSCXXOUg/giphy.gif') no-repeat center center";
        fireworks.style.backgroundSize = "cover";
        document.body.appendChild(fireworks);
    };
    
    document.body.appendChild(confirmButton);
});

const yesbtn = document.getElementById('yesbtn');
const nobtn = document.getElementById('nobtn');
const message = document.getElementById('message');
const heartscontainer = document.getElementById('hearts');

yesbtn.addEventListener('click', () => {
    message.innerHTML = "I asked, and you said Yes, but im far from your embrace. Though I cant be there, i'll make it up shomehow. When I comeback home, i'll bring you a gift. For now, this test cant silence my hopeful heart. Distance cant change how much i care. Until I'm there, know i'll always be near.";
    startHeartRain();
})

nobtn.addEventListener('click', () => {
    if (message.innerHTML = "first, please reconsider...") {
        message.innerHTML = "Sakit Idol...";
        BrokenHeart();
    } else {
        message.innerHTML = "First, please reconsider..."
    }
});

function startHeartRain(){
    for (let i = 0; i < 50; i++){
        createHeart();
    }
}

function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'
    heart.style.left = Math.random () * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartscontainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);

}

function BrokenHeart() {
    const BrokenHeart = document.createElement('div');
    BrokenHeart.classList.add('broken-heart');
    BrokenHeart.innerHTML = '💔';
    message.appendChild(BrokenHeart);
}
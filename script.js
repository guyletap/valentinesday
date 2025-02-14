function generateLoveLetter() {
    const messages = [
        "You're the best thing that ever happened to me! 💖",
        "Every moment with you is magical! ✨",
        "I love you more than words can say! ❤️",
    ];
    document.getElementById("love-message").innerText = messages[Math.floor(Math.random() * messages.length)];
}

function checkAnswer(choice) {
    const correctAnswers = {
        'A': "ofc baby like I want to be with you till the end of time and then some. I love you so much ❤️",
        'B': "OFC I LOVE YOU MORE THAN DRAKE. Drake is nothing compared to what you mean to mean. I love you pookie ❤️",
        'C': "nah I love you ∞ and then some"
    };

    document.getElementById("quiz-result").innerText = correctAnswers[choice];
}

function openPoem() {
    window.location.href = "poem.html?poem=" + Math.floor(Math.random() * 2);
}
window.onload = function () {
    // Poems logic
    const poems = [
        {
            english: "Roses are red, violets are blue,\nEvery day is beautiful because of you. ❤️\nYour smile lights up my life,\nYou make everything feel right.\nTogether we’ve made so many memories,\nI’ll cherish them forever, through the centuries.\nWith you, my heart is full of glee,\nYou're the only one I want to see.\nIn your arms, I find my place,\nYou fill my world with endless grace.",
            spanish: "Las rosas son rojas, las violetas son azules,\nCada día es hermoso gracias a ti. ❤️\nTu sonrisa ilumina mi vida,\nHaces que todo se sienta bien.\nJuntos hemos hecho tantos recuerdos,\nLos atesoraré para siempre, a lo largo de los siglos.\nContigo, mi corazón está lleno de alegría,\nEres la única persona que quiero ver.\nEn tus brazos, encuentro mi lugar,\nLlenas mi mundo con una gracia infinita."
        },
        {
            english: "Your laughter is my favorite sound,\nWith you, my heart is always bound.\nLike the moon and stars above,\nYou fill my world with endless love.\nHand in hand, we walk together,\nOur love will last forever.\nThrough every trial, through every storm,\nIn your arms, I feel warm.\nYou are my heart, my soul, my guide,\nWith you forever, I’ll always reside.",
            spanish: "Tu risa es mi sonido favorito,\nContigo, mi corazón siempre está ligado.\nComo la luna y las estrellas arriba,\nLlenas mi mundo con un amor infinito.\nMano a mano, caminamos juntos,\nNuestro amor durará para siempre.\nA través de cada prueba, a través de cada tormenta,\nEn tus brazos, me siento cálido.\nEres mi corazón, mi alma, mi guía,\nContigo para siempre, siempre residiré."
        },
        // Add other poems here as needed
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const poemIndex = urlParams.get('poem'); // Get the poem index

    if (poemIndex !== null && poemIndex >= 0 && poemIndex < poems.length) {
        const poem = poems[poemIndex];
        const poemText = `
            <strong>English:</strong><br>${poem.english}<br><br>
            <strong>Español:</strong><br>${poem.spanish}
        `;
        document.getElementById("poem-text").innerHTML = poemText;
    } else {
        document.getElementById("poem-text").innerText = "Sorry, there was an issue with loading the poem. Please try again!";
    }

    // Encouragement messages logic
    const encouragementMessages = [
        "I believe in you more than you know. You're capable of amazing things, just keep pushing forward.",
        "No matter how tough things get, remember that you have the strength to overcome anything. Keep going, I’m always here for you!",
        "I know you’re facing challenges right now, but don’t give up—everything will fall into place. You've got this, and I’ve got your back till the very end",
        "You are so incredibly strong and amazing. Never forget that you’re worthy of every good thing that comes your way.",
        "Even when it seems hard, remember that every little step you take is progress. I’m so proud of you. Keep going! ✨"
    ];

    // Display random encouragement message on encouragement page
    const encouragementIndex = urlParams.get('encouragement');
    if (encouragementIndex !== null) {
        document.getElementById("encouragement-text").innerText = encouragementMessages[encouragementIndex];
    }
};

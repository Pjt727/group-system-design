function goToHomepage() {
    location.href = "";
}

function goToContact() {
    location.href = "";
}

const facts = ["The earth’s circumference is 24,900 miles.", 
            "The bumblebee bat is the world’s smallest mammal.", 
            "There’s enough gold inside Earth to coat the planet.",
            "Elephants can’t jump.",
            "Lemons float, but limes sink.",
            "Armadillo shells are bulletproof.",
            "The longest English word is 189,819 letters long.",
            "The first footprints on the moon will remain there for a million years.",
            "Blue whales eat half a million calories in one mouthful.",
            "President Theodore Roosevelt had a pet hyena."
];

function generateFact() {
    var randomNumber = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}

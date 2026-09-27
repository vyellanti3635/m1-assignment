var infoTexts = [
    "Name: Max<br>Breed: Labrador Retriever<br>Age: 4 years<br>Max is calm, house trained and great with kids.",
    "Name: Luna<br>Breed: Siberian Husky<br>Age: 3 years<br>Luna loves long walks and needs a yard to run in.",
    "Name: Rex<br>Breed: German Shepherd<br>Age: 5 years<br>Rex is loyal, smart and already knows basic commands.",
    "Name: Charlie<br>Breed: Beagle<br>Age: 6 weeks<br>Charlie is the youngest of the litter and full of energy.",
    "Name: Sunny<br>Breed: Golden Retriever<br>Age: 10 weeks<br>Sunny is gentle and loves to nap on soft blankets.",
    "Name: Mittens<br>Breed: Domestic Tabby<br>Age: 2 years<br>Mittens is an outdoor cat who likes to explore the garden.",
    "Name: Pebble<br>Breed: Scottish Fold<br>Age: 8 weeks<br>Pebble is shy at first but very playful once settled.",
    "Name: Clover<br>Breed: Holland Lop<br>Age: 1 year<br>Clover is litter trained and enjoys being held.",
    "Name: Kiwi<br>Breed: Cockatiel<br>Age: 2 years<br>Kiwi whistles tunes and likes sitting on shoulders.",
    "Name: Peanut<br>Breed: Syrian Hamster<br>Age: 6 months<br>Peanut is most active in the evening and loves his wheel."
];

var descBars = document.querySelectorAll("#gallery .description");
var infoBox = document.getElementById("infobox");
var infoTitle = document.getElementById("infotitle");
var infoText = document.getElementById("infotext");
var closeBox = document.getElementById("closebox");
var openPhoto = 0;

for (var i = 0; i < descBars.length; i++) {
    descBars[i].addEventListener("click", showInfo);
}

closeBox.addEventListener("click", hideInfo);

function showInfo() {
    var photoNum = this.parentNode.id.replace("photo", "");

    if (infoBox.style.display == "block" && openPhoto == photoNum) {
        hideInfo();
    } else {
        infoTitle.innerHTML = captionTexts[photoNum - 1];
        infoText.innerHTML = infoTexts[photoNum - 1];
        infoBox.style.display = "block";
        openPhoto = photoNum;
    }
}

function hideInfo() {
    infoBox.style.display = "none";
    openPhoto = 0;
}

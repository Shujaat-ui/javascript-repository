const words = [
    "java",  
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];


small_box_container = document.querySelector(".small-box");

function createWordBoxes() {
const radomWord =Math.floor(Math.random()*words.length);
small_box_container.innertext = words[radomWord];
console.log(words[radomWord]);

for(i=0; i=radomWord.length; i++){
    const letterBox = document.createElement("div");
    letterBox.className="letter-box";
    letterBox.textContent="";
    small_box_container.append(letterBox);
}
return radomWord;
}
createWordBoxes();
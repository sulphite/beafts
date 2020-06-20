const horns = ["small","med","large","stubby","slight curve","ram","angled","curved","lightning","gravity"];
const ears = ["farm","triangle","long","fan","flop","low"];
const cheek = ["tuft","bare","fin","pad","gills","fluff"];
const tail = ["lion","tuft","curl","lizard","horse","brush","bun","fin","paddle","shark"];
let beaft = {}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
};

function releafeTheBeaft() {
    beaft = {
        "horns": getRandom(horns),
        "ears": getRandom(ears),
        "cheeks": getRandom(cheek),
        "tail": getRandom(tail)
    };
    let myString = "";
    for (const [trait, desc] of Object.entries(beaft)) {
        myString = myString + `<p>${trait}: ${desc}</p>`;
    };
    document.getElementById("content").innerHTML = myString;
    return;
};

const [a,b,c] = [1,2,3];
const data = {
    horns: [["small",a],["med",a],["large",a],["stubby",a],["slight curve",a],["ram",b],["angled",b],["curved",b],["lightning",c],["gravity",c]],
    ears: [["farm",a],["triangle",a],["long",a],["fan",b],["flop",b],["low",c]],
    cheek: [["tuft",a],["bare",a],["fin",b],["pad",b],["gills",c],["fluff",b]],
    tail: [["lion",a],["tuft",a],["curl",b],["lizard",a],["horse",b],["brush",b],["bun",b],["fin",c],["paddle",c],["shark",c]]
}

let beaft = {};
let total = 0;

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

function releafeTheBeaft() {
    total = 0;
    beaft = {
        "horns": getRandom(data.horns),
        "ears": getRandom(data.ears),
        "cheeks": getRandom(data.cheek),
        "tail": getRandom(data.tail)
    };
    let myString = "";
    for (const [trait, desc] of Object.entries(beaft)) {
        total = total + desc[1];
        myString = myString + `<span class="trait">${trait}:</span> <span class="desc">${desc[0]}</span>`;
    };
    document.getElementById("content").innerHTML = myString;
    document.getElementById("total").innerHTML = `<span class="total">total cost: ${total}`
    return;
};

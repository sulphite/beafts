const [a,b,c] = [
    {cost: 1, weight: 60},
    {cost: 2, weight: 30},
    {cost: 3, weight: 10}
];

const data = {
    horns: [["small",a],["med",a],["large",a],["stubby",a],["slight curve",a],["ram",b],["angled",b],["curved",b],["lightning",c],["gravity",c]],
    ears: [["farm",a],["triangle",a],["long",a],["fan",b],["flop",b],["low",c]],
    cheeks: [["tuft",a],["bare",a],["fin",b],["pad",b],["gills",c],["fluff",b]],
    tail: [["lion",a],["tuft",a],["curl",b],["lizard",a],["horse",b],["brush",b],["bun",b],["fin",c],["paddle",c],["shark",c]]
}

const getRandom = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getWeightedRandom = function(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i][1].weight;
    }
    const threshold = Math.ceil(Math.random() * total);

    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i][1].weight;
        if(total >= threshold) {return arr[i]}
    }
    
}

function releafeTheBeaft(method) {
    let total = 0;
    let beaft = {};
    let myString = "";

    for(let key in data) {
        beaft[key] = method(data[key])
    };

    for (const [trait, desc] of Object.entries(beaft)) {
        total = total + desc[1].cost;
        myString = myString + `<span class="trait">${trait}:</span> <span class="desc">${desc[0]}</span>`;
    };
    document.getElementById("content").innerHTML = myString;
    document.getElementById("total").innerHTML = `<span class="total">total cost: ${total}`;
    return;
};

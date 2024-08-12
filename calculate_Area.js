let length;
let breadth;

function area(){
    length = parseFloat(document.getElementById('length'));
    breadth = parseFloat(document.getElementById('breadth'));
    let area = length * breadth;
}

document.getElementById('result').innerHTML = area;
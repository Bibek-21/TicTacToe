

let turn = "X";
let printInfo = true;
let boxes = document.getElementsByClassName("box");
let Checkturn = () => {
    return turn == "X" ? "0" : "X"
};

let reset = () => {
    Array.from(boxes).forEach(element => {
        const resetbtn = document.getElementById("mybtn");
        resetbtn.addEventListener('click',() => {
            let boxtext1 = element.querySelector(".boxtext");
            boxtext1.innerText = "";
        });
        });
}

let Checkwin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText == boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText != "")) {
            document.getElementsByClassName('info')[0].innerText = 'Winner is ' + boxtexts[e[0]].innerText;
            printInfo = false;
        }
     })


}
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    if(printInfo){
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = Checkturn();
            Checkwin(); // if won info is change 
        }
        // console.log( document.getElementsByClassName("info"));
        document.getElementsByClassName("info")[0].innerText = 'Turn for  ' + turn;

        // if(printInfo){
        // document.getElementsByClassName("info")[0].innerText = 'Turn for  ' + turn;
        // }
    });
    }
});

reset();
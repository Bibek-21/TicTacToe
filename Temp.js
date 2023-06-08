

let turn = "X";
let printInfo = true;
let Checkturn = () => {
    return turn == "X" ? "0" : "X"
    // return console.log("yeha xu la ma"); //ok
};
let boxes = document.getElementsByClassName("box");

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
    // return console.log("yeha xu la ma"); //ok
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
        // console.log("Yeha samma thik xa"); //ok
        
        if ((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText == boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText != "")) {
            // console.log(document.getElementsByClassName('info')[0].innerText);
            document.getElementsByClassName('info')[0].innerText = 'Winner is ' + boxtexts[e[0]].innerText;
            console.log(document.getElementsByClassName('info'))
            console.log(boxtexts)
            console.log('Winner is ' + boxtexts[e[0]].innerText)
            console.log(document.getElementsByClassName('info')[0].innerText);
            printInfo = false

            // console.log(`Winner is ${boxtexts[e[0]].innerText}`); //checking
            // reset();

            //    gamefinish();

        }
     })
}


// console.log(boxes);



Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    // console.log(boxtext);
    // console.log("Yeha samma thik xa"); //ok

    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            // console.log("Yeha samma thik xa");// ok
            boxtext.innerText = turn;
            // console.log(turn);
            turn = Checkturn();
            Checkwin(); // if won info is change 
        }
        // console.log( document.getElementsByClassName("info"));
        if(printInfo){
        document.getElementsByClassName("info")[0].innerText = 'Turn for  ' + turn;
        }
    });

});

reset();
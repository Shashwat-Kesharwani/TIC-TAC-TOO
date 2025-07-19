const tab = document.querySelectorAll("button.col")
const btn = document.querySelector(".btn-play")
const gameWinner = document.querySelector(".win")
const moveSound = new Audio("pop.mp3");
const winSound = new Audio("win.mp3");

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
player = 0
const arr = Array(9).fill(null);

tab.forEach(cell => {
    cell.addEventListener("click", (e) => {
        let num = Number(cell.id);


        if (cell.innerText == "") {
            moveSound.play();
            if (player === 0) {
                cell.innerText = "X";
                player = 1;
            }
            else {
                cell.innerText = "0";
                player = 0;
            }
        }
        arr[num] = cell.innerText
        console.log(arr)
        checkWinner()
    });
});

const showWinner = (winner) => {

    for (let tabs of tab) {
        tabs.disabled = true;
    }

    gameWinner.innerText = `Winner is ${winner}`
    // console.log(`Winner is ${winner}`)
    gameWinner.classList.remove("hide")
    btn.classList.remove("hide")

}

const checkWinner = () => {
    for (let i of win) {
        let [a, b, c] = i;
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {

            console.log("winner")
            console.log(a)
            console.log(arr[a])
            // alert("winner")
            showWinner(arr[a]);
            winSound.play();
        }
    }
};

const newGame = () => {
    player = 0;
    arr.fill(null); 

    for (let tabs of tab) {
        tabs.disabled = false;
        tabs.innerText = "";

    }
    gameWinner.classList.add("hide")
    btn.classList.add("hide")

}

btn.addEventListener("click", newGame)




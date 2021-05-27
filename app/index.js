const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", setGame);

let code;

function setGame() {
  const row = parseInt(document.getElementById("row").value);
  const col = parseInt(document.getElementById("col").value);
  const mineNum = parseInt(document.getElementById("mineNum").value);
  code = document.getElementById("code").value;
  console.log(code);
  code;

  makeField(row, col);
  setMines(mineNum, row * col);

  function setMines(mineNum, range) {
    let mines = [];
    for (let i = 0; i < mineNum; i++) {
      let randomNum = Math.floor(Math.random() * range);
      if (!mines.includes(randomNum)) {
        mines.push(randomNum);
      } else {
        i--;
      }
    }

    const blockArr = document.getElementsByTagName("td");
    const mine = document.createElement("img");
    mine.classList.add("mine");
    mine.src = "/img/mine.png";

    for (let j = 0; j < blockArr.length; j++) {
      blockArr[j].value = 1;
      if (mines.includes(j)) {
        blockArr[j].prepend(mine.cloneNode(true));
      }
    }
  }

  function makeField(row, col) {
    let tableEl = "<table>";
    for (let i = 0; i < col; i++) {
      tableEl += "<tr>";
      for (let j = 0; j < row; j++) {
        tableEl += "<td></td>";
      }
      tableEl += "</tr>";
    }
    tableEl += "</table>";
    document.getElementById("mineField").innerHTML = tableEl;
  }
}

function solver() {
  // x * y 크기의 테이블 존재
  // 랜덤하게
}

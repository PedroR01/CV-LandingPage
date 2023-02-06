//#region WEB FRONTEND INTERACTION

const gameDevSkills = document.querySelectorAll(".gameDev-Card");
const webDevSkills = [...document.querySelectorAll(".webDev-Card")];
const nxtBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".prev-btn")];

let colSize = 9;
let cards = 0;
let lgCol = "col-lg";

function columnDistribution(amount) {
  let cardSize = colSize / amount;
  return Math.trunc(cardSize);
}

function columnCardProportionDetecter(boolean) {
  cards = 0;
  if (boolean) {
    gameDevSkills.forEach((item, i) => {
      gameDevSkills[i].classList.contains("inactive") ? cards++ : 0;
    });
  } else {
    webDevSkills.forEach((item, i) => {
      webDevSkills[i].classList.contains("inactive") ? cards++ : 0;
    });
  }
}

nxtBtn[0].addEventListener("click", () => {
  columnCardProportionDetecter(true);
});
nxtBtn[1].addEventListener("click", () => {
  columnCardProportionDetecter(false);
});
preBtn[0].addEventListener("click", () => {
  columnCardProportionDetecter(true);
});
preBtn[1].addEventListener("click", () => {
  columnCardProportionDetecter(false);
});

gameDevSkills.forEach((item, i) => {
  nxtBtn[0].addEventListener("click", () => {
    if (gameDevSkills[i].classList.contains("inactive")) {
      gameDevSkills[i].classList.remove("inactive");
      gameDevSkills[i].classList.add("col-lg-" + columnDistribution(cards));
      if (gameDevSkills[i].classList.contains("next")) {
        gameDevSkills[i].classList.remove("next");
      } else if (gameDevSkills[i].classList.contains("prev")) {
        gameDevSkills[i].classList.remove("prev");
      }
    } else {
      gameDevSkills[i].classList.add("inactive");
      gameDevSkills[i].classList.add("next");
    }
  });
  preBtn[0].addEventListener("click", () => {
    if (gameDevSkills[i].classList.contains("inactive")) {
      gameDevSkills[i].classList.remove("inactive");
      gameDevSkills[i].classList.add("col-lg-" + columnDistribution(cards));
      if (gameDevSkills[i].classList.contains("next")) {
        gameDevSkills[i].classList.remove("next");
      } else if (gameDevSkills[i].classList.contains("prev")) {
        gameDevSkills[i].classList.remove("prev");
      }
    } else {
      gameDevSkills[i].classList.add("inactive");
      gameDevSkills[i].classList.add("prev");
    }
  });
});

webDevSkills.forEach((item, i) => {
  nxtBtn[1].addEventListener("click", () => {
    if (webDevSkills[i].classList.contains("inactive")) {
      webDevSkills[i].classList.remove("inactive");
      webDevSkills[i].classList.add("col-lg-" + columnDistribution(cards));
      if (webDevSkills[i].classList.contains("next")) {
        webDevSkills[i].classList.remove("next");
      } else if (webDevSkills[i].classList.contains("prev")) {
        webDevSkills[i].classList.remove("prev");
      }
    } else {
      webDevSkills[i].classList.add("inactive");
      webDevSkills[i].classList.add("next");
    }
  });
  preBtn[1].addEventListener("click", () => {
    if (webDevSkills[i].classList.contains("inactive")) {
      webDevSkills[i].classList.remove("inactive");
      webDevSkills[i].classList.add("col-lg-" + columnDistribution(cards));
      if (webDevSkills[i].classList.contains("next")) {
        webDevSkills[i].classList.remove("next");
      } else if (webDevSkills[i].classList.contains("prev")) {
        webDevSkills[i].classList.remove("prev");
      }
    } else {
      webDevSkills[i].classList.add("inactive");
      webDevSkills[i].classList.add("prev");
    }
  });
});

//#endregion WEB FRONTEND INTERACTION

//#region WEB BACKEND INFORMATION

//#endregion

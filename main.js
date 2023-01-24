//#region WEB FRONTEND INTERACTION

const gameDevSkills = document.querySelectorAll(".gameDev-Card");
const webDevSkills = [...document.querySelectorAll(".webDev-Card")];
const nxtBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".prev-btn")];

gameDevSkills.forEach((item, i) => {
  nxtBtn[0].addEventListener("click", () => {
    if (gameDevSkills[i].classList.contains("inactive")) {
      gameDevSkills[i].classList.remove("inactive");
      gameDevSkills[i].classList.add("col-lg-3");
      if (gameDevSkills[i].classList.contains("next")) {
        gameDevSkills[i].classList.remove("next");
      } else if (gameDevSkills[i].classList.contains("prev")) {
        gameDevSkills[i].classList.remove("prev");
      }
    } else {
      gameDevSkills[i].classList.add("inactive");
      gameDevSkills[i].classList.add("next");
      gameDevSkills[i].classList.remove("col-lg-3");
    }
  });
  preBtn[0].addEventListener("click", () => {
    if (gameDevSkills[i].classList.contains("inactive")) {
      gameDevSkills[i].classList.remove("inactive");
      gameDevSkills[i].classList.add("col-lg-3");
      if (gameDevSkills[i].classList.contains("next")) {
        gameDevSkills[i].classList.remove("next");
      } else if (gameDevSkills[i].classList.contains("prev")) {
        gameDevSkills[i].classList.remove("prev");
      }
    } else {
      gameDevSkills[i].classList.add("inactive");
      gameDevSkills[i].classList.add("prev");
      gameDevSkills[i].classList.remove("col-lg-3");
    }
  });
});

webDevSkills.forEach((item, i) => {
  nxtBtn[1].addEventListener("click", () => {
    if (webDevSkills[i].classList.contains("inactive")) {
      webDevSkills[i].classList.remove("inactive");
      webDevSkills[i].classList.add("col-lg-3");
      if (webDevSkills[i].classList.contains("next")) {
        webDevSkills[i].classList.remove("next");
      } else if (webDevSkills[i].classList.contains("prev")) {
        webDevSkills[i].classList.remove("prev");
      }
    } else {
      webDevSkills[i].classList.add("inactive");
      webDevSkills[i].classList.add("next");
      webDevSkills[i].classList.remove("col-lg-3");
    }
  });
  preBtn[1].addEventListener("click", () => {
    if (webDevSkills[i].classList.contains("inactive")) {
      webDevSkills[i].classList.remove("inactive");
      webDevSkills[i].classList.add("col-lg-3");
      if (webDevSkills[i].classList.contains("next")) {
        webDevSkills[i].classList.remove("next");
      } else if (webDevSkills[i].classList.contains("prev")) {
        webDevSkills[i].classList.remove("prev");
      }
    } else {
      webDevSkills[i].classList.add("inactive");
      webDevSkills[i].classList.add("prev");
      webDevSkills[i].classList.remove("col-lg-3");
    }
  });
});

//#endregion WEB FRONTEND INTERACTION

//#region WEB BACKEND INFORMATION

//#endregion

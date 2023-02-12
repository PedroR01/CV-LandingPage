//#region WEB FRONTEND INTERACTION

// SMOTH APPEARENCE EFFECT FOR ALL ELEMENTS
// Its like a callback that observe multiple elements or entries at the same time. This function will run everytime the visibility of one of the entries has changed.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
    /*
    if(entry.isIntersecting)
    {
      entry.target.classList.add(".show");
    }
    else
    entry.target.classList.remove(".show");
    */
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element)); // calling the function

// SLIDER SKILLS SECTION
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

// INPUT VALUES VALIDATION
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = form.elements.getElementById("name");
  const emailInput = form.getElementById("mail_id");
  const subjectInput = form.getElementById("subject");
  const messageInput = form.getElementById("message");

  if (
    !nameInput.value ||
    !emailInput.value ||
    !messageInput.value ||
    !subjectInput.value
  ) {
    alert("Please fill out all required fields");
    return;
  }

  if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
    alert("Name should only contain letters");
    return;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    alert("Please enter a valid email address");
    return;
  }
});

//Getting values from the form and sending it with EMAILJS API
function SendMail() {
  let params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("mail_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_7pb252k", "template_f24ayi6", params)
    .then(function (res) {
      alert("Mail sent successfully :)" + res.status);
    });
}

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

//#endregion

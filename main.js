//#region WEB FRONTEND INTERACTION

// SMOTH APPEARENCE EFFECT FOR ALL ELEMENTS
// Its like a callback that observe multiple elements or entries at the same time. This function will run everytime the visibility of one of the entries has changed.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element)); // calling the function

// Display responsive elements
let actualScreenWidth = window.innerWidth;
if (actualScreenWidth <= 453) {
  /*this variable returns this number when the screen width is actually 360*/
  document.querySelector(".nav-menu").classList.remove("hidden");
  document.querySelector(".navbar").classList.add("hidden");
}

// SLIDER FOR SKILLS SECTION
const gameDevSkills = document.querySelectorAll(".gameDev-Card");
const webDevSkills = document.querySelectorAll(".webDev-Card");
const nxtBtn = document.querySelectorAll(".next-btn");
const preBtn = document.querySelectorAll(".prev-btn");

let colSize = 9;

// RETURN COLUMN DISTRIBUTION DEPENDING OF THE AMOUNT OF CARDS THAT NEED TO BE DISPLAYED
function columnDistribution(activeCount, inactiveCount) {
  const totalCards = activeCount + inactiveCount;
  let cardSize = colSize / activeCount;
  const inactiveCardSize = colSize / inactiveCount;
  return {
    active: Math.trunc(cardSize),
    inactive: Math.trunc(inactiveCardSize),
  };
}

// DETECTS THE AMOUNT OF CARDS THAT ARE GOING TO BE DISPLAYED IN EACH SECTION
function columnCardProportionDetecter(skills, index) {
  if (actualScreenWidth > 453) {
    nxtBtn[index].addEventListener("click", () => {
      let activeCount = 0;
      let inactiveCount = 0;

      skills.forEach((item, i) => {
        if (skills[i].classList.contains("inactive")) {
          inactiveCount++;
        } else {
          activeCount++;
        }
      });

      // set column distribution for larger screens
      let columnSizes = columnDistribution(activeCount, inactiveCount);

      skills.forEach((item, i) => {
        if (skills[i].classList.contains("inactive")) {
          console.log(actualScreenWidth);
          skills[i].classList.remove("inactive");
          skills[i].classList.add("col-lg-" + columnSizes.inactive);
          if (skills[i].classList.contains("next")) {
            skills[i].classList.remove("next");
          } else if (skills[i].classList.contains("prev")) {
            skills[i].classList.remove("prev");
          }
        } else {
          skills[i].classList.add("col-lg-" + columnSizes.active);
          skills[i].classList.add("inactive");
        }
      });
    });

    preBtn[index].addEventListener("click", () => {
      let activeCount = 0;
      let inactiveCount = 0;

      skills.forEach((item, i) => {
        if (skills[i].classList.contains("inactive")) {
          inactiveCount++;
        } else {
          activeCount++;
        }
      });

      let columnSizes = columnDistribution(activeCount, inactiveCount);

      skills.forEach((item, i) => {
        if (skills[i].classList.contains("inactive")) {
          skills[i].classList.remove("inactive");
          skills[i].classList.add("col-lg-" + columnSizes.inactive);
          if (skills[i].classList.contains("next")) {
            skills[i].classList.remove("next");
          } else if (skills[i].classList.contains("prev")) {
            skills[i].classList.remove("prev");
          }
        } else {
          skills[i].classList.add("col-lg-" + columnSizes.active);
          skills[i].classList.add("inactive");
        }
      });
    });
  } else {
    // set column distribution for small screens
    let columnSizes = {
      active: 12,
      inactive: 12,
    };
    nxtBtn[index].classList.add("hidden");
    preBtn[index].classList.add("hidden");
  
    // Convert NodeList to Array
    const skillsArray = Array.from(skills);
    let activeCard, cardIndex;
  
    skillsArray.forEach((item, i) => {
      if (i != 1 && !skillsArray[i].classList.contains("inactive")) {
        skillsArray[i].classList.add("inactive");
      }
  
      let leftInactive, rightInactive;
  
      if (!skillsArray[i].classList.contains("inactive")) {
        // The only card that remains active
        activeCard = skillsArray[i];
        cardIndex = skillsArray.indexOf(activeCard);
      } else {
        if (cardIndex == null) {
          // The first inactive card encountered
          leftInactive = skillsArray[i];
        } else {
          // Determine whether the inactive card is to the left or right of the active card
          if (i < cardIndex) {
            leftInactive = skillsArray[i];
          } else {
            rightInactive = skillsArray[i];
          }
        }
      }
  
      leftInactive ? leftInactive.classList.add("left") : 0;
      rightInactive ? rightInactive.classList.add("right") : 0;
  
      // Add event listeners to swipe cards
      skillsArray[i].addEventListener("click", () => {
        if (skillsArray[i].classList.contains("left")) {
          // Move left card to active position
          skillsArray[i].classList.remove("left", "inactive");
          skillsArray[i].classList.add("active");
          // Deactivate previous active card
          activeCard.classList.remove("active");
          activeCard.classList.add("inactive", "right");
          // Set this card as the new active card
          activeCard = skillsArray[i];
        } else if (skillsArray[i].classList.contains("right")) {
          // Move right card to active position
          skillsArray[i].classList.remove("right", "inactive");
          skillsArray[i].classList.add("active");
          // Deactivate previous active card
          activeCard.classList.remove("active");
          activeCard.classList.add("inactive", "left");
          // Set this card as the new active card
          activeCard = skillsArray[i];
        }
      });
    });
  }
}

columnCardProportionDetecter(gameDevSkills, 0);
columnCardProportionDetecter(webDevSkills, 1);

// SLIDER PACMAN BUTTONS ANIMATION

const pacmanButtons = document.querySelectorAll(".next-btn, .prev-btn");

pacmanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("animate-pacman");
  });

  button.addEventListener("animationend", () => {
    button.classList.remove("animate-pacman");
  });
});

//#endregion WEB FRONTEND INTERACTION

//#region WEB BACKEND INFORMATION

// INPUT VALUES VALIDATION
const form = document.getElementById("contact-form");

let writeOperation = form.querySelector(".verification-label");

const aritmeticOperation = [];
aritmeticOperation[0] = Math.floor(Math.random() * 100 + 1);
aritmeticOperation[1] = Math.floor(Math.random() * 100 + 1);
aritmeticOperation[2] = aritmeticOperation[0] + aritmeticOperation[1];

writeOperation.textContent +=
  ": (" + aritmeticOperation[0] + "+" + aritmeticOperation[1] + ")";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = form.elements.getElementById("name");
  const emailInput = form.getElementById("mail_id");
  const verificationInput = form.getElementById("verification");
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

  if (verificationInput.value != aritmeticOperation[2]) {
    alert("Human verification gone wrong. Please try again");
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
    .send("service_7pb252k", "template_f24ayi6", params, "GNKJKiGfDkPDJvM52")
    .then(function (res) {
      alert("Mail sent successfully :)");
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

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

    const columnSizes = columnDistribution(activeCount, inactiveCount);

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

    const columnSizes = columnDistribution(activeCount, inactiveCount);

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

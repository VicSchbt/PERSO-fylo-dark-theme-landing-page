import { team, features } from "../data/data.js";

const teamSection = document.getElementById("team");
const featuresSection = document.getElementById("features");

team.forEach((el) => {
  teamSection.innerHTML += ` 
        <article>
          <p>
            ${el.testimonial}
          </p>
          <div class="person">
          <img src="${el.pp}" alt="" />
          <p>${el.name}</p>
          <p>${el.title}</p>
          </div>
        </article>`;
});

features.forEach((el) => {
  featuresSection.innerHTML += `
        <article>
          <img src="${el.img}" alt="${el.alt}" />
          <h2>${el.label}</h2>
          <p>
            ${el.descr}
          </p>
        </article>`;
});

// EMAIL VALIDATION

const emailSubmitBtn = document.getElementById("emailSubmitBtn");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");

/**
 *
 * @param {string} text
 * @returns boolean
 */
const isEmailAddr = (text) => {
  const re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
};

const onSubmitEmailClicked = (e) => {
  e.preventDefault();
  if (isEmailAddr(emailInput.value)) {
    console.log("GOOD FORMAT");
  } else {
    errorMessage.classList.remove("hide");
  }
};

emailSubmitBtn.addEventListener("click", onSubmitEmailClicked);

import { team, features } from "../data/data.js";

const teamSection = document.getElementById("team");
const featuresSection = document.getElementById("features");

team.forEach((el) => {
  teamSection.innerHTML += ` 
        <article>
          <p>
            ${el.testimonial}
          </p>
          <p>${el.name}</p>
          <p>${el.title}</p>
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

import { IAnimal } from "./IAnimal.js";

//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter

export default function renderAnimalInfo(animal: IAnimal) {
  const container = document.querySelector(".animal-info");

  if (!container) return;

  container.innerHTML = "";

  //BILD 
  const img = document.createElement("img");
  img.src = `images/${animal.imageUrl}`;
  container.appendChild(img);

  //NAMN OCH TYP AV DJUR
  const title = document.createElement("h2");
  title.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
  container.appendChild(title);

  //JOBB OCH ANSTÄLLNINGSSTATUS
  const job = document.createElement("p");

  const isEmployed = !animal.employmentEndDate;

  job.textContent = `${animal.job} - Currently ${
    isEmployed ? "employed" : "not empployed"
  }`;

  container.appendChild(job);

  //ÅLDER
  const age = document.createElement("p");

  const currentYear = new Date().getFullYear();
  const animalAge = currentYear - Number(animal.birthYear);

  age.textContent = `Age: ${animalAge} years old`;
  container.appendChild(age);

  // SKILLS TITEL
  const skillsTitle = document.createElement("h3");
  skillsTitle.textContent = "Skills:";
  container.appendChild(skillsTitle);

  // SKILLS LISTA
  if (animal.skills) {
    if (Array.isArray(animal.skills)) {
      animal.skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        container.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = animal.skills;
      container.appendChild(li);
    }
  }
  //=====================================================//
  //Rendera ut bilden på djuret
  //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
  //=====================================================//
  //=====================================================//
  //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
  //Följ formatet: "Trash Analyst - Currently (not) employed"
  //Använd template literals
  //=====================================================//
  //=====================================================//
  //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
  //Följ formatet:  Age: 9 years old.
  //Använd template literals
  //Bonus om du skriver ut rubriken "Age" med CSS.
  //=====================================================//
  //=====================================================//
  //Skriv ut en lista på djurets färdigheter
  //Följ formatet:    Skills:
  //                  Flying
  //                  Eating
  //Bonus om du skriver ut rubriken "Skills" med CSS.
  //=====================================================//
}

import renderAnimalInfo from "./renderAnimalInfo.js";
//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
export default function renderListOfAnimals(animals) {
    const list = document.querySelector("ul");
    if (!list)
        return;
    list.innerHTML = "";
    animals.forEach((animal) => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener("click", () => {
            renderAnimalInfo(animal);
        });
        list.appendChild(li);
    });
}

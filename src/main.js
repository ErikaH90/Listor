const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const text = document.getElementById("length");
const text2 = document.getElementById("letters");
const result = document.getElementById("result");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const button4 = document.getElementById("button4");
const animalList = document.getElementById("animals");

button.addEventListener ("click", (event) => {
  event.preventDefault();
  const textLength = nameInput.value.length;
  text.innerText = "Namnet är " + textLength + " bokstäver långt.";
});

button2.addEventListener ("click", (event) => {
  event.preventDefault();
  const lastname = lastnameInput.value.split("");
  text2.innerHTML = "Bokstäverna är \n";
  for (let i = 0; i < lastname.length; i++) {
  text2.innerHTML += lastname[i] + " ";
  }
});

button3.addEventListener("click", (event) => {
event.preventDefault();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(number => {
sum += number;
});
result.innerHTML = sum;
});

button4.addEventListener("click", (event) => {
  event.preventDefault();
  const animals = ["katt", "hund", "sköldpadda"];
  animals.forEach(animal => {
    const li = document.createElement("li");
    li.textContent = animal;
    animalList.appendChild(li);
  });
});


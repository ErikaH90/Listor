const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const text = document.getElementById("length");
const text2 = document.getElementById("letters");
const button = document.getElementById("button");
const button2 = document.getElementById("button2");

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



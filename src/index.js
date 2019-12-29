import greeting from "./helper";
import imageCinamon from "./assets/images/cinamon.png";

const person = {
  name: "Kevin",
  age: 27
};

console.log("My age is ", person.age);

const image = document.createElement("img");
image.setAttribute("src", imageCinamon);

const body = document.body;
body.appendChild(image);

greeting(person.name);

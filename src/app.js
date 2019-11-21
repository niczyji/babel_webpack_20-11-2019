import { person, sayHello } from "./lib";

// console.log(person.name);

// console.log(sayHello('Brad'));

function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li);
}

async function getPosts() {
  const response = await fetch(
    "https://feiertage-api.de/api/?jahr=2019&nur_land=nw"
  );
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
// testing getPosts().then(posts => posts.forEach(post => console.log(post)));

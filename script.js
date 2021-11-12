const dataElement = document.querySelector("data");
const buttonElement = document.querySelector("btn-load-content");

const data = [
  "Angular",
  "React",
  "Vue.js",
  "Ember.js",
  "Meteor",
  "Mithril",
  "Node.js",
  "Polymer",
  "Backbone.js",
];

const loadContent = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const items = document.createElement("ul");
  items.classList.add("items");

  data.forEach((lang) => {
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = lang;

    items.appendChild(item);
  });

  container.appendChild(items);
};

buttonElement.addEventListener("click", loadContent());

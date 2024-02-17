/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#domain").innerHTML = generateDomain().join("<br>");
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let suffix = [".com", ".tv", ".org"];

  let result = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < suffix.length; l++) {
          result.push(pronoun[i] + adj[j] + noun[k] + suffix[l]);
        }
      }
    }
  }

  return result;
};

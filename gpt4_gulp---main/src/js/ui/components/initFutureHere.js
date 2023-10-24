import futureHereData from "../../mockData/futureHereData.js";
import { futureHereTemplate } from "../templates/futureHereTemplate.js";

const initFutureHere = () => {
  const futureHereNode = document.querySelector(".future_here");

  futureHereNode.insertAdjacentHTML(
    "beforeend",
    futureHereTemplate(futureHereData)
  );
};

export default initFutureHere;

import { heroData } from "../../mockData/heroData.js";
import { heroTemplate } from "../templates/heroTemplate.js";

const initHero = () => {
  const heroNode = document.querySelector(".hero_section");

  heroNode.insertAdjacentHTML("beforeend", heroTemplate(heroData));
};

export default initHero;

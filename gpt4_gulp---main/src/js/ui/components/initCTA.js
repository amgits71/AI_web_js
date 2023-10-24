import ctaData from "../../mockData/ctaData.js";
import { ctaTemplate } from "../templates/ctaTemplate.js";

const initCTA = () => {
  const CtaNode = document.querySelector(".CTA");

  CtaNode.insertAdjacentHTML("beforeend", ctaTemplate(ctaData));
};

export default initCTA;
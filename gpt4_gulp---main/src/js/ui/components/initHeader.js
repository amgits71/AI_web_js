import headerData from "../../mockData/headerData.js";
import { headerTemplate } from "../templates/headerTemplate.js";

const initHeader = () => {
  const headerNode = document.querySelector(".header");

  headerNode.insertAdjacentHTML("beforeend", headerTemplate(headerData));
};

export default initHeader;

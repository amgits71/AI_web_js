import whatIsGptData from "../../mockData/whatIsGptData.js";
import { whatIsGptTemplate } from "../templates/whatIsGptTemplate.js";

const initWhatIsGpt = () => {
  const whatIsGptNode = document.querySelector(".what_is_chatgpt_section");

  whatIsGptNode.insertAdjacentHTML(
    "beforeend",
    whatIsGptTemplate(whatIsGptData)
  );
};

export default initWhatIsGpt;

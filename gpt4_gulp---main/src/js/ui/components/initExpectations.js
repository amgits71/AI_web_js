import expectationsData from "../../mockData/expectationsData.js";
import { expectationsTemplate } from "../templates/expectationsTemplate.js";

const initExpectations = () => {
  const ExpectationsNode = document.querySelector(".exceed_expectations");

  ExpectationsNode.insertAdjacentHTML("beforeend", expectationsTemplate(expectationsData));
};

export default initExpectations;
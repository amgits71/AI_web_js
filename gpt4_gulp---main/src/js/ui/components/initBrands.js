import brandsData from "../../mockData/brandsData.js";
import { brandsTemplate } from "../templates/brandsTemplate.js";

const initBrands = () => {
  const BrandsNode = document.querySelector(".brands_section");

  BrandsNode.insertAdjacentHTML("beforeend", brandsTemplate(brandsData));
};

export default initBrands;

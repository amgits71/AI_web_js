import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExpectations from "../components/initExpectations.js";
import initCTA from "../components/initCTA.js";
import initBlog from "../components/initBlog.js";

import initBurger from "./../components/initBurger.js";

const initHomePage = (element) => {
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section exceed_expectations"></section>
    <section class="section CTA"></section>
    <section class="section blog_section"></section>
  `;

  element.insertAdjacentHTML("beforeend", template);
};

const rootNode = document.querySelector("#root");

const homePage = () => {
  // инициализация элементов Главной страницы
  initHomePage(rootNode);

  // инициализация шапки страницы с мок датой
  initHeader();

  // инициализация хиро раздела
  initHero();

  // инициализация хиро раздела
  initBrands();

  // инициализация хиро раздела
  initWhatIsGpt();

  // инициализация раздела "Будущее наступило" с мок датой
  initFutureHere();
  
  initExpectations();
  initCTA();
  initBlog();

  // инициализация бургера для адаптивного меню
  initBurger();
};

export default homePage;

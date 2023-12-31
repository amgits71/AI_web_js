export const createHeaderTemaplte = (header) => {
  return `
    <h1 class="left__header">
      ${header}
    </h1>
  `;
};

export const createDescriptionTemaplte = (description) => {
  return `
    <p class="left__description">
      ${description}
    </p>
  `;
};

export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return `
        <input type="text" value="" placeholder="${title}" />
      `;

    case "button":
      return `
          <button class="cta_buttons__signin btn primary-btn">
            ${title}
          </button>
      `;

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="left__cta_buttons">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createImgTemplate = ({ 
  img: {src, alt},
  text,
}) => {
  return `
  <div class="left__social_approve">
    <img src="${src}" alt="${alt}" />
    <p class="signup_content">${text}</p>
  </div>
  `;
}

export const heroTemplate = ({
  heroCtaButtons,
  illustration,
  header,
  description,
  peopleImg
}) => {
  const headerTemplate = createHeaderTemaplte(header);
  const descriptionTemplate = createDescriptionTemaplte(description);
  const buttonsTemplate = createInputsTemplate(heroCtaButtons);
  const peopleImgTemplate = createImgTemplate(peopleImg);
  const illustrationTemplate = createIllustrationTemplate(illustration);

  const resultTemplate = `
    <div class="hero_section__left">
        ${headerTemplate}
        ${descriptionTemplate}
        ${buttonsTemplate}
        ${peopleImgTemplate}       
    </div>
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};

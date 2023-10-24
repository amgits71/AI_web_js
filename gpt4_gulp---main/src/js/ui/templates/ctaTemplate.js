export const createLeftTemplate = ({
    header,
    link: {href, text},
}) => {
    return `
    <a href="${href}" class="ask_access_cta">${text}</a>
    <h3 class="container__header sign_up">${header}</h3>
    `;
}

export const createRightTemplate = ({
    text
}) => {
    return `
    <button class="cta_buttons_sign_up btn">${text}</button>
    `;
}

export const ctaTemplate = ({
    ctaLeftData, ctaRightData
}) => {
    const ctaLeftTemplate = createLeftTemplate(ctaLeftData); 
    const ctaRightTemplate = createRightTemplate(ctaRightData);
    const resultTemplate = `
        <div class="CTA_left">
            ${ctaLeftTemplate}
        </div>
        <div class="CTA_right">
            ${ctaRightTemplate}
        </div>
    `;
    return resultTemplate;
}
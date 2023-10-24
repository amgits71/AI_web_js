export const createWomanVRTemplate = ({ src, alt }) => {
    return `
    <img src="${src}" alt="${alt}" />
    `;
}

export const createHeaderTemplate = ({
    header,
    link: {href, text},
}) => {
    return `
    <div class="right__container_1">
        <a href="${href}" class="ask_access_cta">${text}</a>
        <h2 class="right_header">${header}</h2>
    </div>
    `;
}

export const createDescriptionTemplate = ({
    description,
    link: {href, text},
}) => {
    return `
    <div class="right__container_2">
        <p class="container_content">
            ${description}
        </p>
        <a href="${href}" class="left__cta">${text}</a>
    </div>
    Запросить ранний доступ
    `;
}

export const expectationsTemplate = ({
    womanVR, expectationsHeaderData, expectationsDescriptionData
}) => {
    const womanVRTemplate = createWomanVRTemplate(womanVR); 
    const headerTemplate = createHeaderTemplate(expectationsHeaderData);
    const descriptionTemplate = createDescriptionTemplate(expectationsDescriptionData);
    const resultTemplate = `
        <div class="exceed_expectations_left">
            ${womanVRTemplate}
        </div>
        <div class="exceed_expectations_right">
            ${headerTemplate}
            ${descriptionTemplate}
        </div>
    `;
    return resultTemplate;
}
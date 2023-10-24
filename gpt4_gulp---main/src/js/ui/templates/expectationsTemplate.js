export const createWomanVRTemplate = ({ src, alt }) => {
    return `
    <img src="${src}" alt="${alt}" />
    `;
}

export const expectationsTemplate = ({
    womanVR,
}) => {
    const womanVRTemplate = createWomanVRTemplate(womanVR); 
    const resultTemplate = `
        <div class="exceed_expectations_left">
            ${womanVRTemplate}
        </div>
        <div class="exceed_expectations_right">
            <div class="right__container_1">
                <a href="#" class="ask_access_cta">Запроси ранний доступ</a>
                <h2 class="right_header">
                Превосходя все ожидания
                </h2>
            </div>
            <div class="right__container_2">
            <p class="container_content">
                Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. 
                Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.
            </p>
            <a href="#" class="left__cta">Запросить ранний доступ</a>
            </div>
        </div>
    `;
    return resultTemplate;
}
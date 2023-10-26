// export const footerMenuTemplate = (footerMenuData) => {
//     const menuTemplate = footerMenuData
//       .map((menuData) => createFooterMenu(menuData))
//       .join("");
  
//     return menuTemplate;
// };

export const createFooterMenu = ({ header, href, link1, link2, link3, link4}) => {
    return `
        <div class="column_footer_side">
            <h4 class="footer_text_header">${header}</h4>
            <a href="${href}" class="footer_text">${link1}</a>
            <a href="${href}" class="footer_text">${link2}</a>
            <a href="${href}" class="footer_text">${link3}</a>
            <a href="${href}" class="footer_text">${link4}</a>
        </div>
      `;
  };

export const createFooterTopTemplate = ({ header, button: {href, text}}) => {
    return `
        <div class="container_footer_main_top">
            <h1 class="footer_header">${header}</h1>
            <button href="${href}" class="button-demo btn">${text}</button>
        </div>
    `;
};

export const createLogoTemplate = ({ href, src, text }) => {
    return `
        <div class="footer_logo">
            <a href="${href}" class="logo__link">
                <img class="link__name" src="${src}" /> 
            </a>
            <p class="footer_text">
                ${text}
            </p>
        </div>
    `;
};

export const createCopyrightTemplate = (text) => {
    return `
        <p class="copyright">${text}</p>
    `
}
  
export const footerTemplate = ({
    footerTopData, footerLogoData, footerMenuData, copyrightData
}) => {
    const footerTopTemplate = createFooterTopTemplate(footerTopData);
    const footerLogoTemplate = createLogoTemplate(footerLogoData);
    const menuTemplate = footerMenuData
      .map((menuData) => createFooterMenu(menuData))
      .join("");
    const copyrightTemplate = createCopyrightTemplate(copyrightData);

    const resultTemplate = `
    <div class="container_footer_main">
        ${footerTopTemplate}
        <div class="container_footer_main_bottom">
            ${footerLogoTemplate}
            <div class="container_footer_side">
                ${menuTemplate}
            </div>
        </div>
        ${copyrightTemplate}
    </div>
    
    `;
    return resultTemplate;
};
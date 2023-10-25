export const createHeaderTemplate = (header) => {
    return `
        <h1 class="blog_header">${header}</h1>
    `;
};

export const createBlogImage = ({ src, alt }) => {
    return `
        <img class="article_img" src="${src}" alt="${alt}"/>     
      `;
};

export const createBlogDescription = ({
    date, 
    title, 
    link: {href, text},
}) => {
    return `
        <p class="article_data">${date}</p>
        <h3 class="article_title">${title}</h3>
        <a href="${href}" class="read_all_article">${text}</a>
    `;
};

export const createArticle = ({className, title, date, link, img}) => {
    const blogImgTemplate = createBlogImage(img);
    const blogDescriptionTemplate = createBlogDescription({date, title, link});

    return `
        <div class="${className}">
            <div class="container_blog_img_text">
                ${blogImgTemplate}
                <div class="container_blog_text">
                    ${blogDescriptionTemplate}
                </div>
            </div>
        </div>
    `;
}
  
  export const blogTemplate = ({blogArticleData, blogHeaderData}) => {
    const headerTemplate = createHeaderTemplate(blogHeaderData);
    console.log(headerTemplate);
    //const leftArticles = [];
    //const rightArticles = [];
    // blogArticleData.forEach((article, i, blogArticleData) => {
    //     if (article.className === "container_blog_part_left") {
    //         leftArticles.push(article);
    //     } else {
    //         rightArticles.push(article);
    //     }
    // })

    const leftArticles = blogArticleData.filter((article) => article.className === "container_blog_part_left");
    const rightArticles = blogArticleData.filter((article) => article.className === "container_blog_part");

    const leftArticlesTemplate = leftArticles
      .map((articleData) => createArticle(articleData))
      .join("");
    
    const rightArticlesTemplate = rightArticles
      .map((articleData) => createArticle(articleData))
      .join("");

    return `
        ${headerTemplate}
        <div class="container_blog">
            ${leftArticlesTemplate}
            ${rightArticlesTemplate}
        </div>
    `;
  };
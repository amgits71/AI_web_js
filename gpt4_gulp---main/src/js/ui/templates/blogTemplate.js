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
    let rightArticles = blogArticleData.filter((article) => article.className === "container_blog_img_text");

    const leftArticlesTemplate = leftArticles
      .map((articleData) => createArticle(articleData))
      .join("");
    
    // const rightArticlesArray = rightArticles
    //    .map(articleData)
    //    .join("");

    const secondaryLeftArticles = [];
    for (let i = 0; i < rightArticles.length/2; i++) {
        secondaryLeftArticles.push(rightArticles[i])
        console.log(rightArticles[i]);
    }
    
    const secondaryRightArticles = [];
    for (let i = rightArticles.length/2; i < rightArticles.length; i++) {
        secondaryRightArticles.push(rightArticles[i])
    }
    
    const secondaryLeftArticlesTemplate = secondaryLeftArticles
        .map((articleData) => createArticle(articleData))
        .join("");

    const secondaryRightArticlesTemplate = secondaryRightArticles
        .map((articleData) => createArticle(articleData))
        .join("");

    return `
        ${headerTemplate}
        <div class="container_blog">
            ${leftArticlesTemplate}
            <div class="container_blog_part">
                ${secondaryLeftArticlesTemplate}
            </div>
            <div class="container_blog_part">
                ${secondaryRightArticlesTemplate}
            </div>
        </div>
    `;
  };
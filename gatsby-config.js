module.exports = {
    siteMetadata: {
        title: "Грузинский ресторан Чача Хинкали.",
        description: "Самый радушный и гостеприимный грузинский дом Чача Хинкали покажет тебе, что значит полная гамарджоба! Приходите и попробуйте наши лучшие хинкали в Санкт-Петербурге.",
        author: "Hayk Sargsyan",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                default: {
                    quality: 100
                },
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/fivicon.svg", // This path is relative to the root of the site.
            },
        },
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./src/data/",
            },
        },
        "gatsby-plugin-gatsby-cloud",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
};

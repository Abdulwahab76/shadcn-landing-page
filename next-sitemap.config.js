/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://cyfertechsolutions.vercel.app",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/", "/about", "/contact", "/services"],
    outDir: "public",

};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://cyfertechsolution.netlify.app",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 5000,
    exclude: ["/api/*"], // Exclude API routes instead of pages
    outDir: "public",
};

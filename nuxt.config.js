import theme from "@nuxt/content-theme-docs";

export default theme({
  head: {
    htmlAttrs: {
      lang: "zh",
    },
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css",
      },
    ],
  },
  docs: {
    primaryColor: "#E24F55",
  },
});

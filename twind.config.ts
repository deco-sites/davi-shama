/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1230px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        smooth: "rgba(0,0,0,.25)",
        subdued: "rgba(0,0,0,.5)",
        subsubdued: "rgba(0,0,0,.3)",
      },
      borderColor: {
        primary: "#2FD180",
        subdued: "#D9D9D9",
      },
      fontFamily: {
        sans: ["Aktiv Grotesk", "sans-serif"],
        serif: ["serif"],
      },
    },
  },
  preflight: (preflight: any) => ({
    ...preflight,

    // Stick footer to the bottom of the page
    body: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
  }),
};

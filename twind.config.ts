/** @type {import('$fresh/plugins/twind').Options} */
export default {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1220px",
        "2xl": "1220px",
      },
      fontSize: {
        "3xl": "32px",
      },
      colors: {
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-light": "#C5FFE9",
        transparent: "transparent",
        subdued: "rgba(0,0,0,.5)",
        smooth: "rgba(0,0,0,.4)",
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
  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
    },
  },
  plugins: {
    multicolor: {
      background:
        "radial-gradient(100% 8151.79% at 0% 50%, #FC7074 0%, #EA95D6 39.06%, #54C3FF 66.15%, #4CB943 96.88%)",
    },
  },
};

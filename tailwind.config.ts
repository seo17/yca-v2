import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "hsl(217, 67%, 57%)",
        "primary-content": "hsl(0, 0%, 100%)",
        "primary-dark": "hsl(217, 67%, 47%)",
        "primary-light": "hsl(217, 67%, 67%)",

        secondary: "hsl(307, 67%, 57%)",
        "secondary-content": "hsl(308, 66%, 7%)",
        "secondary-dark": "hsl(307, 67%, 47%)",
        "secondary-light": "hsl(307, 67%, 67%)",

        background: "hsl(240, 7%, 94%)",
        foreground: "hsl(0, 0%, 98%)",
        border: "hsl(216, 8%, 88%)",

        copy: "hsl(210, 8%, 15%)",
        "copy-light": "hsl(218, 8%, 40%)",
        "copy-lighter": "hsl(219, 7%, 55%)",

        success: "hsl(120, 67%, 57%)",
        warning: "hsl(60, 67%, 57%)",
        error: "hsl(0, 67%, 57%)",

        "success-content": "hsl(120, 66%, 7%)",
        "warning-content": "hsl(60, 66%, 7%)",
        "error-content": "hsl(0, 0%, 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

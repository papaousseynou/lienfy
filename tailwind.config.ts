import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      // Ajoutez d'autres variantes de Poppins ici si nécessaire
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width:{
        'custom-width': '1441px', 
        'gray-width': '1440px', 
        'box-input-width':'1232px',
        'second-section-width':'1440px',
        'card-width':'604px',
        'fourth-width':'1438px',
        'fifth-width':'1440px',
        'sixth-width':'1438px',
        
      },
      height:{
        'custom-height': '633px',
        'gray-height': '575px',
        'box-input-height':'368px',
        'third-section-height':'918px',
        'fourth-height':'775px',
        'card-height': '241px',
        'fifth-height':'716px',
        'sixth-height':'374px'
      },

      colors: {
        border: "hsl(var(--border))",
        'bleu-nav':'#0E1D34', 
        'first-color': '#FFF7F2',
        'second-color': '#EEEEEE',
        'card-color': '#FFF7F2',
        'fourth-color':'#EEEEEE',
        'fifth-color':'#FCFCFC',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        footertest:{
          color: "#0E1D34"
        }
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
} satisfies Config

export default config
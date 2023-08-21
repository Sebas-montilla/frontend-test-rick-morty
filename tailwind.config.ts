/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        text: '#F0F2EB',
        border: 'hsl(var(--border))',
        input: '#313234',
        negative: "#C6391A",
        ring: 'hsl(var(--ring))',
        background: {
          dark: "#1A1A1A",
          medium: "#1E1E20",
          light: "#313234"
        },
        foreground: 'hsl(var(--foreground))',
        blue: {
          solid: "#11B0C8",
          hover: "#42B4Ca"
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          green: {
            darkgreen: '#318941',
            mediumgreen: '#7FC141'
          }
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          moonstone: '#02AFC8',
          lightblue: '#AAD4E3',
          lightyellow: '#F5EF6A'
        },
        destructive: {
          DEFAULT: '#C6391A',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        positive: '#81FC5B',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          electricgreen: '#84FD61'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

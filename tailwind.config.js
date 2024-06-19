/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'zuccini': {
        '50': '#eefff6',
        '100': '#d8ffed',
        '200': '#b4fedc',
        '300': '#79fcc1',
        '400': '#38f09e',
        '500': '#0ed97f',
        '600': '#05b466',
        '700': '#088d53',
        '800': '#0c6f45',
        '900': '#0c5b3a',
        '950': '#00492c',
      },
      'shadow-green': {
        '50': '#f2f7f5',
        '100': '#e1eae5',
        '200': '#c4d6cd',
        '300': '#a4bfb3',
        '400': '#709787',
        '500': '#507969',
        '600': '#3c5f52',
        '700': '#304c43',
        '800': '#283d36',
        '900': '#21332d',
        '950': '#121c1a',
    },
    'viridian-green': {
        '50': '#f5f8f6',
        '100': '#ddeae4',
        '200': '#bbd4c9',
        '300': '#91b7a8',
        '400': '#618c7c',
        '500': '#4f7d6d',
        '600': '#3e6357',
        '700': '#345147',
        '800': '#2d423c',
        '900': '#283934',
        '950': '#141f1c',
    },
    'white': {
      '50': '#F1F5F9',
    },
    'roman': {
        '50': '#fdf3f3',
        '100': '#fce4e4',
        '200': '#facece',
        '300': '#f5acac',
        '400': '#ee7b7b',
        '500': '#e25050',
        '600': '#ce3434',
        '700': '#ad2828',
        '800': '#902424',
        '900': '#782424',
        '950': '#410e0e',
    },
    'rock-blue': {
        '50': '#f4f7f9',
        '100': '#ecf0f3',
        '200': '#dce4e9',
        '300': '#c6d2db',
        '400': '#aebccb',
        '500': '#94a3b8',
        '600': '#828fa9',
        '700': '#6f7a93',
        '800': '#5c6677',
        '900': '#4d5462',
        '950': '#2d3139',
    },
    'wild-sand': {
        '50': '#f5f5f7',
        '100': '#ebebee',
        '200': '#dbdbe2',
        '300': '#c2c3ce',
        '400': '#a4a4b6',
        '500': '#8f8ea3',
        '600': '#807d93',
        '700': '#737085',
        '800': '#615e6f',
        '900': '#504e5a',
        '950': '#333239',
    },  
    },
    extend: {},
  },
  plugins: [],
}


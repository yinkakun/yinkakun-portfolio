import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  width:100vw;
  overflow-x:hidden;
}

body::-webkit-scrollbar {
  width: 15px;
}

body::-webkit-scrollbar-thumb {
  background-color: hsla(7, 100%, 95%, .1);
}

body::-webkit-scrollbar-track {
  background: transparent; 
}

:root {
  scroll-behavior: smooth;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}

body {
  font-family: 'IBM Plex Mono', monospace;
  background-color: hsla(240, 9%, 13%, 1);
  color: hsla(7, 100%, 95%, 1);
}

p {
  font-size: var(--size-400);
}

 p {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
 
 a {
   color: inherit;
   text-decoration: underline;
 }

 h1, h2, h3, th {
   font-weight: 400;
   text-transform: lowercase;
 }

 table {
   border-collapse: collapse;
   text-indent: 0;
}

th {
  text-align: left;
  padding-right: 2rem;
}

ul {
  padding-left: 0;
  list-style: none;
}

`;

export default GlobalStyle;

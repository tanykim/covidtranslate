import { css } from '@emotion/core'

/* ---------------------------------------------------------- */
export const base = (theme) => css`
  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    color: ${theme.colors.midgrey.bolder};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6em;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    background: #fff;
    font-feature-settings: 'liga' on;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
  }

  ::selection {
    text-shadow: none;
    background: ${theme.colors.blue.light};
  }

  hr {
    position: relative;
    display: block;
    width: 100%;
    margin: 2.5em 0 1.5em;
    padding: 0;
    height: 1px;
    border: 0;
    border-top: 1px solid ${theme.colors.lightgrey.light};
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: 0;
  }

  textarea {
    resize: vertical;
  }

  p,
  ul,
  ol,
  dl,
  blockquote {
    margin: 0 0 1.5em 0;
  }

  ol,
  ul {
    padding-left: 1.3em;
    padding-right: 1.5em;
  }

  ol ol,
  ul ul,
  ul ol,
  ol ul {
    margin: 0.5em 0 1em;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  ul,
  ol {
    max-width: 100%;
  }

  li {
    margin: 0.5em 0;
    padding-left: 0.3em;
    line-height: 1.6em;
  }

  dt {
    float: left;
    margin: 0 20px 0 0;
    width: 120px;
    color: ${theme.colors.darkgrey.base};
    font-weight: 500;
    text-align: right;
  }

  dd {
    margin: 0 0 5px 0;
    text-align: left;
  }

  blockquote {
    margin: 1.5em 0;
    padding: 0 1.6em 0 1.6em;
    border-left: 3px solid ${theme.colors.blue.base};
  }

  blockquote p {
    margin: 0.8em 0;
    font-size: 1.2em;
    font-weight: 300;
  }

  blockquote small {
    display: inline-block;
    margin: 0.8em 0 0.8em 1.5em;
    font-size: 0.9em;
    opacity: 0.8;
  }
  /* Quotation marks */
  blockquote small:before {
    content: '\\2014 \\00A0';
  }

  blockquote cite {
    font-weight: bold;
  }
  blockquote cite a {
    font-weight: normal;
  }

  a {
    color: ${theme.colors.blue.bold};
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    line-height: 1.15;
    font-weight: 600;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin: 0 0 0.5em 0;
    font-size: 5.5rem;
    font-weight: 600;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  h2 {
    margin: 1.5em 0 0.5em 0;
    font-size: 2.2rem;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.8rem;
    }
  }

  h3 {
    margin: 1.5em 0 0.5em 0;
    font-size: 1.8rem;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 1.7rem;
    }
  }

  h4 {
    margin: 1.5em 0 0.5em 0;
    font-size: 1.6rem;
    font-weight: 500;
  }

  h5 {
    margin: 1.5em 0 0.5em 0;
    font-size: 1.4rem;
    font-weight: 500;
  }

  h6 {
    margin: 1.5em 0 0.5em 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
`

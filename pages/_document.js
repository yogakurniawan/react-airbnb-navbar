import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  ${styledNormalize}
  
  body {
    font-family: verdana, sans-serif;
    font-size: 12px;
  }
  
  * {
    box-sizing: border-box;
    line-height: 1.3em;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: underline;
    color: #0a73ef;
  }

  p {
    line-height: 1.6em;
  }

  strong {
    color: #145;
    font-weight: bold;
  }

  input, textarea, button {
    outline: none;
  }
  
  button {
    cursor: pointer;
  }

  .rc-collapse {
    background-color: #f7f7f7;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
  }
  .rc-collapse-anim-active {
    transition: height 0.2s ease-out;
  }
  .rc-collapse > .rc-collapse-item {
    border-top: 1px solid #d9d9d9;
  }
  .rc-collapse > .rc-collapse-item:first-child {
    border-top: none;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header {
    height: 38px;
    line-height: 38px;
    text-indent: 16px;
    color: #666;
    cursor: pointer;
  }
  .rc-collapse > .rc-collapse-item > .rc-collapse-header .arrow {
    display: inline-block;
    content: '\\20';
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-left: 4px solid #666;
    vertical-align: middle;
    margin-right: 8px;
  }
  .rc-collapse > .rc-collapse-item-disabled > .rc-collapse-header {
    cursor: not-allowed;
    color: #999;
    background-color: #f3f3f3;
  }
  .rc-collapse-content {
    overflow: hidden;
    color: #666;
    padding: 0 16px;
    background-color: #fff;
  }
  .rc-collapse-content > .rc-collapse-content-box {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .rc-collapse-content-inactive {
    display: none;
  }
  .rc-collapse-item:last-child > .rc-collapse-content {
    border-radius: 0 0 3px 3px;
  }
  .rc-collapse > .rc-collapse-item-active > .rc-collapse-header .arrow {
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #666;
    margin-right: 6px;
  }
  
`

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>React Next JS Boilerplate</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="/static/font-awesome-4.7.0/css/font-awesome.min.css"
          />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}

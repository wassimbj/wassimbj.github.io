import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;600;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Wassim Ben Jdida | Software Developer"
          />
          <meta name="author" content="Wassim Ben Jdida" />
        </Head>

        <body className="bg-darkGreen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

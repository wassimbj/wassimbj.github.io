import * as React from "react";
// next
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
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

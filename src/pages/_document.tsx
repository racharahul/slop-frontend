import { NextPage } from "next";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

const Document: NextPage = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
          integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js"
          integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
      </body>
    </Html>
  );
};

export default Document;

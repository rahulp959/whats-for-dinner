import React from "react";
import Head from "next/head";

import Homepage from "../components/Homepage";
import Layout from "./../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>What's For Dinner?</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Homepage />
    </Layout>
  );
}

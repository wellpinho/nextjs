import type { NextPage } from "next";
import Head from "next/head";
import { MainLayout } from "../components/layout/main";
import { Navegation } from "../components/navegation";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Fundamentals</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navegation />
      </header>

      <MainLayout>
        <h1>Home page</h1>
      </MainLayout>
    </div>
  );
};

export default Home;

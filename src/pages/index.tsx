import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CatsList from "@/components/CatsList/CatsList";
import Nav from "@/components/Nav";


export default function Home() {


  return (
    <>
      <Head>
        <title>Кошачий пинтерест</title>
        <meta name="description" content="Кошачий пинтерест со всеми котиками" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <Nav />
        </header>
        <main className={styles.main}>

          <CatsList />
        </main>
      </div>
    </>
  );
}

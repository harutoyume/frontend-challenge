import CatsFavorites from "@/components/CatsList/CatsFavorites";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Favorites() {
    return (
        <>
            <Head>
                <title>Кошачий пинтерест</title>
                <meta name="description" content="Любимые котики в кошачем пинтересте" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <header>
                    <Nav />
                </header>
                <main>
                    <CatsFavorites />
                </main>
            </div>
    </>
    )
}
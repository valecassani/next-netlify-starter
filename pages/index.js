import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Merry Christmas!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Image src="/background.jpg" layout="fill" />
                <Image src="/thesims.svg" height={100} width={150} />
                <div className="textContainer">
                    <Header title="Buon Natale!!!!!!!" />
                    <p className="description">
                        Istruzioni per giocare a the Sims
                        <ul>
                            <li>
                                Scarica l'app &nbsp;
                                <a href="https://www.ea.com/origin-for-mac">
                                    qui
                                </a>
                            </li>
                            <li>Scarica The Sims gratuitamente</li>
                            <li>
                                The Sims Cani e Gatti DLC: DB9Z-BU33-6VEX-NTC3
                            </li>
                            <li>The Sims Al lavoro DLC: 4ZJL-FTDJ-47SJ-JLYW</li>
                        </ul>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

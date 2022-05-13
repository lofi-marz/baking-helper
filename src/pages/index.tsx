import type { NextPage } from 'next';
import Head from 'next/head';
import {
    convert,
    volumeToVolume,
    volumeToWeight,
} from '../conversion/conversion';
import ConversionForm from '../components/ConversionForm';

const Home: NextPage = () => {
    console.log(
        volumeToWeight({ ingredient: 'butter', value: 1, unit: 'cup' }, 'gram')
    );
    return (
        <div className="dark h-screen w-full bg-theme-bg-light">
            <Head>
                <title>Baker Helper</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="mx-auto h-full w-full md:w-1/2">
                <ConversionForm />
            </div>
        </div>
    );
};

export default Home;

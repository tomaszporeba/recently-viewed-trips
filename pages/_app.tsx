import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/containers/Layout';
import HeadContainer from '../src/containers/Head';

export default function App({Component, pageProps}: AppProps) {
    return <>
        <HeadContainer/>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>

}

import React from 'react';
import Head from 'next/head';

function HeadContainer() {
    return (
        <Head>
            <title>Travcorp Poland Interview Task</title>
            <meta name="description" content="Interview app for Travcorp Poland"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/favicon.ico"/>
            <meta property="og:site_name" content="recently-viewed-trips"/>
            <meta property="og:type" content="website"/>
        </Head>
    );
}

export default HeadContainer;

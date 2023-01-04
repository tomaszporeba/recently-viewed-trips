import React  from 'react';
import Head from 'next/head';

function HeadContainer() {
    return (
            <Head>
                <title>Travcorp Poland Interview Task</title>
                <meta name="description" content="Interview app for Travcorp Poland" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@800&display=swap"
                      rel="stylesheet"/>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:site_name" content="recently-viewed-trips"/>
                <meta property="og:type" content="website"/>
            </Head>
    );
}

export default HeadContainer;

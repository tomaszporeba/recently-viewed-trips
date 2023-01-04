import React from 'react';
import Head from 'next/head';

function HeadContainer() {
    return (
        <Head>
            <title>Travcorp Poland Interview Task</title>
            <meta name="description" content="Interview app for Travcorp Poland"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="https://uploads-ssl.webflow.com/633c1cbe12c2cf0aab75aae5/6358e0ce2749b87bc2ff98cd_Favicon%20-%20small.png" rel="shortcut icon" type="image/x-icon"/>
            <meta property="og:site_name" content="recently-viewed-trips"/>
            <meta property="og:type" content="website"/>
        </Head>
    );
}

export default HeadContainer;

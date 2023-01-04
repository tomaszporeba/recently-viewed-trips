import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@800&display=swap"
                      rel="stylesheet"/>
                <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

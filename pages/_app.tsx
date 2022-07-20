import "../styles/globals.css"
import type { AppProps } from "next/app"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                async
                defer
                data-website-id="c46eba03-facf-403e-9242-25e1ed5b1f80"
                src="https://umami-production-1d5f.up.railway.app/umami.js"
            ></Script>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp

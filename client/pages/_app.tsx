import "@/styles/main.scss";
import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <NextNProgress
                color="#ff9515"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </Layout>
    );
}

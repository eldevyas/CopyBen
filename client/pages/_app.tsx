import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@/styles/custom-variables.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

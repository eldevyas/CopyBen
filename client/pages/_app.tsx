import "@/styles/main.scss";
import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NextNProgress from "nextjs-progressbar";
import { Analytics } from "@vercel/analytics/react";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
    ThemeOptions,
    Shadows,
} from "@mui/material/styles";
import { Provider } from "react-redux";
import { ReduxProvider } from "@/redux/Provider";
import PaymentReminder from "@/components/Reminder/PaymentReminder";

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

let theme = createTheme({
    shadows: defaultShadows.map(() => "none") as Shadows,
    palette: {
        primary: {
            main: "#ff9515",
        },
        secondary: {
            main: "#008ded",
        },
        // mode: "dark",
    },
    typography: {
        // fontFamily: ['"Montserrat"', "sans-serif"].join(","),
        fontFamily: "inherit",
        fontSize: 12,
    },
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: "1rem",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: "1rem",
                    fontWeight: 800,
                    padding: "0.75rem 1rem",
                    backgroundColor: "primary.main",
                    color: "white",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
    const isPaymentMade = false;

    return (
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <Layout>
                    <NextNProgress
                        color="#ff9515"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={5}
                        showOnShallow={true}
                    />
                    {/* {!isPaymentMade && <PaymentReminder />} */}
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
            <Analytics />
        </ReduxProvider>
    );
}

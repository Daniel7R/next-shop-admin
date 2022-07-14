import "@styles/tailwind.css";
import MainLayout from "@layout/MainLayout";
import { AuthProvider } from "@hooks/useAuth";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AuthProvider>
    );
}

export default MyApp;

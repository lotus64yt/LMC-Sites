import Navbar from "@/components/layout/Navbar";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar/>
            <main id="content-wrapper">
                {children}
            </main>
        </>
    );
}
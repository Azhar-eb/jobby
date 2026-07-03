import Navbar from "../components/layout/Navbar/Navbar";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default MainLayout;
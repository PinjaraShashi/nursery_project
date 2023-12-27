import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

 
const Layout = ({ childern }) => {
    return (
    <>
    <Header/>
    <div>{childern}</div>
    <Footer />
    </>
    );
};

export default Layout;

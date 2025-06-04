import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import CategoryGrid from "../components/CategoryGrid.jsx";
import BannerSlider from "../components/BannerSlider.jsx";
import Footer from "../components/Footer.jsx";
import Empty  from "../components/Empty.jsx";


function MainPage() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
    <div style={{ background: "#000", minHeight: "100vh" }} >
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        <SearchBar />
        <BannerSlider/>
        <CategoryGrid />
        <CategoryGrid />
        <Empty/> 
        <Footer/>
        
    </div>
  );
}

export default MainPage;

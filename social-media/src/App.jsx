import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const setActiveTab = () => {
    
  }

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}

        <Footer></Footer>
      </div>
    </div>
  );
}

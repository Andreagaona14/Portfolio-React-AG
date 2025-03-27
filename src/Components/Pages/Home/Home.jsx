import React from 'react';
import { Profile } from "../../Layouts/Profile/Profile";
import { AnimatedContent } from "../../UI/AnimatedContent/AnimatedContent";
import ImgHome from "../../../assets/img/ImgHome.jpeg";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="homeSection">
        <div className="titles">
          <AnimatedContent
            image={ImgHome}
            name="Andrea Gaona"
            profession="Desarrollador de software"
            
          />
        </div>
      </section>
      <Profile />
    </>
  )
}
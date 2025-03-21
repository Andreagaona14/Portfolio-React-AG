import React from 'react';
import ImgProfile from "../../../assets/img/ImgProfile.jpeg";

export const Profile = () => {
  return (
    <section className="profile-section">
      <h2 className="profile-title">Perfil</h2>
      
      <div className="profile-container">
        <div className="imgProfile">
          <img src={ImgProfile} alt="Imagen del perfil" />
        </div>

        <p>
          Soy estudiante de tecnología en análisis y desarrollo de software.
          Soy una persona honesta con aptitudes para el aprendizaje, habilidad para trabajar en equipo o 
          individualmente. Trabajo con entusiasmo, me gusta dar más de lo que puedan esperar, aprender de los demás, 
          evitar siempre pensamientos derrotistas y reflejar un buen comportamiento.
        </p>
      </div>

      <div className='tittleSocialskills'>
        <h2>Fortalezas</h2>
        <p>Adaptibilidad</p>
        <p>Trabajo en equipo</p>
        <p>Comunicación afectiva</p>
        <p>Aprendizaje continuo</p>
        <p>Resolución de problemas</p>
      </div>
    </section>
  )
}
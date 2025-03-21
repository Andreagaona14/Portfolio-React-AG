import React from 'react'
import { CardSkills } from "../../UI/CardSkills/CardSkills";
import { CardSkillsInfo } from "../../UI/CardSkillsInfo/CardSkillsInfo";
import ImGithub from "../../../assets/img/ImgGithub.png"
import  ImgStudy from "../../../assets/img/ImgStudy.png"
import './Skills.css'


export const Skills = () => {
  return (
    <div>
     <h2 className='titleSkills'>Mis Habilidades</h2>

  /* Habilidades técnicas con slider 
  <div className="skills-container">
    <CardSkills  />
 </div>

  {/* Otras habilidades con descripción */}
  <h2 className='title2'>Otras Habilidades</h2>
  <div className="skills-info-container">
    <CardSkillsInfo img={ImGithub} SkillsNameInfo="Control de Versiones" description="Git, GitHub" />
    <CardSkillsInfo img={ImgStudy} SkillsNameInfo="Educación y Liderazgo" description="Lógica de programación, conferencias" />
  </div>
</div>
  )
}
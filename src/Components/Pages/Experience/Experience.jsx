import React from 'react';
import "./Experience.css";
import { CardExperience } from '../../UI/CardExperience/CardExperience';
import Experience1 from '../../../assets/img/Experience1.jpeg';
import Experience2 from '../../../assets/img/Experience2.jpeg'
import Experience3 from '../../../assets/img/Experience3.jpeg'
import Experience4 from '../../../assets/img/Experience4.jpeg'
import Experience5 from '../../../assets/img/Experience5.jpeg'
import Experience6 from '../../../assets/img/Experience6.jpeg'

export const Experience = () => {
  return (
    <section className="experience-section">
      <div className='title-experience'>
        <h2>Mi Experiencia</h2>
      </div>

      <div className='experience-container'>
        <CardExperience img={Experience1} Experience="Realicé el técnico en programación y me gradué con una experiencia muy enriquecedora. Durante el proceso, aprendí las bases fundamentales de la programación y, gracias al acompañamiento de mi instructora y profesores, logré desarrollar mi primera página web funcional." />
        <CardExperience img={Experience2} Experience="Cuando salí del colegio, conseguí mi primer trabajo en un almacén de ropa, donde me desempeñé en el área de servicio al cliente. Mi experiencia en este lugar fue agradable. Trabajé allí durante seis meses, a los pocos meses de haber comenzado, ingresé al SENA para realizar el tecnólogo en Análisis y Desarrollo de Software." />
        <CardExperience img={Experience3} Experience="Cuando ingresé al SENA, me sentía nerviosa, ya que algunos temas me resultaban difíciles de comprender. Sin embargo, conocí personas increíbles con quienes compartimos conocimientos y experiencias. Ha sido un camino muy interesante, y con el tiempo he aprendido mucho." />
        <CardExperience img={Experience4} Experience="Inicié mi segunda experiencia laboral en un arenero para niños, donde también brindaba atención al cliente. Trabajé allí durante cuatro meses, y fue una experiencia maravillosa. Compartir con los niños, jugar y reír me hizo sentir como una niña de nuevo, algo que, sin duda, ha sanado mi alma." />
        <CardExperience img={Experience5} Experience="En el arenero para niños conocí a mamás increíbles, y fue allí donde nació la idea de Lúdicamente, un proyecto maravilloso. Llevo cuatro meses trabajando de la mano de dos mujeres excepcionales: una psicóloga y una economista, quienes me han enseñado mucho. Cada día aprendo algo nuevo y valioso." />
        <CardExperience img={Experience6} Experience="Actualmente, sigo estudiando mi tecnólogo con el compromiso de aprender y mejorar cada día. Tengo compañeros maravillosos y un gran director de grupo, quien ha sido fundamental en mi formación, motivándome a seguir adelante y enseñándome el valor de la resiliencia. Me apasiona mi carrera y espero llegar muy lejos." />
      </div>
    </section>
  )
}

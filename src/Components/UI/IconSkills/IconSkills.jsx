import React from "react";

export const IconSkills = ({ img, name, min = 0, max = 100, value = 50 }) => {
  return (
    <div className="icon-skills">
      <img src={img} alt={name} className="icon-skills-img" />
      <h3 className="icon-skills-name">{name}</h3>

      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        disabled 
        aria-label={`Nivel de habilidad en ${name}`} 
      />
    </div>
  )
}

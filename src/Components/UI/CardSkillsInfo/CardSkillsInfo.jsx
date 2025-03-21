import React from 'react'

export const CardSkillsInfo = ({img, SkillsNameInfo, description }) => {
  return (
   <section>
         <div className='cardSkillsInfo'>
           <div className='imgProjects'>
            <h2>{SkillsNameInfo}</h2>
             <img src={img} alt={SkillsNameInfo} />
             <p>{description}</p>
           </div>
           
         </div>
       </section>
  )
}
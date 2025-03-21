import { useEffect, useRef } from "react";
import gsap from "gsap";

export const AnimatedContent = ({ name, profession, image }) => {
  const nameRef = useRef(null);
  const professionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.set([nameRef.current, professionRef.current, imgRef.current], { opacity: 0, y: -20 });

    let tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(nameRef.current, { duration: 1, opacity: 1, y: 0 }) // Aparece el nombre
      .to(professionRef.current, { duration: 1, opacity: 1, y: 0 }, "-=0.8") // Aparece el título profesional
      .to(imgRef.current, { duration: 1.5, opacity: 1, y: 0 }, "-=0.8"); // Aparece la imagen con solapamiento

    // Agregar efecto de levitación a los 3 elementos
    gsap.to([nameRef.current, professionRef.current, imgRef.current], { 
      y: "+=10", 
      repeat: -1, 
      yoyo: true, 
      duration: 2, 
      ease: "sine.inOut" 
    })

  }, [])

  return (
    <div className="animated-container">
      <h1 ref={nameRef} className="animated-title">{name}</h1>
      <h2 ref={professionRef} className="animated-subtitle">{profession}</h2>
      <img ref={imgRef} src={image} alt="Imagen animada" className="animated-img" />
    </div>
  )
}

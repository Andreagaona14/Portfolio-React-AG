export const CardProjects = ({ img, text, link, textP }) => {
    const handleClick = () => {
      window.location.href = link;
    };
  
    return (
      <section>
        <div className="cardProjects">
          <div className="Card">
            <div className="imgProjects">
              <img src={img} alt="Imagen del proyecto" />
            </div>
  
            <div className="Layer"></div>

            
            <button className="btProjects" onClick={handleClick}>
              Ver Proyecto
            </button>
  
            <div className="infoProjects">
              <h1>{textP}</h1>
              <p>{text}</p>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
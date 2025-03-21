/*import React, { useState } from 'react';
import "./Contact.css"
import { PersonalInfoContact } from '../../UI/PersonalInfoContact/PersonalInfoContact'
import { FormContact } from '../../UI/FormContact/FormContact'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';




export const Contact = () => {
 // Estado para el formulario
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const [formStatus, setFormStatus] = useState({
  submitted: false,
  error: false,
  message: ''
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Simulación de envío exitoso
  setFormStatus({
    submitted: true,
    error: false,
    message: '¡Mensaje enviado con éxito! Te responderé pronto.'
  });
  
  // Reiniciar el formulario
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Resetear notificación después de 5 segundos
  setTimeout(() => {
    setFormStatus({
      submitted: false,
      error: false,
      message: ''
    });
  }, 5000);
};

return (
  <section id="contacto" className="contact-section">
    <div className="container">
      <h2 className="section-title">Información de Contacto</h2>
      
      <div className="contact-content">
        <div className="personal-info">
          <div className="info-card">
            <h3 className="card-title">Información Personal</h3>
            
            <div className="info-list">
              <PersonalInfoContact 
                icon={<FaEnvelope />}
                title="Email"
                data="andreitagaona05@gmail.com"
              />
              
              <PersonalInfoContact 
                icon={<FaPhone />}
                title="Teléfono"
                data="+57 3147851388"
              />
              
              <PersonalInfoContact 
                icon={<FaMapMarkerAlt />}
                title="Ubicación"
                data="Colombia Calarcá - Quíndio"
              />
            </div>
          </div>
        </div>
        
        <FormContact 
          formData={formData}
          formStatus={formStatus}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  </section>
)
}
*/
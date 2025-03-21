/*import React from 'react'

export const FormContact = ({formData, formStatus, handleInputChange, handleSubmit}) => {
  return (
    <div className="contact-form">
      <div className="form-card">
        <h3 className="card-title">Envíame un mensaje</h3>
        
        {formStatus.message && (
          <div className={`notification ${formStatus.error ? 'error' : 'success'}`}>
            {formStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  )
}
*/
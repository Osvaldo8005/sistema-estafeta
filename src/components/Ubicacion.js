import React from 'react';

export default function Ubicacion() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h2>Ubicación</h2>
      <p>
        Oficina central: Av. Universidad #123, Col. Ladrón de Guevara, Guadalajara, Jalisco.
      </p>
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.532533228125!2d-103.3452545847402!3d20.67658348616285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee4c8b8c3b5f%3A0x5a8e4e9b3e3e3e3e!2sUniversidad%20de%20Guadalajara!5e0!3m2!1ses!2smx!4v1682345678901!5m2!1ses!2smx"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '8px', marginTop: '15px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
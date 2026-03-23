import React from 'react';
import SliderImagenes from './SliderImagenes';
import ValoracionPagina from './ValoracionPagina';
import RedesSociales from './RedesSociales';

export default function Nosotros() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos un sistema desarrollado para optimizar la gestión de entregas en Estafeta,
        especialmente en la zona de Guadalajara, Jalisco. Nuestro enfoque es garantizar que
        la información operativa no se pierda cuando los operadores cambian de ruta o turno.
      </p>

      <SliderImagenes />
      <ValoracionPagina pagina="¿Quiénes somos?" />
      <RedesSociales />

      <p>
        Este proyecto fue creado por Osvaldo Preciado Benites como parte de la materia
        Proyecto IV en la Universidad de Guadalajara.
      </p>
    </div>
  );
}
import React from 'react';

export default function FAQ() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h2>Preguntas Frecuentes</h2>
      <details>
        <summary>¿Cómo registro una entrega?</summary>
        <p>Desde la app móvil o web, selecciona "Nueva entrega", captura datos del cliente y ruta, y confirma.</p>
      </details>
      <details>
        <summary>¿Qué pasa si otro operador toma mi ruta?</summary>
        <p>El sistema notifica automáticamente y conserva el historial de estado para evitar pérdida de información.</p>
      </details>
      <details>
        <summary>¿El sistema funciona sin internet?</summary>
        <p>Parcialmente: permite registrar entregas offline; al recuperar conexión, sincroniza automáticamente.</p>
      </details>
    </div>
  );
}
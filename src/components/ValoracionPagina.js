import React from 'react';

export default function ValoracionPagina({ pagina = "Página" }) {
  const [rating, setRating] = React.useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0'
    }}>
      <h3>¿Cómo calificas esta página?</h3>
      <p><strong>"{pagina}"</strong></p>

      <div style={{ marginBottom: '12px' }}>
        {Array(5).fill(0).map((_, i) => (
          <span
            key={i}
            onClick={() => handleStarClick(i)}
            style={{
              fontSize: '28px',
              cursor: 'pointer',
              color: i < rating ? '#f59e0b' : '#e5e7eb',
              margin: '0 3px',
              userSelect: 'none'
            }}
            role="img"
            aria-label={`Calificar con ${i + 1} estrella${i + 1 > 1 ? 's' : ''}`}
          >
            ★
          </span>
        ))}
      </div>

      {rating > 0 && (
        <p style={{ marginTop: '8px', fontWeight: '600', color: '#16a34a' }}>
          ¡Gracias por tu calificación: {rating} estrella{rating !== 1 ? 's' : ''}!
        </p>
      )}
    </div>
  );
}
import React, { useEffect } from 'react';

const InstagramPage = () => {
  useEffect(() => {
    // LightWidget-Skript programmgesteuert hinzufügen
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    // Aufräumen, falls das Skript entfernt werden muss
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>Meine Instagram-Inhalte</h2>
      <iframe 
        src="https://cdn.lightwidget.com/widgets/c669fa07b7e05b1ebf5fd46a16427076.html" 
        className="lightwidget-widget" 
        style={{ width: '100%', border: '0', overflow: 'hidden', height: '100vh', backgroundColor: 'transparent' }}
      />
    </div>
  );
}

export default InstagramPage;

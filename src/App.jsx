import React from 'react';

/**
 * The invitation is kept as a standalone HTML page so its original CSS,
 * animation timing, canvas effects and dialog interactions remain intact.
 * React + Vite provides the development server and production build.
 */
export default function App() {
  return (
    <main className="invitation-shell" aria-label="Wedding invitation">
      <iframe
        className="invitation-frame"
        src="/invitation.html"
        title="Ritu Raj and Sourav Kumar wedding invitation"
        allow="autoplay"
      />
    </main>
  );
}

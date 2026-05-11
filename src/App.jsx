import React from 'react';
import Layout1 from './layouts/Layout1';
import Layout2 from './layouts/Layout2';
import Layout3 from './layouts/Layout3';
import './index.css';

/**
 * Main App Component
 * Root component for Justitia Legal website
 */
function App() {
  return (
    <div className="App">
      {/* About Layout: Two Column Services Section */}
      <Layout1 />

      {/* Why Choose Us Section */}
      <Layout2 />

      {/* Contact Section */}
      <Layout3 />
    </div>
  );
}

export default App;
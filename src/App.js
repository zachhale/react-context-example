import React, { Component } from 'react';
import GdprProvider from './providers/gdpr';
import CookieBanner from './components/cookie-banner';
import CookieReader from './components/cookie-reader';

class App extends Component {
  render() {
    return (
      <GdprProvider>
        <div>
          <h1>Test Context</h1>
          <CookieBanner />
          <CookieReader />
        </div>
      </GdprProvider>
    );
  }
}

export default App;

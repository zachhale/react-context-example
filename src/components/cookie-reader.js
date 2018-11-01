import React, { Component } from 'react';
import GdprContext from '../contexts/gdpr';

class CookieReader extends Component {
  render() {
    return (
      <GdprContext.Consumer>
        {({ cookiesEnabled }) => (
          <p>Cookies {cookiesEnabled ? 'enabled' : 'disabled'}</p>
        )}
      </GdprContext.Consumer>
    );
  }
}

export default CookieReader;

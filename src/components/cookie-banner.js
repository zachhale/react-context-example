import React, { Component } from 'react';
import GdprContext from '../contexts/gdpr';

class CookieBanner extends Component {
  render() {
    return (
      <GdprContext.Consumer>
        {({ cookiesEnabled, onChangeCookiesEnabled }) => {
          if (cookiesEnabled) {
            return null;
          }
          return (
            <div>
              <button onClick={() => onChangeCookiesEnabled(true)}>
                Enable Cookies
              </button>
            </div>
          );
        }}
      </GdprContext.Consumer>
    );
  }
}

export default CookieBanner;

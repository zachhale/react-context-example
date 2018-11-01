import React, { Component } from 'react';
import GdprContext from '../contexts/gdpr';

class GdprProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookiesEnabled: false
    };
    this.handleChangeCookiesEnabled = this.handleChangeCookiesEnabled.bind(this);
  }

  handleChangeCookiesEnabled(cookiesEnabled) {
    this.setState({ cookiesEnabled });
  }

  render() {
    return (
      <GdprContext.Provider
        value={{
          ...this.state,
          onChangeCookiesEnabled: this.handleChangeCookiesEnabled
        }}
      >
        {this.props.children}
      </GdprContext.Provider>
    );
  }
}

export default GdprProvider;

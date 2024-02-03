// import { Component } from "react";

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       hasError: false,
//     };
//   }
//   componentDidCatch(error) {
//     this.setState({ hasError: true });
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Some Error Occurred</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div className="ml-20">
          Something went wrong{' '}
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()} <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

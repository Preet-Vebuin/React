import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
    
    // ✅ Log error to an API or external service like Sentry
    fetch("/api/log-error", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message, stack: errorInfo.componentStack }),
    });
  }

  handleReload = () => {
    this.setState({ hasError: false, errorMessage: "" }); // Reset error state
    window.location.reload(); // Reload the page
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>⚠️ Oops! Something went wrong.</h2>
          <p>{this.state.errorMessage}</p>
          <button onClick={this.handleReload}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

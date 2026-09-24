import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error, info) {
    console.error('NEXORA crashed:', error, info)
  }
  render() {
    if (this.state.failed) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-ink px-6">
          <div className="text-center max-w-md">
            <p className="font-display text-[1.5rem] text-bone mb-3">Something went wrong.</p>
            <p className="text-bone-dim text-[0.95rem]">
              Reload the page. If this keeps happening, open the browser console for the error.
            </p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

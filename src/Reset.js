import React from "react";
import { withRouter } from "react-router-dom";

class Reset extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
export default withRouter(Reset);

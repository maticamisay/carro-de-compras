import React, { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};

export default class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

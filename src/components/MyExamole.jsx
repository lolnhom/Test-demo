import React from "react";
class MyExamole extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let name = "duong";
    return <div className="my-example">Hello , my name is {name}</div>;
  }
}

MyExamole.propTypes = {};

export default MyExamole;

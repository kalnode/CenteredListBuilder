import React, { Component } from "react";


class List extends Component {
  constructor(props){
    super(props);
  
    if (props.List) {
      this.listData = { value: props.List };  
    }

    this.state = {
      myState: true
    }


  }

  render() {
    return (
      <><textarea placeholder="Item 1&#13;&#10;Item 2&#10;Item 3&#10;Item 4&#10;Item 5" wrap="off" {...this.listData}></textarea></>
    );
  }

}

export default List;
import React from "react";
import Spinner from "../spinner/spinner";

import "./item-list.css";

export default class ItemList extends React.Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

	getData()
	 .then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="itemList"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul>{items}</ul>;
  }
}

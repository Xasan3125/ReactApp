import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";
export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./img/" + this.props.item.img}
          alt="Изображение товара"
        ></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <FaTrash
          onClick={() => this.props.onDelete(this.props.item.id)}
          className="delete-icon"
        />
      </div>
    );
  }
}

export default Order;

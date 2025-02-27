import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "chair-1.jpg",
          desc: "Это отличный товар, точно надо брать",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "table-2.jpg",
          desc: "Прекрасный стол для вашей гостиной",
          category: "tables",
          price: "89.99",
        },
        {
          id: 3,
          title: "Лампа",
          img: "lamp-3.webp",
          desc: "Современная лампа для уютного освещения",
          category: "lighting",
          price: "29.99",
        },
        {
          id: 4,
          title: "Кресло",
          img: "chair-4.webp",
          desc: "Удобное кресло для отдыха",
          category: "chairs",
          price: "119.99",
        },
        {
          id: 5,
          title: "Книжный шкаф",
          img: "furniture-5.jpg",
          desc: "Шкаф для книг с множеством полок",
          category: "furniture",
          price: "199.99",
        },
        {
          id: 6,
          title: "Кофейный столик",
          img: "table-6.webp",
          desc: "Стильный кофейный столик для гостиной",
          category: "tables",
          price: "59.99",
        },
        {
          id: 7,
          title: "Торшер",
          img: "lamp-7.webp",
          desc: "Элегантный торшер для дополнительного освещения",
          category: "lighting",
          price: "39.99",
        },
        {
          id: 8,
          title: "Диван",
          img: "furniture-8.webp",
          desc: "Комфортный диван для всей семьи",
          category: "furniture",
          price: "299.99",
        },
        {
          id: 9,
          title: "Кухонный стол",
          img: "table-9.jpg",
          desc: "Прочный стол для кухни",
          category: "tables",
          price: "129.99",
        },
        {
          id: 10,
          title: "Настольная лампа",
          img: "lamp-10.webp",
          desc: "Компактная лампа для рабочего стола",
          category: "lighting",
          price: "19.99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({
        currentItems: this.state.items,
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;

import React, { useState } from "react";
import OrderForm from "./components/OrderForm";

export default function App() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", quantity: 1 },
    { id: 2, product: "Mobile", quantity: 2 },
  ]);

  const addOrder = (newOrder) => {
    setOrders([...orders, { id: orders.length + 1, ...newOrder }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Store Orders</h1>
      <OrderForm addOrder={addOrder} />
      <h2>Orders List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.product} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}

function displayOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log(`Your order has been is ${OrderStatus.Pending}.`);
      break;
    case OrderStatus.Shipped:
      console.log(`Your order has been is ${OrderStatus.Shipped}.`);
      break;
    case OrderStatus.Cancelled:
      console.log(`Your order has been is ${OrderStatus.Cancelled}.`);
      break;
    default:
      console.log("Unknow order status.");
  }
  return;
}
displayOrderStatus(OrderStatus.Pending);
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);

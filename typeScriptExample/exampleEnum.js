var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function displayOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            console.log("Your order has been is ".concat(OrderStatus.Pending, "."));
            break;
        case OrderStatus.Shipped:
            console.log("Your order has been is ".concat(OrderStatus.Shipped, "."));
            break;
        case OrderStatus.Cancelled:
            console.log("Your order has been is ".concat(OrderStatus.Cancelled, "."));
            break;
        default:
            console.log("Unknow order status.");
    }
    return;
}
displayOrderStatus(OrderStatus.Pending);
displayOrderStatus(OrderStatus.Shipped);
displayOrderStatus(OrderStatus.Cancelled);

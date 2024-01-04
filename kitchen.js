function displayOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersDiv = document.getElementById('orders');

    orders.forEach((order, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.textContent = `Order ${index + 1}: ${order.join(', ')}`;
        ordersDiv.appendChild(orderDiv);
    });
}

displayOrders();

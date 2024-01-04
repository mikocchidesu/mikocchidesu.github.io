const menu = ["sopska", "pepsi", "ljuta", "pogaca", "zajecar"];
let order = [];

function searchMenu(query) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    menu.forEach(item => {
        if (item.toLowerCase().includes(query.toLowerCase()) && query !== '') {
            const resultItem = document.createElement('div');
            resultItem.textContent = item;
            resultItem.onclick = () => addToOrder(item);
            searchResults.appendChild(resultItem);
        }
    });
}

function addToOrder(item) {
    if (!order.includes(item)) {
        order.push(item);
        updateOrderList();
    }
}

function updateOrderList() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = ''; // Clear the list

    order.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        orderList.appendChild(listItem);
    });
}

function submitOrder() {
    function submitOrder() {
        console.log('Order Submitted:', order);
        // Save the order to local storage
        const currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
        currentOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(currentOrders));
    
        order = []; // Reset the order
        updateOrderList();
    }
    ;
}

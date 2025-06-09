function fetchOrders() {
  document.getElementById('loading-msg').style.display = 'block';  // Onyesha ujumbe wa kupakia
  fetch('https://panel293051.testpanel.net/privateApi/getOrders?status=active&limit=5&token=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      const ordersContainer = document.getElementById('orders');
      ordersContainer.innerHTML = ''; // Clear existing content
      document.getElementById('loading-msg').style.display = 'none';  // Ficha ujumbe wa kupakia

      if (data.items.length > 0) {
        data.items.forEach(order => {
          const orderDiv = document.createElement('div');
          orderDiv.classList.add('order');
          orderDiv.innerHTML = `<p><strong>Agizo ID:</strong> ${order.id}</p>
                                <p><strong>Status:</strong> ${order.status}</p>
                                <p><strong>Salio lililobaki:</strong> ${order.remains}</p>`;
          ordersContainer.appendChild(orderDiv);
        });
      } else {
        ordersContainer.innerHTML = '<p>No orders found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching orders:', error);
      document.getElementById('loading-msg').innerText = 'Hitilafu ya kuwasiliana na API!';
    });
}

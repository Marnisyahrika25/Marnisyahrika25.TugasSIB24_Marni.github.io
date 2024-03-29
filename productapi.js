fetch('https://crudcrud.com/api/9aa0505434c94644a57546d79b8267a5/users')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('productList');
        data.forEach(product => {
            const listItem = document.createElement('li');
            listItem.classList.add('product-item');
            listItem.innerHTML = `
                <h2>${product.name}</h2>
                <p class="duration">Duration: ${product.duration}</p>
                <p class="price">Price: ${product.price}</p>
            `;
            productList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

fetch('https://crudcrud.com/api/76e911ccf7854b91b1ebcf335d9905cd/users')
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

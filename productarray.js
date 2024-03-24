document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: 'Les Basic Programming', price: 200000, duration: '1 bulan' },
        { name: 'Les Web Development', price: 300000, duration: '1 bulan' },
        { name: 'Les Mobile App Development', price: 350000, duration: '1 bulan' },
        { name: 'Les Graphic Design', price: 250000, duration: '1 bulan' },
        { name: 'Les Database Management', price: 280000, duration: '1 bulan' },
        { name: 'Les Cybersecurity Fundamentals', price: 320000, duration: '1 bulan' },
        { name: 'Les IT Support Skills', price: 270000, duration: '1 bulan' },
        { name: 'Les Network Administration', price: 300000, duration: '1 bulan' },
        { name: 'Les Data Science Essentials', price: 350000, duration: '1 bulan' },
        { name: 'Les Artificial Intelligence Basics', price: 380000, duration: '1 bulan' }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: Rp ${product.price.toLocaleString()}</p>
            <p>Duration: ${product.duration}</p>
        `;
        productList.appendChild(productItem);
    });
});

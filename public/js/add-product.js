
async function newProductHandler(event) {
    event.preventDefault();
    const product_name = document.querySelector('#product_name').value;
    const product_price = document.querySelector('#product_price').value;
    const product_category = document.querySelector('#product_category').value;
    const product_id = document.querySelector('#product_id').value;
    
    const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
            product_name,
            product_price,
            product_category,
            product_id,
        }),

    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to post listing');
    }
}
document.querySelector('.new-product-listing').addEventListener('submit', newProductHandler);
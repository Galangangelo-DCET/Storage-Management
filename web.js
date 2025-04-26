let items = [];

function addItem() {
    const name = document.getElementById('itemName').value;
    const details = document.getElementById('details').value;
    const quantity = document.getElementById('itemQuantity').value;
    const price = document.getElementById('price').value;

    if (!name || !details || !quantity || !price) {
        alert('Please fill all fields.');
        return;
    }

    const newItem = { name, details, quantity: parseInt(quantity), price: parseFloat(price) };
    items.push(newItem);
    displayItems();
    clearFields();
}

function cancelItem() {
    clearFields();
}

function clearFields() {
    document.getElementById('itemName').value = '';
    document.getElementById('details').value = '';
    document.getElementById('itemQuantity').value = '';
    document.getElementById('price').value = '';
}

function displayItems() {
    const tableBody = document.getElementById('itemTable').querySelector('tbody');
    tableBody.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.details}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

function sortItems() {
    const sortValue = document.getElementById('sort').value;
    items.sort((a, b) => {
        if (sortValue === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortValue === 'quantity') {
            return a.quantity - b.quantity;
        } else {
            return a.price - b.price;
        }
    });
    displayItems();
}

function filterRange() {
    const range = document.getElementById('range').value;
    let filteredItems = [...items];

    if (range === 'low') {
        filteredItems = filteredItems.filter(item => item.price <= 50);
    } else if (range === 'medium') {
        filteredItems = filteredItems.filter(item => item.price > 50 && item.price <= 100);
    } else if (range === 'high') {
        filteredItems = filteredItems.filter(item => item.price > 100);
    }

    displayFilteredItems(filteredItems);
}

function displayFilteredItems(filteredItems) {
    const tableBody = document.getElementById('itemTable').querySelector('tbody');
    tableBody.innerHTML = '';
    filteredItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.details}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        `;
        tableBody.appendChild(row);
    });
}

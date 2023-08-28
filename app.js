

const itemSelect = document.getElementById('items');
data.items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.code;
    option.textContent = item.description;
    itemSelect.appendChild(option);
});

itemSelect.addEventListener('change', function() {
    const selectedItem = data.items.find(item => item.code === this.value);
    const container = document.getElementById('varietiesContainer');
    container.innerHTML = ''; 

    if (selectedItem && selectedItem.varieties) {
        selectedItem.varieties.forEach(varietyKey => {
            const varietyData = data.varieties.find(variety => variety.code === varietyKey);
            const label = document.createElement('label');
            label.textContent = varietyData.description + ':';

            const select = document.createElement('select');
            select.id = varietyKey;
            varietyData.options.forEach(val => {
                const option = document.createElement('option');
                option.value = val.code;
                option.textContent = val.description;
                select.appendChild(option);
            });
            
            select.addEventListener('change', updateProductCode);
            
            container.appendChild(label);
            container.appendChild(select);
        });
    }

    updateProductCode(); 
});

function updateProductCode() {
    let code = itemSelect.value;

    const selectedItem = data.items.find(item => item.code === itemSelect.value);
    if (selectedItem.varieties) {
        selectedItem.varieties.forEach(varietyKey => {
            const select = document.getElementById(varietyKey);
            if (select) {
                code += '.' + select.value;
            }
        });
    }

    document.getElementById('productCode').textContent = code;
}

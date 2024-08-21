function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('https://your-api-gateway-url.com/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('metadataDisplay').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error uploading image:', error));
    } else {
        alert('Please select an image file.');
    }
}

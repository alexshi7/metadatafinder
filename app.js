function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgBase64 = event.target.result;
            fetch('https://qbcwf4gb7f.execute-api.us-east-1.amazonaws.com/prod/upload', { // Ensure the path is correct
                method: 'POST',
                body: JSON.stringify({ image: imgBase64 }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('metadataDisplay').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error uploading image:', error));
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file.');
    }
}

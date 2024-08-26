function uploadImage() {
    console.log("Upload button clicked"); // Check if function is called
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    console.log("File chosen: ", file ? file.name : "No file selected"); // Log file name or no file

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgBase64 = event.target.result;
            console.log("File read as base64"); // Confirm file is read
            fetch('https://qbcwf4gb7f.execute-api.us-east-1.amazonaws.com/prod/upload', {
                method: 'POST',
                body: JSON.stringify({ image: imgBase64 }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log("Response received"); // Log response arrival
                return response.json();
            })
            .then(data => {
                console.log("Data: ", data); // Log data received
                document.getElementById('metadataDisplay').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error uploading image:', error));
        };
        reader.readAsDataURL(file);
    }
}

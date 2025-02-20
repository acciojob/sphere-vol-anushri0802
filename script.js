function volume_sphere(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Retrieve the value of the radius input field
    const radius = document.getElementById('radius').value;

    // Check if the radius is a valid non-negative number
    const radiusNumber = parseFloat(radius);

    if (isNaN(radiusNumber) || radiusNumber < 0) {
        // If the input is invalid (non-numeric or negative), set volume to NaN
        document.getElementById('volume').value = 'NaN';
    } else {
        // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
        const volume = (4 / 3) * Math.PI * Math.pow(radiusNumber, 3);

        // Set the volume value rounded to 4 decimal places
        document.getElementById('volume').value = volume.toFixed(4);
    }
}

// Attach the volume_sphere function to the form submit event
window.onload = () => {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};

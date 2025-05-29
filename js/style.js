function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
        alert("Masukkan angka suhu yang valid dalam Celsius!");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("calculation").innerText = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function reverseConversion() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
        alert("Masukkan angka suhu yang valid dalam Fahrenheit!");
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("calculation").innerText = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
}

function resetForm() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").innerText = "";
}
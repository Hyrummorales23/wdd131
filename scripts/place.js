// last modified date and current year
const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
footer.innerHTML += `<p>Last modified: ${lastModified}</p><p>&copy; ${currentYear} Hyrum Morales, Guatemala</p>`;

// Calculate Wind Chill
const tempC = 25; //temperature in Celsius
const windSpeedKmh = 10; // K/h

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const windChill =
    tempC <= 10 && windSpeedKmh > 4.8
        ? calculateWindChill(tempC, windSpeedKmh)
        : 'N/A';

document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}°C`;
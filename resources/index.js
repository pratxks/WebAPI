const city = document.getElementById("city");

if("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(`Latitude: ${lat}`)
        console.log(`Longitude: ${lon}`)
    })
} else {
    console.log("geolocation is zxb vcvc not available");
}SADfg
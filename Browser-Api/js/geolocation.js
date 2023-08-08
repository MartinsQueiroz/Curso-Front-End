if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation);

    console.log(navigator.geolocation)
}

function showLocation(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=${lat},${long}&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;

    window.open(url, 'map')
}
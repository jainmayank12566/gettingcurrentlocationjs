const button=document.getElementById('get-location-button');
async function getData(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=36b1b541a7a546a78ac175734231105&q=${lat},${long}&aqi=yes`);
    return await promise.json();
}
async function gotLocation(position){/*success */
// console.log(position);
    const result=await getData(position.coords.latitude,position.coords.longitude);
    console.log(result);
}
function failedToGet(){/*failed */
    console.log('There was some issue');
}
button.addEventListener('click',async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
});
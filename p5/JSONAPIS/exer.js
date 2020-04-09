

//Making a map and tiles
  const mymap = L.map('issMap').setView([0,0], 1);
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });


//Making a marker with a custom icon
  const spaceIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});

 const marker = L.marker([0, 0],{icon: spaceIcon}).addTo(mymap)
// getting locationdata

const issURL = 'https://api.wheretheiss.at/v1/satellites/25544';
let firstLoad = true;

  tiles.addTo(mymap);
 async function getISS() {
   const response = await fetch(issURL);
   const data = await response.json();
   const {latitude, longitude} = data; //java script destructuring
    // console.log(data.latitude); optional ways of calling the variable
    // console.log(data.longitude);

  //  L.marker([latitude, longitude]).addTo(mymap);
    marker.setLatLng([latitude,longitude]);
    if(firstLoad){
    mymap.setView([latitude,longitude],3);
    firstLoad = false;

    }
    document.getElementById('lon').textContent = longitude.toFixed(4); // .toFixed(2) Cuts the decimals
    document.getElementById('lat').textContent = latitude.toFixed(4);
   console.log(latitude);
   console.log(longitude)
 }


 getISS();

 setInterval(getISS,1000);

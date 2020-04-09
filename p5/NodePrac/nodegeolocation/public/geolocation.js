function setup() {
  let lat, lng;
  noCanvas();
  const video = createCapture(VIDEO); // OBTAIN FOR VIDEO SOURCE FROM THE COMPUTER
  video.size(160,120);

  const button = document.getElementById('submit')
  // src="geolocation.js"
  button.addEventListener('click', async event => {

  const vegetable = document.getElementById('vegetable').value;
  video.loadPixels();// have the pixels ready for packaging
  const image64 = video.canvas.toDataURL() //taking the video frame and sending it in ASCII
  const data = {lat,lng,vegetable,image64};
  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(data),
  };
    const response = await fetch('/api',options);
    const json_data = await response.json();
    console.log(json_data);
  });

  if( 'geolocation' in navigator) {

    console.log('geolocation available');

    //arrow sintax => substitutes for function(position)

    navigator.geolocation.getCurrentPosition(async position=> {
       lat = position.coords.latitude;
       lng = position.coords.longitude;

      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lng;

      console.log(position.coords);

      });
    } else {
      console.log('geolocation not available')
    }


}



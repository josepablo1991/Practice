
   getData();

   async function getData() {
     const response = await fetch('/api2'); // we can reuse the route '/api' because it will be handle as a get request
     const data = await response.json();

     for (item of data) {
       const root = document.createElement('p');

       const veggie = document.createElement('div');
       veggie.textContent = `veggtable: ${item.vegetable}`;

       const geo = document.createElement('div');
       geo.textContent = `geo: ${item.lat}º ${item.lng}º`;

       const date = document.createElement('div');
       const DateString = new Date(item.timestamp).toLocaleString();
       date.textContent = DateString;

       const image = document.createElement('img');
       image.src = item.image64;
       image.alt = "Image from selfie webApp";


       root.append(veggie,geo,date,image);
       document.body.append(root);


     }
     console.log(data);
   };


//
// <script src="../p5.min.js"></script>
// <script src="../addons/p5.dom.min.js"></script>
// <script src="../addons/p5.sound.min.js"></script>
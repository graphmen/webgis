alert('You have opened Wetlands portal')
console.log('hello console!')

var mymap = L.map('map').setView([-19.453915, 29.817312], 7);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
   maxZoom: 18,
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1
    }).addTo(mymap);


    //// Basemaps-----------------------------------------------------------------------------------------------------------------------------
        /////street,
        var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
             }).addTo(mymap);
        /////Hybrid,
            var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
                    maxZoom: 20,
                    subdomains:['mt0','mt1','mt2','mt3']
                    }).addTo(mymap);
                /////satellite,
                    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
                            maxZoom: 20,
                            subdomains:['mt0','mt1','mt2','mt3']
                             }).addTo(mymap);
                            /////Terrain
                                var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
                                        maxZoom: 20,
                                        subdomains:['mt0','mt1','mt2','mt3']
                                         }).addTo(mymap);


var wmsLayer = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
    layers: "NationalWetlands:National Wetlands",
      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
        }).addTo(mymap);
  
var wmsLayer2 = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
    layers: "NationalWetlands:Final_Fishnets",
      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
       });
        wmsLayer2.addTo(mymap);
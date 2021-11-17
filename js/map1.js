alert('You have opened Wetlands portal')
console.log('Welcome')

var cities = L.layerGroup();
	var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		satellite  = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		navigationday  = L.tileLayer(mbUrl, {id: 'mapbox/navigation-day-v1', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}),
		googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']}),
		googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{maxZoom: 20,subdomains:['mt0','mt1','mt2','mt3']});

	var map = L.map('map', {
		center: [-19.453915, 29.817312],
		zoom: 7,
		layers: [satellite]
	});

	var baseLayers = {
		"Map Box Satellite":satellite,
		"Map Box Streets": streets,
		"Map Box Navigation":navigationday,
		"Google Streets":googleStreets,
		"Google Hybrid":googleHybrid,
		"Google Satellite":googleSat
	};



	var
	Wetlands = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
	    layers: "NationalWetlands:National Wetlands",
	      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
	        });
	         Wetlands.addTo(map).bindPopup('hi i am a wetland');

	HeadWater = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
			 		    layers: "	NationalWetlands:Head Water",
			 		      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
			 		        });
			 		         HeadWater.addTo(map).bindPopup('hi i am a wetland');

	MiddleReach = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
			 		    layers: "NationalWetlands:Middle Reach",
			 		      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
			 		       });
			 		        MiddleReach.addTo(map);
	MajorRivers= L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
									    layers: "NationalWetlands:Major Rivers",
									      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
									        });
									         MajorRivers.addTo(map).bindPopup('hi i am a wetland');

 Dams = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
									    layers: "NationalWetlands:Dams",
									      attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
									       });
									        Dams.addTo(map);
Rivers = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
                         layers: "NationalWetlands:Rivers",
                         attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
                         });
                         Rivers.addTo(map);


/*Grids = L.Geoserver.wms("http://localhost:8080/geoserver/NationalWetlands/wms?", {
	               layers: "NationalWetlands:Final_Fishnets",
	                    attribution: 'ZIMBABWE NATIONAL GEOSPATIAL AND SPACE AGENCY 2021'
	                      });
	                        Grids.addTo(map);*/


		var Wetlands={
			" Combined Wetlands":Wetlands,
			"Head Water":HeadWater,
			"Middle Raech":MiddleReach,
			"Major Rivers":MajorRivers,
			"Dams":Dams,
      "Rivers":Rivers,
			/*"Grids":Grids*/
		};


L.control.layers(baseLayers,Wetlands,{collapsed:false}).addTo(map);
/*	L.control.layers(baseLayers).addTo(map);*/
L.control.browserPrint().addTo(map);
L.control.scale({position:"bottomright"}).addTo(map);




 $(document).ready(function()
	{
		$.ajax({
			type: "GET",
			url: "/static/GPX/Lugano.gpx",
			dataType: "xml",
			success: parseXml
		});
	});
	
	function parseXml(xml)
	{	
	
		var distance = 0
		var count = $(xml).find("trkpt");
		count = count.length;
		var start = $(xml).find("time").first().text();
		let startDT = new Date(start);
		var end = $(xml).find("time").last().text();
		let endDT = new Date(end);
		let difference = endDT.getTime()-startDT.getTime();
		var hours = Math.floor(difference / 1000 / 60 / 60);
		difference -= hours * 1000 * 60 * 60;
		var minutes = Math.floor(difference / 1000 / 60)
		
		$(xml).find("trkpt").each(function()
		{
			mapPoint = L.marker([$(this).attr("lat"), $(this).attr("lon")]).addTo(mapid);	
			let dateTime = new Date($(this).find("time").text());
			mapPoint.bindPopup("Time: " + dateTime + "</br> </br> Elevation: " + parseFloat($(this).find("ele").text()).toFixed(1) + "ft");
			
			//+ "</br>" + "Heart Rate: " + $(this).find("ns3:hr").text() + "</br>" + "Cadence: " + $(this).find("ns3:cad").text() + "</br>" );


			var lat1 = parseFloat($(this).attr("lat"));
			var lon1 = parseFloat($(this).attr("lon"));
			var lat2 = parseFloat($(this).next().attr("lat"));
			var lon2 = parseFloat($(this).next().attr("lon"));
			var d = getDistance(lat1,lat2,lon1,lon2);
			if (!isNaN(d)) {
				distance += d;
			}
		});
		
		$("#distanceRan").append("Distance ran: " + parseFloat(distance).toFixed(2) + " miles");
		$("#duration").append("Duration of run: " + minutes + " minutes");
				
	}; 
	
	function getDistance(lat1, lat2, lon1, lon2) {
		var lat1 = toRadian(lat1);
		var lat2 = toRadian(lat2);
		var lon1 = toRadian(lon1);
		var lon2 = toRadian(lon2);
		
		var deltaLat = lat2 - lat1;
		var deltaLon = lon2 - lon1;
		
		var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var EARTH_RADIUS = 6371;
		return c * EARTH_RADIUS;
	
	};
	
	function toRadian(degree) {
			return degree*Math.PI/180;
	};
	
	

	
	
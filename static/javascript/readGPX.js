$(document).ready(function()
{
	$.ajax({
		type: "GET",
		url: "/runmate_project/static/GPX/Lugano.gpx",
		dataType: "xml",
		success: parseXML
	});
});

function parseXml(xml)
{
	$(xml).find("trkpt").each(function()
	{
		L.marker([$this.attr("lat")].text(),$(this).attr("long").text()]).addTo(MyMap)
	});
}

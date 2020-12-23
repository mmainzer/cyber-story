// function for number formatting
Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

mapOne.on('mousemove', 'cyberPoints', function(e) {
	// Change the cursor style as a UI indicator.
	mapOne.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let name = [ e.features[0].properties.name ];

	name = '<h1 class="popup-header">'+name+'</h1>';
	let html = name+'<p class="popup-description"></p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapOne);

});

mapOne.on('mouseleave', 'cyberPoints', function() {
	// Change the cursor style as a UI indicator.
	mapOne.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapOne.on('mousemove', 'contractCities', function(e) {
	// Change the cursor style as a UI indicator.
	mapOne.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let city = [ e.features[0].properties.City ];
	let contracts = [ e.features[0].properties.Contracts ];

	city = '<h1 class="popup-header">'+city+'</h1>';
	contracts = '<strong> '+contracts[0].format()+' </strong>';
	let html = city+'<p class="popup-description">Over '+contracts+' federal contracts were issued between 2014 and 2020 to companies completing cybersecurity-related work.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapOne);

});

mapOne.on('mouseleave', 'contractCities', function() {
	// Change the cursor style as a UI indicator.
	mapOne.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapTwo.on('mousemove', 'contractPoints', function(e) {
	// Change the cursor style as a UI indicator.
	mapTwo.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let city = [ e.features[0].properties.City ];
	let contracts = [ e.features[0].properties.Contracts ];

	city = '<h1 class="popup-header">'+city+'</h1>';
	contracts = '<strong> '+contracts[0].format()+' </strong>';
	let html = city+'<p class="popup-description">Over '+contracts+' federal contracts were issued between 2014 and 2020 to companies completing cybersecurity-related work.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapTwo);

});

mapTwo.on('mouseleave', 'contractPoints', function() {
	// Change the cursor style as a UI indicator.
	mapTwo.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapThree.on('mousemove', 'highSchools', function(e) {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let school = [ e.features[0].properties['School Name'] ];
	let enrolled = [ e.features[0].properties['Cybersecurity Pathway'] ];

	school = '<h1 class="popup-header">'+school+'</h1>';
	enrolled = '<strong> '+enrolled[0].format()+' </strong>';
	let html = school+'<p class="popup-description">Over '+enrolled+' students were enrolled in the Cybersecurity Pathway in the 2018-2019 school year.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapThree);

});

mapThree.on('mouseleave', 'highSchools', function() {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapThree.on('mousemove', 'colleges', function(e) {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let school = [ e.features[0].properties.name ];
	let enrolled = [ e.features[0].properties.cyberCompletions2018 ];

	school = '<h1 class="popup-header">'+school+'</h1>';
	enrolled = '<strong> '+enrolled[0].format()+' </strong>';
	let html = school+'<p class="popup-description">Over '+enrolled+' students completed a cybersecurity-related program between 2017 and 2018.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapThree);

});

mapThree.on('mouseleave', 'colleges', function() {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapThree.on('mousemove', 'cyber-completions-2018', function(e) {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let school = [ e.features[0].properties.name ];
	let enrolled = [ e.features[0].properties.cyberCompletions2018 ];

	school = '<h1 class="popup-header">'+school+'</h1>';
	enrolled = '<strong> '+enrolled[0].format()+' </strong>';
	let html = school+'<p class="popup-description">Over '+enrolled+' students completed a cybersecurity-related program between 2017 and 2018.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapThree);

});

mapThree.on('mouseleave', 'cyber-completions-2018', function() {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapThree.on('mousemove', 'stateCaeSchools', function(e) {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let state = [ e.features[0].properties.name ];
	let schools = [ e.features[0].properties.Schools ];

	state = '<h1 class="popup-header">'+state+'</h1>';
	schools = '<strong> '+schools+' </strong>';
	let html = state+'<p class="popup-description">There are '+schools+' colleges holding an NCAEC certification.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapThree);

});

mapThree.on('mouseleave', 'stateCaeSchools', function() {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'grab';
	popup.remove();

});

mapThree.on('mousemove', 'msaprofiles', function(e) {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'pointer';

	let lngLat = e.lngLat;
	let msa = [ e.features[0].properties.MSA ];
	msa = msa[0].split('-');
	msa = "Metro "+msa[0];
	let profiles = [ e.features[0].properties.Profiles ];
	console.log(profiles);

	let msaSmall = '<strong> '+msa+' </strong>';
	msa = '<h1 class="popup-header">'+msa+'</h1>';
	profiles = '<strong> '+profiles[0].format()+' </strong>';
	
	let html = msa+'<p class="popup-description">There are at last '+profiles+' workers in '+msaSmall+' with jobs profiles listing at least one relevant cybersecurity-related skill.</p>'
	popup
		.setLngLat(lngLat)
		.setHTML(html)
		.addTo(mapThree);

});

mapThree.on('mouseleave', 'msaprofiles', function() {
	// Change the cursor style as a UI indicator.
	mapThree.getCanvas().style.cursor = 'grab';
	popup.remove();

});
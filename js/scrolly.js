// initiate scroller with scrollama
const scroller = scrollama();
const scrollReverse = scrollama();
let iframe = document.querySelector("#flourishStory iframe");

// get url for path to be animated later
const pathId = 'ckinkn9iw0vvc2dqtbyzs7md5';
const pathUrl = 'https://api.mapbox.com/datasets/v1/gpcecondev/' + pathId + "/features?access_token=" + mapboxgl.accessToken;
console.log(pathUrl);
function stepEnter(response) {
	console.log(response.element.id);
	if (response.direction === 'down') {
		if (response.element.id === '1') {
			$(response.element).addClass('is-active');
			mapOne.setLayoutProperty('cyberLabels','visibility','visible');

		} else if (response.element.id === '2') {
			$(response.element).addClass('is-active');
			mapOne.fitBounds( [[-82.162, 33.420],[-81.974, 33.533]], { padding:75 } );
			mapOne.setLayoutProperty('ftGrdnBnds','visibility','visible');

		} else if (response.element.id === '3') {
			$(response.element).addClass('is-active');
			if (width < 400) {padThree=100;} else {padThree=5;};
			mapOne.fitBounds( [[-81.991, 33.467],[-81.962, 33.480]], { padding:padThree, bearing:-67, easing(t) { return t; } } );
			mapOne.setLayoutProperty('cyberPoints','visibility','visible');

		} else if (response.element.id === '4') {
			$(response.element).addClass('is-active');
			mapOne.setFilter('cyberPoints', ["any",["match",["get","type"],["private"],true,false],["match",["get","type"],["govt"],true,false]]);

		} else if (response.element.id === '5') {
			$(response.element).addClass('is-active');
			mapOne.setFilter('cyberPoints', ["any",["match",["get","type"],["private"],true,false],["match",["get","type"],["govt"],true,false],["match",["get","type"],["edu"],true,false]])
			
		} else if (response.element.id === '6') {
			$(response.element).addClass('is-active');
			d3.json(pathUrl).then(function(data) {
				console.log(data);
				const path = data.features.find(element => element.id === "80dac418964e5ed2eff848eabaa09211");
				console.log(path);
				const coordinates = path.geometry.coordinates;
				console.log(coordinates);
				path.geometry.coordinates = [coordinates[0]];

				mapOne.addSource('trace', { type: 'geojson', data : path });
				mapOne.addLayer({
			        "id": "trace",
			        "type": "line",
			        "source": "trace",
			        "paint": {
			            "line-color": "#fff",
			            "line-opacity": 0.75,
			            "line-width": 5
			        }
			    },'waterway-label');

			    var i = 0;
			    var timer = window.setInterval(function() {
			        if (i < coordinates.length) {
			            path.geometry.coordinates.push(coordinates[i]);
			            mapOne.getSource('trace').setData(path);
			            i++;
			        } else {
			            window.clearInterval(timer);
			        }
			    }, 5);
			});
		} else if (response.element.id === '7') {
			$(response.element).addClass('is-active');
			mapOne.fitBounds( [[-82.162, 33.420],[-81.974, 33.470]], { padding:75, easing(t) { return t; } } );
			mapOne.setLayoutProperty('trace','visibility','none');
			mapOne.setLayoutProperty('ftGrdnBnds','visibility','none');
			mapOne.setLayoutProperty('cyberPoints','visibility','none');
			mapOne.setLayoutProperty('contractCities','visibility','visible');

		} else if (response.element.id === '8') {
			$(response.element).addClass('is-active');
			mapTwo.fitBounds([[-84.696, 33.395], [-84.005, 34.203]], {padding:25});
			mapTwo.setLayoutProperty('cyberCompanies','visibility','visible');

		} else if (response.element.id === '9') {
			$(response.element).addClass('is-active');
			if (width < 992) {padTemp = 80} else {padTemp=70};
			mapTwo.fitBounds([[-119.091, 24.567], [-71.059, 43.564]], {padding:padTemp});
			mapTwo.setLayoutProperty('cyberCompanies','visibility','none');
			mapTwo.setLayoutProperty('contractLines','visibility','visible');
			mapTwo.setLayoutProperty('contractPoints','visibility','visible');
			mapTwo.setLayoutProperty('contractLabels','visibility','visible');

		} else if (response.element.id === '10') {
			$(response.element).addClass('is-active');
			mapTwo.fitBounds( [[-84.398, 33.775],[-84.389, 33.777]], { padding:pad} );
			mapTwo.setLayoutProperty('contractLines','visibility','none');
			mapTwo.setLayoutProperty('contractPoints','visibility','none');
			mapTwo.setLayoutProperty('contractLabels','visibility','none');
			mapTwo.setLayoutProperty('techLabels','visibility','visible');
			
		} else if (response.element.id === '11') {
			$(response.element).addClass('is-active'); // mapTwo.zoomTo(13.5);
			mapTwo.setLayoutProperty('techLabels','visibility','none');
			mapTwo.setLayoutProperty('innoCenters','visibility','visible');

		} else if (response.element.id === '12') {
			$(response.element).addClass('is-active');
			mapTwo.setLayoutProperty('settlement-minor-label','visibility','none');
			mapTwo.fitBounds( [[-84.517, 33.777],[-84.214, 34.115]], { padding : 100 } );
		
		} else if (response.element.id === '13') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('colleges','visibility','visible');
			mapThree.setLayoutProperty('highSchools','visibility','visible');
			mapThree.fitBounds( [[9.707, -4.345],[9.938, -4.106]], { padding : 100 } );

		} else if (response.element.id === '14') {
			$(response.element).addClass('is-active');
			mapThree.setPaintProperty('highSchools','circle-radius',["interpolate",["linear"],["get","Cybersecurity Pathway"],1,5,338,15]);

		} else if (response.element.id === '15') {
			$(response.element).addClass('is-active');
			mapThree.fitBounds([[8.855, -7.493],[13.161, -3.009]], {padding: 50});
			// mapThree.rotateTo(-6);
			mapThree.setLayoutProperty('city-labels-major','visibility','none');
			mapThree.setFilter('highSchools', ["all",[">",["get","Cybersecurity Pathway"],0]]);

		} else if (response.element.id === '16') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('highSchools','visibility','none');

		} else if (response.element.id === '17') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('colleges','visibility','none');
			mapThree.setFilter('cyber-completions-2018-labels', ["all",[">=",["get","cyberPrograms2018"],0],["match",["get", "state"],["GA"],true,false]]);
			mapThree.setLayoutProperty('cyber-completions-2018','visibility','visible');
			mapThree.setLayoutProperty('cyber-completions-2018-labels','visibility','visible');

		} else if (response.element.id === '18') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('cyber-completions-2018-labels','visibility','none');
			mapThree.setLayoutProperty('city-labels-major','visibility','visible');
			mapThree.fitBounds( [[-22.368, -12.983],[20.676, 12.704]], { padding:25} );

		} else if (response.element.id === '19') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('cyber-completions-2018','visibility','none');

		} else if (response.element.id === '20') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('stateCaeSchools','visibility','visible');


		} else if (response.element.id === '21') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('stateCaeSchools','visibility','none');
			

		} else if (response.element.id === '22') {
			$(response.element).addClass('is-active');
			mapThree.setLayoutProperty('msaprofiles','visibility','visible');

		} else if (response.element.id === '23') {
			$(response.element).addClass('is-active');

		} else if (response.element.id === '24') {
			$(response.element).addClass('is-active');
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "1";

		} else if (response.element.id === '25') {
			$(response.element).addClass('is-active');
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "2";

		} else if (response.element.id === '26') {
			$(response.element).addClass('is-active');
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "3";

		} else if (response.element.id === '27') {
			$(response.element).addClass('is-active');
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "4";

		} else if (response.element.id === '28') {
			$(response.element).addClass('is-active');
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "5";

		}

		
			
	}
}

function stepExit(response) {
	console.log(response.element.id);
	if (response.direction === 'up') {
		if (response.element.id === '27') {
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "4";
		} else if (response.element.id === '26') {
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "3";
		} else if (response.element.id === '25') {
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "2";
		} else if (response.element.id === '24') {
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "1";
		} else if (response.element.id === '23') {
			let iframe = document.querySelector("#flourishStory iframe");
			iframe.src = iframe.src.replace(/#slide-.*/, "") + "#slide-" + "0";
		} else if (response.element.id === '21') {
			mapThree.setLayoutProperty('msaprofiles','visibility','none');
		} else if (response.element.id === '20') {
			mapThree.setLayoutProperty('stateCaeSchools','visibility','visible');
		} else if (response.element.id === '19') {
			mapThree.setLayoutProperty('stateCaeSchools','visibility','none');
		} else if (response.element.id === '18') {
			mapThree.setLayoutProperty('cyber-completions-2018','visibility','visible');
		} else if (response.element.id === '17') {
			mapThree.fitBounds([[8.855, -7.493],[13.161, -3.009]], {padding: 50});
			mapThree.setFilter('cyber-completions-2018-labels', ["all",[">=",["get","cyberPrograms2018"],0],["match",["get", "state"],["GA"],true,false]]);
			mapThree.setLayoutProperty('cyber-completions-2018-labels','visibility','visible');
			mapThree.setLayoutProperty('city-labels-major','visibility','none');
		} else if (response.element.id === '16') {
			mapThree.setLayoutProperty('cyber-completions-2018-labels','visibility','none');
			mapThree.setLayoutProperty('cyber-completions-2018','visibility','none');
			mapThree.setLayoutProperty('colleges','visibility','visible');
		} else if (response.element.id === '15') {
			mapThree.setFilter('highSchools', ["all",[">",["get","Cybersecurity Pathway"],0]]);
			mapThree.setPaintProperty('highSchools','circle-radius',["interpolate",["linear"],["get","Cybersecurity Pathway"],1,5,338,15]);
			mapThree.setLayoutProperty('highSchools','visibility','visible');
		} else if (response.element.id === '14') {
			mapThree.fitBounds( [[9.707, -4.345],[9.938, -4.106]], { padding : {top: 200, bottom: 200, left: 200, right:200}} );
			mapThree.setFilter('highSchools', ["all",["match",["get","County"],["Cobb"],true,false]]);
		} else if (response.element.id === '13') {
			mapThree.setPaintProperty('highSchools','circle-radius',5);
		} else if (response.element.id === '11') {
			mapTwo.fitBounds( [[-84.398, 33.775],[-84.389, 33.777]], { padding:250} );
		} else if (response.element.id === '10') {
			mapTwo.setLayoutProperty('innoCenters','visibility','none');
			mapTwo.setLayoutProperty('techLabels','visibility','visible');
		} else if (response.element.id === '9') {
			mapTwo.setLayoutProperty('techLabels','visibility','none');
			mapTwo.fitBounds([[-119.091, 24.567], [-71.059, 43.564]], {padding:70});
			mapTwo.setLayoutProperty('contractLines','visibility','visible');
			mapTwo.setLayoutProperty('contractPoints','visibility','visible');
			mapTwo.setLayoutProperty('contractLabels','visibility','visible');
		} else if (response.element.id === '8') {
			mapTwo.fitBounds([[-84.696, 33.395], [-84.005, 34.203]], {padding:25});
			mapTwo.setLayoutProperty('contractLines','visibility','none');
			mapTwo.setLayoutProperty('contractPoints','visibility','none');
			mapTwo.setLayoutProperty('contractLabels','visibility','none');
			mapTwo.setLayoutProperty('cyberCompanies','visibility','visible');
		} else if (response.element.id === '6') {
			mapOne.fitBounds( [[-81.991, 33.467],[-81.962, 33.480]], { padding:padThree, bearing:-67, easing(t) { return t; } } );
			mapOne.setLayoutProperty('trace','visibility','visible');
			mapOne.setLayoutProperty('ftGrdnBnds','visibility','visible');
			mapOne.setLayoutProperty('cyberPoints','visibility','visible');
			mapOne.setLayoutProperty('contractCities','visibility','none');

		} else if (response.element.id === '5') {
			mapOne.setLayoutProperty('trace','visibility','none');

		} else if (response.element.id === '4') {
			mapOne.setFilter('cyberPoints', ["any",["match",["get","type"],["private"],true,false],["match",["get","type"],["govt"],true,false]]);

		} else if (response.element.id === '3') {
			mapOne.setFilter('cyberPoints', ["any",["match",["get","type"],["govt"],true,false]]);

		} else if (response.element.id === '2') {
			mapOne.fitBounds( [[-82.162, 33.420],[-81.974, 33.533]], { padding:75 } );
			mapOne.setLayoutProperty('cyberPoints','visibility','none');
			mapOne.setLayoutProperty('cyberLabels','visibility','visible');

		} else if (response.element.id === '1') {
			mapOne.fitBounds( [[-82.504, 33.088],[-81.722, 33.790]], { padding:75 } );
			mapOne.setLayoutProperty('ftGrdnBnds','visibility','none');

		}

	}
}

scroller.setup({
	step:'.step',
	debug:false,
	offset:0.6
})
.onStepEnter( stepEnter )

scrollReverse.setup({
	step:'.step',
	debug:false,
	offset:0.25
})
.onStepExit( stepExit )
.onStepExit( stepExit );
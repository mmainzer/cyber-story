mapboxgl.accessToken = 'pk.eyJ1IjoiZ3BjZWNvbmRldiIsImEiOiJja2luampsd2kwbjcxMnRsaXBneGsxcWV3In0.Qi0TGIVNwtoKKG__cGmsoA';

// $(document).ready(function(){
// 	$('#flourishStory iframe').on("load", function(){
//         $(this).css("height","100%");
//     });
// });


const width = $(window).width();
let pad;
let padTwo;
let padTemp;
let padThree;
let mapTwoPad;
if (width < 400) {mapTwoPad=75;} else {mapTwoPad=5;};
if (width < 1200) {pad = 150;padTwo=100} else { pad = 175;padTwo=200; }

const mapOne = new mapboxgl.Map({
	container: 'mapOne',
	style: 'mapbox://styles/gpcecondev/ckiruvhl20cd919qm5808vioy?fresh=true',
	bounds: [[-82.504, 33.088],[-81.722, 33.790]],
	fitBoundsOptions: {padding: 75},
	scrollZoom: false,
	doubleClickZoom: false,
	renderWorldCopies: false,
	dragPan: false
});

const popup = new mapboxgl.Popup({
	closeButton: false,
	closeOnClick: false
});

mapOne.on('load', function() {
	
	// add sources
	mapOne.addSource('cyberAssets', {
		type: 'vector',
		url: 'mapbox://gpcecondev.ckinkn9iw0vvc2dqtbyzs7md5-5hv0m?fresh=true'
	});

	mapOne.addSource('cyberContracts', {
		type: 'vector',
		url: 'mapbox://gpcecondev.22384pr5?fresh=true'
	});

	mapOne.setLayoutProperty('contractLines','visibility','none');
	mapOne.setLayoutProperty('contractPoints','visibility','none');
	mapOne.setLayoutProperty('contractLabels','visibility','none'); 

	mapOne.addLayer({
		'id':'ftGrdnBnds',
		'type':'line',
		'source':'cyberAssets',
		'layout': {
			'visibility':'none'
		},
		'filter': ["all",["match",["get","name"],["Fort Gordon Bounds"],true,false]],
		'paint': {
			'line-color':"hsla(72, 64%, 52%, 0.75)",
			'line-width':3,
		},
		'source-layer':'cyberAssets'
	}, 'waterway-label')

	mapOne.addLayer({
		'id':'cyberLabels',
		'type':'symbol',
		'source':'cyberAssets',
		'layout': {
			'visibility':'none',
			'text-field':["to-string", ["get", "name"]],
			'text-font':["Bernina Sans Regular","Arial Unicode MS Regular"],
			'text-max-width':10,
			'text-line-height':1.1,
			'text-size':16
		},
		'filter': ["all",["match",["get","type"],["city"],true,false]],
		'paint': {
			'text-halo-blur':1,
			'text-halo-color':"hsl(0, 0%, 0%)",
			'text-halo-width':1,
			'text-color':"#d3d6d9",
		},
		'source-layer':'cyberAssets'
	}, 'waterway-label')

	mapOne.addLayer({
		'id':'cyberPoints',
		'type':'circle',
		'source':'cyberAssets',
		'layout': {
			'visibility':'none',
		},
		'filter': ["any",["match",["get","type"],["govt"],true,false]],
		'paint': {
			'circle-radius':10,
			'circle-color':["match",["get", "type"],["private"],"hsl(72, 64%, 52%)",["govt"],"#ec1c24",["edu"],"#00bcf1","#b2d235"
			],
			'circle-opacity':0.75,
			'circle-stroke-color':'#000000',
			'circle-stroke-width':1
		},
		'source-layer':'cyberAssets'
	}, 'cyberLabels')

	mapOne.addLayer({
		'id':'contractCities',
		'type':'circle',
		'source':'cyberContracts',
		'layout': {
			'visibility':'none',
		},
		'paint': {
			'circle-radius':["interpolate",["linear"],["get","Contracts"],0,5,274,35],
			'circle-color':'#fdb714',
			'circle-opacity':0.75,
			'circle-stroke-color':'#000000',
			'circle-stroke-width':1
		},
		'source-layer':'cyberContractsCities-64s5pj'
	}, 'cyberLabels')



});

const mapTwo = new mapboxgl.Map({
	container: 'mapTwo',
	style: 'mapbox://styles/gpcecondev/ckiruvhl20cd919qm5808vioy?fresh=true',
	bounds: [[-85.448,30.538],[-82.282,35.071]],
	fitBoundsOptions: {padding: mapTwoPad},
	scrollZoom: false,
	doubleClickZoom: false,
	renderWorldCopies: false,
	dragPan: false
});

mapTwo.on('load', function() {

	// add sources
	mapTwo.addSource('cyberLocs', {
		type: 'vector',
		url: 'mapbox://gpcecondev.ckinkn9iw0vvc2dqtbyzs7md5-5hv0m?latest=true'
	});

	mapTwo.setLayoutProperty('settlement-minor-label','visibility','visible');
	mapTwo.setLayoutProperty('contractLines','visibility','none');
	mapTwo.setLayoutProperty('contractPoints','visibility','none');
	mapTwo.setLayoutProperty('contractLabels','visibility','none');

	mapTwo.addLayer({
		'id':'cyberCompanies',
		'type':'circle',
		'source':'cyberLocs',
		'layout': {
			'visibility':'none'
		},
		'filter':["all",["match",["get","type"],["private"],true,false]],
		'paint': {
			'circle-radius':8,
			'circle-color':'#b2d235',
			'circle-blur':1
		},
		'source-layer':'cyberAssets',
	}, 'settlement-minor-label');

	mapTwo.addLayer({
		'id':'cyberEdu',
		'type':'circle',
		'source':'cyberLocs',
		'layout': {
			'visibility':'none'
		},
		'filter':["all",["match",["get","type"],["edu"],true,false]],
		'paint': {
			'circle-radius':8,
			'circle-color':'#00bcf1',
			'circle-blur':1
		},
		'source-layer':'cyberAssets',
	}, 'settlement-minor-label');


});

const mapThree = new mapboxgl.Map({
	container: 'mapThree',
	style: 'mapbox://styles/gpcecondev/ckinrg70s0xdi18p2g42l6xzf?fresh=true',
	bounds: [[8.855, -7.493],[13.161, -3.009]],
	fitBoundsOptions: {padding: 25},
	scrollZoom: false,
	doubleClickZoom: false,
	renderWorldCopies: false,
	dragPan: false,
	bearing:-6
});

mapThree.on('load', function() {
	// bounds for whole US
	// mapThree.fitBounds( [[-22.368, -12.983],[20.676, 12.704]], { padding:25} );
	// bounds for Georgia
	// mapThree.fitBounds( [[8.855, -7.493],[13.161, -3.009]], { padding:25} );
	mapThree.rotateTo(-6);

});
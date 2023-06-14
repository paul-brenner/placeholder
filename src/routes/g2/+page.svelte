<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import { PUBLIC_GOOGLEPLACESAPIKEY } from '$env/static/public';

	import {
		Input,
		Label,
		Helper,
		Select,
		Badge,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	interface Bounds {
		north: number;
		south: number;
		west: number;
		east: number;
	}

	const newYorkCityBounds: Bounds = {
		north: 40.917577,
		south: 40.477399,
		west: -74.25909,
		east: -73.700181
	};
	const laBounds: Bounds = {
		north: 34.337306,
		south: 33.703652,
		west: -118.668175,
		east: -118.155289
	};
	const tokyoBounds: Bounds = {
		north: 35.817813,
		south: 35.500974,
		west: 139.562483,
		east: 139.962483
	};
	const sfBounds: Bounds = {
		north: 37.929823,
		south: 37.639829,
		west: -122.503081,
		east: -122.303081
	};
	const chicagoBounds: Bounds = {
		north: 42.023131,
		south: 41.643131,
		west: -87.940101,
		east: -87.740101
	};

	let selected: string;

	interface City {
		value: Bounds;
		name: string;
	}

	let cities: City[] = [
		{ value: newYorkCityBounds, name: 'New York City' },
		{ value: laBounds, name: 'Los Angeles' },
		{ value: tokyoBounds, name: 'Tokyo' },
		{ value: sfBounds, name: 'San Francisco' },
		{ value: chicagoBounds, name: 'Chicago' }
	];

	let autocomplete: google.maps.places.Autocomplete;
	let output_result: google.maps.places.PlaceResult;

	const fields: Array<string> = [
		'name',
		'formatted_address',
		'website',
		'vicinity',
		'url',
		'place_id',
		'formatted_phone_number',
		'types'
	];

	$: if (selected) {
		options.bounds = selected;
	}

	let map;
	let service;
	let infowindow;

	function initMap() {
		const sydney = new google.maps.LatLng(-33.867, 151.195);

		infowindow = new google.maps.InfoWindow();
		map = new google.maps.Map(document.getElementById('map'), {
			center: sydney,
			zoom: 15
		});

		const request = {
			query: 'Museum of Contemporary Art Australia',
			fields: ['name', 'geometry']
		};

		service = new google.maps.places.PlacesService(map);
		service.findPlaceFromQuery(request, (results, status) => {
			if (status === google.maps.places.PlacesServiceStatus.OK && results) {
				for (let i = 0; i < results.length; i++) {
					createMarker(results[i]);
				}

				map.setCenter(results[0].geometry.location);
			}
		});
	}

	function createMarker(place) {
		if (!place.geometry || !place.geometry.location) return;

		const marker = new google.maps.Marker({
			map,
			position: place.geometry.location
		});

		google.maps.event.addListener(marker, 'click', () => {
			infowindow.setContent(place.name || '');
			infowindow.open(map);
		});
	}

	onMount(() => {
		Object.assign(window, {
			mapLoaded: () => {
				// @ts-ignore
				map = new google.maps.Map(container, {
					zoom,
					center
					// styles: mapStyles
				});
				dispatch('load', true);

				Object.assign(window, { map });
			}
		});
	});
</script>

<div class="flex flex-col flex-grow">
	<div class="flex flex-col items-center justify-center py-20">
		<div class="w-2/3 mx-auto flex-col">
			<div class="w-full">
				<Label class="w-full">
					Find someone
					<Select
						class="mt-2 w-full"
						items={cities}
						bind:value={selected}
						placeholder="Choose a city"
					/>
				</Label>
			</div>
		</div>
	</div>
</div>

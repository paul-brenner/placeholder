<!-- <script>
	// import Icon from 'fa-svelte'
	// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
	import GooglePlacesAutocomplete from '@beyowi/svelte-google-places-autocomplete';
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';
	import { PUBLIC_GOOGLEPLACESAPIKEY } from '$env/static/public';

	export let placeholder;
	export let location = null;

	$: description = location?.description || '';

	const dispatch = createEventDispatcher();
	// const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY
	const googlePlacesApiKey = PUBLIC_GOOGLEPLACESAPIKEY;
	const options = {
		fields: ['address_components', 'geometry'],
		types: ['(regions)']
	};

	function onPlaceChanged(event) {
		const locationData = event.detail;
		if (locationData) {
			selectLocation(locationData.text, locationData.place);
		} else {
			clearLocation();
		}
	}

	function selectLocation(description, place) {
		dispatch('change', {
			description: description,
			latitude: place.geometry.location.lat(),
			longitude: place.geometry.location.lng(),
			country: extractAddressComponent(place.address_components, 'country'),
			state: extractAddressComponent(place.address_components, 'administrative_area_level_1'),
			county: extractAddressComponent(place.address_components, 'administrative_area_level_2'),
			city: extractAddressComponent(place.address_components, 'locality'),
			borough: extractAddressComponent(place.address_components, 'sublocality')
		});
	}

	function extractAddressComponent(addressComponents, componentType) {
		return addressComponents.filter((component) => component.types.includes(componentType))[0]
			?.short_name;
	}

	function clearLocation() {
		dispatch('change', null);
	}
</script>

<div>
	{#if browser}
		<GooglePlacesAutocomplete
			apiKey={googlePlacesApiKey}
			class={$$props.class}
			on:place_changed={onPlaceChanged}
			{options}
			{placeholder}
			value={description}
		/>
	{/if}
</div> -->

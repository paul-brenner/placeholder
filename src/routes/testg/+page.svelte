<script>
    import { onMount } from 'svelte';
    import { Loader } from '@googlemaps/js-api-loader';
    // @ts-ignore
    import { LatLngBounds } from '@googlemaps/google-maps-services-js';
    // @ts-ignore
    import { LatLngLiteral } from '@googlemaps/google-maps-services-js/dist/common';
    // import { GOOGLEPLACESAPIKEY } from '$env/static/private';
    
    let autocomplete;
    let address;
    
    const newYorkCityBounds = {
  north: 40.917577,
  south: 40.477399,
  west: -74.25909,
  east: -73.700181
    };

    const options = {
        componentRestrictions: { country: 'us' },
        strictBounds: false,
        bounds: newYorkCityBounds
        };
    
    
    onMount(() => {
      const loader = new Loader({
        // apiKey: GOOGLEPLACESAPIKEY
        apiKey: 'insert key here',
        version: 'weekly',
        libraries: ['places']
        });
    
      loader.loadCallback((e) => {
        if (e) {
          console.log(e);
        } else {
          autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'),
          options
        );
    
        autocomplete.addListener('place_changed', onPlaceChanged);
        }
    });
    
      function onPlaceChanged() {
        address = autocomplete.getPlace();
    
        console.log(address.formatted_address);
        }
    });
    </script>
    
    <input type="text" name="autocomplete" id="autocomplete" autocomplete="off" />
    <pre>{JSON.stringify(address)}</pre>
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '$env/static/private';


import Airtable from 'airtable';




const base = require('airtable').base(AIRTABLE_BASE_ID);

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_API_KEY
});
var base = Airtable.base(AIRTABLE_BASE_ID);
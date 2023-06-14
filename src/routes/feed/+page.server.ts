
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from '$env/static/private';
// import { env as private_env } from '$env/static/private'
import Airtable from 'airtable';




// var Airtable = require('airtable');

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
base('Recs').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
        console.log('Retrieved', record.get('id'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

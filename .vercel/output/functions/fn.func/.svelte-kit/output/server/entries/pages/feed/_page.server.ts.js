import Airtable from "airtable";
const AIRTABLE_API_KEY = "patcT1ypBJrilmddH.58d7aae1400f95257ddce77782c50387a37274cc742a0c98cccbb2239da08a46";
const AIRTABLE_BASE_ID = "appUIApHLoqnIFAQV";
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
base("Recs").select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
  records.forEach(function(record) {
    console.log("Retrieved", record.get("id"));
  });
  fetchNextPage();
}, function done(err) {
  if (err) {
    console.error(err);
    return;
  }
});

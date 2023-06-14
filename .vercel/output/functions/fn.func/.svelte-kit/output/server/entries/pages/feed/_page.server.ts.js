import Airtable from "airtable";
const AIRTABLE_API_KEY = "patcT1ypBJrilmddH.58d7aae1400f95257ddce77782c50387a37274cc742a0c98cccbb2239da08a46";
const AIRTABLE_BASE_ID = "appUIApHLoqnIFAQV";
new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

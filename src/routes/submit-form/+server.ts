// import {
//     AIRTABLE_API_KEY,
//     AIRTABLE_BASE_ID,
// } from '$env/static/private'
// import { json } from '@sveltejs/kit'

// export const POST = async ({ request }) => {
//     // const { name, location, strength, visit_offerings, other } = await request.json()
//     const { name, location } = await request.json()

//     const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Providers_test`

//     const data = {
//         records: [
//             {
//                 fields: {
//                     name,
//                     location,
//                     // strength,
//                     // visit_offerings,
//                     // other
//                 },
//             },
//         ],
//     }
//     console.log('JSON.stringify(data)', JSON.stringify(data))
//     const res = await fetch(AIRTABLE_URL, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     console.log(res)
//     if (res.ok) {
//         return json({
//             message: 'success',
//         })
//     } else {
//         return json({
//             message: 'failed',
//             status: 404,
//         })
//     }
// }
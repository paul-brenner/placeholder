// import { AIRTABLE_BASE_ID, AIRTABLE_API_KEY } from '$env/static/public'
// import { fail } from '@sveltejs/kit'
// import { superValidate } from 'sveltekit-superforms/server'
// import { z } from 'zod'

// const new_provider = z.object({
//     name: z.string(),
//     location: z.string(),
//     strength: z.string(),
//     visit_offerings: z.string(),
//     message: z.string(),
// })

// export const load = async (event) => {
//     const form = await superValidate(event, new_provider)
//     return {
//         form,
//     }
// }

// export const actions = {
//     default: async (event) => {
//         const form = await superValidate(event, new_provider)
//         if (!form.valid) fail(400, { form })

//         const { name, location, strength, visit_offerings, other } = form.data

//         const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`

//         let data = {
//             records: [
//                 {
//                     fields: {
//                         name,
//                         location,
//                         strength,
//                         visit_offerings,
//                         other
//                     },
//                 },
//             ],
//         }
//         await fetch(AIRTABLE_URL, {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${AIRTABLE_API_KEY}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         })

//         return {
//             form,
//         }
//     },
// }
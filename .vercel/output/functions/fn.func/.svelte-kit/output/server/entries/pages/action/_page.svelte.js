import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let submissionStatus;
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  submissionStatus = form?.body?.message;
  return `<div class="mx-auto max-w-xl"><h2>Action</h2>

	${submissionStatus === "submitting" ? `<p>Submitting...</p>` : `${submissionStatus === "failed" ? `<p>Submission failed.</p>` : `${submissionStatus === "success" ? `<p>Submission success.</p>

		<button data-sveltekit-reload class="btn btn-primary w-full">Submit another?
		</button>` : `<form method="POST"><label for="name" class="label"><span class="label-text">Name</span></label>
			<input type="text" name="name" aria-label="name" placeholder="Enter your name" required autocomplete="off" class="input input-bordered w-full">
			<label for="location" class="label"><span class="label-text">location</span></label>
			<input type="location" name="location" aria-label="location" placeholder="NYC" required autocomplete="off" class="input input-bordered w-full">
			<label for="visit_offerings" class="label"><span class="label-text">Visit Offerings</span></label>
			<input type="visit_offerings" name="visit_offerings" aria-label="visit_offerings" placeholder="Office" required autocomplete="off" class="input input-bordered w-full">
			<label for="strength" class="label"><span class="label-text">Strength</span></label>
			<input type="strength" name="strength" aria-label="strength" placeholder="3" required autocomplete="off" class="input input-bordered w-full">
			<label for="other" class="label"><span class="label-text">other</span></label>
			<textarea name="other" aria-label="other" placeholder="Anything Else?" required rows="3" autocomplete="off" class="textarea input-bordered w-full mb-10"></textarea>
			<input type="submit" value="Submit to Airtable" class="btn btn-primary w-full"></form>`}`}`}

	<p><a href="/" data-sveltekit-reload class="btn btn-secondary w-full !text-secondary-content">Back
		</a></p></div>`;
});
export {
  Page as default
};

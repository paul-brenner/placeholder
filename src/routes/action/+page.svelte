<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	$: submissionStatus = form?.body?.message;
</script>

<div class="mx-auto max-w-xl">
	<h2>Action</h2>

	{#if submissionStatus === 'submitting'}
		<p>Submitting...</p>
	{:else if submissionStatus === 'failed'}
		<p>Submission failed.</p>
	{:else if submissionStatus === 'success'}
		<p>Submission success.</p>

		<button
			data-sveltekit-reload
			on:click={() => {
				submissionStatus = null;
			}}
			class="btn btn-primary w-full"
		>
			Submit another?
		</button>
	{:else}
		<form method="POST" use:enhance>
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>
			<input
				type="text"
				name="name"
				aria-label="name"
				placeholder="Enter your name"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="location" class="label">
				<span class="label-text">location</span>
			</label>
			<input
				type="location"
				name="location"
				aria-label="location"
				placeholder="NYC"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="visit_offerings" class="label">
				<span class="label-text">Visit Offerings</span>
			</label>
			<input
				type="visit_offerings"
				name="visit_offerings"
				aria-label="visit_offerings"
				placeholder="Office"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="strength" class="label">
				<span class="label-text">Strength</span>
			</label>
			<input
				type="strength"
				name="strength"
				aria-label="strength"
				placeholder="3"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="other" class="label">
				<span class="label-text">other</span>
			</label>
			<textarea
				name="other"
				aria-label="other"
				placeholder="Anything Else?"
				required
				rows="3"
				autocomplete="off"
				class="textarea input-bordered w-full mb-10"
			/>
			<input type="submit" value="Submit to Airtable" class="btn btn-primary w-full" />
		</form>
	{/if}

	<p>
		<a href="/" data-sveltekit-reload class="btn btn-secondary w-full !text-secondary-content">
			Back
		</a>
	</p>
</div>

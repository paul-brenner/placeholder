<!-- <script lang="ts">
	let submission_status = '';
	const handle_submit = async (event: Event) => {
		submission_status = 'submitting';

		const form = event.target as HTMLFormElement;
		const form_data = new FormData(form);
		const data = Object.fromEntries(form_data);

		const res = await fetch('/submit-form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const { message } = await res.json();
		submission_status = message;
	};
</script>

<div class="mx-auto max-w-xl">
	<h2>Event handler</h2>

	{#if submission_status === 'submitting'}
		<p>Submitting...</p>
	{:else if submission_status === 'failed'}
		<p>Submission failed.</p>
	{:else if submission_status === 'success'}
		<p>Submission success.</p>

		<button
			data-sveltekit-reload
			on:click={() => {
				submission_status = '';
			}}
			class="btn btn-primary w-full"
		>
			Submit another?
		</button>
	{:else}
		<form method="POST" on:submit|preventDefault={handle_submit}>
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
				<span class="label-text">Location</span>
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
			<input type="submit" value="Submit to Airtable" class="btn btn-primary w-full" />
		</form>
	{/if}

	<p>
		<a href="/" data-sveltekit-reload class="btn btn-secondary w-full !text-secondary-content">
			Back
		</a>
	</p>
</div> -->

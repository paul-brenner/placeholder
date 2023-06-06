<!-- <script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { z } from 'zod';

	export let data;

	let submission_status = '';

	const new_provider = z.object({
		name: z.string(),
		location: z.string(),
		strength: z.string(),
		visit_offerings: z.string(),
		message: z.string()
	});

	const { form, errors, enhance } = superForm(data.form, {
		validators: new_provider,
		resetForm: true,
		onSubmit: () => {
			submission_status = 'submitting';
		},
		onError: () => {
			submission_status = 'failed';
		},
		onUpdated: () => {
			submission_status = 'success';
		}
	});
</script>

<div class="mx-auto max-w-xl">
	<h2>Super form</h2>

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
		<form method="POST" use:enhance>
			<label for="name" class="label">
				<span class="label-text">Name</span>
			</label>
			<input
				bind:value={$form.name}
				type="text"
				name="name"
				aria-label="name"
				placeholder="Enter your name"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="name" class="label">
				<span class="label-text-alt {$errors.name ? 'text-error' : 'text-base-100'}">
					{$errors.name}
				</span>
			</label>

			<label for="location" class="label">
				<span class="label-text">location</span>
			</label>
			<input
				bind:value={$form.location}
				type="location"
				name="location"
				aria-label="location"
				placeholder="NYC"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="location" class="label">
				<span class="label-text-alt {$errors.location ? 'text-error' : 'text-base-100'}">
					{$errors.location}
				</span>
			</label>

			<label for="strength" class="label">
				<span class="label-text">Strength</span>
			</label>
			<input
				bind:value={$form.strength}
				type="strength"
				name="strength"
				aria-label="strength"
				placeholder="3"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="strength" class="label">
				<span class="label-text-alt {$errors.strength ? 'text-error' : 'text-base-100'}">
					{$errors.strength}
				</span>
			</label>

			<label for="visit_offerings" class="label">
				<span class="label-text">visit_offerings</span>
			</label>
			<input
				bind:value={$form.visit_offerings}
				type="visit_offerings"
				name="visit_offerings"
				aria-label="visit_offerings"
				placeholder="Office"
				required
				autocomplete="off"
				class="input input-bordered w-full"
			/>
			<label for="visit_offerings" class="label">
				<span class="label-text-alt {$errors.visit_offerings ? 'text-error' : 'text-base-100'}">
					{$errors.visit_offerings}
				</span>
			</label>

			<label for="other" class="label">
				<span class="label-text">Other</span>
			</label>
			<textarea
				bind:value={$form.other}
				name="other"
				aria-label="other"
				placeholder="Anything else?"
				required
				rows="3"
				autocomplete="off"
				class="textarea input-bordered w-full"
			/>
			<label for="other" class="label">
				<span class="label-text-alt {$errors.other ? 'text-error' : 'text-base-100'}">
					{$errors.other}
				</span>
			</label>

			<input type="submit" value="Submit to Airtable" class="btn btn-primary w-full mt-10" />
		</form>
	{/if}

	<p>
		<a href="/" data-sveltekit-reload class="btn btn-secondary w-full !text-secondary-content">
			Back
		</a>
	</p>

	<h3>Superforms SuperDebug component</h3>

	<SuperDebug data={$form} />
</div> -->

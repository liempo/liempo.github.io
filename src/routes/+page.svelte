<script lang="ts">
	import Blob from '../components/blob.svelte'
	import Card from '../components/card.svelte'
	import type { Behavior, Focus } from '../components/blob.types'

	let behavior: Behavior = 'follow'
	const cardenter = (e: CustomEvent<Focus>) => {
		behavior = e.detail
	}
	const cardleave = () => {
		behavior = 'follow'
	}
</script>

<main>
	<Blob {behavior}>
		<div class="flex h-screen">
			<div class="m-auto text-white grid grid-cols-4 gap-8">
				<div class="font-mirage col-span-4">
					<h1 class="text-7xl">Liempo.</h1>
					<h2 class="text-3xl">A Software Engineer.</h2>
				</div>

				<!-- Generate four cards -->
				{#each ['I.', 'II.', 'III.', 'IV.'] as i}
					<Card on:cardenter={cardenter} on:cardleave={cardleave}>
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div class="w-full h-full flex flex-col justify-center items-center">
							<h1 class="text-2xl font-mirage">{i}</h1>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</Blob>
</main>

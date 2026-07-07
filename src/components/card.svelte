<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let variant = ''
	let card: HTMLDivElement
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<card
	bind:this={card}
	class="site-card block min-h-64 w-full overflow-hidden rounded-[1.15rem] {variant}"
	on:mouseenter={() => {
		const rect = card.getBoundingClientRect()
		dispatch('cardenter', {
			x: rect.left,
			y: rect.top,
			w: rect.width,
			h: rect.height,
			cornerRadius: 18
		})
	}}
	on:mouseleave={() => {
		dispatch('cardleave')
	}}
>
	<div class="h-full opacity-90 transition duration-700 ease-in-out group-hover:opacity-100">
		<slot />
	</div>
</card>

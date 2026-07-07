<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let card: HTMLDivElement
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<card
	bind:this={card}
	class=" 
		group block min-h-64 w-full rounded-lg shadow-md
		outline outline-white/70 outline-1
		overflow-hidden
		bg-black/10
		backdrop-blur-[1px]
    "
	on:mouseenter={() => {
		const rect = card.getBoundingClientRect()
		dispatch('cardenter', {
			x: rect.left,
			y: rect.top,
			w: rect.width,
			h: rect.height,
			cornerRadius: 0
		})
	}}
	on:mouseleave={() => {
		dispatch('cardleave')
	}}
>
	<div class="h-full opacity-85 transition duration-700 ease-in-out group-hover:opacity-100">
		<slot />
	</div>
</card>

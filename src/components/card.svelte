<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let card: HTMLDivElement
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<card
	bind:this={card}
	class=" 
		group h-64 w-full rounded-lg shadow-md
		outline outline-white/70 outline-1
		overflow-hidden
    "
	on:mouseenter={() => {
		dispatch('cardenter', {
			x: card.offsetLeft,
			y: card.offsetTop,
			w: card.offsetWidth,
			h: card.offsetHeight,
			cornerRadius: 0
		})
	}}
	on:mouseleave={() => {
		dispatch('cardleave')
	}}
>
	<div class="h-full opacity-80 group-hover:opacity-100 transition duration-700 ease-in-out">
		<slot />
	</div>
</card>

<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let card: HTMLDivElement
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<card
	bind:this={card}
	class=" 
		group w-40 h-56 rounded-lg shadow-md
		outline outline-white outline-1
		overflow-hidden
    "
	on:mouseenter={() => {
		// Get the card's corner radius in number form
		console.log(card)

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
	<div class="h-full opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
		<slot />
	</div>
</card>

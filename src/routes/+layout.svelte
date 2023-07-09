<script lang="ts">
	import '../app.css'
	import { tweened } from 'svelte/motion'
	let pointer = tweened(
		{ x: 0, y: 0 },
		{
			duration: 1000
		}
	)

	const mousemove = (e: MouseEvent) => {
		const x = (e.clientX / window.innerWidth) * 100
		const y = (e.clientY / window.innerHeight) * 100
		pointer.set({ x, y })
	}
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/made-mirage" rel="stylesheet" />
	<title>Liempo</title>
</svelte:head>

<layout>
	<div class="w-full h-screen bg-black relative overflow-hidden">
		<div
			class="
                rounded-full
                absolute
                bg-gradient-to-br
                from-teal-300
                to-purple-500
                animate-gradient-spin
                opacity-50
            "
			style="
				width: 20%;
				height: 20%;
                top: {$pointer.y - 10}%;
                left: {$pointer.x - 10}%;
            "
		/>
		<div class="w-full h-full absolute backdrop-blur-3xl" />
		<div class="w-full h-full bg-[url('/noise.svg')] absolute opacity-[15%]" />
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="w-full h-full absolute inset-0" on:mousemove={mousemove}>
		<slot />
	</div>
</layout>

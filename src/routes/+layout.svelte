<script lang="ts">
	import '../app.css'
	import { tweened } from 'svelte/motion'

	let pointer = tweened(
		{ x: 50, y: 50 },
		{
			duration: 1000
		}
	)

	const mousemove = (e: MouseEvent) => {
		const x = (e.clientX / window.innerWidth) * 100
		const y = (e.clientY / window.innerHeight) * 100
		pointer.set({ x, y })
	}

	const mouseleave = () => {
		pointer.set({ x: 50, y: 50 })
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
				min-w-[256px]
				min-h-[256px]
            "
			style="
				width: 20%;
				height: 0;
				padding-bottom: 20%;
                top: {$pointer.y - 20}%;
                left: {$pointer.x - 10}%;
            "
		/>
		<div class="w-full h-full absolute backdrop-blur-3xl" />
		<div class="w-full h-full bg-[url('/noise.svg')] absolute opacity-[15%]" />
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="w-full h-full absolute inset-0" on:mousemove={mousemove} on:mouseleave={mouseleave}>
		<slot />
	</div>
</layout>

<script lang="ts">
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import type { Behavior, Focus } from './blob.types'
	import { cubicOut } from 'svelte/easing'

	export let behavior: Behavior = 'follow'

	let blob = tweened<Focus>(
		{ x: 512, y: 0, w: 0, h: 0, cornerRadius: 0 },
		{
			duration: 1000,
			easing: cubicOut
		}
	)

	onMount(() => {
		mouseleave()
	})

	const mousemove = (e: MouseEvent) => {
		if (behavior !== 'follow') return
		const size = 256
		const x = e.clientX - size / 2
		const y = e.clientY - size / 2
		blob.set({ x, y, w: size, h: size, cornerRadius: size / 2 })
	}

	const mouseleave = () => {
		if (behavior !== 'follow') return
		const size = 128
		const x = window.innerWidth / 2 - size / 2
		const y = window.innerHeight / 2 - size / 2
		blob.set({ x, y, w: size, h: size, cornerRadius: size / 2 }, { duration: 500 })
	}

	$: {
		if (behavior !== 'follow') {
			blob.set(behavior, { duration: 700 })
		}
	}
</script>

<layout>
	<div class="fixed inset-0 overflow-hidden bg-black">
		<div
			class="
                absolute
                bg-gradient-to-br
                from-teal-300
                to-purple-500
                opacity-50
                transition
                duration-300
                ease-in-out
                {behavior === 'follow' ? 'animate-blob' : 'animate-none'}
            "
			style="
				width: {$blob.w}px;
                height: {$blob.h}px;
                top: {$blob.y}px;
                left: {$blob.x}px;
                border-radius: {$blob.cornerRadius}px;
            "
		/>

		<div
			class="absolute inset-0 transition duration-1000 ease-in-out {behavior === 'follow'
				? 'backdrop-blur-3xl'
				: 'backdrop-blur-sm'}"
		/>
		<div class="absolute inset-0 bg-[url('/noise.svg')] opacity-[15%]" />
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="relative min-h-screen" on:mousemove={mousemove} on:mouseleave={mouseleave}>
		<slot />
	</div>
</layout>

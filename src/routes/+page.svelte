<script lang="ts">
	let gradientFocusPos = {
		size: 100,
		x: 0,
		y: 0
	};

	const updateGradientPos = (e: MouseEvent) => {
		let x = (e.clientX / window.innerWidth) * 100;
		let y = (e.clientY / window.innerHeight) * 100;
		let size = 100 - (Math.abs(x - 50) + Math.abs(y - 50)) / 2;
		gradientFocusPos = {
			size: size,
			x: x,
			y: y
		};
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<main
	class="
    w-full
    h-screen
    gradient
  "
	style={`
      --x: ${gradientFocusPos.x}%;
      --y: ${gradientFocusPos.y}%;
      --size: ${gradientFocusPos.size}px;
    `}
	on:mousemove={updateGradientPos}
>
	<div class="flex justify-center items-center h-screen">
		<div class="flex flex-col justify-center items-center">
			<h1 class="text-6xl font-bold text-white">
				Alec <span class="text-red-500">John</span> Gonzales
			</h1>
			<h3 class="text-2xl font-bold text-white">A Software Engineer.</h3>
		</div>
	</div>
</main>

<style>
	.gradient {
		height: 100vh;
		background: 
        /* Genereate here */ radial-gradient(
				at 58% 14%,
				hsla(17, 60%, 60%, 1) 0px,
				transparent 50%
			),
			radial-gradient(at 70% 35%, hsla(268, 96%, 69%, 1) 0px, transparent 50%),
			radial-gradient(at 64% 62%, hsla(289, 94%, 64%, 1) 0px, transparent 50%),
			radial-gradient(at 85% 64%, hsla(56, 97%, 76%, 1) 0px, transparent 50%),
			radial-gradient(at 64% 9%, hsla(202, 73%, 67%, 1) 0px, transparent 50%),
			radial-gradient(at 19% 38%, hsla(255, 99%, 62%, 1) 0px, transparent 50%),
			radial-gradient(at 35% 20%, hsla(177, 73%, 79%, 1) 0px, transparent 50%),
			/* Noise SVG */ url(/noise.svg);
	}
</style>

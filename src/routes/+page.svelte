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

	const cards = [
		{
			number: 'I.',
			title: 'Mobile / iOS',
			body: 'Swift, SwiftUI, UIKit, TestFlight, App Store delivery, Kotlin, Android, Flutter, and Dart.',
			link: 'github.com/liempo'
		},
		{
			number: 'II.',
			title: 'Product Stack',
			body: 'React, Next.js, Vite, TypeScript, Node.js, Fastify, GraphQL, PostgreSQL, SQLite, MQTT.',
			link: 'Full-stack support'
		},
		{
			number: 'III.',
			title: 'Selected Work',
			body: 'Career Match, Worldwide Auctioneers, CareerQuest, mobile AR projects, Orbit tracking, and Radicalize.',
			link: 'Production + projects'
		},
		{
			number: 'IV.',
			title: 'Contact',
			body: 'Philippines · Open to remote work. gonzalesalec@gmail.com · +63 956 068 7614.',
			link: 'linkedin.com/in/liempo'
		}
	]
</script>

<svelte:head>
	<title>Liempo — Alec John O. Gonzales</title>
	<meta
		name="description"
		content="Alec John O. Gonzales — Mobile / iOS / Full-Stack Product Engineer based in the Philippines and open to remote work."
	/>
</svelte:head>

<main>
	<Blob {behavior}>
		<div class="flex min-h-screen px-6 py-12 sm:px-10">
			<div
				class="m-auto grid w-full max-w-5xl grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4"
			>
				<div class="font-mirage col-span-1 sm:col-span-2 lg:col-span-4">
					<p class="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">
						Alec John O. Gonzales
					</p>
					<h1 class="text-7xl sm:text-8xl">Liempo.</h1>
					<h2 class="mt-2 text-3xl sm:text-4xl">Mobile / iOS / Full-Stack Product Engineer.</h2>
					<p class="mt-5 max-w-2xl font-sans text-base leading-7 text-white/75 sm:text-lg">
						I build production mobile apps, internal tools, backend integrations, and release
						workflows across SwiftUI, Android, Flutter, React, Node.js, and delivery systems.
					</p>
				</div>

				{#each cards as card}
					<Card on:cardenter={cardenter} on:cardleave={cardleave}>
						<div class="flex h-full w-full flex-col justify-between p-5">
							<div>
								<h3 class="font-mirage text-3xl">{card.number}</h3>
								<p class="mt-3 text-lg font-bold leading-tight">{card.title}</p>
							</div>
							<div>
								<p class="text-sm leading-5 text-white/80">{card.body}</p>
								<p class="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100/90">
									{card.link}
								</p>
							</div>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</Blob>
</main>

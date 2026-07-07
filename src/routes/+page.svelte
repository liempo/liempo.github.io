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

	const highlights = [
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

	const projects = [
		{
			index: '01',
			name: 'Career Match by JKEC',
			kind: 'Production iOS app',
			detail:
				'SwiftUI app delivery at Astra Applications with Figma implementation, TestFlight/App Store workflows, and production maintenance.',
			stack: 'SwiftUI · iOS · App Store · TestFlight',
			link: 'apps.apple.com/ph/app/career-match-by-jkec/id6479643541'
		},
		{
			index: '02',
			name: 'Worldwide Auctioneers',
			kind: 'iOS / API integration',
			detail:
				'Production iOS work involving GraphQL-connected mobile features and release-oriented delivery.',
			stack: 'iOS · GraphQL · API integration',
			link: 'Private / production work'
		},
		{
			index: '03',
			name: 'CareerQuest Stack',
			kind: 'Full-stack product system',
			detail:
				'Backend middleware, MQTT/tag ingestion, dashboard and checkout workflows, QR scanning, PDF reporting, Docker deployment, and automation support.',
			stack: 'Node.js · Fastify · MQTT · React · Docker',
			link: 'Internal / resume-safe summary'
		},
		{
			index: '04',
			name: 'Orbit Tracking',
			kind: 'Android maps project',
			detail:
				'Fleet and device tracking Android application with multi-user location tracking and turn-by-turn navigation workflows.',
			stack: 'Android · Mapbox SDK · Location',
			link: 'github.com/liempo/orbit'
		},
		{
			index: '05',
			name: 'AR Mobile Experiments',
			kind: 'Android / ARCore',
			detail:
				'Interior design and ecommerce concepts using augmented reality for product and space visualization.',
			stack: 'Android · ARCore · Mobile UX',
			link: 'github.com/liempo/furniture · /fashion'
		},
		{
			index: '06',
			name: 'Radicalize',
			kind: 'Automation utility',
			detail: 'Python utility for merging multiple calendar sources into a target Radicale server.',
			stack: 'Python · CalDAV · Radicale',
			link: 'github.com/liempo/radicalize'
		}
	]

	const stackGroups = [
		{
			title: 'Mobile',
			items: ['Swift', 'SwiftUI', 'UIKit', 'iOS', 'Kotlin', 'Android', 'Flutter', 'Dart']
		},
		{
			title: 'Product UI',
			items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Figma implementation']
		},
		{
			title: 'Backend / Data',
			items: ['Node.js', 'Fastify', 'GraphQL', 'REST APIs', 'PostgreSQL', 'SQLite', 'MQTT']
		},
		{
			title: 'Delivery',
			items: ['GitHub Actions', 'Docker Compose', 'Caddy', 'Linux', 'TestFlight', 'App Store']
		}
	]

	const timeline = [
		{
			years: '2023 — Present',
			role: 'Astra Applications, LLC',
			detail:
				'iOS Developer / Software Engineer working across SwiftUI apps, GraphQL integrations, internal tools, backend/data support, CI/CD, and release delivery.'
		},
		{
			years: '2022 — 2023',
			role: 'Bigcat Software Solutions, Inc.',
			detail:
				'iOS Developer rebuilding and maintaining the Mansion88 native iOS application with a focus on maintainability and future feature flexibility.'
		},
		{
			years: '2021 — 2022',
			role: 'Leapfroggr Inc / SeriousMD',
			detail:
				'iOS Developer building native iPhone and iPad features from company requirements into production mobile workflows.'
		},
		{
			years: '2017 — 2021',
			role: 'Freelance / Android / ML / Python',
			detail:
				'Cross-platform Flutter apps, Android applications, Kotlin/LibGDX features, TensorFlow prototypes, and Odoo ERP customization.'
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
		<div
			class="mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 py-12 text-white sm:px-10 lg:py-16"
		>
			<section class="grid min-h-[82vh] content-center gap-8 lg:grid-cols-4" aria-label="Intro">
				<div class="font-mirage lg:col-span-4">
					<p class="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">
						Alec John O. Gonzales
					</p>
					<h1 class="text-7xl sm:text-8xl lg:text-9xl">Liempo.</h1>
					<h2 class="mt-2 max-w-4xl text-3xl sm:text-4xl lg:text-5xl">
						Mobile / iOS / Full-Stack Product Engineer.
					</h2>
					<p class="mt-6 max-w-3xl font-sans text-base leading-7 text-white/75 sm:text-lg">
						I build production mobile apps, internal tools, backend integrations, and release
						workflows across SwiftUI, Android, Flutter, React, Node.js, and delivery systems.
					</p>
				</div>

				{#each highlights as card}
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
			</section>

			<section class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]" aria-labelledby="about-title">
				<div class="font-mirage">
					<p class="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Profile</p>
					<h2 id="about-title" class="mt-3 text-5xl sm:text-6xl">Mobile-first, product-aware.</h2>
				</div>
				<div class="space-y-6 text-base leading-8 text-white/75 sm:text-lg">
					<p>
						My strongest public story is production iOS delivery at Astra Applications: SwiftUI
						implementation, GraphQL-connected mobile features, TestFlight/App Store workflows, and
						product coordination across design, backend, content, and release needs.
					</p>
					<p>
						I also work comfortably around the app: internal tools, backend/data integration, CI/CD,
						Docker-based deployment support, and the kind of debugging that keeps a shipping team
						from turning into a corporate escape room.
					</p>
				</div>
			</section>

			<section class="space-y-8" aria-labelledby="work-title">
				<div class="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
					<div class="font-mirage">
						<p class="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Work</p>
						<h2 id="work-title" class="mt-3 text-5xl sm:text-6xl">Selected systems.</h2>
					</div>
					<p class="max-w-2xl text-base leading-7 text-white/70">
						Public links where available. Internal or employer-owned work stays at resume-safe stack
						and outcome level. A rare moment of restraint. Cherish it.
					</p>
				</div>

				<div class="grid gap-6 lg:grid-cols-2">
					{#each projects as project}
						<Card on:cardenter={cardenter} on:cardleave={cardleave}>
							<div class="flex min-h-80 flex-col justify-between p-6">
								<div>
									<div class="flex items-start justify-between gap-5">
										<span class="font-mirage text-4xl text-white/90">{project.index}</span>
										<span
											class="text-right text-xs font-semibold uppercase tracking-[0.18em] text-teal-100/80"
										>
											{project.kind}
										</span>
									</div>
									<h3 class="mt-8 text-2xl font-bold leading-tight">{project.name}</h3>
									<p class="mt-4 text-sm leading-6 text-white/75">{project.detail}</p>
								</div>
								<div>
									<p class="text-sm font-semibold text-white/85">{project.stack}</p>
									<p
										class="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100/90"
									>
										{project.link}
									</p>
								</div>
							</div>
						</Card>
					{/each}
				</div>
			</section>

			<section class="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]" aria-labelledby="stack-title">
				<div class="font-mirage">
					<p class="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Stack</p>
					<h2 id="stack-title" class="mt-3 text-5xl sm:text-6xl">Tools with receipts.</h2>
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					{#each stackGroups as group}
						<div class="rounded-lg border border-white/60 bg-black/10 p-5">
							<h3 class="font-mirage text-3xl">{group.title}</h3>
							<div class="mt-5 flex flex-wrap gap-2">
								{#each group.items as item}
									<span class="rounded-full border border-white/25 px-3 py-1 text-sm text-white/80">
										{item}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section class="space-y-8" aria-labelledby="experience-title">
				<div class="font-mirage">
					<p class="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Experience</p>
					<h2 id="experience-title" class="mt-3 text-5xl sm:text-6xl">Timeline.</h2>
				</div>
				<div class="space-y-4">
					{#each timeline as item}
						<div
							class="grid gap-3 rounded-lg border border-white/50 bg-black/10 p-5 sm:grid-cols-[180px_1fr]"
						>
							<p class="text-sm font-semibold text-teal-100">{item.years}</p>
							<div>
								<h3 class="text-xl font-bold">{item.role}</h3>
								<p class="mt-2 text-sm leading-6 text-white/70">{item.detail}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section
				class="grid gap-8 pb-12 lg:grid-cols-[1fr_auto] lg:items-end"
				aria-labelledby="contact-title"
			>
				<div class="font-mirage">
					<p class="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">Contact</p>
					<h2 id="contact-title" class="mt-3 max-w-3xl text-5xl sm:text-6xl">
						Remote-friendly from the Philippines.
					</h2>
				</div>
				<div class="space-y-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
					<p>gonzalesalec@gmail.com</p>
					<p>+63 956 068 7614</p>
					<p>linkedin.com/in/liempo</p>
					<p>github.com/liempo</p>
				</div>
			</section>
		</div>
	</Blob>
</main>

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

	const navItems = [
		{ label: 'Profile', href: '#profile' },
		{ label: 'Work', href: '#work' },
		{ label: 'Stack', href: '#stack' },
		{ label: 'Timeline', href: '#timeline' },
		{ label: 'Contact', href: '#contact' }
	]

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
			link: 'App Store',
			href: 'https://apps.apple.com/ph/app/career-match-by-jkec/id6479643541'
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
			link: 'GitHub',
			href: 'https://github.com/liempo/orbit'
		},
		{
			index: '05',
			name: 'AR Mobile Experiments',
			kind: 'Android / ARCore',
			detail:
				'Interior design and ecommerce concepts using augmented reality for product and space visualization.',
			stack: 'Android · ARCore · Mobile UX',
			link: 'Furniture / Fashion repos',
			href: 'https://github.com/liempo/furniture'
		},
		{
			index: '06',
			name: 'Radicalize',
			kind: 'Automation utility',
			detail: 'Python utility for merging multiple calendar sources into a target Radicale server.',
			stack: 'Python · CalDAV · Radicale',
			link: 'GitHub',
			href: 'https://github.com/liempo/radicalize'
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
		<div class="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-center px-4 py-4">
			<nav
				class="site-nav pointer-events-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-3 text-white/80"
			>
				<a href="#top" class="text-xs font-bold uppercase tracking-[0.28em] text-teal-100"
					>Liempo / 2026</a
				>
				<div
					class="hidden items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] sm:flex"
				>
					{#each navItems as item}
						<a
							class="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-teal-100"
							href={item.href}
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		</div>

		<div class="grid-backdrop pointer-events-none fixed inset-0" />

		<div
			class="mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 py-12 pt-28 text-white sm:px-10 lg:py-16 lg:pt-32"
		>
			<section
				id="top"
				class="relative grid min-h-[82vh] content-center gap-8 lg:grid-cols-4"
				aria-label="Intro"
			>
				<div
					class="absolute -left-6 top-10 hidden h-40 w-px bg-gradient-to-b from-teal-200 to-transparent lg:block"
				/>
				<div class="font-mirage lg:col-span-4">
					<p class="kicker mb-4">Alec John O. Gonzales</p>
					<h1 class="serif-display text-[5.2rem] sm:text-[8rem] lg:text-[10.6rem]">Liempo.</h1>
					<h2 class="serif-display mt-4 max-w-5xl text-4xl sm:text-5xl lg:text-6xl">
						Mobile / iOS / Full-Stack Product Engineer.
					</h2>
					<div class="rule mt-7 h-px max-w-3xl" />
					<p class="mt-7 max-w-3xl font-sans text-base leading-8 text-white/74 sm:text-xl">
						I build production mobile apps, internal tools, backend integrations, and release
						workflows across SwiftUI, Android, Flutter, React, Node.js, and delivery systems.
					</p>
				</div>

				{#each highlights as card}
					<Card on:cardenter={cardenter} on:cardleave={cardleave}>
						<div class="flex h-full w-full flex-col justify-between p-6">
							<div>
								<div class="flex items-start justify-between gap-4">
									<h3 class="serif-display text-4xl">{card.number}</h3>
									<span
										class="h-2 w-2 rounded-full bg-teal-200/80 shadow-[0_0_24px_rgba(153,255,232,.8)]"
									/>
								</div>
								<p class="mt-6 text-xl font-bold leading-tight">{card.title}</p>
							</div>
							<div>
								<p class="text-sm leading-6 text-white/76">{card.body}</p>
								<p class="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-100/95">
									{card.link}
								</p>
							</div>
						</div>
					</Card>
				{/each}
			</section>

			<section
				id="profile"
				class="panel-glow grid scroll-mt-28 gap-10 rounded-[2rem] border border-white/10 p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-10"
				aria-labelledby="about-title"
			>
				<div class="font-mirage">
					<p class="kicker">Profile</p>
					<h2 id="about-title" class="serif-display mt-4 text-6xl sm:text-7xl">
						Mobile-first, product-aware.
					</h2>
				</div>
				<div class="space-y-7 text-base leading-8 text-white/72 sm:text-lg">
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
					<div class="grid gap-3 pt-2 sm:grid-cols-3">
						<div class="rounded-2xl border border-white/15 p-4">
							<span class="kicker">Base</span>
							<p class="mt-2 font-bold">Philippines · Remote</p>
						</div>
						<div class="rounded-2xl border border-white/15 p-4">
							<span class="kicker">Focus</span>
							<p class="mt-2 font-bold">Mobile + Product</p>
						</div>
						<div class="rounded-2xl border border-white/15 p-4">
							<span class="kicker">Mode</span>
							<p class="mt-2 font-bold">Build · Ship · Verify</p>
						</div>
					</div>
				</div>
			</section>

			<section id="work" class="scroll-mt-28 space-y-10" aria-labelledby="work-title">
				<div class="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
					<div class="font-mirage">
						<p class="kicker">Work</p>
						<h2 id="work-title" class="serif-display mt-4 text-6xl sm:text-7xl">
							Selected systems.
						</h2>
					</div>
					<p class="max-w-2xl text-base leading-7 text-white/68">
						Public links where available. Internal or employer-owned work stays at resume-safe stack
						and outcome level. A rare moment of restraint. Cherish it.
					</p>
				</div>

				<div class="grid gap-6 lg:grid-cols-2">
					{#each projects as project}
						<Card variant="project-card" on:cardenter={cardenter} on:cardleave={cardleave}>
							<div class="flex min-h-[23rem] flex-col justify-between p-6 sm:p-7">
								<div>
									<div class="flex items-start justify-between gap-5">
										<span class="serif-display text-5xl text-white/90">{project.index}</span>
										<span
											class="max-w-[14rem] text-right text-xs font-bold uppercase tracking-[0.22em] text-teal-100/86"
										>
											{project.kind}
										</span>
									</div>
									<h3 class="mt-9 text-3xl font-black leading-tight tracking-[-0.04em]">
										{project.name}
									</h3>
									<p class="mt-5 text-sm leading-7 text-white/72">{project.detail}</p>
								</div>
								<div>
									<p class="text-sm font-black text-white/90">{project.stack}</p>
									{#if project.href}
										<a
											class="mt-4 inline-flex min-h-11 items-center rounded-full border border-teal-100/30 px-4 text-xs font-bold uppercase tracking-[0.22em] text-teal-100 transition hover:border-teal-100 hover:bg-teal-100/10"
											href={project.href}
											target="_blank"
											rel="noreferrer"
										>
											{project.link} →
										</a>
									{:else}
										<p class="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-teal-100/90">
											{project.link}
										</p>
									{/if}
								</div>
							</div>
						</Card>
					{/each}
				</div>
			</section>

			<section
				id="stack"
				class="scroll-mt-28 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
				aria-labelledby="stack-title"
			>
				<div class="font-mirage">
					<p class="kicker">Stack</p>
					<h2 id="stack-title" class="serif-display mt-4 text-6xl sm:text-7xl">
						Tools with receipts.
					</h2>
				</div>
				<div class="grid gap-5 sm:grid-cols-2">
					{#each stackGroups as group}
						<div class="site-card rounded-[1.15rem] p-6">
							<h3 class="serif-display text-4xl">{group.title}</h3>
							<div class="mt-6 flex flex-wrap gap-2">
								{#each group.items as item}
									<span
										class="rounded-full border border-white/20 bg-white/[0.03] px-3 py-1.5 text-sm text-white/78"
									>
										{item}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section id="timeline" class="scroll-mt-28 space-y-9" aria-labelledby="experience-title">
				<div class="font-mirage">
					<p class="kicker">Experience</p>
					<h2 id="experience-title" class="serif-display mt-4 text-6xl sm:text-7xl">Timeline.</h2>
				</div>
				<div class="space-y-4">
					{#each timeline as item}
						<div class="site-card grid gap-4 rounded-[1.15rem] p-5 sm:grid-cols-[190px_1fr] sm:p-6">
							<p class="text-sm font-bold text-teal-100">{item.years}</p>
							<div>
								<h3 class="text-2xl font-black tracking-[-0.04em]">{item.role}</h3>
								<p class="mt-3 text-sm leading-7 text-white/70">{item.detail}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section
				id="contact"
				class="panel-glow grid scroll-mt-28 gap-8 rounded-[2rem] border border-white/10 p-6 pb-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-10"
				aria-labelledby="contact-title"
			>
				<div class="font-mirage">
					<p class="kicker">Contact</p>
					<h2 id="contact-title" class="serif-display mt-4 max-w-3xl text-6xl sm:text-7xl">
						Remote-friendly from the Philippines.
					</h2>
				</div>
				<div class="space-y-3 text-sm font-bold uppercase tracking-[0.22em] text-white/80">
					<a class="block transition hover:text-teal-100" href="mailto:gonzalesalec@gmail.com"
						>gonzalesalec@gmail.com</a
					>
					<a class="block transition hover:text-teal-100" href="tel:+639560687614"
						>+63 956 068 7614</a
					>
					<a
						class="block transition hover:text-teal-100"
						href="https://www.linkedin.com/in/liempo/"
						target="_blank"
						rel="noreferrer">linkedin.com/in/liempo</a
					>
					<a
						class="block transition hover:text-teal-100"
						href="https://github.com/liempo"
						target="_blank"
						rel="noreferrer">github.com/liempo</a
					>
				</div>
			</section>
		</div>
	</Blob>
</main>

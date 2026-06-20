---
title: Scaling NFT Metadata Serving Without Overprovisioning the Backend
summary: How I extracted NFT metadata serving from a monolithic backend to handle unpredictable marketplace traffic spikes without affecting the rest of the system.
coverImage: /images/case-studies/nft-metadata-server/thumbnail.png
coverImageAlt: NFT metadata server architecture
---

We had a monolithic backend. A single NestJS application responsible for several parts of the system. Among its responsibilities, it served public metadata endpoints for NFTs whose *metadata could change* based on actions taken by their owners.

This created a reliability problem. Marketplaces like OpenSea would occasionally hit these endpoints to refresh metadata on their side. *These spikes were rare and unpredictable*, but when they happened, *they could hammer the backend*.

As the monolith also handled other responsibilities, including long-running processes, when those processes ran at the same time as a marketplace traffic spike, **the backend became overloaded and latency increased**. Autoscaling helped, but new instances still took time to spin up - and **fine-tuning autoscaling around these marketplace spikes also was not ideal**, since it would often *scale the entire monolith unnecessarily*.

The solution I proposed was to extract NFT metadata serving into a separate service. The creatively named: *NFT Metadata Server*.

The main challenge was that the monolith still needed to remain the source of truth. The NFT metadata changed based on owner actions, and moving that responsibility entirely into the new service would have introduced unnecessary coupling and complexity.

Instead, the monolith had to remain the source of truth, while the NFT Metadata Server kept its own local copy of the metadata in its database. The new service had **one narrow responsibility**: serve NFT metadata through public endpoints. It was not responsible for deciding when or how metadata changed.

To keep the local copy updated, I designed an ***event-driven system***. The monolith published metadata update events to an SNS topic, which fanned out messages to interested services through SQS (even though this only the first microservice, I designed the system for future ones). The NFT Metadata Server consumed those events and updated its own database. Although this introduced the possibility of briefly stale metadata, **that tradeoff was acceptable** for this use case.

I also planned the implementation, sequenced the work, and created the tickets for the team. This included the initial migration of relevant metadata from the monolith's database into the new service's database as well.

In the end, we had two decoupled services with clearer responsibilities. The NFT Metadata Server could use a more aggressive autoscaling policy tuned specifically for the marketplace traffic spikes, without overprovisioning the rest of the backend. After the migration, ***we no longer saw latency issues*** when the public metadata endpoints were hammered.

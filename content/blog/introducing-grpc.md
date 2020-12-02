---
date: 2021-12-02
title: Introducing gRPC Support!
slug: introducing-grpc
tags: ["announcement"]
---

We're happy to announce the release of gRPC support for Insomnia, now available in the 2020.5 release.

**With gRPC support, developers can make requests to gRPC backend services just like they can today with REST / GraphQL services from Insomnia.**

<!--more-->

[![gRPC Screenshot](/images/blog/grpc.png)](/images/blog/grpc.png)


Insomnia, as you may or may not know, historically has only supported REST and GraphQL requests. With the growing emergence of IoT, microservices and mesh networks, APIs need to be more performant and scalable than ever before. This has given rise to the growing adoption of gRPC, a high-performance, open source, universal RPC framework developed at Google. With the growing adoption of gRPC, developers understandably need an easy way to rapidly test and debug gRPC services just like they would for their REST/GraphQL services.

Currently, developers rely on a mix of tools to consume REST, GraphQL and gRPC services, all with different opinions on how requests need to be defined, sent, stored and shared. That's why we've built gRPC support into Insomnia, so developers can have a single tool to define, send, store and share requests across REST, GraphQL – and now gRPC – services, making Insomnia the first API client where developers can define, send and share requests for all three services from the same tool.

By reducing the number of tools required in a developer’s workflow, we can reduce the development cycles spent switching context and increase developer productivity. Having gRPC support within Insomnia means that developers no longer need to switch between multiple applications/tools when debugging their services. Sometimes developers might be making a request to a gRPC service, and then a REST service next. Now, developers can save tons of development and debugging time by defining all requests across all their services, including gRPC in Insomnia, and instantly share them with their team.

We also wanted to ensure that we support the majority of use cases for gRPC out of the box, so with Insomnia 2020.5, developers can make TLS and non-TLS unary, server streaming, client streaming and bi-directional streaming calls to their gRPC services. Over the next few releases, we are looking at improving gRPC support with things like client certificates, unit testing support and more.

Along with defining and sending gRPC calls, the 2020.5 release also includes:

- Environment variable hyphen support
- GraphQL documentation reload on schema changes
- OAuth2 PKCE support
- Ability to delete synced workspaces from API

**Special Thanks: 🍻**<br> We'd like to give a huge shout out to Manfred Touron of [grpcb.in](https://grpcb.in) for the amazing service they have built, which was used heavily during the development of this release.

[Download Insomnia](https://insomnia.rest/download/), and try out making gRPC calls today!


---
app: com.insomnia.designer
channel: stable
date: 2020-12-02
slug: 2020.5.0
diffFrom: 2020.4.2
title: Insomnia Designer v2020.5.0
major:
- "[gRPC](https://grpc.io/) support [(several PRs)](https://github.com/Kong/insomnia/pulls?q=is%3Apr+is%3Amerged+label%3Agrpc+merged%3A<2020-11-26)"
- OAuth 2 [PKCE](https://oauth.net/2/pkce/) with authentication code authorization (PR:2652:DASPRiD) 
- Hyphens and other chars in environment variable keys (PR:2601:develohpanda)
minor: 
- GraphQL explorer shows field deprecation warnings (PR:2749:antoine29)
- Easier navigation to the app logs folder (PR:2728:conema)
- Ingress class annotation when generating Kubernetes config (PR:2709:rmsy)
- You can now clear OAuth 2 sessions manually, or optionally on restart (PR:2701:karolineKarkoschDrKlein)
- Network context available to request and response hook scopes 🔌 (PR:2662:jgiovaresco)
- Unit tests are now supported by the Insomnia V4 export format (PR:2663:sonicyeti)
- Support ISO-8859-1 encoding with Basic Auth credentials (PR:2642:jgiovaresco)
- Consistent UI scaling depending on the font size (PR:2710:martinpastore) (PR:2824:sonicyeti)
- Default shortcut to show keyboard settings on macOS has changed to `cmd+ctrl+shift+/` to avoid OS conflicts (PR:2649:jgiovaresco)
- Design sidebar method styling and click region revamp (PR:2632:sonicyeti)
fixes:
- Environment color picker works again (PR:2711:jgiovaresco)
- Correct application icons are now shown (PR:2766:sonicyeti)
- Cancelling a "Send and Download" request no longer shows an infinite spinner (PR:2721:jgiovaresco)
- Cancelling a request when multiple are running works again (PR:2696:selamanse)
- GraphQL schema updates reflect correctly in the explorer (PR:2747:antoine29)
- Single line editors now ignore new lines (PR:2704:thewheat)
- Code editor search bar no longer hides the content (PR:2697:antoine29)
- Copy as Curl now respects header casing (PR:2668:jgiovaresco)
- General housekeeping (PR:2783:nicholas-l) (PR:2752:simplywondrous) (PR:2727:jgiovaresco) (PR:2717:rmsy) (PR:2661:iamrajiv)
---

**Insomnia now officially supports [gRPC](https://grpc.io/)!** 🎉 

<!--more-->

gRPC has been a highly requested feature, and we're excited to release this into the wild. This initial release includes support for all four streaming types, simple TLS, cancellations, and concurrency.

![GraphQL explorer demo using GatsbyJS API](/images/screens/grpc.png)

In the future, we will look to add support for metadata and custom certificates, improve proto file management, and link gRPC with Insomnia environments. We look forward to your feedback; please request features or report bugs using the [issue tracker](https://github.com/Kong/insomnia/issues/new/choose)! ♥️

A total of 17 unique contributors were a part of this release, making it one of our biggest to date! 🤗

---

---
app: com.insomnia.designer
channel: stable
date: 2020-09-08
slug: 2020.4.0
diffFrom: 2020.3.3
major:
- Brand new design sidebar! (PR:2328:sonicyeti)
- Upgrade Electron 3 > 9 (PR:2403:gschier)
minor:
- Attach code fold marker to themes (PR:2406:develohpanda)
- Copy version info to clipboard (PR:2480:Innoxious) (PR:2480:john-vuong)
- Improve readability of search results (PR:2441:sonicyeti)
- Handle silent failures for git operations (PR:2432:develohpanda)
- Deterministic importing of Swagger 2 (PR:2474:gschier)
- Improve performance of raw response viewer (PR:2475:aszx87410)
- Honor servers variable defaults for OpenAPI3 import (PR:2151:develohpanda)
- Add tooltip with docs for git sync (PR:2517:bartolomej)
- Add Kotlin and Axios code generation support (PR:2526:seanghay)
- Unit testing styling updates (PR:2533:sonicyeti) (PR:2534:sonicyeti)
- Add manual prettify for multipart editor (PR:2571:arjunkesava)
fixes:
- Fix variable autocomplete (PR:2394:gschier)
- Consistent export dropdown verbiage (PR:2476:aszx87410)
- Fix bulk query editor (PR:2479:develohpanda)
- Verbiage fixes (PR:2402:JinayJain) (PR:2343:obashistu) (PR:2477:luanldt)
- Fix links in the repository root (PR:2501:heithemmoumni)
- Fix case where incorrect tab is selected (PR:2499:rbarbazz)
- Improve version check script output (PR:2559:yashshah1)
---
This release is a pivot release, with no major functional changes. It includes several UX improvements, as well as a major update of Electron.

---
date: 2021-02-04
title: Legacy Sync is going away!
slug: sunsetting-legacy-sync
tags: [announcement]
---

**TL;DR – With the next release of Insomnia, we are promoting Version Control Beta to stable and removing Legacy Sync from the app.**

## Why is Legacy Sync going away?

The Legacy Sync system has a number of issues leading to potential data corruption or loss. It can fail silently due to conflicts that it cannot resolve, and does not work well when a workspace is shared between multiple people in a team.

In order to resolve these issues, we created [Version Control Sync](https://support.insomnia.rest/article/67-version-control). Rather than maintaining two separate sync systems, we are now removing Legacy Sync in favour of [Version Control Sync](https://support.insomnia.rest/article/67-version-control) so that we can focus our engineering efforts on improving the overall sync experience.

## What do I need to do?

If you are using Legacy Sync, please backup your workspace and migrate over to the Version Control Beta by [enabling it under Application Preferences](https://support.insomnia.rest/article/67-version-control#getting-started).

In the upcoming release of Insomnia, support for Legacy Sync will be removed from Insomnia, and Version Control Sync will be enabled by default. This means that you will not be able to retrieve workspaces that are using Legacy Sync anymore, if they have not previously been synced locally.

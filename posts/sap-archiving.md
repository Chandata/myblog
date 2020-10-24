---
title: SAP Archiving
date: 2020-10-24T16:44:13.015Z
author: Chandan Hemnani
description: How to even start with archiving
layout: layouts/post.njk
---
These needs to be built step by step:

1) Provision Space on disc (Could be on public cloud), using nfs.

2) Mount the file system on each of the application servers.

3) Configure in SAP using File transaction where you map the physical space to a logical space. Ensure you maintain separate per archiving object.

4) Ensure the info object fields are activated in the sari transaction.

5) Archive off happily to this storage area.
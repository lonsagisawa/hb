# hb

Minimal **h**eadless CMS for **b**log

**This is work in progress, not finished at all!**

## Problem

[Jamstack](https://jamstack.org) itself really awesome, I believe it is future
of static content website. However headless CMSes are too huge and too
complicated for small blogging.\
Strapi provides self host option for headless CMS, but it's fairly large chunk
of code and requires minimum of 2GB RAM, usually cheapest ~$5/mo VPS is not
enough.

## Solution

Provide super simple, flat Markdown file based headless CMS could run in 1GB
RAM.

## Run

Install [Deno](https://deno.land) first!

```shell
deno --allow-net --allow-read hb.ts
```

# CRS Lab Website

[![Build and Deploy](https://github.com/CRSLabASU/CRSLabASU.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/CRSLabASU/CRSLabASU.github.io/actions/workflows/deploy.yml)

> [!IMPORTANT]
> **I renamed the default branch from `master` to `main`.**
> If you cloned this repo before the rename, update your local copy by running:
>
> ```sh
> git branch -m master main
> git fetch origin
> git branch -u origin/main main
> git remote set-head origin -a
> ```
>
> New clones need nothing. The site deploys from `main`, so push your changes there.

The website of the Cooperative Robotic Systems (CRS) Laboratory at Arizona State University, live at **https://crslabasu.github.io**.

It is a static site built with [Astro](https://astro.build). Almost all content lives in plain text files (Markdown, YAML, BibTeX), so most updates need no coding: edit a file, commit to `main`, and the site rebuilds and goes live in about two minutes.

## Updating content

| To change…                          | Edit                                        |
| ----------------------------------- | ------------------------------------------- |
| News posts                          | `src/content/news/` (one `.md` file each)   |
| People                              | `src/data/people.yaml` + photo in `public/people/` |
| Publications                        | `src/data/publications.bib`                 |
| Research projects (per thrust)      | `src/content/projects/`                     |
| Older system projects               | `src/content/systemProjects/`               |
| Research thrust descriptions        | `src/data/researchThrusts.ts`               |
| Lab name, address, email, mission   | `src/data/lab.ts`                           |
| Sponsor logos                       | `src/data/sponsors.ts` + logo in `public/sponsors/` |

You can edit files directly on GitHub (open the file, click the pencil icon, then **Commit changes**) or locally (see [Running locally](#running-locally)).

### Add a news post

Create `src/content/news/YYYY-MM-short-title.md`:

```md
---
title: "Paper accepted to IJCAI 2026"
date: 2026-05-01
summary: "One-line summary shown in the news list."
---

Full text of the post (Markdown).
```

### Add or update a person

In `src/data/people.yaml`, add an entry under `faculty`, `postdocs`, `phd`, `ms`, or `alumni`. Only `name` and `role` are required:

```yaml
  - name: Jane Doe
    role: "Ph.D. Student · Fall 2026–present"
    note: "M.S., ASU 2025"          # optional
    photo: /people/jane.png         # file goes in public/people/
    interests: [Human-robot teaming]
    links:                          # all optional
      email: jdoe@asu.edu
      website: https://...
      scholar: https://scholar.google.com/...
      github: https://github.com/...
      linkedin: https://www.linkedin.com/in/...
```

When someone graduates, move their entry to `alumni` and update `role` (and `note`, e.g. "Now at …"). Indentation matters in YAML: use spaces, not tabs.

### Add a publication

Paste a BibTeX entry into `src/data/publications.bib` under the matching `%%` section. Use `@article` for journals, `@inproceedings` for conferences, and `@phdthesis` for dissertations. Optional extra fields:

```bibtex
  pdf = {https://arxiv.org/pdf/...},
  code = {https://github.com/...},
  award = {Best Paper Award},
  venue_type = {workshop},   % lists it under Workshop papers
  abstract = {...},
```

Lab members' names are highlighted automatically when they match someone in `people.yaml`.

### Add a research project

Create a file in `src/content/projects/`:

```md
---
title: "Project Title"
summary: "One sentence for cards."
thrust: decision-making   # perception | decision-making | learning | communication
featured: true            # marked as featured on its thrust page
order: 1                  # lower numbers appear first
---

Project description (Markdown).
```

Older work grouped by system type (`human-robot`, `robot-robot`, `multi-agent`) goes in `src/content/systemProjects/` with `system`, `category`, `title`, optional `images` (paths under `public/images/systems/`), `citation`, and `order`.

### Images

Put images in `public/` and refer to them with a path starting at `/`. For example, `public/people/jane.png` becomes `/people/jane.png`. Keep files reasonably small (under ~500 KB).

### Homepage gallery

The slider at the top of the homepage shows every image in `public/gallery/`. To add, remove, or reorder photos, add, delete, or rename files there. No code changes needed.

- **Order** follows the file name, so prefix with numbers: `01-lab-group.jpg`, `02-fetch-demo.jpg`, ….
- **Alt text** (read aloud by screen readers) comes from the file name: `02-fetch-demo.jpg` becomes "Fetch demo". Use descriptive names.
- **Shape:** images are cropped to fill a 16:9 frame, so landscape photos work best. Resize to about 1600 px wide and keep each under ~400 KB.
- It cycles every 5 seconds, pauses while hovered, and can be clicked, swiped, or arrowed through.
- If the folder is empty or missing, the homepage shows the single `heroImage` from `lab.ts` instead.

### Videos

Anywhere a page shows a content image (homepage hero `heroImage` in `lab.ts`, thrust `image` in `researchThrusts.ts`, news `image`, system project `images`), you can use a video instead. Put the file in `public/videos/` and use its path:

```yaml
image: /videos/demo.mp4
```

By default a video plays automatically, muted, on a loop, like a GIF. It only starts downloading when it scrolls into view, and it pauses off-screen. To change that, use the longer form:

```yaml
image:
  src: /videos/demo.mp4
  caption: "Shown under the video"  # captions are off unless set (works for images too)
  poster: /videos/demo.jpg   # still frame shown before it loads (recommended)
  autoplay: false            # show play controls instead
  loop: false
```

Use `.mp4` (H.264), keep clips short, and compress them, since a video is usually much larger than an image. Aim for under ~5 MB. With [ffmpeg](https://ffmpeg.org):

```sh
ffmpeg -i input.mov -vf "scale=1280:-2" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart public/videos/demo.mp4
```

(`-an` removes audio, which autoplaying videos can't play anyway.)

## Publishing and checks

- Every push to `main` runs **Build and Deploy** (`.github/workflows/deploy.yml`). If the build succeeds, the live site updates; the badge above shows the latest result.
- Pull requests are built as a check but not deployed, so mistakes can be caught before they go live.
- If the build fails, open the **Actions** tab, click the failed run, and read the error. It usually names the file and line. Typical causes are a missing required field, a bad date, YAML indentation, or an unclosed `{` in BibTeX.


## Running locally

Requires [Node.js](https://nodejs.org) 22+.

```sh
npm install
npm run dev       # preview at http://localhost:4321, reloads on save
npm run build     # full production build + type check (same as CI)
npm run preview   # serve the built site
```

Site search is generated by Pagefind during `npm run build`, so it only works in the built site (`npm run preview`), not in `npm run dev`.

## Project structure

```
src/
  content/      Markdown collections (news, projects, systemProjects); schemas in config.ts
  data/         Lab info, people, publications, thrusts, sponsors
  pages/        One file per route (index, research, people, publications, news, contact)
  components/   Reusable UI pieces (nav, footer, publication list, search, theme toggle)
  layouts/      Shared page shell (BaseLayout.astro)
  lib/          Loaders that parse people.yaml and publications.bib
  styles/       Global CSS (Tailwind)
public/         Static files served as-is (images, fonts, logos, robots.txt)
old_website/    Archive of the previous site; not built or published
```

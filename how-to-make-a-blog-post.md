# How to publish a blog post on duwithacks.com

> **Note:** The blog is built but not live yet. Set `blogEnabled = true` in `client/src/lib/site.ts` when you're ready to publish.

Posts are stored as Markdown files in the repo. When the site is deployed, each one becomes a public page at `https://duwithacks.com/blog/your-post-slug`. **Only team members create those files** - guests send a draft in any format and the team handles the rest.

---

## Quick Links

**Template file:** `client/content/blog/_template.md`  
**Live example:** `client/content/blog/why-hackathons-matter.md`  
**Published URL pattern:** `https://duwithacks.com/blog/<filename-without-.md>`

---

## For team members

You need access to the GitHub repository and permission to open pull requests. This section is for anyone publishing a post - whether you wrote it yourself or you're converting a guest submission.

### 1. Copy the template

In the repo, go to:

```
client/content/blog/
```

Duplicate `_template.md` and rename it using **lowercase words separated by hyphens**, for example:

```
first-hackathon-tips.md
guest-spotlight-jane-smith.md
```

The filename becomes the URL slug. `first-hackathon-tips.md` → `/blog/first-hackathon-tips`.

### 2. Fill in the header

At the top of the file, between the `---` lines, set:

| Field | Required | Notes |
|-------|----------|-------|
| `title` | Yes | The headline shown on the page |
| `description` | Yes | Short summary for Google and social previews |
| `date` | Yes | Publication date as `YYYY-MM-DD` |
| `author` | Yes | Author's display name |
| `authorBio` | No | One line about the author |
| `authorType` | Yes | `team` for internal posts, `guest` for guest articles |
| `published` | Yes | `true` to publish, `false` to keep as a draft |
| `tags` | No | List of topics, e.g. `hackathons`, `women-in-tech` |

**Example for a team post:**

```yaml
---
title: "Five things to bring to your first hackathon"
description: "A practical packing list for DUWiT Hacks - laptop, charger, and the rest."
date: "2026-09-15"
author: "DUWiT Hacks team"
authorBio: "Durham University Women in Tech."
authorType: team
published: true
tags:
  - hackathons
  - tips
---
```

**When publishing a guest submission** - use the same steps, but set `authorType: guest` and fill in the guest's name and bio:

```yaml
---
title: "Why I sponsor women-in-tech events"
description: "A sponsor's perspective on outreach, talent, and community."
date: "2026-10-01"
author: "Alex Chen"
authorBio: "Engineering lead at Example Co."
authorType: guest
published: true
tags:
  - sponsors
  - guest
---
```

The guest does not create this file - you do, after receiving their draft.

### 3. Write the article body

Below the closing `---`, write the article in **Markdown**.

Supported formatting:

- `## Heading` and `### Subheading`
- **bold** and *italic*
- Bullet lists and numbered lists
- [Links](https://example.com)
- Blockquotes with `> quote text`
- Inline `code` and fenced code blocks

Keep paragraphs short. Aim for at least 300–500 words for SEO on substantive articles.

### 4. Preview locally (optional)

If you develop the site locally:

```bash
pnpm --filter "{client}..." install
pnpm --filter "{client}..." dev
```

Open `http://localhost:3000/blog` and your post URL.

### 5. Publish

1. Commit your new `.md` file
2. Open a pull request
3. After merge, Netlify rebuilds the site automatically
4. The post is live at `https://duwithacks.com/blog/<your-slug>`

### Drafts

Set `published: false` to keep a post out of the blog index and search results. Change it to `true` when you're ready to go live.

Files starting with `_` (like `_template.md`) are never published.

### Editing or removing a post

- **Edit:** change the same `.md` file and deploy again
- **Unpublish:** set `published: false` or delete the file

---

## For guest authors

You do **not** need access to the repository and you do **not** need to write Markdown. Send your content to the DUWiT Hacks team as a Google Doc, Word doc, or plain text email.

### What to send

Please include:

1. **Title** — clear, specific headline  
2. **Short description** — 1–2 sentences summarising the article (for Google)  
3. **Article body** — Google Doc, Word doc, or plain text is fine  
4. **Your name** — as you want it displayed  
5. **One-line bio** — e.g. role, organisation, or affiliation (optional but encouraged)  
6. **Preferred publish date** — if you have one  

### What happens next

1. The team reviews your draft (we'll check with you on any substantive edits)
2. A team member converts it into a Markdown file in the repo and sets `authorType: guest`
3. After publish, we'll send you the live link: `https://duwithacks.com/blog/...`
4. You're welcome to share the link on LinkedIn, with your organisation, etc.

---

## SEO checklist (for whoever publishes)

Before setting `published: true`, confirm:

- [ ] `title` is specific and under 60 characters if possible  
- [ ] `description` is unique and under 160 characters  
- [ ] `date` is correct  
- [ ] `author` and `authorBio` are accurate  
- [ ] At least one internal link to [duwithacks.com](https://duwithacks.com) or `/blog` where natural  

The site automatically adds sitemap entries, Open Graph metadata, and Article structured data for each published post.

---

## Need help?

- **Editing in VS Code:** see [`how-to-vs-code.md`](./how-to-vs-code.md)  
- **Technical / repo access:** contact Lead Organisers or Cate
- **Template:** `client/content/blog/_template.md`

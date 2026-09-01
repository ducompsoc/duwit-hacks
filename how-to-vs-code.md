# Quick guide: editing blog posts in VS Code

For team members who have the repo open in [Visual Studio Code](https://code.visualstudio.com/).

Full publishing steps are in [`how-to-make-a-blog-post.md`](./how-to-make-a-blog-post.md). This guide covers only the editor part.

---

## 1. Open the blog folder

In the left sidebar (**Explorer**), expand:

```
client  →  content  →  blog
```

You should see:

| File | Purpose |
|------|---------|
| `_template.md` | Blank post to copy |
| `why-hackathons-matter.md` | Example of a finished post |

---

## 2. Create a new post

1. Right-click the `blog` folder → **Copy** `_template.md`
2. Right-click again → **Paste**
3. Rename the copy to something like `first-hackathon-tips.md`  
   - Use **lowercase** and **hyphens** only  
   - The filename becomes the URL: `first-hackathon-tips.md` → `/blog/first-hackathon-tips`

---

## 3. Edit the header

Click your new file. At the top, between the `---` lines, fill in:

- `title` — headline on the page
- `description` — short summary for Google
- `date` — `YYYY-MM-DD`
- `author` — display name
- `authorType` — `team` or `sponsor` (write sponsor name)
- `published` — keep `false` until you're ready to go live

Delete the placeholder instruction lines in the body when you start writing.

---

## 4. Write the article

Below the closing `---`, write in plain text with simple formatting:

| You type | It becomes |
|----------|------------|
| `## Heading` | Section heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `- item` | Bullet list |
| `[text](https://url)` | A link |

**Tip:** Install the **Markdown All in One** extension (Extensions sidebar → search "Markdown All in One") for keyboard shortcuts and a live preview.

### Preview your formatting

- **Mac:** `Cmd + Shift + V`  
- **Windows:** `Ctrl + Shift + V`

Or right-click the file → **Open Preview**.

---

## 5. Save

**Mac:** `Cmd + S` · **Windows:** `Ctrl + S`

Unsaved files show a white dot on the tab. Save regularly.

---

## 6. Preview on the real site (optional)

Only needed if you run the site locally. In the integrated terminal (**View → Terminal**):

```bash
pnpm --filter "{client}..." dev
```

Open `http://localhost:3000/blog` in your browser.

> The blog is currently **turned off** on the live site (`blogEnabled = false`). Local preview still works once a developer enables it for testing.

---

## 7. Hand off for publishing

When your draft is ready:

1. Make sure `published: true` in the header (or leave `false` if it's still a draft)
2. Commit and push your file, or open a pull request on GitHub
3. Ask the Cate to review and merge

You don't need to touch any other files - just your `.md` file in `client/content/blog/`.

---

## Need help?

- **Writing / guest posts:** see [`how-to-make-a-blog-post.md`](./how-to-make-a-blog-post.md)  
- **Repo / deploy:** contact Cate  
- **VS Code basics:** [Getting started with VS Code](https://code.visualstudio.com/docs/introvideos/basics)

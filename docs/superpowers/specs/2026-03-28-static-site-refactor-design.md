# harperalpine.com — Static Site Refactor Design

**Date:** 2026-03-28
**Goal:** Convert PHP site to plain HTML static site hostable on GitHub Pages, with no build step.

---

## Overview

Replace all 6 `.php` pages with plain `.html` equivalents using a folder-per-page structure for clean URLs. All CSS, JS, and images remain untouched. PHP is removed entirely. The `static-site` branch is deployed directly via GitHub Pages branch deploy — no build step, no GitHub Actions.

---

## File Mapping

Clean URLs are achieved via a folder-per-page structure. Each page lives at `<page>/index.html`, which GitHub Pages serves at `/<page>` (no extension). The root page remains `index.html` at the repo root.

| From | To | Served at |
|------|----|-----------|
| `index.php` | `index.html` | `/` |
| `about.php` | `about/index.html` | `/about` |
| `chalet.php` | `chalet/index.html` | `/chalet` |
| `gallery.php` | `gallery/index.html` | `/gallery` |
| `to-do.php` | `to-do/index.html` | `/to-do` |
| `contact.php` | `contact/index.html` | `/contact` |

---

## PHP Removal Details

### Footer include (all pages)
`<?php include('inc/footer.php'); ?>` replaced by the contents of `inc/footer.php` inlined directly.

### Gallery dynamic image scan (`gallery.php`)
PHP scans 4 image directories and their thumbnail counterparts:
- `images/gallery/living/` + `images/gallery/living_thumbs/`
- `images/gallery/kitchen/` + `images/gallery/kitchen_thumbs/`
- `images/gallery/bedrooms/` + `images/gallery/bedrooms_thumbs/`
- `images/gallery/outside/` + `images/gallery/outside_thumbs/`

Replace with hardcoded `<div class="grid_2 thumb ..."><a href="..."><img src="..."/></a></div>` blocks using the actual filenames on disk.

**Known gallery files:**
- Living: DSCF4122, DSCF4646, DSCF4643, DSCF4132, DSC03433, DSC03441, DSCF4021, DSCF4636, DSCF4670, DSCF4062, DSCF4088, DSCF4112
- Kitchen: DSCF4090, DSCF4030, DSCF4029 (thumbs confirmed)
- Bedrooms: DSCF4656, DSCF4052, DSCF4046, DSCF4034, DSCF4035, DSCF4033, DSCF4638
- Outside: DSCF4094, DSC03468, DSC03456, DSC03462, DSC03471, DSC03465, DSCF4672

### Contact form (`contact.php`)
Remove the `<form action="mailer.php">` block and the "Contact Form" heading entirely. Keep:
- Ireland contact block (email, phone, postal address)
- Romania contact block (email, phone, postal address)
- Google Maps iframe
- "Getting Here" section

---

## Files to Delete / Not Carry Forward

These files exist in the repo but will not be included in the static site:
- `mailer.php`
- `sent.php`
- `phpinfo.php`
- `custom_404.php`
- `inc_test.php`
- `test.php`
- `indexnew.php`
- `inc/footer.php`

They will remain in the `main` branch (original code) but not be present in the static output on the `static-site` branch.

---

## GitHub Setup

### Branches
- `main` — original PHP source, committed as-is first
- `static-site` — refactored plain HTML, branched from `main`

### Repository
New public repo: `grahamharper/harperalpine-site`

### GitHub Actions
None — no workflow needed. No build step exists.

### GitHub Pages config
- Source: **Deploy from a branch** → `static-site` branch, `/ (root)`
- A `.nojekyll` file at the repo root prevents Jekyll processing
- No custom domain configured (can be added later)

---

## What Stays Unchanged

- All CSS files (`css/`)
- All JS files (`js/`)
- All images (`images/`)
- `downloads/` directory
- Nav links (relative URLs like `about`, `chalet`, etc. — GitHub Pages serves `about.html` at `/about.html`; nav links should use `about.html` to be safe on file:// and GitHub Pages)

---

## Nav Link Note

Current nav uses bare relative links (`href="about"`, `href="chalet"`, etc.). With the folder-per-page structure, these bare links work correctly on GitHub Pages — `/about` resolves to `about/index.html`. However, since pages now live in subdirectories, all asset paths (CSS, JS, images) must use root-relative paths (e.g., `/css/style.css`, `/images/logo.png`) rather than relative ones, so they resolve correctly from any subdirectory page.

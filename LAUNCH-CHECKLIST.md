# Launch checklist — v18.30

This release reorganizes the codebase ahead of the public launch:

- All `/v2/*` content moved to root URLs (`/work/dastak` instead of `/v2/work/dastak`)
- Old `/` v1 routes deleted entirely
- Components and field names cleaned up (`ContactFormV2` → `ContactForm`, `v2Image` → `image`, `v2Order` → `order`, `hiddenOnV2` → `hidden`)
- Catch-all `/v2/*` → `/*` redirect added in `next.config.mjs` so any legacy preview links still work
- Nav simplified (no v1/v2 toggle), Footer simplified (no version-aware socials, no X)

**Scope:** ~40 file operations. Significantly bigger than normal updates. Treat this push carefully.

---

## Why this checklist exists

Earlier deployments had two failure modes we want to avoid:

1. **Files left behind.** Unzipping a new version over an existing repo only *adds* and *overwrites* — it doesn't *delete* files that no longer exist in the new zip. Result: stale files linger, Vercel compiles dead code, things break.
2. **Antivirus quarantine.** Windows Defender / other AV tools sometimes quarantine specific files (heuristic false-positives on `fetch()` + embedded API keys). Files disappear before git can stage them.

The "nuclear" workflow below avoids both.

---

## Pre-deployment

1. **Close any tools** that might lock files in the project folder: VS Code, Sublime, Antigravity, anything with the portfolio folder open.

2. **Confirm Windows Defender exclusion is still active** for the portfolio folder. (Set up during v18.26.) If you reinstalled the OS or changed antivirus, re-add the exclusion: Windows Security → Virus & threat protection → Manage settings → Exclusions → Add folder.

3. **Verify the v18.30 zip is fully downloaded.** Right-click → Properties → confirm size matches what you see on download. Some browsers leave partial downloads if interrupted.

---

## Nuclear deployment workflow

This is for v18.30 specifically because of the large file-deletion volume. Future smaller releases can use the regular unzip-over-existing workflow.

### Step 1 — Back up your local working copy

```bash
cd <parent folder of portfolio>
cp -r portfolio portfolio_backup_pre_v18.30
```

Verify the backup contains `.git`:

```bash
ls portfolio_backup_pre_v18.30/.git
```

You should see git internals (HEAD, config, objects, refs, etc.). If `.git` is missing, your backup is incomplete — stop and figure out why before proceeding.

### Step 2 — Preserve `.git`, wipe everything else

```bash
mv portfolio/.git /tmp/portfolio-git-backup
rm -rf portfolio
mkdir portfolio
mv /tmp/portfolio-git-backup portfolio/.git
```

This guarantees a clean slate while keeping git history intact.

### Step 3 — Unzip v18.30 into the clean folder

```bash
cd portfolio
unzip /path/to/uxbyarsalan-portfolio-v18.30.zip
```

Or use the OS file manager — same effect.

### Step 4 — Verify before committing

```bash
git status
```

Expected output (approximate):
- ~10-15 modified files (route files at new locations, components)
- ~10 deleted files (old v1 route files, old `app/v2/*` route files)
- 1 renamed file pair (`ContactFormV2.js` deleted, `ContactForm.js` added — git may or may not detect as rename)
- Modified `lib/projects.js`, `next.config.mjs`, `components/Nav.js`, `components/Footer.js`, `components/WorkHorizontalScroll.js`

If `git status` shows anything weird (files you expect aren't there, unexpected dirty state, etc.) — STOP. Don't commit. Restore from `portfolio_backup_pre_v18.30` and investigate.

### Step 5 — Confirm `ContactForm.js` is physically present

This is the most common failure point.

```bash
ls components/ContactForm.js
```

Should print the file. If it says "No such file or directory" — antivirus quarantined it. Re-check exclusion settings and re-unzip.

### Step 6 — Commit & push

```bash
git add -A
git commit -m "v18.30: launch reorganization — move /v2/* to root, clean naming"
git push
```

### Step 7 — Wait for Vercel build to succeed

Watch the Vercel dashboard. The build should complete without errors. If it fails:
- Read the build log carefully
- If a "Module not found" error appears for `ContactForm` or anything else, antivirus likely interfered — see Step 5

### Step 8 — Smoke test on Vercel preview URL

Visit `portfolio-v2-final-bay.vercel.app` (the root, not `/v2`) and verify:

- [ ] Home page loads with horizontal-scroll work section
- [ ] Each of the 7 case studies opens: `/work/dastak`, `/work/city-watch`, `/work/punjab-jobs`, `/work/ess`, `/work/pitb-official`, `/work/aqi`, `/work/ebiz`
- [ ] `/making-of` loads with the new copy ("arguing for it", "story was the problem")
- [ ] `/resume` loads with mobile keywords
- [ ] `/contact` loads with contact info (no X) on left, working form on right
- [ ] Form submission shows inline success message
- [ ] Email arrives in Gmail inbox (or spam first time — mark "Not spam")
- [ ] Resume PDF download works
- [ ] Nav has no v1/v2 toggle
- [ ] Footer shows 3 socials (LinkedIn, Behance, Instagram), no X
- [ ] Old `/v2/work/dastak` URL redirects to `/work/dastak` (test in browser)
- [ ] Mobile: open on phone, all pages render correctly
- [ ] Favicon shows in browser tab

---

## ~1 week buffer before DNS swap

Days 1-2: smoke test (you).
Days 3-5: share with 1-2 trusted people for fresh-eyes bug-finding.
Day 6: confirm with friend who hosts current site about how to access DNS for the domain swap.
Day 7: GoDaddy DNS swap (separate playbook, not part of this checklist).

If anything breaks during the week, contact me with the specific URL + screenshot/console error and I'll generate a v18.31 fix.

---

## If anything goes wrong

You always have `portfolio_backup_pre_v18.30/` as a complete backup with intact git history. If v18.30 turns out to be a disaster, you can:

1. Wipe the broken `portfolio/` folder
2. `cp -r portfolio_backup_pre_v18.30 portfolio`
3. Force-push the backup state back to GitHub: `git push --force` (use carefully)
4. Contact me to regenerate v18.30 differently

The backup is your safety net. Don't delete it until you're 100% confident v18.30 is stable — at minimum, keep it for the full ~1 week buffer period.

# Deployment

The website is a static build — HTML, CSS and JavaScript, no server, no
database. Anything that can serve files can host it.

## Where it runs now

GitHub Pages, free, on every push to `main`:

    https://hidooch980.github.io/molido-core/

`.github/workflows/website-deploy.yml` builds `website/` and publishes
`website/dist`. Nothing is deployed by hand.

## Do you need paid hosting?

Almost certainly not. A static site on GitHub Pages is served from a global
CDN with HTTPS at no cost, which is faster than most entry-level shared
hosting. Buy a domain if you want one; the hosting underneath it is already
solved.

Paid hosting starts to make sense only when the project needs something
Pages cannot do — server-side code, a database, email on the domain, or
private files. None of that exists yet.

---

## Option A — custom domain on GitHub Pages (free, recommended)

### 1. Tell the build about the domain

    echo "molido.com" > website/public/CNAME

Use the exact hostname you bought, with no `https://` and no trailing slash.

The deploy workflow looks for this file. When it exists the site is built for
the domain root (`/`); without it, for the `/molido-core/` project sub-path.
Getting this wrong is what makes every asset 404, so it is automatic rather
than a setting somebody has to remember.

Commit and push, and the workflow rebuilds.

### 2. Point DNS at GitHub

In the DNS panel where the domain was bought.

For the apex domain (`molido.com`) — four `A` records, all with host `@`:

    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153

And, recommended alongside them, four `AAAA` records for IPv6:

    2606:50c0:8000::153
    2606:50c0:8001::153
    2606:50c0:8002::153
    2606:50c0:8003::153

For `www` — one `CNAME` record:

    host: www      value: hidooch980.github.io

GitHub redirects between the two automatically.

### 3. Set the domain on the repository

Settings → Pages → Custom domain → enter the domain → Save. GitHub checks
the DNS and shows a green tick once it resolves.

### 4. Turn on HTTPS

Settings → Pages → **Enforce HTTPS**.

The certificate is issued automatically and free. The option can take up to
24 hours to appear — that wait is normal and is not a misconfiguration.

### Timing

DNS changes are not instant. Propagation is usually minutes but can take a
few hours. If the site 404s right after the switch, check the deploy ran
after the CNAME file was committed before changing anything else.

---

## Option B — shared hosting (cPanel, FTP, or similar)

Only worth doing if the hosting is being bought for something else anyway.

### Build for the domain root

    cd website
    npm install
    VITE_BASE=/ npm run build

`VITE_BASE=/` matters. The default build targets the `/molido-core/`
sub-path, and uploading that to a domain root gives a blank page with
404s for every asset.

### Upload

Copy the **contents** of `website/dist/` — not the folder itself — into the
web root, usually `public_html/`.

The site is a single page with no client-side routing, so no rewrite rules
or `.htaccess` are needed.

### What this costs you

Every future change becomes a manual re-upload. The GitHub Actions pipeline
already does this on push, so consider pointing the domain at Pages even if
hosting is bought for email or other projects.

---

## Verifying a deployment

Never assume a green build means a working site. Check the live URL:

    curl -s -o /dev/null -w "%{http_code}\n" https://YOUR-DOMAIN/

Then load it in a browser and confirm the page renders rather than showing a
blank screen — a blank page with a working HTTP 200 is the signature of a
wrong base path.

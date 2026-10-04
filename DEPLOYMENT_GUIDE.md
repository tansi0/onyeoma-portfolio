# Portfolio Deployment Guide — Windows + GitHub + Netlify

This guide assumes you are starting with the supplied `tansi-portfolio` folder.

---

## 1. What each service does

The workflow is:

**Your laptop → GitHub → Netlify → optional custom domain**

- **Your laptop:** where you edit and test the code.
- **Git:** records versions of your code.
- **GitHub:** stores the source-code repository online.
- **Netlify:** watches the GitHub repository, runs the production build, and hosts the generated site.
- **Custom domain (optional):** a name such as `yourname.dev` that points to the Netlify-hosted site.

GitHub is not the same thing as Netlify. GitHub stores the code; Netlify turns that code into the live website.

---

## 2. Install the required tools

Install these on Windows:

1. **Node.js**
   - Use a current Node version supported by Vite.
   - After installation, reopen PowerShell.

2. **Git**
   - Install Git for Windows.
   - Default installation options are fine for this project.

3. **Visual Studio Code**
   - Use VS Code to edit the project.

Check the installations in PowerShell:

```powershell
node --version
npm --version
git --version
```

If `node` or `git` is "not recognized", close and reopen PowerShell first. If it still fails, reinstall the relevant tool and make sure it is added to PATH.

---

## 3. Unzip and open the project

Unzip `tansi-portfolio.zip` somewhere easy to find, for example:

```text
Documents\Projects\tansi-portfolio
```

Open PowerShell in that folder.

Easy Windows method:
- Open the folder in File Explorer.
- Click the address bar.
- Type `powershell`.
- Press Enter.

Or navigate manually:

```powershell
cd "$HOME\Documents\Projects\tansi-portfolio"
```

Open the folder in VS Code:

```powershell
code .
```

---

## 4. Install JavaScript dependencies

From the project folder:

```powershell
npm install
```

What this does:
- Reads `package.json`.
- Downloads React, React Router, Vite and the React Vite plugin.
- Creates `node_modules/`.
- Creates/updates `package-lock.json`.

Do **not** manually upload `node_modules` to GitHub. `.gitignore` already excludes it.

---

## 5. Start the site locally

Run:

```powershell
npm run dev
```

Vite prints a local address, normally similar to:

```text
http://localhost:5173/
```

Open that in your browser.

Leave that PowerShell window running while you edit. When files are saved, Vite refreshes the site automatically.

Stop the server with:

```text
Ctrl + C
```

---

## 6. Personalise the site before publishing

### A. Your main identity and links

Open:

```text
src/config/site.js
```

Check:
- name
- role
- Dublin location
- email
- GitHub URL
- LinkedIn URL

Phone number is intentionally not placed on the public site.

### B. Work history

Open:

```text
src/data/work.js
```

Each role is one object. Edit dates, wording or tags there.

### C. Projects

Open:

```text
src/data/projects.js
```

Each project contains:
- slug: URL name
- title
- category
- dates
- GitHub URL
- summary
- problem
- what was built
- results
- tech stack

This is the main place you will update when you complete a new project.

### D. Add your CV

Export your **general** technical CV as PDF. Do not use a CV targeted to only one employer on a permanent public portfolio.

Rename it:

```text
resume.pdf
```

Put it here:

```text
public\resume.pdf
```

Then open:

```text
src/config/site.js
```

Change:

```javascript
showResume: false,
```

to:

```javascript
showResume: true,
```

Now refresh the local site and test the CV link.

---

## 7. Test every page locally

Check:

```text
/
 /work
 /projects
 /projects/pqc-mqtt-testbed
 /projects/adversarial-iot-ids
 /projects/secure-movie-booking
```

Also test:
- GitHub buttons
- LinkedIn
- email link
- mobile layout by shrinking the browser
- CV link, if enabled

Fix any typo before publishing.

---

## 8. Build the production site locally

Run:

```powershell
npm run build
```

Expected result:
- Vite creates a `dist` folder.
- The terminal should finish without errors.

Then preview the exact production build:

```powershell
npm run preview
```

Open the URL Vite gives you.

This is an important checkpoint. If `npm run build` fails locally, fix the problem before deploying.

---

# GITHUB SETUP

## 9. Create a new GitHub repository

On GitHub:

1. Sign in.
2. Create a new repository.
3. Recommended repository name:

```text
portfolio
```

4. Public is useful for a developer portfolio because recruiters can inspect the code.
5. Do **not** add another README, `.gitignore`, or licence during repository creation because this folder already contains files.

After GitHub creates the empty repository, it displays a repository URL similar to:

```text
https://github.com/tansi0/portfolio.git
```

Keep that page open.

---

## 10. Turn the local folder into a Git repository

Back in PowerShell inside the project folder:

```powershell
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
```

What each command does:

- `git init` — begins Git version tracking in this folder.
- `git add .` — stages the current files for a commit.
- `git commit` — creates the first saved version.
- `git branch -M main` — names the primary branch `main`.

If Git asks who you are, set your identity:

```powershell
git config --global user.name "Chukwubuonyeoma Ajufo"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Then run the commit again.

---

## 11. Connect the local repository to GitHub

Replace the URL below with the exact repository URL GitHub gave you:

```powershell
git remote add origin https://github.com/tansi0/portfolio.git
git push -u origin main
```

What happens:
- `git remote add origin` tells the local repository where its GitHub copy lives.
- `git push` uploads the code.
- `-u origin main` remembers that future `git push` commands should push the local `main` branch to GitHub `main`.

Refresh GitHub. You should now see the project files online.

---

# NETLIFY — RECOMMENDED METHOD

## 12. Connect GitHub to Netlify

This is the best long-term method because updates become automatic.

1. Sign in to Netlify.
2. Open your team/project dashboard.
3. Choose **Add new project**.
4. Choose **Import an existing project**.
5. Select **GitHub** as the Git provider.
6. Approve Netlify's GitHub access when asked.
7. Choose the `portfolio` repository.

Netlify should detect Vite automatically.

Check the build settings:

```text
Production branch: main
Build command: npm run build
Publish directory: dist
```

This project already contains `netlify.toml`, so Netlify also has these settings in the repository.

Click **Deploy/Publish**.

---

## 13. What Netlify does after you click deploy

Netlify:

1. clones the GitHub repository;
2. installs the dependencies from `package.json`;
3. runs:

```bash
npm run build
```

4. takes the generated `dist` folder;
5. puts those files on its CDN;
6. gives the site a public `*.netlify.app` address.

The first generated address may be random. You can change the Netlify site name later.

---

## 14. Why `netlify.toml` is already included

This portfolio uses React Router.

A browser can open:

```text
/projects/pqc-mqtt-testbed
```

directly.

Without an SPA rewrite, a static host may look for a real file at that path and return 404.

The included `netlify.toml` tells Netlify:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

React then receives the request and renders the correct route.

Do not delete this file.

---

## 15. Change the Netlify subdomain

In the Netlify site settings, find the domain/site-name options.

Change a random name such as:

```text
curious-lamington-123.netlify.app
```

to something professional if available, for example:

```text
chukwubuonyeoma.netlify.app
```

or:

```text
tansi-portfolio.netlify.app
```

---

# OPTIONAL CUSTOM DOMAIN

## 16. Add a custom domain later

You do not need a custom domain on day one.

When you are ready, buy one from a domain registrar or through a provider that offers domain registration.

Possible styles:

```text
chukwubuonyeoma.dev
onyeoma.dev
tansiajufo.dev
```

Inside Netlify:

1. Open the site.
2. Go to **Domain management**.
3. Open **Production domains**.
4. Choose **Add a domain**.
5. Either buy a domain there or choose **Add a domain you already own**.
6. Follow the DNS instructions Netlify gives you.

If the domain was purchased elsewhere, DNS is the connection between the domain name and Netlify.

You do **not** move your source code to the domain provider.

The flow stays:

```text
Laptop -> GitHub -> Netlify
                    ^
                    |
                your domain
```

---

# FUTURE UPDATES

## 17. How you update the live website

Edit files in VS Code.

Test:

```powershell
npm run dev
```

Then:

```powershell
git status
git add .
git commit -m "Update portfolio projects"
git push
```

Because Netlify is connected to GitHub, the push triggers another Netlify build automatically.

You do not manually upload the site again.

This is continuous deployment.

---

## 18. How to add a new project

Open:

```text
src/data/projects.js
```

Copy one existing project object.

Change:
- `slug`
- `title`
- `category`
- `dates`
- `github`
- `summary`
- `problem`
- `built`
- `results`
- `stack`

Save.

The project automatically appears on `/projects`.

If you want it on the homepage, set:

```javascript
featured: true
```

Keep only your strongest 2–3 projects featured.

---

# LIVE DEMOS FOR INDIVIDUAL PROJECTS

## 19. The portfolio and the projects are separate things

Your portfolio does not have to run every project inside it.

The portfolio is the recruiter-facing index.

For every project you can have:

```text
Case study
GitHub source
Live demo (only when a live demo makes sense)
```

### Good candidates for live hosting

**React Task Manager**
- Good candidate for a separate Netlify deployment.
- It is a front-end application.

**CATFX Sports**
- Static front-end portions can be deployed.
- PHP functionality needs a host/runtime that supports PHP; Netlify is not a traditional PHP/MySQL host.

### Better as case studies, not public live services

**PQC-MQTT Testbed**
- Keep as a case study + GitHub.
- It is a Linux research/benchmark environment, not a web service.

**Adversarial IIoT IDS**
- Keep as a case study + GitHub unless you later build a lightweight inference demo.
- Do not deploy the full experimental notebook just to have a "live demo".

**AWS hardening project**
- Case study + architecture + GitHub is sufficient.

**Secure PHP/MySQL Movie Booking**
- Do not rush to host it publicly.
- A public demo needs proper production configuration, unique secrets, a production database and removal of demo/default credentials.
- A good case study is more valuable than an insecure live demo.

---

# NETLIFY MANUAL DEPLOY — BACKUP METHOD

## 20. If you do not want GitHub connected yet

Build locally:

```powershell
npm install
npm run build
```

This creates:

```text
dist\
```

In Netlify choose a manual deployment and drag the **dist folder** into the deploy area.

This publishes the current build.

Disadvantage:
- future changes do not deploy automatically;
- you must rebuild and upload `dist` again.

Use the GitHub-connected method for your real portfolio.

---

# NETLIFY CLI — OPTIONAL

You do not need the CLI, but it is useful later.

Install:

```powershell
npm install -g netlify-cli
```

Inside the project:

```powershell
netlify init
```

Follow the prompts to connect the repository/site.

For a manual production deploy:

```powershell
npm run build
netlify deploy --prod
```

Again, GitHub continuous deployment is simpler for your portfolio.

---

# TROUBLESHOOTING

## `npm` is not recognized

Node.js is missing or PATH has not refreshed.

Close PowerShell, reopen it and run:

```powershell
node --version
npm --version
```

If still missing, reinstall Node.

---

## `code` is not recognized

VS Code's command-line launcher is not in PATH.

You can simply open VS Code manually and choose:

```text
File -> Open Folder
```

Then select the portfolio folder.

---

## Netlify says build failed

First reproduce it locally:

```powershell
npm install
npm run build
```

Read the first actual error line in the terminal.

Common causes:
- syntax error;
- missing comma/bracket;
- file imported using the wrong path/capitalisation;
- dependency not installed.

---

## Home page works but `/projects/...` returns 404 on refresh

Make sure `netlify.toml` exists in the repository root and contains the redirect supplied with this project.

Commit and push it:

```powershell
git add netlify.toml
git commit -m "Add Netlify SPA redirect"
git push
```

---

## Git rejects the push

Check:

```powershell
git remote -v
git branch
git status
```

The remote should point to the correct GitHub repository and the branch should be `main`.

---

# SECURITY / PRIVACY CHECK BEFORE GOING LIVE

Do not put these in a public repository:
- passwords;
- private API keys;
- cloud access keys;
- database production passwords;
- personal identity documents;
- home address.

This portfolio intentionally does not display a phone number or street address.

If a future project uses secrets, put them in environment variables and add `.env` files to `.gitignore`.

---

# FINAL RELEASE CHECKLIST

Before sending the portfolio to employers:

- [ ] Name and role are correct.
- [ ] GitHub link works.
- [ ] LinkedIn link works.
- [ ] Email link works.
- [ ] All work dates are accurate.
- [ ] Each GitHub repository is public if you expect recruiters to view it.
- [ ] Flagship repos have strong READMEs.
- [ ] `npm run build` completes without errors.
- [ ] Site works on mobile.
- [ ] Direct project URLs work after Netlify deployment.
- [ ] No passwords/API keys are in the repository.
- [ ] General CV PDF added only if you want a public CV link.
- [ ] GitHub profile README tells the same software/security/systems story as the website.

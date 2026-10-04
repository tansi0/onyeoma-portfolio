# Do these things before publishing

1. Open `src/config/site.js` and confirm:
   - email
   - LinkedIn
   - GitHub
   - role wording

2. Open `src/data/work.js` and verify every job title/date.

3. Open `src/data/projects.js` and read every claim.
   - Keep only statements you can explain in an interview.
   - Change any figure if the repository/results have changed.

4. Decide whether to show a CV:
   - place `resume.pdf` in `public/`;
   - switch `showResume` to `true`.

5. Run:
   ```bash
   npm install
   npm run dev
   npm run build
   ```

6. Create a GitHub `portfolio` repository and push the folder.

7. Connect that repository to Netlify.

8. After the site is live, add its URL to:
   - CV header
   - LinkedIn contact/info section
   - GitHub profile README
   - job applications where a portfolio field exists

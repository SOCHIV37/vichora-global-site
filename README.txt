VICHORA GLOBAL — FREE STATIC WEBSITE

Files
- index.html: landing page
- style.css: responsive styling
- script.js: mobile navigation and enquiry email behavior
- privacy.html: starter privacy policy
- terms.html: starter terms of use

BEFORE PUBLISHING
1. Open script.js and replace hello@vichoraglobal.example with the real business inbox you want enquiries sent to.
2. In index.html, replace https://YOUR-SITE.pages.dev/ in canonical, Open Graph and Schema fields with your actual Cloudflare Pages URL.
3. Create a free MailerLite or Buttondown account. Create a signup form and replace the newsletter placeholder in index.html/script.js with the provider's official embed/action. The current newsletter form is intentionally not connected and does not collect emails.
4. Add your real social preview image at social-preview.jpg, or remove the og:image reference until one exists.
5. Review the privacy and terms pages for your actual business operations and applicable Nigerian law. These are starter templates, not legal advice.
6. Ad slots are placeholders only. Apply to an ad network when eligible; do not paste live AdSense code until Google approves the site and supplies your publisher/ad-unit code.
7. Update content and contact details so every statement accurately reflects the service you can deliver.

CLOUDFLARE PAGES DEPLOYMENT (NO COMMAND LINE)
1. Create a free GitHub account at github.com if you do not already have one.
2. Create a new public repository named vichora-global-site.
3. Upload all five website files to the repository root (not inside another nested folder). Commit the upload.
4. Create/sign in to a free Cloudflare account at cloudflare.com.
5. In Cloudflare dashboard go to Workers & Pages > Create application > Pages > Connect to Git.
6. Authorize GitHub and select vichora-global-site.
7. Framework preset: None. Build command: leave blank. Build output directory: / (or leave the default root setting if the dashboard offers it).
8. Click Save and Deploy. Cloudflare will provide a free *.pages.dev address and HTTPS.
9. Test the homepage, mobile layout, privacy and terms pages. Then replace YOUR-SITE.pages.dev placeholders with the actual URL in index.html and commit the change; Cloudflare automatically redeploys.
10. Re-test the enquiry flow after replacing the email address in script.js.

COST
The static site and Cloudflare Pages free tier can be launched without buying a domain or paying for hosting. Optional email marketing, analytics or ad products may have free-tier limits or eligibility requirements. No earnings are guaranteed.

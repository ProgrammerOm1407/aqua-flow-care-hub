# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4680d341-6520-4707-bb7d-9893e99b286b

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4680d341-6520-4707-bb7d-9893e99b286b) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable
Simply open [Lovable](https://lovable.dev/projects/4680d341-6520-4707-bb7d-9893e99b286b) and click on Share -> Publish.

### Deploy to GitHub Pages
This project is configured to deploy to GitHub Pages automatically. When you push changes to the main branch, GitHub Actions will build and deploy the site.

To set up GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the sidebar
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The site will be deployed to `https://[your-username].github.io/aqua-flow-care-hub/`

## Can I connect a custom domain to my project?

### With Lovable
To connect a domain to your Lovable project, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

### With GitHub Pages
You can also connect a custom domain to your GitHub Pages site:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Custom domain", enter your domain name
4. Update your DNS settings to point to GitHub Pages
5. If using a custom domain, update the `base` in `vite.config.ts` to '/'

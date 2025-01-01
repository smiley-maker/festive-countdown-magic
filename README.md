# New Year's Countdown

## Project Info

**URL**: [Festive Countdown Magic](https://festive-countdown-magic.lovable.app/)

This project is a **New Year's Countdown** timer that celebrates the arrival of the New Year with confetti and a countdown display. It features a modern design with futuristic fonts and animations to enhance the user experience. The countdown updates in real-time, and once it reaches zero, a celebratory message and confetti animation are displayed.

## Features

- **Countdown Timer**: Displays the time remaining until the New Year.
- **Celebration Animation**: Confetti effects and celebratory messages when the countdown reaches zero.
- **Responsive Design**: Works seamlessly on various screen sizes.
- **Futuristic Fonts**: Utilizes custom fonts for a modern look.

## Key Files

Here are some of the primary files that contributors can edit:

- **`src/components/CountdownTimer.tsx`**: This is the main component that handles the countdown logic, displays the timer, and manages the celebration state.
- **`src/pages/Index.tsx`**: The main page of the application where the `CountdownTimer` component is rendered.
- **`src/App.tsx`**: The main application file that sets up routing and context providers.
- **`src/index.css`**: The global CSS file where you can add custom styles and import Tailwind CSS.
- **`tailwind.config.ts`**: The configuration file for Tailwind CSS, where you can customize themes and extend functionality.

## How Can I Edit This Code?

There are several ways to edit your application:

### Use Lovable

Simply visit the [Lovable Project](https://lovable.dev/projects/7c2e3831-7937-4ebe-bc37-2f09dc651485) and start prompting. Changes made via Lovable will be committed automatically to this repo.

### Use Your Preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable. The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

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

### Edit a File Directly in GitHub

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

### Use GitHub Codespaces

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7c2e3831-7937-4ebe-bc37-2f09dc651485) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

# React Component Development Assignment

## Overview
This project contains two main React components built with **React**, **TypeScript**, and **TailwindCSS**, documented using **Storybook**:

1. **InputField** – Flexible input component with validation states.
2. **DataTable** – Interactive table with sorting, selection, and loading states.

---

## Folder Structure

my-assignment/
│
├─ app/ # Next.js pages
│ └─ page.tsx # Main app page with tabs for InputField and DataTable
│
├─ components/
│ ├─ InputField/
│ │ ├─ InputField.tsx
│ │ └─ InputFieldPlayground.tsx
│ └─ DataTable/
│ ├─ DataTable.tsx
│ └─ DataTablePlayground.tsx
│
├─ stories/ # Storybook stories
│ ├─ InputField.stories.tsx
│ └─ DataTable.stories.tsx
│
├─ public/
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ tsconfig.json

yaml
Copy
Edit

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/my-assignment.git
cd my-assignment
Install dependencies

bash
Copy
Edit
npm install
# or
yarn
Run the development server

bash
Copy
Edit
npm run dev
# or
yarn dev
Open http://localhost:3000 to view the app.

Storybook
Run Storybook locally
bash
Copy
Edit
npm run storybook
# or
yarn storybook
Opens at http://localhost:6006

Explore InputField and DataTable with interactive controls.

Build Storybook for Deployment
bash
Copy
Edit
npm run build-storybook
# or
yarn build-storybook
Generates a static storybook-static/ folder for deployment.

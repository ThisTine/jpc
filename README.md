# SIT Openhouse website 🎉
design -> [Figma](https://www.figma.com/file/2131IaOxPgUKKG4P8jeMzT/Openhouse2023?type=design&node-id=0%3A1&mode=design&t=BFTgLYMepp5IG8lH-1)


staging -> [https://openhouse23.thistine.com](https://openhouse23.thistine.com)

prod -> [TBA]

## Development

### Prerequisites 🥹
- If you're using `VScode` 👀
    - Please install the recommend extensions (if you're using vscode you can click `install All` when you first open the project)
      ![Install All](https://i.stack.imgur.com/DrPIB.png)
- If you're using others IDE 🤖, please find alternative extensions of
    - 1. vscode-eslint
    - 2. vscode-tailwindcss
    - 3. es7-react-js-snippets
- Install `pnpm` on your local machine

### Development ✍️
- Installing package `pnpm install`
- run project `pnpm dev`

### Project structure 🧱
- All soruce files are localted in `/src` folder
- There are **2 pages** localted in 2 locations
    - index page (`/`) `/src/app/page.tsx`
    - register page (`/register/`) `/src/app/register/page.tsx`
- `/src/share` folder is used for a *share components, type, function only*. if there's component that only use in a specific page, please consider create `components`, `types` or `utils` folder beside `page.tsx` in a spacific page.

### Deployment
We're using `main` as our staging and prod build. so you can merge to main directly and it will build to staging site automatically. for prod, you may need to trigger the build by yourself.
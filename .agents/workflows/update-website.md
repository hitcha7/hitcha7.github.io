---
description: update the website with new AI studio code
---
# Update Website from AI Studio

// turbo-all

This workflow automates taking raw Vite/React code from Google AI Studio, compiling it into a static website locally, and pushing the final static `HTML/CSS/JS` to GitHub Pages.

1. First, check if the user has uploaded the new source files from AI Studio (like `App.tsx`, `index.css`, `package.json`, `index.html`, etc.) into `C:\Users\Amelia\hitcha7.github.io`. If not, gently ask the user to drop the downloaded AI Studio files into the folder and notify you when ready.
2. If the user dropped the raw React files in the root folder, organize them as Vite expects by creating a `src` folder and moving the source files into it:
```powershell
mkdir -Force src; mv -Force App.tsx src/; mv -Force main.tsx src/; mv -Force index.css src/; mv -Force constants.ts src/
```
*(Note: adjust the move commands based on whatever `.tsx` or `.ts` files the user uploaded).*
3. Verify that the portable Node.js binary is available at `C:\Users\Amelia\hitcha7.github.io\node-v20.11.1-win-x64`. If it is missing, download it:
```powershell
Invoke-WebRequest -Uri "https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip" -OutFile "node.zip"; Expand-Archive -Force "node.zip" -DestinationPath "."
```
4. Build the site locally using the portable Node.js:
```powershell
$env:Path = "C:\Users\Amelia\hitcha7.github.io\node-v20.11.1-win-x64;" + $env:Path; npm install; npm run build
```
5. Replace the current live static files with the newly built Production output:
```powershell
rm -Force index.html; rm -r -Force assets; mv dist/index.html ./index.html; mv dist/assets ./assets; rm -r -Force dist
```
6. Clean up the source and configuration files so the repository only hosts the final static website (this prevents GitHub Actions from trying to build it and failing):
```powershell
rm -r -Force src; rm -Force package.json; rm -Force package-lock.json; rm -Force tsconfig.json; rm -Force vite.config.ts; rm -Force node.zip
```
7. Commit and push the updated static website files to GitHub:
```powershell
git add index.html; git add assets; git commit -m "Update website with new AI Studio build"; git push origin main
```
8. Notify the user that the custom workflow successfully completed and their updated website is alive and immediately available at `https://hitcha7.github.io/`.

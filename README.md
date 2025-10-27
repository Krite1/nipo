# Nipo Blog (Next.js + CSV)

Simple Next.js (App Router) blog scaffold that reads posts from `data/posts.csv`.
Theme: responsive / perpaduan warna (flexible).  
Purpose: "blog kimia" with 5 example articles.

## How to run
1. Install deps:
```
npm install
```
2. Run dev:
```
npm run dev
```
3. Open `http://localhost:3000`

## Notes
- CSV path: `data/posts.csv`
- Update CSV or export from Google Sheets.
- This scaffold uses `papaparse` + server-side file read.

Deploy to Vercel by pushing to GitHub and connect the repo.


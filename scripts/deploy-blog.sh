#!/bin/bash
cd /Users/chloe/investkorea-project
git add content/blog/
git commit -m "New blog post"
git push origin main
npx vercel --yes --prod

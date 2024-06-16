#!/bin/sh
npm install
npm run build
mkdir -p ../output
cp -R .next ../output/.next
cp -R public ../output/public
cp package.json ../output/package.json
cp next.config.mjs ../output/next.config.mjs

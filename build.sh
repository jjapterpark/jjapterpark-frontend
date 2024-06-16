#!/bin/sh
npm install
npm run build
mkdir -p ../output
cp -R ./.next ../output
cp -R ./public ../output
cp ./package.json ../output
cp ./next.config.js ../output

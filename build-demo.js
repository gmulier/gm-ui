#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building demo for Vercel deployment...');

try {
  // 1. Install demo dependencies only
  console.log('📦 Installing demo dependencies...');
  execSync('cd demo && npm install', { stdio: 'inherit' });

  // 2. Build the demo
  console.log('🔨 Building demo...');
  execSync('cd demo && npm run build', { stdio: 'inherit' });

  console.log('✅ Demo build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
} 
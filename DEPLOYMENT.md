# Deployment Guide

This document explains how to deploy the @gm/ui monorepo components to Vercel.

## 📦 Available Deployments

### 1. Demo Application
- **File**: `vercel.demo.json`
- **URL**: https://gm-ui-demo.vercel.app
- **Content**: Interactive demo of all components

### 2. Storybook Documentation
- **File**: `vercel.storybook.json`  
- **URL**: https://gm-ui-storybook.vercel.app
- **Content**: Component documentation and API reference

## 🚀 Deployment Commands

### Deploy Demo
```bash
vercel --local-config vercel.demo.json
```

### Deploy Storybook
```bash
vercel --local-config vercel.storybook.json
```

### Production Deployments
```bash
# Demo to production
vercel --prod --local-config vercel.demo.json

# Storybook to production  
vercel --prod --local-config vercel.storybook.json
```

## ⚙️ Configuration Details

Both configurations use:
- **Monorepo workspaces**: Efficient npm install at root level
- **Workspace scripts**: `npm run build:demo` and `npm run build:storybook`
- **Node.js 18.x**: Modern Node.js version
- **Optimized builds**: Leverages npm workspaces for faster builds

## 🔧 Environment Variables

No environment variables are required for basic deployment. Both applications are static builds.

## 📁 Output Directories

- **Demo**: `packages/demo/dist`
- **Storybook**: `packages/storybook/storybook-static`

## 🔄 Automatic Deployments

To set up automatic deployments:

1. Connect your GitHub repository to Vercel
2. Create two projects in Vercel dashboard
3. Configure each project to use the respective `vercel.*.json` file
4. Enable automatic deployments on push to main branch 
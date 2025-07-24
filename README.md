# Ollama AI Chat - React Application

![Ollama AI Chat Screenshot](./public/screenshot.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Ollama Model Installation](#ollama-installation)
- [Usage](#usage)
- [API Reference](#api-reference)

## Overview
A React chat application that interfaces with Ollama's AI models, featuring a Material-UI design and real-time streaming capabilities.

## Features
- 💬 Interactive chat with AI models
- 🎨 Modern Material-UI interface
- ⚡ Real-time response streaming
- 🔄 Model switching
- 📱 Responsive design

## Prerequisites
- Node.js 20.19.4
- npm 10.8.2 or yarn
- Ollama installed locally
- At least one Ollama model (e.g., `llama3.2`)

## Installation
```bash
git clone https://github.com/your-username/ollama-react-chat.git

cd ollama-react-chat

npm install

npm install ollama @mui/material @emotion/react @emotion/styled @mui/icons-material

npm start

# In separate terminal:
ollama serve
```
## Ollama Installation
Download and Install Ollama from https://ollama.com/download
```bash
# To download llama3.2:
ollama pull llama3.2

# To run llama3.2:
ollama run llama3.2
```

## Usage
- Access app in browser: http://localhost:3000
- Type some text in chat box and hit SEND button
- The output will be visible in a while

## API-reference
- Ollama npm: https://www.npmjs.com/package/ollama
- Material UI: https://mui.com/material-ui/getting-started/installation/

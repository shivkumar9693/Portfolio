#!/bin/bash

# Install dependencies
npm install

# Build the client
cd client
npm run build
cd ..

# Build the server
npm run build:server
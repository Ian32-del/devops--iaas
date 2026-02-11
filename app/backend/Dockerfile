# Use official Node image
FROM node:16

# Create app directory
WORKDIR /app

# Copy dependency files first (faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose app port
EXPOSE 3000

# Start server
CMD ["npm", "start"]

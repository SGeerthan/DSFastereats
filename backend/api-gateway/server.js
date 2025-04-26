const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Proxy authentication service
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
  
}));

app.listen(8080, () => console.log('API Gateway running on port 8080'));

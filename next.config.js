/** @type {import('next').NextConfig} */

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// 在成功登录时生成并发送JWT令牌
app.post('/api/login', (req, res) => {
  // Check the user's credentials
  // ...

  // Generate a JWT token with the user's ID
  const accessToken = jwt.sign({ userID: 'user1' }, process.env.ACCESS_TOKEN_SECRET);

  // Send the access token to the client
  res.json({ accessToken: accessToken });
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "standalone",
};

module.exports = nextConfig;

module.exports = {
  apps: [
    {
      name: 'verdaccio',
      script: 'verdaccio', 
      args: '--listen 0.0.0.0:4873',
      env: {
        NODE_ENV: 'development',
      }
    },
    {
      name: 'unpkg',
      script: '/usr/src/app/unpkg/start.js',
      env: {
        NODE_ENV: 'production',
        NPM_REGISTRY_URL: 'https://registry.npmmirror.com',
        PORT: 8899
      }
    }
  ]
};

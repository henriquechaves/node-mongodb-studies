const config = {
  port: process.env.PORT || 8000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/form-app',
};

export default config;

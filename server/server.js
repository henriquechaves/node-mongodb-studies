import Express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import index from './routes/index';
import serverConfig from './config';

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use('/api', index);

app.use((req, res) => {
  res.send({ message: 'Server waiting for requests' });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Form-App is running on port: ${serverConfig.port}!`);
  }
});

export default app;

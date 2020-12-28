import express from 'express';

const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my application' });
});

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

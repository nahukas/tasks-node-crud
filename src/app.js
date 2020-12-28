import express from 'express';
import tasksRoutes from './routes/tasks.routes';

const app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my application' });
});

app.use('/api/tasks', tasksRoutes);

export default app;

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { AuthRoutes } from './modules/auth/auth.routes.js';
import { EventRoutes } from './modules/event/event.routes.js';
import { ReviewRoutes } from './modules/review/review.routes.js';
import { PaymentRoutes } from './modules/payment/payment.routes.js';

app.use('/api/auth', AuthRoutes);
app.use('/api/events', EventRoutes);
app.use('/api/reviews', ReviewRoutes);
app.use('/api/payments', PaymentRoutes);

app.get('/', (req, res) => {
  res.send('Events & Activities API is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;

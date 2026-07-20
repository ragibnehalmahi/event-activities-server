import express from 'express';

const router = express.Router();
router.post('/create-intent', (req, res) => {
  res.json({ success: true, clientSecret: 'mocked_secret_intent', message: 'Payment structure mocked' });
});

export const PaymentRoutes = router;

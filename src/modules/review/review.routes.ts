import express from 'express';
import { ReviewController } from './review.controller.js';

const router = express.Router();
router.post('/', ReviewController.create);
router.get('/host/:hostId', ReviewController.getHostReviews);

export const ReviewRoutes = router;

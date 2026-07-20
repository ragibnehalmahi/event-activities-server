import type { Request, Response } from 'express';
import { ReviewService } from './review.service.js';

const create = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json({ success: true, data: review });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getHostReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getHostReviews(req.params.hostId as string);
    res.status(200).json({ success: true, data: reviews });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const ReviewController = { create, getHostReviews };

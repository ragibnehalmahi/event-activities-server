import prisma from '../../shared/prisma.js';

const createReview = async (reviewData: any) => {
  return prisma.review.create({ data: reviewData });
};

const getHostReviews = async (hostId: string) => {
  return prisma.review.findMany({ where: { hostId }, include: { user: true } });
};

export const ReviewService = { createReview, getHostReviews };

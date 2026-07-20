import express from 'express';
import { EventController } from './event.controller.js';

const router = express.Router();
router.post('/', EventController.create);
router.get('/', EventController.getAll);
router.post('/:id/join', EventController.join);

export const EventRoutes = router;

import type { Request, Response } from 'express';
import { EventService } from './event.service.js';

const create = async (req: Request, res: Response) => {
  try {
    const event = await EventService.createEvent(req.body.hostId, req.body);
    res.status(201).json({ success: true, data: event });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const events = await EventService.getEvents();
    res.status(200).json({ success: true, data: events });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const join = async (req: Request, res: Response) => {
  try {
    const result = await EventService.joinEvent(req.params.id as string, req.body.userId);
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const EventController = { create, getAll, join };

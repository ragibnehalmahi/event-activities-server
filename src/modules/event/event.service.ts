import prisma from '../../shared/prisma.js';

const createEvent = async (hostId: string, eventData: any) => {
  return prisma.event.create({
    data: {
      ...eventData,
      hostId
    }
  });
};

const getEvents = async () => {
  return prisma.event.findMany({
    include: { host: true, participants: true }
  });
};

const joinEvent = async (eventId: string, userId: string) => {
  return prisma.eventParticipant.create({
    data: { eventId, userId }
  });
};

export const EventService = { createEvent, getEvents, joinEvent };

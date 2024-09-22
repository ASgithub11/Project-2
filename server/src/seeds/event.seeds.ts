import { Event } from '../models/Event.js';

const events = [
  {
    id: 1,
    title: 'Community Clean-Up',
    date: new Date('2024-10-01'),
    location: 'City Park',
    description: 'Join us for a community clean-up day. Supplies will be provided.',
  },
  {
    id: 2,
    title: 'Local Farmers Market',
    date: new Date('2024-10-05'),
    location: 'Downtown Square',
    description: 'Support local farmers and artisans at our weekly market.',
  },
  {
    id: 3,
    title: 'Charity Run',
    date: new Date('2024-10-10'),
    location: 'City Sports Complex',
    description: 'Participate in a charity run to support local charities. Sign up online!',
  },
  {
    id: 4,
    title: 'Book Club Meeting',
    date: new Date('2024-10-15'),
    location: 'Public Library',
    description: 'Join our monthly book club. This month’s book is "The Great Gatsby."',
  },
  {
    id: 5,
    title: 'Music in the Park',
    date: new Date('2024-10-20'),
    location: 'City Park',
    description: 'Enjoy live music from local bands in the park. Bring a picnic!',
  },
];

export const seedEvents = async () => {
    await Event.bulkCreate(events);
};

import { Router, Request, Response } from 'express';

const router = Router();

// Example route: returns a list of simulated patients
router.get('/patients', (req: Request, res: Response) => {
  res.json({ message: 'This will return simulated patient cases.' });
});

// Optional test route
router.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Ward Round Sim API!' });
});

export default router;
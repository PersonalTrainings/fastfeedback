import { getAllSites } from '@/libs/db-admin';

export default async (_, res) => {
  const sites = await getAllSites();
  res.statusCode = 200;
  res.json(sites);
};

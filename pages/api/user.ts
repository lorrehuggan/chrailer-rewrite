import { NextApiRequest, NextApiResponse } from 'next';
import { FETCH_BY_ID } from '../../src/lib/movie-API';

const Genres = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const ids = id?.toString().split(',') as string[];

  const allData = await Promise.all(
    ids.map(async (id) => {
      const f = await fetch(FETCH_BY_ID(id));
      return f.json();
    })
  );

  res.json(allData);
};

export default Genres;

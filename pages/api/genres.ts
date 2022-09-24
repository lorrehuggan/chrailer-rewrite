import { NextApiRequest, NextApiResponse } from 'next';
import { FETCH_CATEGORIES } from '../../src/lib/movie-API';

const Genres = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, page } = req.query;

  const response = await fetch(FETCH_CATEGORIES(`${id}`, Number(page)));
  const data = await response.json();
  res.json(data);
};

export default Genres;

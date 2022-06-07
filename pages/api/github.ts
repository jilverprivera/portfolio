import type { NextApiRequest, NextApiResponse } from 'next';

const URL = 'https://api.github.com/users/jilverprivera';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const getUser = await fetch(URL);
  const getUserRepo = await fetch(`${URL}/repos?per_page=100`);

  const user = await getUser.json();
  const repositories = await getUserRepo.json();

  const mine = repositories.filter((repo:any) => !repo.fork);

  const stars = mine.reduce((acc:any, repo:any) => {
    return acc + repo['stargazers_count'];
  }, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    followers: user.followers,
    stars
  });
}


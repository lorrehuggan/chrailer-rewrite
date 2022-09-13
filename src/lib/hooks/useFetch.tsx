import { useQuery } from '@tanstack/react-query';

export interface Props {
  key: string;
  url: string;
  variable: string;
}

const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error: any) {
    console.log(error.message);
  }
};

export default function UseFetch({ key, url, variable }: Props) {
  const { data, isError, isLoading } = useQuery([key, variable], () =>
    fetcher(url)
  );
  return { data, isError, isLoading };
}

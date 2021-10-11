import useSWR from "swr";

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    return data;
  });

  return { data, error };
}

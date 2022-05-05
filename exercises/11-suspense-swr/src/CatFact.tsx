import axios from "axios";
import useSWR from "swr";
// Import something here

function CatFact() {
  const fetchFact = (...args: string[]) => {
    return axios(args[0]).then((response) => response.data.fact);
  };

  const { data } = useSWR("https://catfact.ninja/fact", fetchFact, {
    suspense: true,
  });

  return <p>{data}</p>;
}

export default CatFact;

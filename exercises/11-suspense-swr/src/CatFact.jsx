import axios from "axios";
import useSWRImmutable from "swr/immutable"
// Import something here

function CatFact() {

  const fetchFact = (...args) => {
    return axios(...args)
    .then((response) => response.data.fact);
  };

  const {data} = useSWRImmutable("https://catfact.ninja/fact", fetchFact, {
    suspense: true,
  });

  return <p>{data}</p>

}

export default CatFact;

import { API_URL1 } from './Vars.js';

// async function getData() {
const getData = async () => {
  const resp = await fetch(API_URL1);
  const json = await resp.json();
  // return json.slice(0, 6);
  return json;
};

export default getData;
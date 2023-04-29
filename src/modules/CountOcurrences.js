import getData from './ApiSimpson.js';

const countOccurrences = async () => {
  const data = await getData();
  let nItems = 0;
  if (typeof data.length === 'number') nItems = data.length;

  if (nItems < 0) throw new Error('Invalid Value');

  return nItems;
};

export default countOccurrences;

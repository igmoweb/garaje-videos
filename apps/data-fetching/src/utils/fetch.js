function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchFacts = async () => {
  await sleep(2000);
  const headers = new Headers({
    Authorization: process.env.NUESTRO_TOKEN_SECRETO,
  });
  const response = await fetch('https://catfact.ninja/facts', { headers });
  const facts = await response.json();
  return facts.data;
};

export const fetchFact = async () => {
  await sleep(3000);
  const response = await fetch('https://catfact.ninja/fact');
  return response.json();
};

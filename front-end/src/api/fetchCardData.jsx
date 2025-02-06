export default async function fetchCardData({ input }) {
  let url = `https://api.scryfall.com/cards/named?fuzzy=${input}`;
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

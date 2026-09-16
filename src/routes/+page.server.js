export async function load({ fetch }) {
  const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[id][_eq]=255");
  const data = await res.json();
  const person = data.data?.[0];

  return {
    person
  };
}
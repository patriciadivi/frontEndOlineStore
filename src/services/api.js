export async function getCategories() {
  const requestReturn = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await requestReturn.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchAPI = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categoryAndQuery = await fetchAPI.json();
  return categoryAndQuery;
}
export async function getProductsFromId(id) {
  const fetchAPI = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const resultsId = await fetchAPI.json();
  return resultsId;
}

// Feito com a ajuda de todas as pessoas do grupo

async function getCategories() {
  return await fetch("http://localhost:4000/categories")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export default getCategories;

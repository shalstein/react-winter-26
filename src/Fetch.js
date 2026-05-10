async function getTodos() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/users/9/todos",
  );
  const json = await result.json();
  console.log(await json);
}

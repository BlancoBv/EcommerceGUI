export default async function get(endpoint, metodo, body) {
  try {
    let url = `http://localhost:5000/api/${endpoint}/`;
    let options = {
      method: metodo ? metodo : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    let res = await fetch(url, options);
    let json = await res.json();

    console.log(json);
    console.log(url);
    console.log(body);
    return json;
  } catch (error) {
    console.log(error);
  }
}

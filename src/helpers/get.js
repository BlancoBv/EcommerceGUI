export default async function get(endpoint, metodo) {
  try {
    let url = `http://localhost:5000/api/${endpoint}`;
    let optios = {
      mode: "no-cors",
      method: metodo ? metodo : "GET",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "* ",
      }),
    };

    let res = await fetch(url, optios);
    let json = await res.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

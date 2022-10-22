export default async function get(endpoint, metodo) {
  try {
    let url = `http://192.168.1.143:5000/api/${endpoint}`;
    let options = {
      mode: "cors",
      method: metodo ? metodo : "GET",
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    let res = await fetch(url, options);
    let json = await res.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

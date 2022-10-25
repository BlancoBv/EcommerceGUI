async function auth({ user, pass }) {
  try {
    let url = "http://localhost:5000/auth";
    let options = {
      mode: "cors",
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer mmnm",
        data: { usuario: { user }, passwors: { pass } },
      },
    };

    let res = await fetch(url, options);
    let json = await res.json();

    console.log(user);
    return json;
  } catch (error) {
    console.log(error);
  }
}
export default auth;

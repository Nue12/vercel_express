const fetchData = async () => {
  const API = localStorage.getItem("apiUrl");
  if (API) {
    const response = await fetch(`${API}/users`);
    const data = await response.json();
    console.log(data);
  } else {
    window.location.href = "/api";
  }
};

fetchData();

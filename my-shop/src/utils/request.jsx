const API_DOMAIN = "http://localhost:3000";

export const get = async (path) => {
  const res = await fetch(`${API_DOMAIN}/${path}`);
  const result = await res.json();
  return result;
};

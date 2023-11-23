import Cookies from 'js-cookie';

export const setCookie = (key, value, options = {}) => {
  Cookies.set(key, JSON.stringify(value), options);
};
export const getCookie = (key) => {
  const cookieValue = Cookies.get(key);
  return cookieValue ? JSON.parse(cookieValue) : null;
};
export const deleteCookie =(key)=>{
  Cookies.remove(key)
}

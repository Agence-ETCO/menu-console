const get = (key) => typeof window !== 'undefined' ? localStorage.getItem(key) : null;
const set = (key, value) => typeof window !== 'undefined' ? localStorage.setItem(key, value) : null;

export const getToken = () => get('jwt') || '';

export const setToken = (value) => set('jwt', value);

export const getUser = () => JSON.parse(get('user'));

export const setUser = (value) => set('user', JSON.stringify(value));

export const setMicroBrasserie = (order, data) => set(`microbrasserie${order}`, data);

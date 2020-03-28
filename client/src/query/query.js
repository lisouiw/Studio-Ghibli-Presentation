import { instance } from "../utils/axios";

export const getFilms = id => {
  return instance.get("/films", { params: { id } }, res => res);
};

export const getInformations = (url, type) => {
  return instance
    .get(type)
    .then(res => res.data.filter(value => value.films[0] === url))
    .catch(() => []);
};

import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

    axios
        .get(
            `https://618ae65334b4f400177c4915.mockapi.io/items?${category !== null ? `category=${category}` : ''}&sortBy=${
                sortBy.type
            }&order=${sortBy.order}`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

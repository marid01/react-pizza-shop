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
            `https://615ac27e4a360f0017a81258.mockapi.io/items?${category !== null ? `category=${category}` : ''}&sortBy=${
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

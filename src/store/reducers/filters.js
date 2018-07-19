import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fields: {
    language: {
      value: 'JavaScript',
    },
    owner: {
      value: '',
    },
    stars: {
      value: 0,
    },
    forks: {
      value: 0,
    },
    type: {
      value: 'true',
    },
    hasOpenedIssues: {
      value: false,
    },
    hasTopics: {
      value: false,
    },
    date: {
      value: null,
    },
  },
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.UPDATE_FILTERS_FORM:
      return {
        ...state,
        fields: {
          ...state.fields,
          ...payload.updatedFields,
        },
      };

    default:
      return state;
  }
};

export default reducer;

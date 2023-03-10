export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, isLogin: true, user: action.payload };
    }
    case "USER_LOGOUT": {
      return { ...state, isLogin: false }; // set this to null on purpose, do not change
    }
    case "TOGGLE_THEME": {
      return { ...state, darkTheme: !state.darkTheme };
    }
    case "COUNTER": {
      return { ...state, setupScreenCounter: action.payload };
    }
    case "SETUP_FORM_DATA": {
      return { ...state, setupFormData: action.payload };
    }
    case "SET_USER_ID": {
      return { ...state, userID: action.payload };
    }
    case "SET_CompanySearchQueryData": {
      return { ...state, companySearchQueryData: action.payload };
    }
    default: {
      return state;
    }
  }
};

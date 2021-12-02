const initialState = {
  allClasses: [],
  class: [],
  user: [],
  classById: [],
  allClassTeacher: [],
  favorites: [],
  category: [],
  
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLASSES":
      return {
        ...state,
        allClasses: action.data,
        class: action.data
      };

    case "POST_USER":
      return {
        ...state,
      };

    case "SEARCH_CLASS":
      return {
        ...state,
        allClasses: action.payload
      };

    case "CREATE_CLASS":
      return {
        ...state,
      };

    case "GET_CLASS_BY_ID":
      return {
        ...state,
        classById: action.data,
      };

    case "GET_ALL_CLASSES_TEACHER":
      return {
        ...state,
        allClassTeacher: action.data,
      };

    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.data,
      };

    case "MODIFY_CLASS":
      return {
        ...state,
      };

    case "GET_CATEGORY":
      return {
        ...state,
        category: action.payload
      };

    case "DIFFICULTY_FILTER":
      return {
        ...state,
        allClasses: action.data
      }
      
    default:
      return state;
  }
}

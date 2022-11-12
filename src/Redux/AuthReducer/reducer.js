// // reducer related to auth state;
// export const initialState = {
//   isAuth: false,
//   token: null,
//   isError: false,
//   isLoading: false,
// };
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_REQUEST":
//       return {
//         ...state,
//         isAuth: false,
//         token: null,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         ...state,
//         isAuth: true,
//         token: action.payload,
//         isLoading: true,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//       case "SIGN_UP_REQUEST":
//         return {
//           ...state,
//           isAuth: false,
//           token: null,
//           isLoading: false,
//         };
//       case "SIGN_UP_SUCCESS":
//         return {
//           ...state,
//           isAuth: true,
//           token: action.payload,
//           isLoading: true,
//           isError: false,
//         };
//       case "SIGN_UP_FAILURE":
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//         };
//     default:
//       throw new Error();
//   }
// };

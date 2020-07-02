export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  //use redux thunk and fetch api to make http request
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Ed1xVMtmq5zx9i-x3XE8ln_jjMNAmIg"
    , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
        })
    } );

    if(!response.ok) {
        throw new Error('Something went wrong!');
    }

    //get response data using .json() to unpack the response body
    const resData = response.json();
    console.log(resData);
    dispatch({ type: SIGNUP });
  };
};
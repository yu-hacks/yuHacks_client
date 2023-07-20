import jwtDecode from 'jwt-decode';
interface decodedToken {
    _id: String;
    email: String;
    exp: number,
    iat: number
  }


export default function validateToken(token: string | null | undefined) {

  try {
    if(token!=null){
    const decodedToken: decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      // Token has expired
      return false;
    }
    // Token is valid
    return true;
    }
  } catch (error) {
    // Error occurred during token validation
    return false;
  }
}

export function getTokenFromStorage() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token') !== 'undefined') {
        return localStorage.getItem('token');
      } 
}

export function setTokenInStorage(token: string) {
  localStorage.setItem('token', token);
}





// import 'dotenv/config';
import config from '../config';
import axios from 'axios';

const apiLogin = config.API_URL + '/auth';

export async function login(user) {
  try {
    const { email, name, googleId, imageUrl } = user;

    const { data } = await axios.post(apiLogin, { email, name, googleId, imageUrl });
    localStorage.setItem('token', data.token);
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  localStorage.removeItem('token');
}

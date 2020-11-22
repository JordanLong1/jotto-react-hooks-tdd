/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
export const getSecretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030');
    setSecretWord(response.data);
}

export default {
    getSecretWord,
  }
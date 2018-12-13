import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-ef355.firebaseio.com'
})
import axios from 'axios';

const instance = axios.create({
    baseURL:"https://api.fishdelivery.ir/api/v1/"
})

export default instance

export  const Token = "253|v5oqbcK9GLFoPc1YcEWsobyz7jjH4pUT8eujC69C"
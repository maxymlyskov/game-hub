import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: "495452bbff33471ea8dedbc23bb6e9bb"
    }
})

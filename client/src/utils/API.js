import axios from "axios";

export default {
    getBooks: function (query) {
        console.log("You hit this");
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    }
};

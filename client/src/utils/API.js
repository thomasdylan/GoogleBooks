import axios from 'axios';

export default {
    getBooks: function(query) {
        return axios.get("/api/books", { params: { q : query }});
    },
    postBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
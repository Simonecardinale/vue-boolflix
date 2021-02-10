var app = new Vue({
    el: '#app',
    data: {
        film: [],
        query: '',
    },
    methods: {
        searchFilm(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=170b9b6ee3a93a04400d81014d1e9315&language=en-US', {
            params: {
                query: this.query,
            }
            }).then ((result)=> {
                this.film = result.data.results;
            });
        }
    }
});
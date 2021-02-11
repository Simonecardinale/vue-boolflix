var app = new Vue({
    el: '#app',
    data: {
        film: [],
        series:[],
        query: '',
        poster: "https://image.tmdb.org/t/p/w342",
        votoStella: [],
        votoStellaSerie:[],
        bandiere: ['en', 'it']
    },
    methods: {
        searchFilm(){

            //film

            axios.get('https://api.themoviedb.org/3/search/movie?api_key=170b9b6ee3a93a04400d81014d1e9315&language=it-IT' , {
            params: {
                query: this.query,
            }
            }).then ((result)=> {
                this.film = result.data.results;
                for(let k in result.data.results){
                    this.votoStella.push(Math.trunc(Math.ceil((result.data.results[k].vote_average * 0.5))));
                }
            });
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=170b9b6ee3a93a04400d81014d1e9315&language=it-IT&page=1&include_adult=false', {
                params: {
                    query: this.query,
                }
            }).then((result)=> {
                this.series = result.data.results;
                for(let k in this.series){
                    this.votoStellaSerie.push(Math.trunc(Math.ceil((result.data.results[k].vote_average * 0.5))));
                }
            });
        },
    }
});


// function  callApi(link) {
//     axios.get(link, { params:
//         {
//         query: this.query,
//     }
//     }).then((result)=> {
//         this.film = result.data.results;
//     })
// }
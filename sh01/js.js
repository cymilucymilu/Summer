new Vue({
    el: "#app",
    data: {
        users: [
            {
                name: "Tom",
                age: 20,
                gender: 1,
                score: 78
            },
            {
                name: "Rose",
                age: 18,
                gender: 2,
                score: 86
            },
            {
                name: "Jerry",
                age: 26,
                gender: 1,
                score: 90
            },
            {
                name: "Tony",
                age: 30,
                gender: 1,
                score: 52
            }
        ]
    },
    methods: {
        sortByScore() {
            this.users.sort((a, b) => b.score - a.score);
        }
    }
})
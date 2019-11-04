let state = {
    news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
    },
    news2: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
    },
    news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
    }
};

for (const key in state) {
    if (state.hasOwnProperty(key)) {
        console.log(state[key]);
    }
}

console.log('\n\n');

state = Object.values(state);

for (const iterator of state) {
    console.log(iterator);
}
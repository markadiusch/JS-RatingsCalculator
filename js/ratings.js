const elements = document.querySelectorAll('.rating');

elements.forEach(element => {
    rating = parseInt(element.id.replace('star', ''));
});

function collect_ratings(){
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    let rating = 0;
};
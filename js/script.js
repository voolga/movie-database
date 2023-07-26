'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "ЛОГАН",
            "ЛИГА СПРАВЕДЛИВОСТИ",
            "ЛА-ЛА ЛЕНД",
            "ОДЕРЖИМОСТЬ",
            "ИНТЕРСТЕЛЛАР"
        ]
    };

    const adv = document.querySelector('.promo__adv');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');


    const deleteAdv = (block) => {
        block.remove();
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);


        films.forEach((item, index) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>
        `;
        });


        document.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', (event) => {
                // console.log(event.target)
                event.target.parentElement.remove();
                movieDB.movies.splice(index, 1);
                createMovieList(films, parent);

            });
        })

    }


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value.toUpperCase();
        const favorite = checkbox.checked;


        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(1, 22) + '...';
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }

        if (favorite) {
            console.log('Добавили любимый фильм');
        }

        event.target.reset();
    })

    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
})


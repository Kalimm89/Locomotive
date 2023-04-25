//Header search form
(function () {
    const searchBtn = document.getElementById('search_but_on');
    const adress = document.getElementById('p-adress');
    const searchForm = document.getElementById('search_form_mob');
    searchBtn.addEventListener('click', () => {
        searchBtn.style.display = 'none';
        adress.style.display = 'none';
        searchForm.style.display = 'block';
    });
}());

// document.getElementsById('search_but_on').onclick = function() {
// document.getElementsById('search_but_on').style.display = none;
// }

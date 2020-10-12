document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello');

    const newAlbumForm = document.querySelector('#new-album-form');
    newAlbumForm.addEventListener('submit', handleNewAlbumFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleNewAlbumFormSubmit = function (event) {
    event.preventDefault();

    const albumListEntry = createAlbumListEntry(event.target);
    const albumList = document.querySelector('#album-list');
    albumList.appendChild(albumListEntry);

    event.target.reset();
};

const createAlbumListEntry = function (form) {
    const albumListEntry = document.createElement('li');
    albumListEntry.classList.add('#album-list-entry');

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    albumListEntry.appendChild(title);

    const artist = document.createElement('h4');
    artist.textContent = form.artist.value;
    albumListEntry.appendChild(artist);

    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    albumListEntry.appendChild(genre);

    const format = document.createElement('p');
    format.textContent = form.format.value;
    albumListEntry.appendChild(format);

    return albumListEntry;
};

const handleDeleteAllClick = function (event) {
    const albumList = document.querySelector('#album-list');
    readingList.innerHTML = '';
}
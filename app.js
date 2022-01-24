const postURl = 'https://jsonplaceholder.typicode.com/posts';

const pressBtn = document.getElementById('pressBtn');
const load = document.getElementById('listItem');

pressBtn.addEventListener('click', function () {
    fetch(postURl)
        .then(response => response.json())
        .then(postAll => {
            postAll.forEach((post, index) => {
                let allListItemsData = listItemStored(post.title, index);
                load.appendChild(allListItemsData);
            });

        })
})

function listItemStored(item, itemNumber) {
    let li = document.createElement('li')
    li.innerHTML = item, itemNumber
    return li;
}

































// pressBtn.addEventListener('click', function () {
//       fetch(URl)
//             .then(response => response.json())
//             .then(posts => {
//                   posts.forEach((post, indexNumber) => {
//                         let listItems = listItemMekar(post)
//                         load.appendChild(listItems)
//                         console.log(listItems)
//                   });
//             })
//             .catch(event => {
//                   console.log(event.message)
//             })
// })


// function listItemMekar(items, no) {
//       let li = document.createElement('li');
//       li.innerHTML = `${no}. ${items}`
// }
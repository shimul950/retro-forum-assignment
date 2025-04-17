const loadPost = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const allPost = data.posts;
    displayPost(allPost);
}
const displayPost = allPost => {
    const postContainer = document.getElementById('post-container');
    const seenPostdiv =document.getElementById('seen-post-div');
    
    // clear previous data to load new data

    allPost.forEach(post => {
        
        console.log(post);
        const postCard = document.getElementById('post-card');
        const postCards = document.createElement('div');
        postCards.classList = `hover:border-2 border-sky-300 rounded-xl p-4 mt-4 shadow-sm`
        postCards.innerHTML = `
                    <div class="flex gap-4">
                        <div class="avatar avatar-}">
                            <div class="w-24 rounded-xl">
                                <img src="${post.image}" />
                            </div>
                        </div>
                        
                        <div>
                            <ul class="flex gap-8 text-gray-600">
                                <li># ${post.category} </li>
                                <li>${post.author.name}</li>
                            </ul>
                            <h2 class="text-xl font-semibold">${post.title}</h2>
                            <p class="text-gray-600 ">${post.description} </p>
                        </div>
                    </div>

                    <div class=" flex justify-between border-t-2 border-dashed border-gray-300 py-2 mt-8">
                        <ul class="flex gap-8">
                            <li><i class="fa-regular fa-comment"></i> ${post.comment_count}</li>
                            <li><i class="fa-regular fa-eye"></i></i> ${post.view_count}</li>
                            <li><i class="fa-regular fa-clock"></i> ${post.posted_time}</li>
                        </ul>
                        <button id="${post.id}" class="btn bg-sky-400 rounded-full hover:bg-sky-700"><i class="fa-solid fa-envelope" style="color: #f5f7fa;"></i></button>
                    </div>`              
        postCard.appendChild(postCards);
        

        document.getElementById(post.id).addEventListener('click',function(){
            const seenPosts = document.createElement('div')
            seenPosts.classList = `bg-white my-3 p-2 rounded-xl`
            seenPosts.innerHTML = `
                <div class="flex justify-between">
                    <h2 class=" font-bold ">${post.title}</h2>
                    <p class="flex items-center gap-1"><i class="fa-regular fa-eye"></i></i> ${post.view_count}</p>
                </div>`
            seenPostdiv.appendChild(seenPosts);
            const markAsRead = document.getElementById('mark-as-read');
            const markRead = markAsRead.innerText;
            const markAsReadBtn = parseInt(markRead);
            markAsRead.innerText = markAsReadBtn + 1;
        })
    })
    // off loading spinner
    toogleLoadingSpiner(false);
}

// handle search btn
const handleBtn = ()=>{
    toogleLoadingSpiner(true);
    const searchValue = document.getElementById('search-post')
    const searchText = searchValue.value;
    loadPost(searchText);
}

// loading spinner
const toogleLoadingSpiner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
    
}

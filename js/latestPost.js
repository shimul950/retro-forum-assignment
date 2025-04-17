// data loading of latest post section

const loadLatestPost = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    displayLatestPost(data);
}
const displayLatestPost = allLatestPost => {

    const latestPostContainer = document.getElementById('latest-post-container');
    allLatestPost.forEach(element => {
        console.log(element);
        const latestPost = document.createElement('div');
        latestPost.classList = `card bg-base-100 border-2 border-gray-200 shadow-sm`;
        latestPost.innerHTML = `
                    <figure class=" p-4">
                        <img src="${element.cover_image}"
                            alt="Shoes" class="rounded-xl"/>
                    </figure>
                    <div class="p-4">
                        <p class="text-gray-400 mb-2">${element.author.posted_date}</p>
                        <h2 class="card-title text-xl font-bold mb-2">${element.title}</h2>
                        <p class="mb-4">${element.description}</p>
                        <div class="flex gap-4">
                            <div class="avatar">
                                <div class="w-15 rounded-full">
                                  <img src="${element.profile_image}"/>
                                </div>
                            </div>
                            <div>
                                <h1 class="text-lg font-bold">${element.author.name}</h1>
                                <p class="text-gray-400">${element.author.designation}</p>
                            </div>
                        </div>
                    </div>`;            
        latestPostContainer.appendChild(latestPost);
    });
}
loadLatestPost();
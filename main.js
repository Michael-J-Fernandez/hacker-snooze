// querySelect DOM elements
let navTop100 = document.querySelector('#nav_top-100');
let navAsk = document.querySelector('#nav_ask');
let contentTable = document.querySelector('#content-table');


// creates table row out of each top story
let generateStoryRow = function (storyData){
    let tr = document.createElement('tr');
    tr.class = "story-row";

    tr.innerHTML = `<tr class="story-row">
                        <td class="story-btns" style="width: 1%; white-space: nowrap;">
                            <div class="btn-group btn-group-sm d-flex aligns-items-center justify-content-center" role="group">
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-heart text-danger"></i> ${storyData['score']}</button>
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-chat-right-text"></i> ${storyData['descendants']}</button>
                            </div>    
                        </td>
                        <td class="story-by" style="width: 1%; white-space: nowrap;">By:  ${storyData['by']}</td>
                        <td class="story-title">
                            <a class="ask-title" href="${storyData['url']}" target="_blank">${storyData['title']}</a>
                        </td>
                    </tr>`;

    return tr;
}                    


// generates table row out of each top ask
let generateAskRow = function (storyData){
    let tr = document.createElement('tr');
    tr.class = "story-row";

    tr.innerHTML = `<tr class="story-row">
                        <td class="story-btns" style="width: 1%; white-space: nowrap;">
                            <div class="btn-group btn-group-sm d-flex aligns-items-center justify-content-center" role="group">
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-heart text-danger"></i> ${storyData['score']}</button>
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-chat-right-text"></i> ${storyData['descendants']}</button>
                            </div>    
                        </td>
                        <td class="story-by" style="width: 1%; white-space: nowrap;">By:  ${storyData['by']}</td>
                        <td class="story-title">
                            <a href="https://hacker-news.firebaseio.com/v0/item/${storyData['id']}/text.json?print=pretty" target="_blank">${storyData['title']}</a>
                        </td>
                    </tr>`;
    return tr;
}                    



// Array with top 100 story IDs
let topStories = [];

// gets array with top 100 story IDs
let getTopStories = async () => {

    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();

    for (let i = 0; i < 100; i++) {
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

        let storyData = await storyResponse.json();

        contentTable.appendChild(generateStoryRow(storyData));
    }
}


let getTopAsk = async () => {

    let response = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty');
    let data = await response.json();

    for (let i = 0; i < 100; i++) {
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

        let storyData = await storyResponse.json();

        contentTable.appendChild(generateAskRow(storyData));
    }
}


// loads top 100 upon first loading the main page
document.onload = getTopStories;


// makes top 100 nav tab active
navTop100.addEventListener('click', ()=>{
    navTop100.classList.add('active');
    navAsk.classList.remove('active');

});

// makes ask nav tab active - beta
navAsk.addEventListener('click', ()=>{
    navTop100.classList.remove('active');
    navAsk.classList.add('active');

});


// loads content based on active nav tab
if (navTop100.classList.contains('active')){
    getTopStories();

} else if (navAsk.classList.contains('active')){
    getTopAsk();
}
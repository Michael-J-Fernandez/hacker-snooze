let testStory = {
    "by": "mooreds",
    "descendants": 3,
    "id": 33644637,
    "kids": [
        33645849,
        33645668,
        33645095
    ],
    "score": 7,
    "time": 1668714801,
    "title": "Punctuation and Other Ways Negotiators Have Resolved Climate Change Issues",
    "type": "story",
    "url": "https://repository.law.umich.edu/mjeal/vol6/iss1/2/"
}

// querySelect DOM elements

let contentTable = document.querySelector('#content-table');

let generateStoryRow = function (storyData){
    let tr = document.createElement('tr');
    tr.class = "story-row";

    tr.innerHTML = `<tr class="story-row">
                        <td class="story-btns" style="width: 1%; white-space: nowrap;">
                            <div class="btn-group btn-group-sm" role="group">
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-heart text-danger"></i> ${storyData['score']}</button>
                                <button type="button" class="btn btn-outline-secondary"><i class="bi bi-chat-right-text"></i> ${storyData['kids'].length}</button>
                            </div>    
                        </td>    
                        <td class="story-title">
                            <a href="${storyData['url']}">${storyData['title']}</a>
                        </td>
                    </tr>`;

    return tr;
}                    


contentTable.appendChild(generateStoryRow(testStory))
/*
Your website loads at least the 100 current top stories on Hacker News and displays their titles on the page

returns array with 500 id's top recent stories
get i = 99;
https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

- loop through array and feed each storyID to function

- function will take each ID and make a section out of it
- Section Components:
- Title: link to story page
- Score: button (heart?)
- Comments: number, link, displays comments when pressed

*/


// Array with top 100 story IDs
let topStories = [];

// // gets array with top 100 story IDs
// let getTopStories = async () => {

//     let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
//     let data = await response.json();

//     for (let i = 0; i < 100; i++) {

//         // console.log(data[i]);

//         let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);

//         let storyData = await storyResponse.json();

//         console.log(storyData)


//     }
//     // console.log(topStories);
//     // return topStories;
// }

// getTopStories();





/* ------------------------------------------------------------------------------------------------
Each story's title should be a link to the story's URL

fetch the story object:
`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`

storyObj['title'] = title

*/



/* ------------------------------------------------------------------------------------------------
Adjacent to the story's title, the story's score, number of comments, and author's username should be visible

*/




/* ------------------------------------------------------------------------------------------------
Your site should look at least a little nicer than the real Hacker News (Bootstrap!)

*/














// let generateStoryItem = function (){
//     let tr = document.createElement('tr');
//     tr.class = "story-row";

//         let btnTd = document.createElement('td');
//         btnTd.style.cssText = "width: 1%; white-space: nowrap;";

//             let div = document.createElement('div');
//             div.classList.add("btn-group btn-group-sm");
//             div.setAttribute('role', 'group');

//                 // x2
//                 let btnL = document.createElement('button');
//                 btnL.type = "button";
//                 btnL.classLis.add('btn btn-outline-secondary');

//                     let iHeart = document.createElement('i');
//                     iHeart.classList.add('bi bi-heart text-danger');
//                     // get RANK str and add next to

//                 let btnR = document.createElement('button');
//                 btnR.type = "button";
//                 btnR.classLis.add('btn btn-outline-secondary');

//                     let iChat = document.createElement('i');
//                     iChat.classList.add('bi bi-chat-right-text');
//                     // get KIDS.length str and add next to

//         let storyTd = document.createElement('td');
//         story


// }

var reviewListDiv=document.querySelector('.reviewListDiv');

for (let i=0; i<reviewList.length; i++){   
    var reviewItem=document.createElement('div');
    reviewListDiv.appendChild(reviewItem);
    reviewItem.classList.add('reviewItem');
    
    var reviewId=document.createElement('div');
    reviewId.classList.add('reviewId');
    var reviewTitle=document.createElement('div');
    reviewTitle.classList.add('reviewTitle');
    var reviewAuthor=document.createElement('div');
    reviewAuthor.classList.add('reviewAuthor');
    var reviewDate=document.createElement('div');
    reviewDate.classList.add('reviewDate');
    
    reviewItem.appendChild(reviewId);
    reviewItem.appendChild(reviewTitle);
    // reviewItem.appendChild(reviewAuthor);
    // reviewItem.appendChild(reviewDate);

    reviewId.innerHTML=reviewList[i].id;
    reviewTitle.innerHTML=reviewList[i].title;
    reviewAuthor.innerHTML=reviewList[i].author;
    reviewDate.innerHTML=reviewList[i].date;

    // reviewItem.addEventListener("click",function(){
    //     localStorage.setItem("titleid",reviewList[i].id);
    //     location.href='./showreview.html';
    // })
}


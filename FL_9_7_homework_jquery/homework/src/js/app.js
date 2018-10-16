var data;
var prevId;
var nextId;
var numb = 0;
$(document).ready(function () {
    let container = document.getElementById('container');

    $.getJSON("./data/media.json", function (json) {
        data = json;
        addImages(12);
    });
});

$('div').on('click', '.hoverDiv', function () {
    let id = $(this).next().attr("id");
    $(this).css({display:'none'});
    popUp(id);
});

$("div").on('mouseenter', '.gallery ', function () {
    $(this).prev().css({display: 'block'})
});
$("div").on('mouseleave', '.hoverDiv ', function () {
    $(this).css({display: 'none'})
});

function addImages(countImgToShow) {
    for (; numb < countImgToShow && numb < data.media.length; numb++) {
        let imgDiv = $('<div class="imgDiv"></div>');
        let img = $('<img/>', {
            id: data.media[numb].id,
            class: 'gallery',
            src: data.media[numb].display_url,
        });
        let hoverDiv = $('<div class="hoverDiv"><div class="hoverInfo"><span class="hoverLikeImg"></span><span class="hoverLike">' + data.media[numb].edge_liked_by.count + '</span><span class="hoverCommentImg"></span><span class="hoverComment">' + data.media[numb].edge_media_to_comment.count + '</span></div></div>', {});
        imgDiv.appendTo(container);
        hoverDiv.appendTo(imgDiv);
        img.appendTo(imgDiv);
    }
}

function popUp(imgid) {
    let appearBg = $('<div class="appearBg" onclick="closeImage()"></div>');
    let appearDiv = $('<div class="appearDiv"></div>');
    let appearInfo = $('<div class="appearInfo" ></div>');
    let prev = $('<span class="prev"></span>');
    let next = $('<span class="next"></span>');

    for (var i = 0; i <= 21; i++) {
        if (imgid === data.media[i].id) {
            let appearImg = $('<img/>', {
                class: 'appearImage',
                id: data.media[i].id,
                src: data.media[i].display_url,
                alt: 'appearImage'
            });
            let userInfo = $('<div class="userInfo"></div>');
            let userpar = $('<p class="userpar bold">'+data.username+' •</p>');
            let follow = $('<span> Follow<span/>');
            let imgInfo = $('<p class="imgInfo"><span class="bold">'+data.username+' </span>'+data.media[i].edge_media_to_caption+'</p>');

                // $('imgInfo').each(function(i) {
                //
                //     var iTotalWords = $(this).text().split(' ').length;
                //     console.log(iTotalWords);
                //     // $(this).append("<b> " + iTotalWords + " words </b>");
                //
                // });

            let userImage = $('<img/>', {
                class: 'userImage',
                src: data.profile_pic_url,
            });
            let likeBlock = $('<div class="likeBlock"><p class="likes">' + data.media[i].edge_liked_by.count + ' likes</p><form><input class="commentInput" placeholder="Add a comment..."></form></div>');
            $('#container').append(appearBg);
            $(appearBg).append(appearDiv);
            $(appearBg).append(prev);
            $(appearBg).append(next);
            $(appearDiv).append(appearImg);
            $(appearDiv).append(appearInfo);
            $(userInfo).append(userImage);
            $(userpar).append(follow);
            $(userInfo).append(userpar, imgInfo);
            $(appearInfo).append(userInfo);
            $(appearInfo).append(likeBlock);
            $('.appearBg .appearDiv').on('click', function (e) {
                e.stopPropagation();
            });

            if (Number(data.media[i].id) === 0) {
                prevId = data.media[21].id;
                nextId = data.media[i + 1].id;
            } else if (Number(data.media[i].id) === 21) {
                nextId = data.media[0].id;
                prevId = data.media[i - 1].id;
            } else {
                nextId = data.media[i + 1].id;
                prevId = data.media[i - 1].id;
            }
            $('.appearBg .prev').on('click', function (e) {
                closeImage();
                popUp(prevId);
                e.stopPropagation();
            });
            $('.appearBg .next').on('click', function (e) {
                closeImage();
                popUp(nextId);
                e.stopPropagation();
            });
        }
    }
}

$('#viewMore').on('click', function () {

    let till = numb + 6;
    addImages(till);
    console.log(till);
    numb = till;
    if(numb>= data.media.length){
        $(this).css({display:'none'})
    }
});

function closeImage() {
    $('.appearBg').remove();
}

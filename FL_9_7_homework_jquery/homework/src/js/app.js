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
    $(this).css({display: 'none'});
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
    let appearBg = $('<div class="appearBg"></div>');
    let appearDiv = $('<div class="appearDiv"></div>');
    let appearInfo = $('<div class="appearInfo" ></div>');
    let prev = $('<span class="prev"></span>');
    let next = $('<span class="next"></span>');
    let cross = $('<div class="cross"><span class="crossL"></span><span class="crossR"></span></div>');

    for (var i = 0; i <= 21; i++) {
        if (imgid === data.media[i].id) {
            let appearImg = $('<img/>', {
                class: 'appearImage',
                id: data.media[i].id,
                src: data.media[i].display_url,
                alt: 'appearImage'
            });
            let userInfo = $('<div class="userInfo"></div>');
            let userpar = $('<p class="userpar bold">' + data.username + ' •</p>');
            let follow = $('<span> Follow<span/>');
            if (data.media[i].location.length > 0) {
                let location = $('<br/><p class="location">' + data.media[i].location + '</p>');
                location.css({margin: '0'});
                $(userpar).append(follow);
                $(userpar).append(location);
            } else {
                $(userpar).append(follow);
            }
            let imgInfo = $('<p class="imgInfo"><span class="bold">' + data.username + ' </span>' + data.media[i].edge_media_to_caption + '</p>');
            jQuery.fn.highlight = function (str, className) {
                var regex = new RegExp(str, "gi");
                return this.each(function () {
                    this.innerHTML = this.innerHTML.replace(regex, function (matched) {
                        return "<span class=\"" + className + "\">" + matched + "</span>";
                    });
                });
            };
            let userImage = $('<img/>', {
                class: 'userImage',
                src: data.profile_pic_url,
            });
            let likeBlock = $('<div class="likeBlock"><p class="likes">' + data.media[i].edge_liked_by.count + ' likes</p><form><input class="commentInput" placeholder="Add a comment..."></form></div>');
            $('#container').append(appearBg);
            $(appearBg).append(appearDiv);
            $(appearBg).append(prev);
            $(appearBg).append(next);
            $(appearBg).append(cross);
            $(appearDiv).append(appearImg);
            $(appearDiv).append(appearInfo);
            $(userInfo).append(userImage);

            $(userInfo).append(userpar, imgInfo);
            $(appearInfo).append(userInfo);
            $(appearInfo).append(likeBlock);
            $('.appearBg .appearDiv').on('click', function (e) {
                e.stopPropagation();
            });
            $(".imgInfo*").highlight(/\#.\S\w*/ig, "highlight");
            $(".imgInfo*").highlight(/\@.\S\w*/ig, "highlight");
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
            $('.appearBg .cross').on('click', function (e) {
                closeImage();
                e.stopPropagation();
            });
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
    if (numb >= data.media.length) {
        $(this).css({display: 'none'})
    }
});

function closeImage() {
    $('.appearBg').remove();
}

$('body').keyup(function (e) {
    if (e.key === "Escape") {
        closeImage()
    }
});
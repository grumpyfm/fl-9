var data;
var prevId;
var nextId;
let count = 0;
$(document).ready(function () {
    let container = document.getElementById('container');

    $.getJSON("./data/media.json", function (json) {
        data = json;

        for (; count < 12; count++) {
            let imgDiv = $('<div class="imgDiv"></div>');
            let img = $('<img/>', {
                id: data.media[count].id,
                class: 'gallery',
                src: data.media[count].display_url,
            });
            let hoverDiv = $('<div class="hoverDiv"></div>', {});
            imgDiv.appendTo(container);
            hoverDiv.appendTo(imgDiv);
            img.appendTo(imgDiv);
        }
    });
});


$('div').on('click', '.gallery', function () {
    let id = $(this).attr("id");
    console.log(id);
    popUp(id);
});

function popUp(imgid) {
    let appearBg = $('<div class="appearBg" onclick="closeImage()"></div>');
    let appearDiv = $('<div class="appearDiv"></div>');
    let appearInfo = $('<div class="appearInfo" ></div>');
    let prev = $('<span class="prev"></span>');
    let next = $('<span class="next"></span>');

    for (let i = 0; i < 21; i++) {
        if (imgid === data.media[i].id) {
            console.log('o');
            let appearImg = $('<img/>', {
                class: 'appearImage',
                id: data.media[i].id,
                src: data.media[i].display_url,
                alt: 'appearImage'
            });
            let userInfo = $('<div class="userInfo"></div>');
            let userpar = $('<p></p>', {
                text: data.username,
            });
            let imgInfo = $('<p></p>', {
                text: data.media[i].edge_media_to_caption,
            });
            // let userImage = $('<img/>', {
            //     class: userImage,
            //     src: data.profile_pic_url,
            // });
            $('#container').append(appearBg);
            $(appearBg).append(appearDiv);
            $(appearBg).append(prev);
            $(appearBg).append(next);
            $(appearDiv).append(appearImg);
            $(appearDiv).append(appearInfo);
            $(userInfo).append(userpar, imgInfo);
            $(appearInfo).append(userInfo);
            $('.appearBg .appearDiv').on('click', function (e) {
                e.stopPropagation();
            });
            prevId = data.media[i - 1].id;
            nextId = data.media[i + 1].id;
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
    let till = count + 6;
    for (count; count < till && count < data.media.length; count++) {
        let imgDiv = $('<div class="imgDiv"></div>');
        let img = $('<img/>', {
            id: data.media[count].id,
            class: 'gallery',
            src: data.media[count].display_url,
        });
        let hoverDiv = $('<div class="hoverDiv"></div>', {});
        imgDiv.appendTo(container);
        hoverDiv.appendTo(imgDiv);
        img.appendTo(imgDiv);
    }
});
// $('div').on('click', '.gallery', function () {
//     let prev = $('<span class="prev"></span>');
//     let next =$('<span class="next"></span>');
//     let srcImg = $(this).attr("src");
//     let appearImg = $('<img/>', {
//         id: 'appearImg',
//         src: srcImg,
//         alt: 'appearImage'
//     });
//     let userInfo = $('<div class="userInfo"></div>');
//     let userpar = $('<p></p>', {
//         text: $(this).attr("data-username"),
//     });
//     let imgInfo = $('<p></p>', {
//         text: $(this).attr('data-caption'),
//     });
//     // let userImage = $('<img/>', {
//     //     class: userImage,
//     //     src: $(this).attr("data-userImage"),
//     // });
//
// let appearBg = $('<div class="appearBg" onclick="closeImage()"></div>');
// let appearDiv = $('<div class="appearDiv" onclick="closeImage()"></div>');
// let appearInfo = $('<div class="appearInfo" onclick="closeImage()"></div>');
// $('#container').append(appearBg);
// $(appearBg).append(prev);
// $(appearBg).append(next);
// $(appearBg).append(appearDiv);
// $(appearDiv).append(appearImg);
// $(appearDiv).append(appearInfo);
// $(userInfo).append(userpar, imgInfo);
// $(appearInfo).append(userInfo);
//
//
// ;

// $('.hoverDiv').mouseenter(function () {
//     $(this).addClass('isHover');
// });
// $('.hoverDiv').mouseleave(function () {
//     $(this).removeClass('isHover')
// });

function closeImage() {
    $('.appearBg').remove();
}

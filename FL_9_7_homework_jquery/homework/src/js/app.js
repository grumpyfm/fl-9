$(document).ready(function () {
    let container = document.getElementById('container');

    $.getJSON("./data/media.json", function (json) {

        for (let i = 0; i < 12; i++) {
            let imgDiv = $('<div class="imgDiv"></div>');
            let img = $('<img/>', {
                id: json.media[i].id,
                class: 'gallery',
                src: json.media[i].display_url,
                'data-userImage': json.profile_pic_url,
                'data-username': json.username,
                'data-likes': json.media[i].edge_liked_by.count,
                'data-caption': json.media[i].edge_media_to_caption,
                'data-comment': json.media[i].edge_media_to_comment.count,
                'data-location': json.media[i].location,

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
    let appearBg = $('<div class="appearBg" onclick="closeImage()"></div>');
    let appearDiv = $('<div class="appearDiv" onclick="closeImage()"></div>');
    let appearInfo = $('<div class="appearInfo" onclick="closeImage()"></div>');
    popUp(id);
    function popUp(imgid) {
        $.getJSON("./data/media.json", function (json) {
            let prev = $('<span class="prev"></span>');
            // $('.prev').on('click',function () {
            //     console.log('qwertyuiop');
            //     // imgid=imgid-1;
            //     // popUp(imgid);
            // });
            let next = $('<span class="next"></span>');
            // next.click(function (imgid) {
            //     imgid=imgid+1;
            //     popUp(imgid);
            // });
            for (let i = 0; i < 21; i++) {
                console.log('hj');
                if (imgid === json.media[i].id) {
                    console.log('o');
                    let appearImg = $('<img/>', {
                        id: json.media[i].id,
                        src: json.media[i].display_url,
                        alt: 'appearImage'
                    });
                    let userInfo = $('<div class="userInfo"></div>');
                    let userpar = $('<p></p>', {
                        text: json.username,
                    });
                    let imgInfo = $('<p></p>', {
                        text: json.media[i].edge_media_to_caption,
                    });
                    // let userImage = $('<img/>', {
                    //     class: userImage,
                    //     src: json.profile_pic_url,
                    // });
                    $('#container').append(appearBg);
                    $(appearBg).append(appearDiv);
                    $(appearBg).append(prev);
                    $(appearBg).append(next);
                    $(appearDiv).append(appearImg);
                    $(appearDiv).append(appearInfo);
                    $(userInfo).append(userpar, imgInfo);
                    $(appearInfo).append(userInfo);
                }
            }
        })
    }

});
$('.appearBg').on('click', '.prev',function () {
    console.log('qwertyuiop');
    // imgid=imgid-1;
    // popUp(imgid);
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
    $('.appearImg').remove();
    $('.appearDiv').remove();
}

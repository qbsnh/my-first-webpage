var search_input=null;

searchbox.oninput = function () {
    search_input = $(".searchbox").val()
    $.ajax({
        type: "get",
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.common&query=' + search_input,
        dataType: 'jsonp',
        // jsonp: 'jsonpCallback',
    }).done(function (data) {
        // console.log(data.song_list)
        //创建搜索联想列表
        list(data)
    })

}
function list(data) {

    var songs = data.song_list
    var sh = $("<ul class='serch_music'></ul>")
    // console.log(sh)
    $.each(songs, function (i, v) {

        var li = $("<li>" + v.title + "---" + v.author + "</li>")
        $(".serch_music").append(li)
        $(".search_box").append(sh)
        // console.log(data.song_list)
    })
    $(".serch_music").on('click', 'li',function(){
        var lb=$(this).html().replace(/<[^<>]+>/g, '')
        location.href="index.html?"+lb
    })
}
$(".searchbox_icon").click(function(){
    location.href="index.html?"+ search_input})




$(function() {

    //点击相应链接实现表格的滑动效果

    var conWidth = $('#container').width(),
        tableHeight = $('#text').height(),
        links = $('#page-nav li').find('a');

    $('#text .gis-table').css('width', conWidth - 30 + 'px');
    $('#text iframe').css('width', conWidth  + 'px');
    $('#text iframe').css('height', tableHeight + 30  + 'px');
    $('#container').css('height', tableHeight + 30 + 'px');

    for(var i = 0; i < links.length; i++ ) {
        links[i].onclick=(function(i){
            return function() {
                var a = -conWidth * i;
                $('#text').animate({'margin-left': a + 'px'}, 300);
            }})(i);
    }

    //点击链接后选中效果
    $('#page-nav li a').on('click', function () {
        var $this = $(this);
        $('#page-nav li a').removeClass('selected');
        $this.addClass('selected');
    });
});
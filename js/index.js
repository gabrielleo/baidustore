$(function(){
    var imag_box=$('.image');
    var banner=$('.banner-left');
    var b_btn=$('.image-list');
    var btn=$('.banner-btn');
    var t=setInterval(move,3000);
    var i=0;
    function move(){
        var x=$('.image-list').width();
    	i++;
    	if (i==b_btn.length) {
    		i=0;
    	}
    	imag_box.animate({left:x*-i},500)
        btn.removeClass('hot').eq(i).addClass('hot');
    }
    btn.eq(0).addClass('hot');
    btn.click(function(){
        i=btn.index(this);
        var x=$('.image-list').width();
        btn.removeClass('hot').eq(i).addClass('hot');
        imag_box.animate({left:x*-i},500,function(){
        });
    })
    var left=$('.btn-left');
    var right=$('.btn-right');
    right.click(function(){
        var x=$('.image-list').width();
            i++
            if (i==btn.length) {
                i=0;
            };
            imag_box.animate({left:x*-i},500)
            btn.removeClass('hot').eq(i).addClass('hot');
    })
    left.click(function(){
        var x=$('.image-list').width();
            i--
            if (i==-1) {
                i=b_btn.length-1;
            };
            imag_box.animate({left:x*-i},500)
            btn.removeClass('hot').eq(i).addClass('hot');
    })
    banner.onmouseover=function(){
            clearInterval(t)
     }
     banner.onmouseout=function(){
        t=setInterval(move,3000);
     }
    //返回顶部
    var top=$('.back-top');
    top.click(function(){
        $('html,body').animate({scrollTop:0},1000)
        return false;
    })
})
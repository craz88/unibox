	$(function(){

     //履歴習得
    for(var i = 0; i < $('[name=set]').length; i++) {
      //mathの中には質問履歴のidが入っている。
       math = document.getElementsByName('set')[i].value;
       done_show = document.getElementsByName("show")[i];
       done_show.setAttribute("href", done_show
        .getAttribute("href") + "/" + math);
    $(done_show).append($('[name=set1]')[i].value);
  }
   
  // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
  for (var i = 0; $('[name=modaler]').length; i++) {
      modal_open = document.getElementsByName('modaler')[i];
      modal_open.addEventListener('click', function() {
     
    // 黒い背景をbody内に追加
    $('body').append('<div class="modal_bg"></div>');
    $('.modal_bg').fadeIn();
 
    // data-targetの内容をIDにしてmodalに代入
    var modal = '#' + $(this).attr('data-target');
 
    // モーダルをウィンドウの中央に配置する
    function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
 
        var x = (w - $(modal).outerWidth(true)) / 2;
        var y = (h - $(modal).outerHeight(true)) / 2;
 
        $(modal).css({'left': x + 'px','top': y-50 + 'px'});
    }
 
    // modalResizeを実行
    modalResize();

    // modalをフェードインで表示
    $(modal).fadeIn();
     // $('[name=youso]').append('<input type="text" placeholder="Title" required="" name="title" class="title_input">');
     // $('[name=youso]').append('<br>');
     // $('[name=youso]').append('<textarea placeholder="Contents" required="" name="content" class="contents_input"></textarea>');
     // $('[name=youso]').append('<br>');
     
     

    // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
    $('.modal_bg, .modal_close').click(function(){
        // $('.title_input').remove();
        // $('.contents_input').remove();
        $('.modal_box').fadeOut();
        $('.modal_bg').fadeOut('slow',function(){
            $('.modal_bg').remove();
        });
    });
 
    // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
        modalResize();
    });
 
    // .modal_switchを押すとモーダルを切り替える
    $('.modal_switch').click(function(){
 
      // 押された.modal_switchの親要素の.modal_boxをフェードアウトさせる
      $(this).parents('.modal_box').fadeOut();
 
      // 押された.modal_switchのdata-targetの内容をIDにしてmodalに代入
      var modal = '#' + $(this).attr('data-target');
 
      // モーダルをウィンドウの中央に配置する
      function modalResize(){
          var w = $(window).width();
          var h = $(window).height();
 
          var x = (w - $(modal).outerWidth(true)) / 2;
          var y = (h - $(modal).outerHeight(true)) / 2;
 
          $(modal).css({'left': x + 'px','top': y-50 + 'px'});
      }
 
      // modalResizeを実行
      modalResize();
 
      $(modal).fadeIn();
 
      // ウィンドウがリサイズされたらモーダルの位置を再計算する
      $(window).on('resize', function(){
          modalResize();
      });
    });
  })};
});
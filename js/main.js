      var sidebar = document.getElementById('sidebar');
      var header_content = document.getElementById('header_content');
      var square = document.getElementById('square');
      var title = document.getElementById('title');
      var text1 = document.getElementById('text1');
      var title1 = document.getElementById('title1');
      var text11 = document.getElementById('text11');
      var title2 = document.getElementById('title2');
      var text12 = document.getElementById('text12');
      var page1_item1 = document.getElementById('page1_item1');
      var page1_item2 = document.getElementById('page1_item2');
      var page1_item3 = document.getElementById('page1_item3');
      var page1_item4 = document.getElementById('page1_item4');
      var page1_item5 = document.getElementById('page1_item5');
      var page1_items = document.getElementById('page1_items');
      var page2_items = document.getElementById('page2_items');
      var page1_item_img = document.getElementById('page1_item_img');
      var page1_item = document.querySelectorAll('.page1_item');
      var item1_text21 = document.querySelector('.item1_text21');
      var item1_text22 = document.querySelector('.item1_text22');
      var item1_text23 = document.querySelector('.item1_text23');
      var item1_text24 = document.querySelector('.item1_text24');
      var item1_text25 = document.querySelector('.item1_text25');
      var item1_text1 = document.getElementById('item1_text1');
      var item1_text2 = document.getElementById('item1_text2');
      var item1_text3 = document.getElementById('item1_text3');
      var item1_text4 = document.getElementById('item1_text4');
      var item1_text5 = document.getElementById('item1_text5');
      var text211 = document.getElementById('text211');
      var text212 = document.getElementById('text212');
      var text213 = document.getElementById('text213');
      var text214 = document.getElementById('text214');
      var text215 = document.getElementById('text215');
      var page0 = document.getElementById('page0');
      var page1 = document.getElementById('page1');
      var page2 = document.getElementById('page2');
      var page3 = document.getElementById('page3');
      var page3_content = document.getElementById('page3_content');

// script change pages start

function show1() {
   page0.classList.add('opac0');
   page1.classList.add('back');
   page1_items.classList.add('back');
   title.classList.add('back');
   text1.classList.add('back2');
}

function back1() {
   page0.classList.remove('opac0');
   page1.classList.remove('back');
   page1_items.classList.remove('back');
   title.classList.remove('back');
   text1.classList.remove('back2');
   sidebar.classList.remove('opac1');
   sidebar.classList.remove('menu_width');
   header_content.classList.remove('dis_no');
   square.classList.remove('dis_no');
}

function show2() {
   page0.classList.add('opac0');
   page2.classList.add('back');
   page2_items.classList.add('back');
   title1.classList.add('back');
   text11.classList.add('back2');
}

function back2() {
   page0.classList.remove('opac0');
   page2.classList.remove('back');
   page2_items.classList.remove('back');
   title1.classList.remove('back');
   text11.classList.remove('back2');
   sidebar.classList.remove('opac1');
   sidebar.classList.remove('menu_width');
   header_content.classList.remove('dis_no');
   square.classList.remove('dis_no');
}

function show3() {
   page0.classList.add('opac0');
   page3.classList.add('back');
   page3_content.classList.add('back');
   title2.classList.add('back');
   text12.classList.add('back2');
}

function back3() {
   page0.classList.remove('opac0');
   page3.classList.remove('back');
   page3_content.classList.remove('back');
   title2.classList.remove('back');
   text12.classList.remove('back2');
   sidebar.classList.remove('opac1');
   sidebar.classList.remove('menu_width');
   header_content.classList.remove('dis_no');
   square.classList.remove('dis_no');
}

// script change pages end


// скрипт page0 start

      function menu() {
         sidebar.classList.add('opac1');
         sidebar.classList.add('menu_width');
         header_content.classList.add('dis_no');
         square.classList.add('dis_no');
      }
      function menu0() {
         sidebar.classList.remove('opac1');
         sidebar.classList.remove('menu_width');
         header_content.classList.remove('dis_no');
         square.classList.remove('dis_no');
      }

// скрипт page0 end

// скрипт page1 start

function posa1() {
   page1_item1.classList.toggle('big1');
   page1_item2.classList.toggle('dis_no');
   page1_item3.classList.toggle('dis_no');
   page1_item4.classList.toggle('dis_no');
   page1_item5.classList.toggle('dis_no');
   item1_text21.classList.toggle('dis_no');
   item1_text1.classList.toggle('dis_no');
   text211.classList.toggle('down');
}

$("#page1_item1").click(function(){
   $("#img11").toggleClass('pad');
   $("#img11").toggleClass('turn');
   $("#page1_item1").toggleClass('pad1');
});

function posa2() {
   page1_item3.classList.toggle('big1');
   page1_item1.classList.toggle('dis_no');
   page1_item2.classList.toggle('dis_no');
   page1_item4.classList.toggle('dis_no');
   page1_item5.classList.toggle('dis_no');
   item1_text3.classList.toggle('dis_no');
   text213.classList.toggle('down');
}

$("#page1_item3").click(function(){
   $("#img13").toggleClass('pad');
   $("#img13").toggleClass('turn');
   $("#page1_item3").toggleClass('pad1');
});

function posa3() {
   page1_item2.classList.toggle('big10');
   page1_item1.classList.toggle('dis_no');
   page1_item3.classList.toggle('dis_no');
   page1_item4.classList.toggle('dis_no');
   page1_item5.classList.toggle('dis_no');
   item1_text2.classList.toggle('dis_no');
   text212.classList.toggle('down');
}

$("#page1_item2").click(function(){
   $("#img12").toggleClass('pad');
   $("#img12").toggleClass('turn');
   $("#page1_item2").toggleClass('pad1');
});

function posa4() {
   page1_item4.classList.toggle('big10');
   page1_item1.classList.toggle('dis_no');
   page1_item2.classList.toggle('dis_no');
   page1_item3.classList.toggle('dis_no');
   page1_item5.classList.toggle('dis_no');
   item1_text4.classList.toggle('dis_no');
   text214.classList.toggle('down');
}

$("#page1_item4").click(function(){
   $("#img14").toggleClass('pad');
   $("#img14").toggleClass('turn');
   $("#page1_item4").toggleClass('pad1');
});


$("#page1_item5").click(function(){
   $("#page1_item5").toggleClass('big1');
   $("#page1_item1").toggleClass('dis_no');
   $("#page1_item2").toggleClass('dis_no');
   $("#page1_item3").toggleClass('dis_no');
   $("#page1_item4").toggleClass('dis_no');
   $("#item1_text5").toggleClass('dis_no');
   $("#text215").toggleClass('down');
});

$("#page1_item5").click(function(){
   $("#img15").toggleClass('pad');
   $("#img15").toggleClass('turn');
   $("#page1_item5").toggleClass('pad1');
});

// скрипт page1 end


// скрипт page2 start

$(".page2_item1").click(function(){
   $(".img21").toggleClass('big2');
   $(".img22").toggleClass('lit');
   $(".img23").toggleClass('lit');
   $(".page2_item1").toggleClass('j_cen2');
   $(".page2_item2").toggleClass('j_cen31');
   $(".page2_item2").toggleClass('n_hov');
   $(".page2_item3").toggleClass('n_hov');
   $(".page2_item3").toggleClass('j_cen222');
   $(".article").toggleClass('dis_no');
   $(".article21").toggleClass('d2');
});

$(".page2_item2").click(function(){
   $(".img22").toggleClass('big2');
   $(".img21").toggleClass('lit');
   $(".img23").toggleClass('lit');
   $(".page2_item1").toggleClass('n_hov');
   $(".page2_item1").toggleClass('j_cen21');
   $(".page2_item3").toggleClass('j_cen22');
   $(".page2_item2").toggleClass('j_cen3');
   $(".page2_item3").toggleClass('n_hov');
   $(".article").toggleClass('dis_no');
   $(".article22").toggleClass('d2');
});

$(".page2_item3").click(function(){
   $(".img23").toggleClass('big2');
   $(".img22").toggleClass('lit');
   $(".img21").toggleClass('lit');
   $(".page2_item1").toggleClass('n_hov');
   $(".page2_item1").toggleClass('j_cen211');
   $(".page2_item2").toggleClass('j_cen32');
   $(".page2_item2").toggleClass('n_hov');
   $(".page2_item3").toggleClass('j_cen');
   $(".article").toggleClass('dis_no');
   $(".article23").toggleClass('d2');
   $(".article23").toggleClass('left');
});

// скрипт page2 end

// скрипт page3 start

$(".img31").click(function(){
   $(".page3_img").toggleClass('bg1');
   $(".page3_img").removeClass('bg2');
   $(".page3_img").removeClass('bg3');
   $(".page3_img").removeClass('bg4');
   $(".page3_img").removeClass('bg5');
   $(".article31").toggleClass('opci1');
   $(".article32").removeClass('opci1');
   $(".article32").removeClass('opci1');
   $(".article34").removeClass('opci1');
   $(".article35").removeClass('opci1');
});

$(".img32").click(function(){
   $(".page3_img").toggleClass('bg2');
   $(".page3_img").removeClass('bg1');
   $(".page3_img").removeClass('bg3');
   $(".page3_img").removeClass('bg4');
   $(".page3_img").removeClass('bg5');
   $(".article32").toggleClass('opci1');
   $(".article31").removeClass('opci1');
   $(".article33").removeClass('opci1');
   $(".article34").removeClass('opci1');
   $(".article35").removeClass('opci1');
});

$(".img33").click(function(){
   $(".page3_img").toggleClass('bg3');
   $(".page3_img").removeClass('bg1');
   $(".page3_img").removeClass('bg2');
   $(".page3_img").removeClass('bg4');
   $(".page3_img").removeClass('bg5');
   $(".article33").toggleClass('opci1');
   $(".article31").removeClass('opci1');
   $(".article32").removeClass('opci1');
   $(".article34").removeClass('opci1');
   $(".article35").removeClass('opci1');
});

$(".img34").click(function(){
   $(".page3_img").toggleClass('bg4');
   $(".page3_img").removeClass('bg1');
   $(".page3_img").removeClass('bg2');
   $(".page3_img").removeClass('bg3');
   $(".page3_img").removeClass('bg5');
   $(".article34").toggleClass('opci1');
   $(".article31").removeClass('opci1');
   $(".article33").removeClass('opci1');
   $(".article32").removeClass('opci1');
   $(".article35").removeClass('opci1');
});

$(".img35").click(function(){
   $(".page3_img").toggleClass('bg5');
   $(".page3_img").removeClass('bg1');
   $(".page3_img").removeClass('bg2');
   $(".page3_img").removeClass('bg3');
   $(".page3_img").removeClass('bg4');
   $(".article35").toggleClass('opci1');
   $(".article31").removeClass('opci1');
   $(".article33").removeClass('opci1');
   $(".article34").removeClass('opci1');
   $(".article32").removeClass('opci1');
});

// скрипт page3 end
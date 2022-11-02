<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="css/style.css">
   <title>Self 17</title>
</head>
<body>
   <div class="wrapper">
      <section id="page0" class="page0">
         <header class="header">
            <a id="logo_link" href="#" class="logo_link">
               <img src="img/logo.png" alt="icon"><p>Clothes</p>
            </a>
            <nav class="nav">
               <ul class="menu_list">
                  <li class="menu_item">
                     <a onclick="show1()" class="men_link" href="#">
                        page 1
                     </a>
                  </li>
                  <li class="menu_item">
                     <a onclick="show2()" class="men_link" href="#">
                        page 2
                     </a>
                  </li>
                  <li class="menu_item">
                     <a onclick="show3()" class="men_link" href="#">
                        page 3
                     </a>
                  </li>
               </ul>
            </nav>
            <div onclick="menu()" class="menu">
               <div class="header_menu"><span></span></div>
            </div>
         </header>
         <div id="header_content" class="header_content">
            <h1 class="word">
               buy
            </h1>
            <h1 class="word">
               our
            </h1>
            <h1 class="word">
               clothes
            </h1>
         </div>
         <aside id="sidebar" class="sidebar">
            <div onclick="menu0()" class="btn1">
               <div class="close1"></div>
            </div>
            <div class="aside_links">
               <a onclick="show1()" id="link_page" href="#" class="link_page">
                  page 1
               </a>
               <a onclick="show2()" id="link_page" href="#" class="link_page">
                  page 2
               </a>
               <a onclick="show3()" id="link_page" href="#" class="link_page">
                  page 3
               </a>
            </div>
         </aside>
         <div id="square" class="square">
            <ul>
               <li></li>
            </ul>
         </div>
      </section>
      <section id="page1" class="page1">
         <div class="bac">
            <a onclick="back1()" href="#">back</a>
         </div>
         <h3 id="title" class="title">page 1</h3>
         <div id="text1" class="text1">
            <div class="text">
               <article class="text_next">
                  Lorem ipsum dolor sit amet.
               </article>
               <div class="img_content">
                  <img src="img/shirt1.png" alt="icon">
                  <img src="img/shirt1.png" alt="icon">
                  <img src="img/shirt1.png" alt="icon">
               </div>
            </div>
         </div>
         <div id="page1_items" class="page1_items">
            <div onclick="posa1()" id="page1_item1" class="page1_item">
               <img class="page1_item_img" src="img/shir11.png" alt="icon">
               <div id="text211" class="text21">
                  Shirt - 100%
               </div>
               <div id="item1_text1" class="item1_text">
                  <p class="item1_text1">T-shirt - 100$<span class="item1_text2 item1_text21">, Size - L</span></p>
               </div>
               <div id="img11" class="img1">
                  <div class="img">
                     <img src="img/shir11.png" alt="icon">
                  </div>
                  <div class="text4">
                     Size - L
                  </div>
               </div>
            </div>
            <div onclick="posa3()" id="page1_item2" class="page1_item">
               <img class="page1_item_img" src="img/shir12.png" alt="icon">
               <div id="text212" class="text21">
                  Shirt - 100%
               </div>
               <div id="item1_text2" class="item1_text">
                  <p class="item1_text1">T-shirt - 100$<span class="item1_text2 item1_text22">, Size - L</span></p>
               </div>
               <div id="img12" class="img1">
                  <div class="img">
                     <img src="img/shir12.png" alt="icon">
                  </div>
                  <div class="text4">
                     Size - L
                  </div>
               </div>
            </div>
            <div onclick="posa2()" id="page1_item3" class="page1_item">
               <img class="page1_item_img" src="img/shir13.png" alt="icon">
               <div id="text213" class="text21">
                  Shirt - 100%
               </div>
               <div id="item1_text3" class="item1_text">
                  <p class="item1_text1">T-shirt - 100$<span class="item1_text2 item1_text23">, Size - L</span></p>
               </div>
               <div id="img13" class="img1">
                  <div class="img">
                     <img src="img/shir13.png" alt="icon">
                  </div>
                  <div class="text4">
                     Size - L
                  </div>
               </div>
            </div>
            <div onclick="posa4()" id="page1_item4" class="page1_item">
               <img class="page1_item_img" src="img/shir14.png" alt="icon">
               <div id="text214" class="text21">
                  Shirt - 100%
               </div>
               <div id="item1_text4" class="item1_text">
                  <p class="item1_text1">T-shirt - 100$<span class="item1_text2 item1_text24">, Size - L</span></p>
               </div>
               <div id="img14" class="img1">
                  <div class="img">
                     <img src="img/shir14.png" alt="icon">
                  </div>
                  <div class="text4">
                     Size - L
                  </div>
               </div>
            </div>
            <div onclick="posa5()" id="page1_item5" class="page1_item">
               <img class="page1_item_img" src="img/shir15.png" alt="icon">
               <div id="text215" class="text21">
                  Shirt - 100%
               </div>
               <div id="item1_text5" class="item1_text">
                  <p class="item1_text1">T-shirt - 100$<span class="item1_text2 item1_text25">, Size - L</span></p>
               </div>
               <div id="img15" class="img1">
                  <div class="img">
                     <img src="img/shir15.png" alt="icon">
                  </div>
                  <div class="text4">
                     Size - L
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="page2" class="page2">
         <div class="bac">
            <a onclick="back2()" href="#">back</a>
         </div>
         <h3 id="title1" class="title">page 2</h3>
         <div id="text11" class="text1">
            <div class="text">
               <article class="text_next">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
               </article>
               <div class="img_content">
                  <img src="img/s1.png" alt="icon">
                  <img src="img/s1.png" alt="icon">
                  <img src="img/s1.png" alt="icon">
               </div>
            </div>
         </div>
         <div id="page2_items" class="page2_items">
            <div class="page2_item page2_item1">
               <img class="img2 img21" src="img/im21.png" alt="icon">
               <article class="article">Size L<br><span>Shirt - 100$</span></article>
               <article class="article2 article21">Size L<br><span>Shirt - 100$</span></article>
            </div>
            <div class="page2_item page2_item2">
               <img class="img2 img22" src="img/im22.png" alt="icon">
               <article class="article">Size M<br><span>Shirt - 300$</span></article>
               <article class="article2 article22">Size M<br><span>Shirt - 300$</span></article>
            </div>
            <div class="page2_item page2_item3">
               <img class="img2 img23" src="img/im23.png" alt="icon">
               <article class="article">Size S<br><span>Shirt - 200$</span></article>
               <article class="article2 article23">Size S<br><span>Shirt - 200$</span></article>
            </div>
         </div>
      </section>
      <section id="page3" class="page3">
         <div class="bac">
            <a onclick="back3()" href="#">back</a>
         </div>
         <h3 id="title2" class="title">page 3</h3>
         <div id="text12" class="text1">
            <div class="text">
               <article class="text_next">
                  Lorem ipsum dolor sit amet adipisicing.
               </article>
               <div class="img_content">
                  <img src="img/sh1.png" alt="icon">
                  <img src="img/sh1.png" alt="icon">
                  <img src="img/sh1.png" alt="icon">
               </div>
            </div>
         </div>
         <div id="page3_content" class="page3_content">
            <div class="page3_img">
               <article class="article3 article31 article30">Size L<br><span class="article300">Coat 120$</span></article>
               <article class="article3 article32 article30">Size M<br><span class="article300">Coat 150$</span></article>
               <article class="article3 article33 article30">Size S<br><span class="article300">Coat 210$</span></article>
               <article class="article3 article34 article30">Size XL<br><span class="article300">Coat 650$</span></article>
               <article class="article3 article35 article30">Size XXL<br><span class="article300">Coat 320$</span></article>
            </div>
            <div class="page3_items">
               <div class="page3_img_li">
                  <img src="img/pal1.png" alt="icon" class="img3 img31">
                  <img src="img/pal2.png" alt="icon" class="img3 img32">
                  <img src="img/pal3.png" alt="icon" class="img3 img33">
                  <img src="img/pal4.png" alt="icon" class="img3 img34">
                  <img src="img/pal5.png" alt="icon" class="img3 img35">
               </div>
            </div>
         </div>
      </section>
   </div>
   <script src="js/jquery-1.9.1.min.js"></script>
   <script src="js/main.js"></script>
</body>
</html>

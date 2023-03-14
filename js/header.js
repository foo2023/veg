navHeader.innerHTML = `
<nav class="navbar" id="signalNav">
<input type="checkbox" id="check">
<label for="check" class="checkbtn" id="checkbtn">
<a onclick="myfc(this); changePosition(); stopNavheaderScrollDown();" class="checkbtn-a">
<div  class="navm">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
</div>
          </a>
</label>
<label class="logo">Practice</label>
<ul>
<li><a class="active nav-btn-font" href="index.html" id="home">HOME</a></li>
<li><a href="menu.html" class="hide nav-btn-font" id="menu">MENU</a></li>
<li><a href="#" class="hide nav-btn-font" id="about">ABOUT</a></li>
<li><a href="#" class="hide nav-btn-font" id="download">DOWNLOAD</a></li>
</ul>
<ul class="seperate">
<div class="seperate-container">
<li  id="mobileHome"><a href="index.html" class="nav-btn-font">HOME</a></li>
<li  id="mobileMenu"><a href="menu.html" class="nav-btn-font">MENU</a></li>
<li  id="mobileAbout"><a href="#" class="nav-btn-font">ABOUT</a></li>
<li  id="mobileDownload"><a href="#" class="nav-btn-font">DOWNLOAD</a></li>
</div>
</ul>
</nav> `
;



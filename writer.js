
var content = `
/*
 * Hi! And welcome to my web page. I'm Gaute Magnussen.
 *
 *
 * Let's build a web page!
 */

body {
  background:#666 url('bg.jpg') no-repeat right top;
  background-size: cover;
  color: #fff;
  font-size: 14px; line-height: 1.4;
  font-family: monospace;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* Can you read this?
 *
 * It is a bit hard...
 * Lets make it a bit easier...
 */

pre {
  position: fixed;
  bottom: 10px;
  height: 350px;
  right: 5%;
  width: 90%;
  max-width: 750px;
  transition: left 500ms;
  overflow: auto;
  background-color: #000; color: #eee; opacity: 0.7;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}

/*
 * This text is still a bit hard to read...
 * Lets do some syntax highlighting...
 */
pre em:not(.comment) { font-style: normal; }
.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }

/*
 * OK. Time to build some content!
 */

/*
 * Site name and my name
 */
<h1>gautema.com &#169;&nbsp;gaute&nbsp;magnussen</h1>
/*
 * My funny logo....
 */
<div><img src="logo.svg" /></div>
img{
  max-width: 100%;
  width: 640px;
}


/*
 * Some info on how to contact me.
 */
<p>twitter: <a href="http://twitter.com/gautema">@gautema</a></p>
<p>github: <a href="http://github.com/gautema">github.com/gautema</a></p>
<p>linkedin: <a href="http://www.linkedin.com/in/gautem">linkedin.com/in/gautem</a></p>
<p>e-mail: <a href="mailto:gaute@gautema.com">gaute@gautema.com</a></p>
<p>phone: +47 95108443</p>

/*
 * Lets do some styling to make it nicer.
 */

h1, p, div {
  margin: auto;
  max-width: 85%;
  width: 640px;
  background-color: #000; opacity: 0.8;
  text-shadow: #000 1px 1px 1px;
  padding: 0 20px;
}

h1 {
  text-align: right;
}
h1, div, p:first-of-type {
  margin-top: 10px;
  padding-top: 20px;
}
h1, div, p:last-of-type {
  margin-bottom: 10px;
  padding-bottom: 20px
}
p{
  font-size: 18px;
}
a{
  color: #015384;
  font-weight: bold;
}

/*
 * OK. We're finished. Lets close this dialog.
 */

 pre{
   display: none;
 }
`

var openComment = false;
var openContent = false;
var contentText = '';

var writeContentChar = function(which) {
  if(openContent === true){
    contentText += which;
  }
  if (which === '/' && openComment === false && openContent === false) {
    openComment = true;
    styles = $('#text').html() + which;
  } else if (which === '/' && openComment === true) {
    openComment = false;
    styles = $('#text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
  }else if(which === '<' && openContent === false){
    openContent = true;
    contentText += which;
    styles = $('#text').html() + which;
  }else if(which === '\n' && openContent === true){
    openContent = false;
    styles = $('#text').html() + which;
    $('body').append(contentText);
    contentText = '';
  } else if (which === ':') {
    styles = $('#text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
  } else if (which === ';' && openContent === false) {
    styles = $('#text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
  } else if (which === '{') {
    styles = $('#text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
  } else {
    styles = $('#text').html() + which;
  }
  $('#text').html(styles);
  if(!openContent){
    return $('#style-tag').append(which);
  }
};

var writeContent = function(message, index, interval, linebreakinterval) {
  var pre;
  if (index < message.length) {
    pre = document.getElementById('text');
    pre.scrollTop = pre.scrollHeight;
    writeContentChar(message[index++]);
    return setTimeout((function() {
      return writeContent(message, index, interval, linebreakinterval);
    }), message[index] === '\n' ? linebreakinterval : interval);
  }
};

$('body').append("<style id=\"style-tag\"></style>\n<pre id=\"text\"></pre>");

writeContent(content, 0, 5, 300);

// ==UserScript==
// @name        Steamgifts Auto Entry Enhanced EDIT
// @namespace   Steamgifts Auto Entry Enhanced
// @description Automatically enters giveaways on steamgifts.com
// @author      PutinTheGreat (EDITED BY ZELDA)
// @include     http*://*steamgifts.com*
// @version     10.0.2
// @homepage    https://github.com/zelda0079/Steamgifts-Auto-Entry-Enhanced-EDITED-/
// @grant       none
// @license     MIT
// @require     http://code.jquery.com/jquery-2.1.4.min.js
// @require     http://code.jquery.com/ui/1.11.4/jquery-ui.min.js
// @compatible  firefox
// @basecodeversion 26
// @installURL https://github.com/zelda0079/Steamgifts-Auto-Entry-Enhanced-EDITED-/raw/main/script.js
// @downloadURL https://github.com/zelda0079/Steamgifts-Auto-Entry-Enhanced-EDITED-/raw/main/script.js
// @updateURL https://github.com/zelda0079/Steamgifts-Auto-Entry-Enhanced-EDITED-/raw/main/script.js
// ==/UserScript==



this.$ = this.jQuery = jQuery.noConflict(true);

jQuery.fn.center = function () {
  this.css("position","fixed");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  return this;
}
jQuery.fn.centerfixed = function () {
  this.css('top','50%');
  this.css('margin-top','-'+this.height()/2+'px');
  return this;
}

var sgSiteMaxPoints = 500;  // Max points capable on SteamGifts site as of (19.07.20)
var gamelist=[];
var minpoints=100;
var maxpoints=480;
//var maxpages=10;  // i used maxpagenum it does same thing
var enterwishlist=false;
var entergroup=false;
var enterfeatured=false;
var entryordermethod=1;
var checktimer;
var watchdogtimer;
var autoentrylastrun=new Date();
var sitepattern=new RegExp('https?://.*steamgifts.com');
var siteurl=sitepattern.exec(document.URL.toString());
var pointsavailable=0;
var possibleentries=[];
var bestchanceentries=[];
var timeout=1200000;
var enabled=false;
var enabledonload=false; //default --- var enabledonload=false;
var maxentries=-1; //default --- var maxentries='';
var pagenum=1;
var maxpagenum=10; //default --- var maxpagenum=10;
var minpointpageincr=220; //default --- var minpointpageincr=220;
var enterfree=true; //default --- var enterfree=true;
var previousentrylistcount=0; //for checking if there are giveaways this is workaround for issue
var previousentrylistmatched=0; //for knowing if an issue is found, before every time was detected as issue
var entriesperpage=0; //for knowing how many non pinned/featured giveaways should be on each page, better then using arbitrary number

(function(e){"use strict";e(function(){e('[data-toggle="tooltip"]').tooltip(),e('[data-toggle="popover"]').popover(),e(".popover-dismiss").popover({trigger:"focus"})});function t(e){return e.offset().top+e.outerHeight()}e(function(){var n,o,i,s=e(".js-td-cover");if(!s.length)return;o=t(s),i=e(".js-navbar-scroll").offset().top,n=Math.ceil(e(".js-navbar-scroll").outerHeight()),o-i<n&&e(".js-navbar-scroll").addClass("navbar-bg-onscroll"),e(window).on("scroll",function(){var i=e(".js-navbar-scroll").offset().top-e(window).scrollTop(),s=t(e(".js-td-cover")),o=e(".js-navbar-scroll").offset().top;s-o<n?e(".js-navbar-scroll").addClass("navbar-bg-onscroll"):(e(".js-navbar-scroll").removeClass("navbar-bg-onscroll"),e(".js-navbar-scroll").addClass("navbar-bg-onscroll--fade"))})})})(jQuery),function(e){"use strict";e(function(){var t,e=document.getElementsByTagName("main")[0];if(!e)return;t=e.querySelectorAll("h1, h2, h3, h4, h5, h6"),t.forEach(function(e){if(e.id){var t=document.createElement("a");t.style.visibility="hidden",t.setAttribute("aria-hidden","true"),t.innerHTML=' <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',t.href="#"+e.id,e.insertAdjacentElement("beforeend",t),e.addEventListener("mouseenter",function(){t.style.visibility="initial"}),e.addEventListener("mouseleave",function(){t.style.visibility="hidden"})}})})}(jQuery),function(e){"use strict";var t={init:function(){e(document).ready(function(){const t=new URLSearchParams(location.search).get("q");if(t!==null&&t!==""){const e=document.querySelector(".td-search-input");e.focus(),e.value=t}e(document).on("keypress",".td-search-input",function(t){if(t.keyCode!==13)return;var n=e(this).val();return document.location="/article/?search="+n,!1})})}};t.init()}(jQuery)
(()=>{"use strict";function t(t){const e=document.createElement("div");return e.className="Tip",e.textContent=t.getAttribute("data-content"),t.offsetParent.appendChild(e),e.style.top=t.offsetTop-e.offsetHeight-10+"px",e.style.left=t.offsetLeft+t.offsetWidth/2-e.offsetWidth/2+"px",e}function e(t){t.remove()}document.addEventListener("DOMContentLoaded",(()=>{let n,o,d=!1;document.addEventListener("click",(a=>{d||"BUTTON"!==a.target.tagName?"BUTTON"===a.target.tagName&&(e(n),d=!1,o=void 0):(n=t(a.target),d=!0,o=a.target)})),window.addEventListener("resize",(()=>{d&&void 0!==o&&(e(n),n=t(o))}))}))})();
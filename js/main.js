var f=document.getElementById("flt"),lb=document.getElementById("lb");
f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;
f.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});
document.querySelectorAll("#grid .work").forEach(function(c){c.hidden=!(b.dataset.f==="all"||c.dataset.c===b.dataset.f)})});
document.addEventListener("click",function(e){var t=e.target.closest("[data-zoom]");
if(t){document.getElementById("lbi").src=t.querySelector("img").src;document.getElementById("lbi").alt=t.dataset.zoom;document.getElementById("lbc").textContent=t.dataset.zoom;lb.showModal();return}
if(e.target===lb||e.target.id==="lbx")lb.close()});

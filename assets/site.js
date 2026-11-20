(function(){
  var head=document.querySelector('.site-head'),btn=document.querySelector('.menu-btn');
  function onScroll(){head&&head.classList.toggle('scrolled',window.scrollY>8)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  if(btn){
    btn.addEventListener('click',function(){
      var open=document.body.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('menu-open');btn.setAttribute('aria-expanded','false')})});
  }
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();

document.getElementById('open').addEventListener('click',function(){
  var i=document.getElementById('intro');i.classList.add('gone');document.body.classList.remove('locked');
  setTimeout(function(){i.style.display='none'},950);
});
(function(){
  var el=document.getElementById('count'),t=new Date(el.dataset.date).getTime();
  function tick(){var s=Math.max(0,Math.floor((t-Date.now())/1000));
    document.getElementById('d').textContent=Math.floor(s/86400);
    document.getElementById('h').textContent=Math.floor(s%86400/3600);
    document.getElementById('m').textContent=Math.floor(s%3600/60);}
  tick();setInterval(tick,30000);
})();
document.getElementById('rsvp').addEventListener('submit',function(e){
  e.preventDefault();
  var b='Name: '+n.value+'\nGuests: '+g.value+'\nWish: '+w.value;
  document.getElementById('thanks').style.display='block';
  location.href='mailto:you@example.com?subject='+encodeURIComponent('RSVP for Harrison')+'&body='+encodeURIComponent(b);
});

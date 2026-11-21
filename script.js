
var L={i1:["Mời bạn đến buổi tiệc nhỏ xíu của em bé","You’re invited to a very small party for"],i2:["vừa tròn một tháng tuổi","who just turned one month old"],i3:["Mở thiệp mời","Open the invitation"],
c1:["Một tháng đầy ôm ấp, tiếng cười khúc khích và yêu thương!","One month of cuddles, giggles, and love — let’s celebrate!"],c2:["Bé tròn","is turning!"],big:["THÁNG","MONTH"],
c3:["Hãy cùng gia đình của Cafe đón cột mốc ngọt ngào này với nụ cười, tiếng cười khúc khích và thật nhiều yêu thương.","Join us as we celebrate this sweet milestone with smiles, giggles & love."],
s1:["Còn bao lâu nữa đến buổi tiệc","Until the party"],s2:["Harrison cũng đang đếm ngược (chủ yếu là đang ngủ).","Harrison is counting down too (mostly napping)."],s3:["ngày","days"],s4:["giờ","hours"],s5:["phút","mins"],
d1:["Thông tin chi tiết","The details"],d2:["Khi nào:","When:"],d3:["Thứ Ba, ngày 08 tháng 12 năm 2026, lúc 5:00 chiều","Tuesday, December 08, 2026 at 05:00 PM"],d4:["Ở đâu:","Where:"],d5:["Tên địa điểm, địa chỉ, thành phố","Venue name, street address, city"],
d6:["Trang phục:","Wear:"],d7:["Mặc đồ thoải mái nhé. Màu nhẹ nhàng thì càng hợp.","Something comfy. Soft colors welcome."],d8:["Đến khi:","Until:"],d9:["Tiệc tàn!","The giggles wind down!"],d10:["Mở bản đồ","Open in Maps"],
f1:["Tháng đầu tiên của Harrison","Harrison’s first month"],f2:["Vài điều chúng mình yêu thích nhất cho đến giờ.","A few of our favorite things so far."],f3:["Ngày sinh:","Born:"],f4:["Ngày 08 tháng 11 năm 2026","November 08, 2026"],
f5:["Cân nặng:","Size:"],f6:["7 lbs 50 oz, và đang lớn nhanh","7 lbs 50 oz, and growing"],f7:["Thích:","Loves:"],f8:["Bú sữa, được ôm ấp và những cơn nấc cụt xíu xiu","Milk, cuddles, and tiny hiccups"],
g1:["Khoảnh khắc nhỏ","Little moments"],g2:["Thay các ô này bằng ảnh của Harrison.","Swap these tiles for Harrison’s photos."],g3:["Ảnh 1","Photo 1"],g4:["Ảnh 2","Photo 2"],g5:["Ảnh 3","Photo 3"],
r1:["Bạn sẽ đến chứ?","Will you come?"],r2:["Cho chúng mình biết trước ngày 1 tháng 12 nhé.","Let us know by December 1."],r3:["Tên của bạn","Your name"],r4:["Số khách","Guests"],r5:["Lời chúc cho Harrison","A wish for Harrison"],
r6:["5 trở lên","5 or more"],r7:["Gửi xác nhận","Send RSVP"],r8:["Cảm ơn bạn! Email đã sẵn sàng để gửi.","Thank you! Your email is ready to send."],
ft:["Với tình yêu thương, gia đình Harrison","With love, Harrison’s family"],tt:["Tiệc đầy tháng của Harrison","Harrison’s Full Month Celebration"],
mb_s:["Xác nhận tham dự cho Harrison","RSVP for Harrison"],mb_n:["Tên","Name"],mb_g:["Số khách","Guests"],mb_w:["Lời chúc","Wish"]};
var lang='vi';try{lang=localStorage.getItem('lang')==='en'?'en':'vi'}catch(e){}
function t(k){return L[k][lang==='vi'?0:1]}
function apply(){
  document.documentElement.lang=lang;document.title=t('tt');
  document.querySelectorAll('[data-t]').forEach(function(e){e.textContent=t(e.getAttribute('data-t'))});
  var b=document.getElementById('big');b.innerHTML='';b.setAttribute('aria-label','1 '+t('big').toLowerCase());
  ('1 '+t('big')).split('').forEach(function(c,i){if(c===' ')return;var s=document.createElement('span');s.textContent=c;if(i===0)s.className='n';b.appendChild(s)});
  document.getElementById('lang').textContent=lang==='vi'?'English':'Tiếng Việt';
}
document.getElementById('lang').addEventListener('click',function(){
  lang=lang==='vi'?'en':'vi';try{localStorage.setItem('lang',lang)}catch(e){}apply();
});
apply();
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
var rf=document.getElementById('rsvp');if(rf)rf.addEventListener('submit',function(e){
  e.preventDefault();
  var b=t('mb_n')+': '+n.value+'\n'+t('mb_g')+': '+g.value+'\n'+t('mb_w')+': '+w.value;
  document.getElementById('thanks').style.display='block';
  location.href='mailto:you@example.com?subject='+encodeURIComponent(t('mb_s'))+'&body='+encodeURIComponent(b);
});

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
setTimeout(()=>$('#loader')&&$('#loader').remove(),2700);
// Contact popup
const m=$('#modal');let lf;
const openM=()=>{lf=document.activeElement;m.classList.add('on');m.setAttribute('aria-hidden','false');m.querySelector('.x').focus()};
const closeM=()=>{m.classList.remove('on');m.setAttribute('aria-hidden','true');lf&&lf.focus()};
$$('[data-open]').forEach(b=>b.onclick=openM);m.onclick=e=>{if(e.target===m||e.target.closest('[data-close]'))closeM()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
$$('[data-copy]').forEach(b=>b.onclick=async()=>{const o=b.textContent;try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='Copied ✓'}catch(_){b.textContent='Copy failed'}setTimeout(()=>b.textContent=o,1400)});
// Cursor glow, progress, clock, reveal
addEventListener('pointermove',e=>{const s=$('.spot').style;s.setProperty('--x',e.clientX+'px');s.setProperty('--y',e.clientY+'px');const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
const sc=()=>$('.prog').style.width=(scrollY/(document.body.scrollHeight-innerHeight)*100||0)+'%';addEventListener('scroll',sc,{passive:true});sc();
const tk=()=>$('#clock').textContent='· '+new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'})+' IST';tk();setInterval(tk,30000);$('#yr').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv').forEach(el=>io.observe(el));
// Live API-led flow
const INFO=[['Consumers (not a layer)','Web apps, partners and internal systems call a single, stable front door instead of each back-end.'],
['Experience API · Layer 1','RAML-designed contract managed in API Manager, protected with OAuth 2.0, Basic Auth or Client ID Enforcement, with validation and clean error responses.'],
['Process API · Layer 2','Orchestration and business logic: Choice Router, Scatter-Gather, ForEach and Parallel ForEach, Batch Processing, Object Store and Scheduler, with DataWeave transformations.'],
['System APIs · Layer 3','Each back-end sits behind a reusable System API using HTTP, Database, JMS, VM, FTP, SFTP, Salesforce and Web Service Consumer connectors.'],
['Back-end systems (not a layer)','Oracle, MySQL and Postgres databases, Workday, Salesforce and other cloud platforms, with JSON, XML and CSV handled in DataWeave.']];
const info=$('#info'),nds=$$('.nd');
const show=i=>{info.innerHTML=`<h3>${INFO[i][0]}</h3><p>${INFO[i][1]}</p>`;nds.forEach(n=>n.classList.toggle('on',+n.dataset.i===i))};
nds.forEach(n=>{n.onmouseenter=n.onclick=()=>show(+n.dataset.i)});show(2);
const NS='http://www.w3.org/2000/svg',paths=[0,1,2,3,4,5].map(i=>$('#p'+i)),pk=$('#pk'),dots=[];
paths.forEach((p,i)=>[0,.5].forEach(o=>{const c=document.createElementNS(NS,'circle');c.setAttribute('r',3.5);c.setAttribute('class','pkc');pk.appendChild(c);dots.push({c,p,o,d:i<3?i*.33:1})}));
function frame(t){dots.forEach(d=>{const L=d.p.getTotalLength(),k=((t/2600+d.o)%1),pt=d.p.getPointAtLength(L*k);d.c.setAttribute('cx',pt.x);d.c.setAttribute('cy',pt.y)});if(!rm)requestAnimationFrame(frame)}requestAnimationFrame(frame);

/* ---- motion ---- */
{const h1=$('h1'),ns=[...h1.childNodes];let k=0;h1.setAttribute('aria-label',h1.textContent.trim());h1.innerHTML='';
 ns.forEach(n=>{(n.nodeType===3?n.textContent.split(/\s+/).filter(Boolean):[n.outerHTML]).forEach(w=>h1.insertAdjacentHTML('beforeend',`<span class="w" aria-hidden="true"><span style="--i:${k++}">${w}</span></span> `))})}
const ioS=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');setTimeout(()=>t.style.transitionDelay='',1400);ioS.unobserve(t)}}),{threshold:.12});
$$('.card,.job,.sk>div,.stats>div').forEach((el,i)=>{el.classList.add('rv');el.style.transitionDelay=(i%4)*110+'ms';ioS.observe(el)});
let ly=0;addEventListener('scroll',()=>{const y=scrollY;document.documentElement.style.setProperty('--sy',y);$('.nav').classList.toggle('hid',y>ly&&y>200);ly=y},{passive:true});
$$('.stats dt').forEach(el=>{const t=el.textContent,n=parseInt(t);if(isNaN(n))return;const suf=t.replace(/\d+/,'');
 new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();if(rm)return;let v=0;el.textContent='0'+suf;const s=setInterval(()=>{v++;el.textContent=v+suf;if(v>=n)clearInterval(s)},320)}}).observe(el)});
if(!rm){
 $$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.2}px ${(e.clientY-r.top-r.height/2)*.3}px`});b.addEventListener('pointerleave',()=>b.style.translate='')});
 $$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(1000px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
 const ph=$('.ph');ph.addEventListener('pointermove',e=>{const r=ph.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;ph.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg)`});ph.addEventListener('pointerleave',()=>ph.style.transform='')}
let cyc=2,pz=0;nds.forEach(n=>n.addEventListener('mouseenter',()=>{cyc=+n.dataset.i;pz=Date.now()+9000}));
setInterval(()=>{if(Date.now()>pz&&!rm){const r=$('.flow').getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){cyc=(cyc+1)%5;show(cyc)}}},3200);

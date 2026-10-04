const lb=document.getElementById('lb'),im=lb.querySelector('img');
document.querySelectorAll('a.shot').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();im.src=a.href;im.alt=a.querySelector('img').alt;lb.showModal()}));
lb.addEventListener('click',()=>lb.close());
const fb=document.querySelectorAll('.filters button'),ps=document.querySelectorAll('.proj');
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(x=>x.setAttribute('aria-pressed',x===b));ps.forEach(p=>p.hidden=b.dataset.f!=='all'&&p.dataset.cat!==b.dataset.f)}));
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver' in window){
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,to=+el.dataset.to,t0=performance.now();
(function f(t){const k=Math.min((t-t0)/1200,1);el.textContent=Math.round(to*(1-Math.pow(1-k,3))).toLocaleString();if(k<1)requestAnimationFrame(f)})(t0)}));
document.querySelectorAll('[data-to]').forEach(el=>io.observe(el));}
const cp=document.getElementById('cp');
cp.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cp.dataset.mail);cp.textContent='Copied!'}catch(e){prompt('Copy this email:',cp.dataset.mail)}setTimeout(()=>cp.textContent='Copy email',2000)});
const cpn=document.getElementById('cpn');
cpn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cpn.dataset.num);cpn.textContent='Copied!'}catch(e){prompt('Copy this number:',cpn.dataset.num)}setTimeout(()=>cpn.textContent='Copy number',2000)});

const tb=document.getElementById('theme');
function paintTheme(){const d=document.documentElement.dataset.theme==='dark',l=d?'Switch to light mode':'Switch to dark mode';tb.setAttribute('aria-label',l);tb.title=l}
paintTheme();
tb.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}paintTheme()});

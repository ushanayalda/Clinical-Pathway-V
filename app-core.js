(() => {
  'use strict';
  const C = window.CP_CASE;
  const KEY = 'clinical-pathway-case-001-working-v1';
  const DEFAULT = {
    evidence: [], attempts: [], currentAttempt: null, review: null,
    capabilities: Object.fromEntries(C.capabilities.map(([id])=>[id,'not_tested'])),
    variations: Object.fromEntries(C.variations.map(v=>[v.id,'not_tested'])),
    repairs: Object.fromEntries(C.repairDrills.map(d=>[d.id,'not_started'])),
    feltConfidence: null, delayedDueAt: null, modelViewed: false, decisionsViewed: false
  };
  const A = window.CP_APP = {
    C, KEY, main: document.getElementById('app-main'), header: document.getElementById('app-header'),
    live: document.getElementById('app-live'), timerId: null
  };
  A.clone = value => JSON.parse(JSON.stringify(value));
  A.load = () => { try { return Object.assign(A.clone(DEFAULT), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (_) { return A.clone(DEFAULT); } };
  A.state = A.load();
  A.save = () => localStorage.setItem(KEY, JSON.stringify(A.state));
  A.esc = (v='') => String(v).replace(/[&<>'"]/g, x=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[x]));
  A.announce = text => { A.live.textContent=''; setTimeout(()=>A.live.textContent=text,10); };
  A.go = route => { location.hash = route.startsWith('#') ? route : '#'+route; };
  A.route = () => { const raw=(location.hash||'#/home').slice(1); const [path,q='']=raw.split('?'); return {path:path||'/home', params:new URLSearchParams(q)}; };
  A.now = () => new Date().toISOString();
  A.elapsed = iso => iso ? Math.max(0,Math.floor((Date.now()-new Date(iso).getTime())/1000)) : 0;
  A.clock = s => `${Math.floor(Math.max(0,s)/60)}:${String(Math.max(0,s)%60).padStart(2,'0')}`;
  A.has = id => A.state.evidence.includes(id);
  A.add = id => { if(!A.has(id)) A.state.evidence.push(id); };
  A.stopTimer = () => { if(A.timerId) clearInterval(A.timerId); A.timerId=null; };
  A.band = () => {
    if(A.has('retained')) return 'retained';
    if(Object.values(A.state.variations).filter(x=>x==='reviewed').length>=2) return 'flexible';
    if(A.has('timed_reviewed')) return 'independent';
    if(A.has('guided_completed')) return 'guided';
    if(A.state.modelViewed || A.state.decisionsViewed) return 'modelled';
    return 'not_started';
  };
  A.bandInfo = () => { const id=A.band(); const row=C.readinessBands.find(x=>x[0]===id); return {id,label:row[1],evidence:row[2]}; };
  A.next = () => {
    const s=A.state;
    if(s.currentAttempt && !s.currentAttempt.finishedAt) return {label:'Continue station',route:`/station?mode=${s.currentAttempt.mode}${s.currentAttempt.variationId?`&variation=${s.currentAttempt.variationId}`:''}`,reason:'An attempt is in progress.',minutes:8};
    if(s.review && !s.review.completedAt) return {label:'Continue Review',route:'/review',reason:'Finish the feedback already opened.',minutes:3};
    if(!s.modelViewed) return {label:'Open full model',route:'/model',reason:'See the complete safe station once before reducing support.',minutes:8};
    if(!s.decisionsViewed) return {label:'Review key decisions',route:'/decisions',reason:'Understand the action threshold and the traps.',minutes:4};
    if(!A.has('guided_completed')) return {label:'Guided speak-along',route:'/station?mode=guided',reason:'Practise the station with prompts and no performance claim.',minutes:10};
    if(!A.has('timed_reviewed')) return {label:'Timed cold run',route:'/reading?mode=timed',reason:'Run the station under the 2-minute plus 8-minute structure.',minutes:10};
    if(Object.values(s.variations).filter(x=>x==='reviewed').length<2) return {label:'Changed-detail challenge',route:'/variation',reason:'Test whether the safety rule transfers when one detail changes.',minutes:10};
    if(!A.has('retained')) {
      if(s.delayedDueAt && Date.now()<new Date(s.delayedDueAt).getTime()) return {label:'Open Journey',route:'/journey',reason:`Delayed retry is due ${new Date(s.delayedDueAt).toLocaleString()}.`,minutes:2};
      return {label:'Delayed cold retry',route:'/reading?mode=delayed',reason:'Confirm retention without prompts.',minutes:10};
    }
    return {label:'Open Journey',route:'/journey',reason:'Review retained evidence and choose maintenance practice.',minutes:2};
  };
  A.shell = (title,intro,body,station=false) => {
    A.header.classList.toggle('station-mode',station);
    document.title=`${title} | Clinical Pathway`;
    A.main.innerHTML=`<div class="page-head"><p class="eyebrow">Clinical Pathway</p><h1>${A.esc(title)}</h1>${intro?`<p>${A.esc(intro)}</p>`:''}</div>${body}<p class="footer-note">Self-reviewed practice only. Not AMC endorsement, examiner verification, clinical certification, or an exam guarantee.</p>`;
    requestAnimationFrame(()=>A.main.focus());
  };
  A.taskRail = attempt => `<aside class="station-side card card-muted"><h2>Tasks</h2><div class="task-rail">${C.tasks.map((t,i)=>`<label><input type="checkbox" data-task="${i}" ${attempt.tasks[i]?'checked':''}><span>${i+1}</span></label>`).join('')}</div><p class="disclaimer">Tick only after you have addressed the task aloud.</p></aside>`;
  A.newAttempt = (mode,variationId=null) => {
    const a={id:`${Date.now()}`,mode,variationId,createdAt:A.now(),readingStartedAt:null,startedAt:null,finishedAt:null,reveals:[],activeReveal:null,tasks:[false,false,false,false],actionAt:null,actionRevealCount:null,planAt:null,timeline:[]};
    A.state.currentAttempt=a; A.save(); return a;
  };
  A.ensureAttempt = (mode,variationId=null) => {
    const a=A.state.currentAttempt;
    if(a && !a.finishedAt && a.mode===mode && (a.variationId||null)===(variationId||null)) return a;
    return A.newAttempt(mode,variationId);
  };
  A.record = (a,event,label) => { a.timeline.push({event,label,seconds:A.elapsed(a.startedAt)}); };
})();

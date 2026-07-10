(() => {
  'use strict';
  const A=window.CP_APP, C=A.C;
  A.renderHome = () => {
    const n=A.next(), b=A.bandInfo();
    A.shell('Your next useful move','One action, one purpose, one estimated time.',`
      <section class="card primary-action-card"><p class="eyebrow">Next</p><h2>${A.esc(n.label)}</h2><p>${A.esc(n.reason)}</p><div class="meta-row"><span>About ${n.minutes} minutes</span><span>Evidence band: <strong>${A.esc(b.label)}</strong></span></div><div class="actions"><button class="button-primary" data-route="${A.esc(n.route)}">${A.esc(n.label)}</button></div></section>
      <section class="grid grid-2" style="margin-top:16px"><article class="card"><h2>Case 001</h2><p>${A.esc(C.title)}. Train early action, ambulance transfer, no private driving, no test delay, and recovery from the indigestion anchor.</p><button class="button-secondary" data-route="/library">Open Library</button></article><article class="card"><h2>Journey</h2><p>Track capability, changed details and retention without converting them into a score.</p><button class="button-secondary" data-route="/journey">Open Journey</button></article></section>
      <p class="disclaimer">Clinical Pathway does not listen to or automatically score your speech. Speak aloud, then record timing and self-review evidence.</p>`);
  };
  A.renderLibrary = () => {
    const b=A.bandInfo(), n=A.next();
    A.shell('Library','Choose the mastery path or enter the station directly.',`
      <section class="card"><p class="eyebrow">${A.esc(C.phase)} → ${A.esc(C.pattern)}</p><div class="station-header"><div><h2>Station ${C.number}: ${A.esc(C.title)}</h2><div class="meta-row"><span>${A.esc(C.stationType)}</span><span>${A.esc(C.setting)}</span><span>Failure mode: ${A.esc(C.failureMode)}</span></div></div><span class="tag">${A.esc(b.label)}</span></div><p>Model, decisions, spoken attempts, variations, repair, and delayed retrieval.</p><div class="actions"><button class="button-primary" data-route="${A.esc(n.route)}">${A.esc(n.label)}</button><button class="button-secondary" data-route="/reading?mode=timed">Practice station directly</button></div></section>
      <section class="card card-muted"><h2>Case availability</h2><p>Case 001 is available. Additional cases remain unavailable while the first product proof is reviewed.</p></section>`);
  };
  A.renderModel = () => {
    A.shell('Full eight-minute model','Read it once for rhythm, timing and decision order.',`
      <section class="card"><div class="meta-row"><span>2:00 reading</span><span>8:00 assessment</span><span>Immediate action in model: 2:05</span></div>${C.model.map(t=>`<div class="model-turn"><time>${t[0]}</time><span class="role">${A.esc(t[1])}</span><span>${A.esc(t[2])}</span></div>`).join('')}<div class="actions"><button class="button-primary" data-complete="model_viewed" data-route="/decisions">I reviewed the full model</button></div></section>`);
  };
  A.renderDecisions = () => A.shell('Key decisions','Understand the safety logic before reducing support.',`
    <section class="grid grid-2">${C.decisions.map((d,i)=>`<article class="card"><p class="eyebrow">Decision ${i+1}</p><h2>${A.esc(d.title)}</h2><p>${A.esc(d.cue)}</p><p><strong>Ask yourself:</strong> ${A.esc(d.question)}</p></article>`).join('')}</section><div class="actions"><button class="button-primary" data-complete="decisions_viewed" data-route="/reading?mode=guided">Start guided speak-along</button></div>`);
  A.renderReading = (mode,variationId) => {
    const a=A.ensureAttempt(mode,variationId); if(!a.readingStartedAt){a.readingStartedAt=A.now();A.save();}
    const variation=C.variations.find(v=>v.id===variationId);
    const draw=()=>{
      const left=Math.max(0,C.readingSeconds-A.elapsed(a.readingStartedAt));
      const timer=document.querySelector('[data-reading-timer]'); if(timer)timer.textContent=A.clock(left);
    };
    A.shell(`Station ${C.number}: ${C.title}`,'Read the task, plan your first questions, then start when ready.',`
      <section class="card"><div class="station-header"><div><p class="eyebrow">Reading time</p><h2>Information and tasks</h2></div><div class="timer" data-reading-timer>${A.clock(C.readingSeconds)}</div></div>
      <div class="meta-row"><span>${A.esc(C.setting)}</span><span>${A.esc(C.stationType)}</span><span>Proposed PAA: ${A.esc(C.proposedPAA)}</span></div>
      ${variation?`<div class="notice"><strong>Changed detail:</strong> ${A.esc(variation.change)}</div>`:''}
      <ol>${C.tasks.map(t=>`<li>${A.esc(t)}</li>`).join('')}</ol><p class="disclaimer">Clinical Pathway does not listen or automatically score speech. Speak aloud first, then reveal only what you asked for.</p>
      <div class="actions"><button class="button-primary" data-start-assessment>Start station</button><button class="button-secondary" data-route="/library">Back to Library</button></div></section>`,true);
    draw(); A.timerId=setInterval(draw,1000);
  };
  A.startAssessment = () => { const a=A.state.currentAttempt; a.startedAt=A.now(); A.record(a,'assessment_started','Assessment started'); A.save(); A.go(`/station?mode=${a.mode}${a.variationId?`&variation=${a.variationId}`:''}`); };
  A.renderStation = (mode,variationId) => {
    const a=A.ensureAttempt(mode,variationId); if(!a.startedAt){A.go(`/reading?mode=${mode}${variationId?`&variation=${variationId}`:''}`);return;}
    const variation=C.variations.find(v=>v.id===variationId), left=Math.max(0,C.assessmentSeconds-A.elapsed(a.startedAt));
    const active=C.reveals.find(r=>r.id===a.activeReveal);
    A.shell(`Station ${C.number}: ${C.title}`,'Speak aloud first. Reveal only what you asked for.',`
      <div class="station-shell"><section class="station-main"><div class="station-header"><div><p class="eyebrow">${A.esc(mode==='guided'?'Guided run':mode==='variation'?'Changed-detail run':mode==='delayed'?'Delayed cold retry':'Timed cold run')}</p><h2>${A.esc(C.opening.speaker)}</h2></div><div class="timer" data-assessment-timer>${A.clock(left)}</div></div>
      ${variation?`<div class="notice"><strong>Changed detail:</strong> ${A.esc(variation.change)}<br>${A.esc(variation.unchanged)}</div>`:''}
      <article class="card"><p class="patient-line"><span class="speaker">${A.esc(C.opening.speaker)}:</span> “${A.esc(C.opening.text)}”</p></article>
      ${mode==='guided'?`<section class="card card-muted"><h2>Prompt</h2><p>Open, clarify pain, identify danger, act early, continue focused assessment, explain transport safety, then hand over.</p></section>`:''}
      <section class="card"><h2>Ask and reveal</h2><div class="reveal-grid">${C.reveals.map(r=>{const gated=r.requiresPlan&&!a.planAt;return `<button class="reveal-button ${gated?'gated':''}" data-reveal="${r.id}" aria-pressed="${a.reveals.includes(r.id)}" ${gated?'disabled':''}>${A.esc(r.label)}${gated?' · discuss plan first':''}</button>`}).join('')}</div>
      ${active?`<div class="card reveal-panel"><h3>${A.esc(active.label)}</h3><${active.type==='examiner'?'ul class="examiner-list"':'ul class="speech-list"'}>${active.lines.map(x=>`<li>${A.esc(x)}</li>`).join('')}</ul></div>`:''}</section>
      <section class="grid grid-2 checkpoint-grid"><article class="card checkpoint ${a.actionAt?'completed':''}"><h2>Immediate action</h2><p>Say your action aloud once the danger threshold is crossed.</p><button class="button-secondary" data-mark-action ${a.actionAt?'disabled':''}>${a.actionAt?'Action timing recorded':'I have taken my immediate action'}</button></article><article class="card checkpoint ${a.planAt?'completed':''}"><h2>Plan</h2><p>Explain your concern, transfer plan, and no-driving boundary.</p><button class="button-secondary" data-mark-plan ${a.planAt?'disabled':''}>${a.planAt?'Plan recorded':'I have discussed my plan'}</button></article></section>
      <div class="sticky-actions"><button class="button-primary" data-finish-station>Finish station</button></div></section>${A.taskRail(a)}</div>`,true);
    const tick=()=>{const el=document.querySelector('[data-assessment-timer]');if(!el)return;const n=Math.max(0,C.assessmentSeconds-A.elapsed(a.startedAt));el.textContent=A.clock(n);el.classList.toggle('warning',n<=120&&n>60);el.classList.toggle('danger',n<=60);};
    tick();A.timerId=setInterval(tick,1000);
  };
  A.reveal = id => { const a=A.state.currentAttempt; if(!a.reveals.includes(id)){a.reveals.push(id);A.record(a,'reveal',C.reveals.find(r=>r.id===id).label);} a.activeReveal=id;A.save();A.render(); };
  A.markAction = () => { const a=A.state.currentAttempt;if(a.actionAt)return;a.actionAt=A.elapsed(a.startedAt);a.actionRevealCount=a.reveals.length;A.record(a,'immediate_action','Immediate action marked');A.save();A.announce(`Immediate action recorded at ${A.clock(a.actionAt)}.`);A.render(); };
  A.markPlan = () => { const a=A.state.currentAttempt;if(a.planAt)return;a.planAt=A.elapsed(a.startedAt);A.record(a,'plan_discussed','Plan discussed');A.save();A.announce('Response to your plan is now available.');A.render(); };
  A.finishStation = () => { const a=A.state.currentAttempt;a.finishedAt=A.now();A.record(a,'finished','Station finished');A.state.attempts.push(A.clone(a));A.state.currentAttempt=null;A.state.review={attemptId:a.id,stage:0,self:{}};A.save();A.go('/review'); };
})();

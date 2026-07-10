(() => {
  "use strict";

  const STORAGE_KEY = "clinical-pathway-v2-2-case-001";
  const APP_VERSION = "2.2.0";
  const READING_SECONDS = 120;
  const ASSESSMENT_SECONDS = 480;

  const CASE = {
    id: "CP-C001",
    number: "001",
    title: "Chest discomfort after lunch",
    phase: "Critical Emergency Dominance",
    pattern: "Chest pain",
    stationType: "Emergency consultation",
    setting: "GP clinic",
    paa: "Management / counselling / education",
    opening: "Doctor, I think it is just indigestion, but my chest feels really tight.",
    tasks: [
      "Take a concise, focused history.",
      "Request the observations or examination findings you need.",
      "Explain your concerns to David.",
      "Discuss your management plan."
    ],
    reveals: [
      {
        id: "pain_story",
        label: "Pain story",
        content: [
          "It started about 45 minutes ago while I was carrying boxes at work.",
          "It is in the centre of my chest and feels heavy and tight.",
          "It is about 8 out of 10 and has not settled.",
          "It goes into my left arm and jaw."
        ]
      },
      {
        id: "associated_symptoms",
        label: "Associated symptoms",
        content: [
          "I feel sweaty and sick in the stomach.",
          "I am a little short of breath.",
          "I have not fainted and I have not vomited.",
          "I am worried because it is not going away."
        ]
      },
      {
        id: "risk_factors",
        label: "Risk factors",
        content: [
          "I smoke.",
          "I have high blood pressure and high cholesterol.",
          "My father had a heart attack in his 50s.",
          "I do not have known diabetes."
        ]
      },
      {
        id: "past_history_and_medicines",
        label: "Past history and medicines",
        content: [
          "I take a blood pressure tablet, although I sometimes miss it.",
          "I take a cholesterol tablet.",
          "I have not had a heart attack before.",
          "I am not taking a blood thinner and I do not know of an aspirin allergy."
        ]
      },
      {
        id: "other_danger_checks",
        label: "Other danger checks",
        content: [
          "The pain is not tearing through to my back.",
          "I have no one-sided weakness or speech trouble.",
          "I have no calf swelling, recent surgery, long flight, fever, coughing blood, or productive cough.",
          "I took an antacid and it did not settle the pain."
        ]
      },
      {
        id: "observations_and_examination",
        label: "Observations and examination",
        examiner: true,
        content: [
          "David looks pale, sweaty, and uncomfortable.",
          "Pulse 104/min, blood pressure 155/92 mmHg, respiratory rate 22/min.",
          "Oxygen saturation is 95% on room air and temperature is 36.8°C.",
          "Heart sounds are normal, the chest is clear, and there is no calf swelling or focal neurological deficit.",
          "An ECG may be obtained if immediately available, but it must not delay ambulance transfer. Clinic troponin is not available quickly enough to make management here safe."
        ]
      },
      {
        id: "ideas_and_concerns",
        label: "Ideas and concerns",
        content: [
          "I thought it was indigestion because it started after lunch.",
          "I am worried now because it is not settling.",
          "I have an important work meeting later and hoped this would be something simple."
        ]
      },
      {
        id: "response_to_your_plan",
        label: "Response to your plan",
        gated: true,
        content: [
          "An ambulance? Is it really that serious?",
          "Can I just drive myself or ask someone to take me?",
          "I have an important work meeting.",
          "If you think the ambulance is safer, okay. Please tell my wife."
        ]
      }
    ],
    variations: [
      {
        id: "normal_ecg",
        title: "Normal early ECG",
        summary: "The early ECG is reported as normal, but the high-risk clinical pattern remains.",
        recovery: "A normal early ECG does not safely exclude acute coronary syndrome. Continue urgent ambulance transfer."
      },
      {
        id: "antacid_improvement",
        title: "Pain improves after antacid",
        summary: "The pain improves, but the original exertional pressure, radiation, and autonomic symptoms remain important.",
        recovery: "Improvement is information, not proof of safety. Do not cancel urgent transfer when the danger pattern remains."
      },
      {
        id: "ambulance_refusal",
        title: "Patient refuses ambulance",
        summary: "David remains reluctant and says he will drive himself despite your recommendation.",
        recovery: "Explain the material risk, check understanding and capacity, involve support, document clearly, and continue urgent escalation."
      }
    ],
    keyDecisions: [
      {
        title: "Do not accept the patient's label",
        text: "Acknowledge indigestion as a possibility without allowing it to become the diagnosis before danger is assessed."
      },
      {
        title: "Act before diagnostic proof",
        text: "Persistent exertional central pressure with radiation, sweating, nausea, breathlessness, and risk factors is enough to arrange urgent ambulance transfer."
      },
      {
        title: "Continue focused assessment after action",
        text: "Calling the ambulance is not the end of the station. Continue observations, contraindication checks, explanation, and handover while transfer is arranged."
      },
      {
        title: "Stop private driving",
        text: "Hospital advice without safe transport is incomplete. State clearly that David must not drive because he could deteriorate suddenly."
      },
      {
        title: "Do not delay for clinic tests",
        text: "An immediately available ECG can support care, but a normal early ECG or unavailable blood tests must not delay transfer."
      }
    ],
    goldRun: [
      { at: "0:00", speaker: "doctor", text: "David, I am one of the doctors. I can see you are uncomfortable. I will ask focused questions, but chest tightness can sometimes be serious, so I may need to arrange urgent help while we talk." },
      { at: "0:20", speaker: "patient", text: "Doctor, I think it is just indigestion, but my chest feels really tight." },
      { at: "0:29", speaker: "doctor", text: "I understand why you thought of indigestion. Tell me exactly when it started and what you were doing at the time." },
      { at: "0:42", speaker: "patient", text: "About 45 minutes ago. I was carrying boxes at work when it came on." },
      { at: "0:53", speaker: "doctor", text: "Where is the discomfort, what does it feel like, how severe is it, and has it changed since it began?" },
      { at: "1:07", speaker: "patient", text: "It is in the middle of my chest. It feels heavy and tight, about eight out of ten, and it has not gone away." },
      { at: "1:22", speaker: "doctor", text: "Does it move anywhere, such as your arm, jaw, neck, or back? Is it worse with breathing, movement, or pressing on the chest?" },
      { at: "1:38", speaker: "patient", text: "It goes into my left arm and jaw. Breathing or moving does not really change it, and pressing on my chest does not reproduce it." },
      { at: "1:53", speaker: "doctor", text: "Have you felt sweaty, sick, short of breath, faint, or noticed palpitations?" },
      { at: "2:03", speaker: "patient", text: "I am sweaty, I feel sick in the stomach, and I am a little short of breath. I have not fainted." },
      { at: "2:14", speaker: "doctor", text: "David, this pattern could be coming from your heart. I am arranging an ambulance now while I continue checking you. Please stay seated and do not walk around." },
      { at: "2:30", speaker: "patient", text: "An ambulance? I honestly thought it was only indigestion." },
      { at: "2:38", speaker: "doctor", text: "Indigestion is still one possibility, but heavy central pressure with pain into the arm and jaw, sweating, nausea, and breathlessness is not safe to manage as indigestion in this clinic." },
      { at: "2:58", speaker: "doctor", text: "Could someone call an ambulance for ongoing high-risk chest pain, bring the emergency equipment, and stay with us while I check observations and medicines?" },
      { at: "3:13", speaker: "examiner", text: "David is pale and sweaty. Pulse 104, blood pressure 155 over 92, respiratory rate 22, oxygen saturation 95 percent on room air, and temperature 36.8. Heart sounds are normal and the chest is clear." },
      { at: "3:35", speaker: "doctor", text: "David, have you had anything like this before? Do you smoke, or have high blood pressure, cholesterol, diabetes, or a family history of early heart disease?" },
      { at: "3:51", speaker: "patient", text: "Nothing this strong before. I smoke, I have high blood pressure and cholesterol, and my father had a heart attack in his fifties." },
      { at: "4:05", speaker: "doctor", text: "What medicines do you take? Are you allergic to aspirin, taking a blood thinner, bleeding currently, or have you had a serious stomach bleed?" },
      { at: "4:19", speaker: "patient", text: "I take blood pressure and cholesterol tablets, although I miss them sometimes. I am not on a blood thinner, I have no aspirin allergy, and I am not bleeding." },
      { at: "4:34", speaker: "doctor", text: "Thank you. While the ambulance is coming, I would give aspirin if it is appropriate under local protocol and no contraindication is present. Your oxygen level is 95 percent, so routine oxygen is not required at this point." },
      { at: "4:57", speaker: "doctor", text: "I would obtain an ECG only if it is immediately available and does not delay transfer. A normal early ECG would not make this safe to manage here, and we should not wait for clinic blood tests." },
      { at: "5:17", speaker: "patient", text: "Could I just drive myself? The hospital is not far away and I have a work meeting later." },
      { at: "5:28", speaker: "doctor", text: "I understand the meeting matters, but I do not want you driving. Your condition could change suddenly. The ambulance can monitor you and begin treatment immediately if that happens." },
      { at: "5:46", speaker: "patient", text: "Is it really that serious? I do not want to make a fuss." },
      { at: "5:57", speaker: "doctor", text: "You are not making a fuss. I cannot confirm the cause here, but the pattern is concerning enough that monitored urgent transfer is the safest option. Waiting or travelling privately adds avoidable risk." },
      { at: "6:18", speaker: "patient", text: "All right. Please tell my wife what is happening." },
      { at: "6:28", speaker: "doctor", text: "Of course. Before I call her, could you tell me in your own words why I am recommending an ambulance rather than waiting here or driving yourself?" },
      { at: "6:43", speaker: "patient", text: "Because this could be my heart and I might get worse suddenly, so the ambulance can watch me and treat me on the way." },
      { at: "6:56", speaker: "doctor", text: "Exactly. I will keep you resting, repeat observations, prepare your medication and allergy details, and give the ambulance team a concise handover about the onset, radiation, associated symptoms, risk factors, and treatment given." },
      { at: "7:20", speaker: "doctor", text: "My handover would be: David Nguyen, 58, has 45 minutes of ongoing exertional central heavy chest pressure radiating to the left arm and jaw, with sweating, nausea, breathlessness, and cardiovascular risk factors. He is pale and tachycardic but currently haemodynamically stable." },
      { at: "7:47", speaker: "doctor", text: "Urgent transfer has been arranged, private driving has been excluded, aspirin has been considered after contraindication checks, routine oxygen is not indicated at the current saturation, and no clinic investigation will delay transfer." }
    ]
  };

  const REVIEW_STAGES = [
    { id: "self_check", title: "Self-check", purpose: "Record what you actually covered before seeing the teaching." },
    { id: "safety_mirror", title: "Safety mirror", purpose: "Compare the attempt with the main safety threshold." },
    { id: "what_changed", title: "What changed", purpose: "Identify the information that should change the working path." },
    { id: "safe_version", title: "Safe version", purpose: "See and rehearse a complete safe performance." },
    { id: "thinking_traps", title: "Thinking traps", purpose: "Name the failure pattern without shame." },
    { id: "what_if_paths", title: "What-if paths", purpose: "Transfer the same reasoning to changed details." },
    { id: "retry_decision", title: "Retry decision", purpose: "Choose the smallest useful next practice move." }
  ];

  const DEFAULT_STATE = {
    version: APP_VERSION,
    room: "home",
    libraryView: "overview",
    mode: "guided",
    variation: null,
    stationPhase: "idle",
    readingStartedAt: null,
    assessmentStartedAt: null,
    assessmentFinishedAt: null,
    immediateActionAt: null,
    planDiscussedAt: null,
    openedReveals: [],
    activeReveal: null,
    eventLog: [],
    confidenceBefore: null,
    confidenceAfter: null,
    selfCheck: {
      focusedHistory: false,
      requestedFindings: false,
      explainedConcern: false,
      discussedPlan: false,
      ambulance: false,
      noDriving: false,
      noTestDelay: false,
      recoveredAnchor: false
    },
    reviewStage: 0,
    reviewCompletedStages: [],
    reviewMode: "deep",
    retryChoice: null,
    modelViewed: false,
    keyDecisionsViewed: false,
    attempts: [],
    lastUpdatedAt: null
  };

  const app = document.getElementById("app");
  const globalNav = document.getElementById("global-nav");
  const attemptHeader = document.getElementById("attempt-header");
  const attemptStateLabel = document.getElementById("attempt-state-label");
  const footer = document.getElementById("app-footer");
  const announcer = document.getElementById("announcer");
  let state = loadState();
  let timerHandle = null;
  let assessmentEndAnnounced = false;

  function freshState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return freshState();
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== APP_VERSION) return freshState();
      return { ...freshState(), ...parsed, selfCheck: { ...DEFAULT_STATE.selfCheck, ...(parsed.selfCheck || {}) } };
    } catch (error) {
      console.warn("Could not load local practice state", error);
      return freshState();
    }
  }

  function saveState() {
    state.lastUpdatedAt = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function announce(message) {
    announcer.textContent = "";
    window.setTimeout(() => {
      announcer.textContent = message;
    }, 10);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatSeconds(total) {
    if (total === null || total === undefined || Number.isNaN(total)) return "Not marked";
    const safe = Math.max(0, Math.round(total));
    const minutes = Math.floor(safe / 60);
    const seconds = safe % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function elapsedSeconds(start, end = Date.now()) {
    if (!start) return null;
    return Math.max(0, Math.floor((end - start) / 1000));
  }

  function route(room) {
    if (!["home", "library", "station", "review", "journey"].includes(room)) return;
    state.room = room;
    saveState();
    render();
  }

  function resetCurrentRun({ mode = state.mode, variation = null } = {}) {
    state.mode = mode;
    state.variation = variation;
    state.stationPhase = "reading";
    state.readingStartedAt = Date.now();
    state.assessmentStartedAt = null;
    state.assessmentFinishedAt = null;
    state.immediateActionAt = null;
    state.planDiscussedAt = null;
    state.openedReveals = [];
    state.activeReveal = null;
    state.eventLog = [{ type: "reading_started", at: Date.now() }];
    state.confidenceBefore = null;
    state.confidenceAfter = null;
    state.selfCheck = { ...DEFAULT_STATE.selfCheck };
    state.reviewStage = 0;
    state.reviewCompletedStages = [];
    state.reviewMode = state.attempts.length > 0 ? "fast" : "deep";
    state.retryChoice = null;
    state.room = "station";
    assessmentEndAnnounced = false;
    saveState();
    render();
  }

  function getVariation() {
    return CASE.variations.find((item) => item.id === state.variation) || null;
  }

  function getRevealContent(reveal) {
    const content = [...reveal.content];
    if (state.variation === "normal_ecg" && reveal.id === "observations_and_examination") {
      content.push("The immediately available ECG is reported as showing no acute ischaemic change. This does not exclude acute coronary syndrome or cancel urgent transfer.");
    }
    if (state.variation === "antacid_improvement" && reveal.id === "pain_story") {
      content.push("After another antacid, the pain falls from 8 out of 10 to 3 out of 10, but it has not fully resolved.");
    }
    if (state.variation === "ambulance_refusal" && reveal.id === "response_to_your_plan") {
      return [
        "I understand what you are saying, but I do not want an ambulance.",
        "I feel a little better and I am going to drive myself.",
        "You are making this sound worse than it is.",
        "What exactly could happen if I leave now?"
      ];
    }
    return content;
  }

  function latestAttempt() {
    return state.attempts[state.attempts.length - 1] || null;
  }

  function hasAttemptMode(mode) {
    return state.attempts.some((attempt) => attempt.mode === mode && attempt.reviewCompleted);
  }

  function hasVariationAttempt() {
    return state.attempts.some((attempt) => Boolean(attempt.variation) && attempt.reviewCompleted);
  }

  function delayedRetryAvailable() {
    const independent = [...state.attempts].reverse().find((attempt) => attempt.mode === "exam" && attempt.reviewCompleted);
    if (!independent) return false;
    return Date.now() - independent.finishedAt >= 24 * 60 * 60 * 1000;
  }

  function evidenceBand() {
    if (delayedRetryAvailable() && hasAttemptMode("delayed")) return "Retained";
    if (hasVariationAttempt()) return "Flexible";
    if (hasAttemptMode("exam")) return "Independent";
    if (hasAttemptMode("guided") || hasAttemptMode("cue")) return "Guided";
    if (state.modelViewed || state.keyDecisionsViewed) return "Modelled";
    return "Not started";
  }

  function statusTone(label) {
    if (["Reviewed", "Flexible", "Retained", "Complete"].includes(label)) return "complete";
    if (["In progress", "Guided", "Independent", "Available"].includes(label)) return "active";
    if (["HOLD", "Locked", "Not yet tested"].includes(label)) return "hold";
    return "";
  }

  function stationStatus() {
    if (state.stationPhase === "reading" || state.stationPhase === "assessment") return "In progress";
    if (latestAttempt() && !latestAttempt().reviewCompleted) return "Review available";
    if (latestAttempt()?.reviewCompleted) return state.retryChoice === "move_forward" ? "Reviewed" : "Retry useful";
    return "Not started";
  }

  function nextUsefulMove() {
    if (state.stationPhase === "reading" || state.stationPhase === "assessment") {
      return { action: "resume-station", label: "Continue station", reason: "Your current attempt is saved in this browser." };
    }
    const attempt = latestAttempt();
    if (attempt && !attempt.reviewCompleted) {
      return { action: "open-review", label: "Open Review", reason: "Your station is finished and the attempt evidence is ready." };
    }
    if (state.retryChoice === "repeat_segment") {
      return { action: "start-cue", label: "Repeat weak segment", reason: "Use cue-only mode to repair the smallest weak section." };
    }
    if (state.retryChoice === "retry_full") {
      return { action: "start-exam", label: "Retry full station", reason: "Run the whole station again without automatic scoring." };
    }
    if (state.retryChoice === "variation") {
      const untested = CASE.variations.find((variation) => !state.attempts.some((attemptItem) => attemptItem.variation === variation.id));
      if (untested) return { action: "start-variation", variation: untested.id, label: `Run variation: ${untested.title}`, reason: "Test whether the same safety logic survives a changed detail." };
    }
    return { action: "open-library", label: "Open Library", reason: "Choose the next deliberate practice step." };
  }

  function updateHeader() {
    const inAttempt = state.room === "station" && ["reading", "assessment"].includes(state.stationPhase);
    globalNav.hidden = inAttempt;
    attemptHeader.hidden = !inAttempt;
    footer.hidden = inAttempt;
    if (inAttempt) {
      attemptStateLabel.textContent = state.stationPhase === "reading" ? "Reading" : "Assessment";
    }
    document.querySelectorAll(".nav-button").forEach((button) => {
      if (button.dataset.route === state.room) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
  }

  function render() {
    stopTimerLoop();
    updateHeader();
    switch (state.room) {
      case "library":
        app.innerHTML = renderLibrary();
        break;
      case "station":
        app.innerHTML = renderStation();
        break;
      case "review":
        app.innerHTML = renderReview();
        break;
      case "journey":
        app.innerHTML = renderJourney();
        break;
      case "home":
      default:
        app.innerHTML = renderHome();
        break;
    }
    app.focus({ preventScroll: true });
    startTimerLoop();
  }

  function renderHome() {
    const next = nextUsefulMove();
    const band = evidenceBand();
    return `
      <section class="room-header">
        <p class="eyebrow">Case 001 reference build</p>
        <h1>Practise the station, not the notes.</h1>
        <p class="lede">Speak aloud, reveal only what you asked for, mark the timing of your immediate action, then review the attempt in stages.</p>
      </section>

      <section class="cluster" aria-label="Your next action">
        <div class="primary-action-panel">
          <div>
            <span class="status-pill" data-tone="${statusTone(band)}">Evidence: ${escapeHtml(band)}</span>
            <h2>${escapeHtml(next.label)}</h2>
            <p>${escapeHtml(next.reason)}</p>
          </div>
          <button class="button" type="button" data-action="${escapeHtml(next.action)}" ${next.variation ? `data-variation="${escapeHtml(next.variation)}"` : ""}>${escapeHtml(next.label)}</button>
        </div>

        <div class="grid-2">
          <article class="card">
            <h2>How it works</h2>
            <ol class="plain-list">
              <li>Read for two minutes.</li>
              <li>Run the eight-minute station aloud.</li>
              <li>Reveal only the information you requested.</li>
              <li>Finish, review, and repeat the smallest useful part.</li>
            </ol>
          </article>
          <article class="card">
            <h2>What this does not do</h2>
            <p>Clinical Pathway does not use your microphone, recognise your speech, or generate an automatic clinical score.</p>
            <p class="muted small">Your evidence is based on the practice modes you completed, your timing marks, and your own structured self-check.</p>
          </article>
        </div>
      </section>
    `;
  }

  function renderLibrary() {
    if (state.libraryView === "model") return renderModelLibrary();
    if (state.libraryView === "decisions") return renderDecisionsLibrary();

    const reviewedAttempts = state.attempts.filter((attempt) => attempt.reviewCompleted);
    const pathway = [
      { id: "model", title: "Full model", text: "Read the complete seven-to-eight-minute safe run.", complete: state.modelViewed, action: "view-model", label: "Open model" },
      { id: "decisions", title: "Key decisions", text: "Understand the five decisions that control this station.", complete: state.keyDecisionsViewed, action: "view-decisions", label: "Open decisions" },
      { id: "guided", title: "Guided speak-along", text: "Run the station with task and action cues visible.", complete: hasAttemptMode("guided"), action: "start-guided", label: "Start guided" },
      { id: "cue", title: "Cue-only run", text: "Use a short task rail with no model wording.", complete: hasAttemptMode("cue"), action: "start-cue", label: "Start cue-only" },
      { id: "exam", title: "Timed cold run", text: "Run the full station with exam-level support only.", complete: hasAttemptMode("exam"), action: "start-exam", label: "Start timed run" },
      { id: "variation", title: "Variation and recovery", text: "Test the same safety logic when one detail changes.", complete: hasVariationAttempt(), action: "start-variation", variation: "normal_ecg", label: "Start variation", locked: reviewedAttempts.length === 0 },
      { id: "delayed", title: "Delayed cold retry", text: "Repeat after at least 24 hours to test retention.", complete: hasAttemptMode("delayed"), action: "start-delayed", label: delayedRetryAvailable() ? "Start delayed retry" : "Available after 24 hours", locked: !delayedRetryAvailable() }
    ];

    return `
      <section class="room-header">
        <p class="eyebrow">Library</p>
        <h1>Phase → pattern → station</h1>
        <p class="lede">One case is available in this reference build. Move through the practice path without generating extra cases.</p>
      </section>

      <section class="cluster">
        <article class="card">
          <div class="meta-row">
            <span class="tag">${escapeHtml(CASE.phase)}</span>
            <span class="tag">${escapeHtml(CASE.pattern)}</span>
            <span class="tag">${escapeHtml(CASE.stationType)}</span>
          </div>
          <div class="station-card">
            <div>
              <p class="eyebrow">Station 001</p>
              <h2>${escapeHtml(CASE.title)}</h2>
              <p>${escapeHtml(CASE.setting)} · Status: ${escapeHtml(stationStatus())}</p>
            </div>
            <button class="button" type="button" data-action="start-guided">${state.stationPhase === "reading" || state.stationPhase === "assessment" ? "Continue station" : "Start station"}</button>
          </div>
        </article>

        <article class="card">
          <h2>Mastery path</h2>
          <p class="muted">Evidence bands describe completed practice only. They are not marks, certification, or a prediction of exam outcome.</p>
          <div class="pathway">
            ${pathway.map((step) => `
              <div class="pathway-step" data-state="${step.complete ? "complete" : step.locked ? "locked" : "available"}">
                <div>
                  <h3>${escapeHtml(step.title)}</h3>
                  <p class="muted">${escapeHtml(step.text)}</p>
                </div>
                <button class="button button-secondary button-small" type="button" data-action="${escapeHtml(step.action)}" ${step.variation ? `data-variation="${escapeHtml(step.variation)}"` : ""} ${step.locked ? "disabled" : ""}>${escapeHtml(step.complete ? "Repeat" : step.label)}</button>
              </div>
            `).join("")}
          </div>
        </article>

        <p class="muted small">Case 002 is intentionally unavailable. The product remains narrow until Case 001 is clinically and operationally reviewed.</p>
      </section>
    `;
  }

  function renderModelLibrary() {
    return `
      <section class="room-header">
        <p class="eyebrow">Library · Full model</p>
        <h1>${escapeHtml(CASE.title)}</h1>
        <p class="lede">Read this once for sequence and timing. Then practise aloud rather than memorising every sentence.</p>
      </section>
      <section class="card">
        <div class="button-row" style="justify-content: space-between; margin-bottom: 16px;">
          <span class="status-pill" data-tone="complete">Modelled run · approximately 8 minutes</span>
          <button class="button button-secondary button-small" type="button" data-action="library-overview">Back to Library</button>
        </div>
        <div class="model-run">
          ${CASE.goldRun.map((turn) => `
            <div class="model-turn" data-speaker="${escapeHtml(turn.speaker)}">
              <strong>${escapeHtml(turn.at)} · ${escapeHtml(turn.speaker)}</strong>
              <span>${escapeHtml(turn.text)}</span>
            </div>
          `).join("")}
        </div>
        <div class="button-row" style="margin-top: 18px;">
          <button class="button" type="button" data-action="start-guided">Start guided run</button>
          <button class="button button-secondary" type="button" data-action="view-decisions">Review key decisions</button>
        </div>
      </section>
    `;
  }

  function renderDecisionsLibrary() {
    return `
      <section class="room-header">
        <p class="eyebrow">Library · Key decisions</p>
        <h1>The five decisions that control Case 001</h1>
        <p class="lede">Use these as reasoning anchors. They are not a script.</p>
      </section>
      <section class="cluster">
        <div class="grid-2">
          ${CASE.keyDecisions.map((decision, index) => `
            <article class="card">
              <p class="eyebrow">Decision ${index + 1}</p>
              <h2>${escapeHtml(decision.title)}</h2>
              <p>${escapeHtml(decision.text)}</p>
            </article>
          `).join("")}
        </div>
        <div class="button-row">
          <button class="button" type="button" data-action="start-guided">Start guided run</button>
          <button class="button button-secondary" type="button" data-action="library-overview">Back to Library</button>
        </div>
      </section>
    `;
  }

  function renderStation() {
    if (state.stationPhase === "idle") {
      return `
        <section class="room-header">
          <p class="eyebrow">Station</p>
          <h1>No active attempt</h1>
          <p class="lede">Start Case 001 from the Library.</p>
        </section>
        <button class="button" type="button" data-action="open-library">Open Library</button>
      `;
    }
    if (state.stationPhase === "reading") return renderReadingScreen();
    if (state.stationPhase === "assessment") return renderAssessmentScreen();
    return `
      <section class="room-header">
        <p class="eyebrow">Station 001</p>
        <h1>Attempt finished</h1>
        <p class="lede">The attempt is locked. Open Review to compare the timing and your self-check with the safe pathway.</p>
      </section>
      <button class="button" type="button" data-action="open-review">Open Review</button>
    `;
  }

  function modeDescription() {
    const descriptions = {
      guided: "Guided: task rail, action checkpoint, and brief safety cues remain visible.",
      cue: "Cue-only: task rail remains, but model wording and extra cues are removed.",
      exam: "Timed cold run: only the station task, timer, reveals, and neutral checkpoints remain.",
      delayed: "Delayed cold retry: exam-level support after a retention interval."
    };
    return descriptions[state.mode] || descriptions.guided;
  }

  function renderReadingScreen() {
    const variation = getVariation();
    return `
      <section class="room-header">
        <p class="eyebrow">Station 001 · Reading time</p>
        <h1>${escapeHtml(CASE.title)}</h1>
        <p class="lede">Read the task. Plan your first questions. Start when ready.</p>
      </section>

      <div class="reading-layout">
        <section class="stack">
          <article class="card">
            <div class="meta-row">
              <span class="tag">${escapeHtml(CASE.setting)}</span>
              <span class="tag">${escapeHtml(CASE.stationType)}</span>
              ${state.mode === "guided" ? `<span class="tag">Proposed PAA: ${escapeHtml(CASE.paa)}</span>` : ""}
            </div>
            <h2>Information and tasks</h2>
            <p>You are working in a general practice clinic. David Nguyen, aged 58, has chest discomfort that started after lunch.</p>
            <ol class="task-list">
              ${CASE.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
            </ol>
            ${variation ? `<div class="callout callout-warning" style="margin-top: 18px;"><strong>Variation:</strong> ${escapeHtml(variation.title)}. Run the same station and respond to the changed detail when it appears.</div>` : ""}
          </article>

          <article class="card card-muted">
            <h2>Before you start</h2>
            <p>${escapeHtml(modeDescription())}</p>
            <p class="small muted">Clinical Pathway does not listen to or automatically score your speech. Speak aloud first, then reveal the information you asked for.</p>
            <fieldset style="border: 0; padding: 0; margin: 18px 0 0;">
              <legend><strong>Confidence before this attempt</strong> <span class="muted small">(self-reflection, not a score)</span></legend>
              <div class="confidence-scale" style="margin-top: 10px;">
                ${[1, 2, 3, 4, 5].map((value) => `
                  <label><input type="radio" name="confidence-before" value="${value}" ${state.confidenceBefore === value ? "checked" : ""}><span>${value}</span></label>
                `).join("")}
              </div>
            </fieldset>
          </article>
        </section>

        <aside class="card timer-card" aria-label="Reading timer">
          <span class="timer-label">Reading</span>
          <strong class="timer" id="reading-timer">2:00</strong>
          <button class="button button-block" type="button" data-action="start-assessment">Start station</button>
          <p class="muted small">Starting early is allowed. The timer records practice timing only.</p>
        </aside>
      </div>
    `;
  }

  function renderAssessmentScreen() {
    const active = CASE.reveals.find((reveal) => reveal.id === state.activeReveal);
    const variation = getVariation();
    const showGuidedCue = state.mode === "guided";
    return `
      <div class="station-shell">
        <aside class="card task-rail" aria-label="Station tasks">
          <div>
            <span class="timer-label">Assessment</span>
            <strong class="timer" id="assessment-timer">8:00</strong>
          </div>
          <ol>
            <li>Focused history</li>
            <li>Request findings</li>
            <li>Explain concern</li>
            <li>Discuss plan</li>
          </ol>
          ${showGuidedCue ? `<p class="small muted">Safety cue: when the danger threshold is crossed, act while continuing focused assessment.</p>` : ""}
        </aside>

        <section class="station-main">
          <article class="card patient-card">
            <p class="speaker-label">David says</p>
            <p class="patient-line">“${escapeHtml(CASE.opening)}”</p>
          </article>

          ${variation ? `<div class="callout callout-warning"><strong>Variation run:</strong> ${escapeHtml(variation.title)}. The changed detail will appear in the relevant response.</div>` : ""}

          <div class="instruction-bar">
            <strong>Speak first.</strong>
            <span>Ask your question aloud, then reveal only the category you requested.</span>
          </div>

          <section aria-labelledby="reveal-heading">
            <h2 id="reveal-heading">Ask and reveal</h2>
            <div class="reveal-grid">
              ${CASE.reveals.map((reveal) => {
                const opened = state.openedReveals.includes(reveal.id);
                const disabled = reveal.gated && !state.planDiscussedAt;
                return `
                  <button class="reveal-button" type="button" data-action="reveal" data-reveal="${escapeHtml(reveal.id)}" aria-expanded="${state.activeReveal === reveal.id}" ${disabled ? "disabled" : ""}>
                    <span>${escapeHtml(reveal.label)}</span>
                    <span class="reveal-state">${disabled ? "Discuss plan first" : opened ? "Opened" : "Reveal"}</span>
                  </button>
                `;
              }).join("")}
            </div>
          </section>

          <article class="card response-card" aria-live="polite">
            ${active ? `
              <p class="speaker-label">${active.examiner ? "Examiner provides" : "David answers"}</p>
              <h2>${escapeHtml(active.label)}</h2>
              <ul class="plain-list">
                ${getRevealContent(active).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
              </ul>
            ` : `
              <div class="response-empty">
                <p>No response opened. Ask aloud, then choose the information you requested.</p>
              </div>
            `}
          </article>

          <article class="card checkpoint-card ${state.immediateActionAt ? "checkpoint-complete" : ""}">
            <div>
              <h3>Immediate action</h3>
              <p>Say your immediate action aloud when you have enough information. This button records timing only; it does not recognise or judge your words.</p>
            </div>
            <button class="button ${state.immediateActionAt ? "button-secondary" : ""}" type="button" data-action="mark-action" ${state.immediateActionAt ? "disabled" : ""}>${state.immediateActionAt ? `Marked at ${formatSeconds(elapsedSeconds(state.assessmentStartedAt, state.immediateActionAt))}` : "I have taken my immediate action"}</button>
          </article>

          <article class="card checkpoint-card ${state.planDiscussedAt ? "checkpoint-complete" : ""}">
            <div>
              <h3>Management plan</h3>
              <p>Explain your concern, urgent transfer, transport safety, immediate care, and handover aloud.</p>
            </div>
            <button class="button ${state.planDiscussedAt ? "button-secondary" : ""}" type="button" data-action="mark-plan" ${state.planDiscussedAt ? "disabled" : ""}>${state.planDiscussedAt ? "Plan marked" : "I have discussed my plan"}</button>
          </article>

          ${!state.planDiscussedAt ? `<div class="locked-note">Response to your plan remains hidden until you mark that you have discussed the plan.</div>` : ""}

          <div class="finish-panel">
            <p>Finish only after you have stated the plan. The attempt will lock and Review will open.</p>
            <button class="button" type="button" data-action="finish-station" ${!state.planDiscussedAt ? "disabled" : ""}>Finish station</button>
          </div>
        </section>
      </div>
    `;
  }

  function buildAttempt() {
    const finishedAt = state.assessmentFinishedAt || Date.now();
    const actionSeconds = state.immediateActionAt ? elapsedSeconds(state.assessmentStartedAt, state.immediateActionAt) : null;
    const openedBeforeAction = state.eventLog
      .filter((event) => event.type === "reveal_opened" && (!state.immediateActionAt || event.at < state.immediateActionAt))
      .map((event) => event.id);
    return {
      id: `attempt-${finishedAt}`,
      caseId: CASE.id,
      mode: state.mode,
      variation: state.variation,
      startedAt: state.assessmentStartedAt,
      finishedAt,
      durationSeconds: elapsedSeconds(state.assessmentStartedAt, finishedAt),
      immediateActionSeconds: actionSeconds,
      planDiscussedSeconds: state.planDiscussedAt ? elapsedSeconds(state.assessmentStartedAt, state.planDiscussedAt) : null,
      openedReveals: [...state.openedReveals],
      openedBeforeAction,
      events: [...state.eventLog],
      confidenceBefore: state.confidenceBefore,
      confidenceAfter: null,
      selfCheck: { ...state.selfCheck },
      retryChoice: null,
      reviewCompleted: false
    };
  }

  function renderReview() {
    const attempt = latestAttempt();
    if (!attempt) {
      return `
        <section class="room-header">
          <p class="eyebrow">Review</p>
          <h1>Review is locked</h1>
          <p class="lede">Finish a station attempt before opening Review.</p>
        </section>
        <button class="button" type="button" data-action="open-library">Open Library</button>
      `;
    }
    if (state.reviewMode === "fast" && !attempt.reviewCompleted) return renderFastReview(attempt);
    const stage = REVIEW_STAGES[state.reviewStage];
    return `
      <section class="room-header">
        <p class="eyebrow">Review · Case 001</p>
        <h1>Guided feedback, one stage at a time</h1>
        <p class="lede">The timeline records clicks and timing marks. Clinical content remains a structured self-review, not automatic speech scoring.</p>
      </section>

      <div class="review-layout">
        <nav class="review-stepper" aria-label="Review stages">
          ${REVIEW_STAGES.map((item, index) => {
            const complete = state.reviewCompletedStages.includes(index);
            const active = index === state.reviewStage;
            const available = active || complete;
            return `
              <button type="button" class="review-step" data-action="goto-review-stage" data-stage="${index}" data-state="${active ? "active" : complete ? "complete" : "locked"}" ${available ? "" : "disabled"}>
                <span class="review-step-number">${index + 1}</span>
                <span>${escapeHtml(item.title)}</span>
              </button>
            `;
          }).join("")}
        </nav>

        <article class="card review-card">
          <header>
            <p class="eyebrow">Stage ${state.reviewStage + 1} of 7</p>
            <h2>${escapeHtml(stage.title)}</h2>
            <p>${escapeHtml(stage.purpose)}</p>
          </header>
          <div class="review-content">
            ${renderReviewStage(stage.id, attempt)}
          </div>
          <div class="review-actions">
            <button class="button button-secondary" type="button" data-action="previous-review" ${state.reviewStage === 0 ? "disabled" : ""}>Previous stage</button>
            ${state.reviewStage < REVIEW_STAGES.length - 1
              ? `<button class="button" type="button" data-action="next-review">Next stage</button>`
              : `<button class="button" type="button" data-action="complete-review" ${!state.retryChoice ? "disabled" : ""}>Complete Review and update Journey</button>`}
          </div>
        </article>
      </div>
    `;
  }

  function renderFastReview(attempt) {
    const action = attempt.immediateActionSeconds;
    const actionText = action === null ? "Immediate action was not marked." : `Immediate action was marked at ${formatSeconds(action)}.`;
    return `
      <section class="room-header">
        <p class="eyebrow">Fast Review · repeat attempt</p>
        <h1>Check safety, update, choose the next move.</h1>
        <p class="lede">Use the 60-to-90-second path after repeat attempts. Deep Review remains available.</p>
      </section>
      <section class="cluster">
        <article class="card">
          <h2>1. Attempt evidence</h2>
          <p><strong>${escapeHtml(actionText)}</strong></p>
          <p>${attempt.openedBeforeAction.length ? `${attempt.openedBeforeAction.length} information group(s) were opened before the action mark.` : "No information group was opened before the action mark."}</p>
          <p class="muted small">This is timing evidence only and does not prove what was spoken.</p>
        </article>
        <article class="card">
          <h2>2. Safety mirror</h2>
          <p>The central threshold remains: possible high-risk cardiac chest pain requires urgent ambulance transfer before diagnostic proof, no private driving, and no delay for clinic tests.</p>
        </article>
        <article class="card">
          <h2>3. Next move</h2>
          <div class="grid-2">
            <button class="button button-secondary" type="button" data-action="set-retry" data-retry="repeat_segment">Repeat weak segment</button>
            <button class="button button-secondary" type="button" data-action="set-retry" data-retry="retry_full">Retry full station</button>
            <button class="button button-secondary" type="button" data-action="set-retry" data-retry="variation">Run a variation</button>
            <button class="button button-secondary" type="button" data-action="set-retry" data-retry="move_forward">Move to Journey</button>
          </div>
          ${state.retryChoice ? `<p><strong>Selected:</strong> ${escapeHtml(retryLabel(state.retryChoice))}</p>` : ""}
        </article>
        <div class="button-row">
          <button class="button" type="button" data-action="complete-fast-review" ${!state.retryChoice ? "disabled" : ""}>Complete Fast Review</button>
          <button class="button button-secondary" type="button" data-action="open-deep-review">Open Deep Review</button>
        </div>
      </section>
    `;
  }

  function renderReviewStage(id, attempt) {
    switch (id) {
      case "self_check":
        return renderSelfCheck();
      case "safety_mirror":
        return renderSafetyMirror(attempt);
      case "what_changed":
        return `
          <div class="stack">
            <div class="callout"><strong>Initial idea:</strong> indigestion was possible, but not safe to accept.</div>
            <ol class="plain-list">
              <li>Exertional onset made a benign explanation less secure.</li>
              <li>Heavy central pressure and radiation to the arm and jaw increased cardiac concern.</li>
              <li>Sweating, nausea, breathlessness, persistent severe pain, and risk factors crossed the action threshold.</li>
              <li>The request to drive created a second safety problem: transport risk.</li>
            </ol>
            <p><strong>Safe update:</strong> arrange ambulance transfer before proof, then continue focused assessment while help is coming.</p>
          </div>
        `;
      case "safe_version":
        return `
          <div class="stack">
            <div class="callout"><strong>Rescue line:</strong> “Initially I considered indigestion because this began after lunch. The persistent pressure, radiation, sweating, nausea, and breathlessness make a cardiac cause unsafe to miss, so I am changing direction and arranging ambulance transfer now.”</div>
            <div class="model-run">
              ${CASE.goldRun.map((turn) => `
                <div class="model-turn" data-speaker="${escapeHtml(turn.speaker)}">
                  <strong>${escapeHtml(turn.at)} · ${escapeHtml(turn.speaker)}</strong>
                  <span>${escapeHtml(turn.text)}</span>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      case "thinking_traps":
        return `
          <div class="grid-2">
            <article class="evidence-item"><strong>Patient label becomes diagnosis</strong><span>“Indigestion” is a hypothesis, not a safety conclusion.</span></article>
            <article class="evidence-item"><strong>Questions delay action</strong><span>Once danger is likely enough, act while focused assessment continues.</span></article>
            <article class="evidence-item"><strong>Ambulance feels dramatic</strong><span>Uncertainty does not justify unsafe transport or delay.</span></article>
            <article class="evidence-item"><strong>One normal result reassures</strong><span>A normal early ECG does not cancel the clinical danger pattern.</span></article>
          </div>
        `;
      case "what_if_paths":
        return `
          <div class="stack">
            ${CASE.variations.map((variation) => {
              const tested = state.attempts.some((attemptItem) => attemptItem.variation === variation.id && attemptItem.reviewCompleted);
              return `
                <article class="variation-card">
                  <div>
                    <h4>${escapeHtml(variation.title)}</h4>
                    <p>${escapeHtml(variation.summary)}</p>
                    <p><strong>Recovery:</strong> ${escapeHtml(variation.recovery)}</p>
                  </div>
                  <button class="button button-secondary button-small" type="button" data-action="start-variation" data-variation="${escapeHtml(variation.id)}">${tested ? "Repeat variation" : "Run variation"}</button>
                </article>
              `;
            }).join("")}
          </div>
        `;
      case "retry_decision":
        return `
          <fieldset style="border: 0; padding: 0; margin: 0;">
            <legend><strong>Choose the smallest useful next move</strong></legend>
            <div class="mode-options">
              ${[
                ["retry_full", "Retry full station", "Use when sequence, urgency, or overall flow needs another complete run."],
                ["repeat_segment", "Repeat weak segment", "Use cue-only mode to repair one explanation or action section."],
                ["variation", "Run a changed-detail variation", "Use when the base safety pathway is stable and flexibility needs testing."],
                ["move_forward", "Move to Journey", "Use when this review is complete and you need to see the evidence map."]
              ].map(([value, title, text]) => `
                <label class="choice">
                  <input type="radio" name="retry-choice" value="${escapeHtml(value)}" ${state.retryChoice === value ? "checked" : ""}>
                  <span><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></span>
                </label>
              `).join("")}
            </div>
          </fieldset>
        `;
      default:
        return "";
    }
  }

  function renderSelfCheck() {
    const checks = [
      ["focusedHistory", "I took a concise, focused history."],
      ["requestedFindings", "I requested the observations or examination findings I needed."],
      ["explainedConcern", "I explained that the pattern could be heart-related without claiming certainty."],
      ["discussedPlan", "I discussed urgent ambulance transfer and immediate care."],
      ["ambulance", "I explicitly arranged or stated ambulance transfer."],
      ["noDriving", "I explicitly told David not to drive."],
      ["noTestDelay", "I stated that clinic tests must not delay transfer."],
      ["recoveredAnchor", "I recovered if I initially anchored on indigestion."]
    ];
    return `
      <div class="stack">
        <p>Check only what you actually said or did. This self-check is more useful when it is strict.</p>
        ${checks.map(([key, label]) => `
          <label class="choice">
            <input type="checkbox" name="self-check" value="${escapeHtml(key)}" ${state.selfCheck[key] ? "checked" : ""}>
            <span><strong>${escapeHtml(label)}</strong></span>
          </label>
        `).join("")}
        <fieldset style="border: 0; padding: 0; margin: 8px 0 0;">
          <legend><strong>Confidence after the attempt</strong> <span class="muted small">(self-reflection, not a score)</span></legend>
          <div class="confidence-scale" style="margin-top: 10px;">
            ${[1, 2, 3, 4, 5].map((value) => `
              <label><input type="radio" name="confidence-after" value="${value}" ${state.confidenceAfter === value ? "checked" : ""}><span>${value}</span></label>
            `).join("")}
          </div>
        </fieldset>
      </div>
    `;
  }

  function renderSafetyMirror(attempt) {
    const actionSeconds = attempt.immediateActionSeconds;
    const actionDescription = actionSeconds === null ? "No immediate-action timing mark was recorded." : `Immediate action was marked at ${formatSeconds(actionSeconds)}.`;
    const eventRows = [
      { time: 0, label: "Assessment started" },
      ...attempt.events
        .filter((event) => ["reveal_opened", "immediate_action", "plan_discussed"].includes(event.type))
        .map((event) => ({ time: elapsedSeconds(attempt.startedAt, event.at), label: event.type === "reveal_opened" ? `Opened: ${CASE.reveals.find((item) => item.id === event.id)?.label || event.id}` : event.type === "immediate_action" ? "Immediate action marked" : "Plan marked" })),
      { time: attempt.durationSeconds, label: "Station finished" }
    ].sort((a, b) => a.time - b.time);
    return `
      <div class="stack">
        <div class="callout"><strong>Main safety threshold:</strong> the high-risk pattern is enough to arrange ambulance transfer before diagnostic proof.</div>
        <div class="timeline">
          ${eventRows.map((event) => `
            <div class="timeline-item">
              <span class="timeline-time">${formatSeconds(event.time)}</span>
              <span>${escapeHtml(event.label)}</span>
            </div>
          `).join("")}
        </div>
        <p><strong>${escapeHtml(actionDescription)}</strong></p>
        <p>${attempt.openedBeforeAction.length ? `${attempt.openedBeforeAction.length} reveal group(s) were opened before the action mark: ${attempt.openedBeforeAction.map((id) => CASE.reveals.find((item) => item.id === id)?.label || id).join(", ")}.` : "No reveal group was opened before the action mark."}</p>
        <p class="muted small">Timing marks show interface use only. They do not confirm what you said, whether the action was clinically correct, or whether you would pass an examination.</p>
      </div>
    `;
  }

  function retryLabel(value) {
    const labels = {
      retry_full: "Retry full station",
      repeat_segment: "Repeat weak segment",
      variation: "Run a changed-detail variation",
      move_forward: "Move to Journey"
    };
    return labels[value] || value;
  }

  function completeReview() {
    const attempt = latestAttempt();
    if (!attempt) return;
    attempt.reviewCompleted = true;
    attempt.confidenceAfter = state.confidenceAfter;
    attempt.selfCheck = { ...state.selfCheck };
    attempt.retryChoice = state.retryChoice;
    state.reviewCompletedStages = REVIEW_STAGES.map((_, index) => index);
    state.stationPhase = "idle";
    state.room = "journey";
    saveState();
    announce("Review completed. Journey updated.");
    render();
  }

  function renderJourney() {
    const attempt = latestAttempt();
    const next = nextUsefulMove();
    const band = evidenceBand();
    const checked = attempt?.selfCheck || {};
    const capabilities = [
      { label: "Recognises a high-risk pattern", state: checked.explainedConcern ? "demonstrated" : attempt ? "developing" : "untested", note: checked.explainedConcern ? "Self-reported in the latest reviewed attempt" : "Needs strict self-check evidence" },
      { label: "States ambulance transfer", state: checked.ambulance ? "demonstrated" : attempt ? "developing" : "untested", note: checked.ambulance ? "Self-reported in the latest reviewed attempt" : "Needs confirmation" },
      { label: "Stops private driving", state: checked.noDriving ? "demonstrated" : attempt ? "developing" : "untested", note: checked.noDriving ? "Self-reported in the latest reviewed attempt" : "Needs confirmation" },
      { label: "Avoids clinic-test delay", state: checked.noTestDelay ? "demonstrated" : attempt ? "developing" : "untested", note: checked.noTestDelay ? "Self-reported in the latest reviewed attempt" : "Needs confirmation" },
      { label: "Acts before collecting every non-essential detail", state: attempt?.immediateActionSeconds !== null && attempt?.immediateActionSeconds !== undefined ? "developing" : "untested", note: attempt?.immediateActionSeconds !== null && attempt?.immediateActionSeconds !== undefined ? `Timing mark at ${formatSeconds(attempt.immediateActionSeconds)}; speech not verified` : "Not yet marked" },
      { label: "Recovers from an indigestion anchor", state: checked.recoveredAnchor ? "demonstrated" : attempt ? "developing" : "untested", note: checked.recoveredAnchor ? "Self-reported recovery completed" : "Use the recovery drill" }
    ];

    return `
      <section class="room-header">
        <p class="eyebrow">Journey</p>
        <h1>Your pathway map</h1>
        <p class="lede">This page shows practice evidence and the next useful move. It is not a score, rank, or readiness certificate.</p>
      </section>

      <section class="journey-grid">
        <article class="card current-position">
          <div class="meta-row">
            <span class="status-pill" data-tone="${statusTone(band)}">${escapeHtml(band)}</span>
            <span class="tag">${escapeHtml(CASE.phase)}</span>
          </div>
          <p class="eyebrow">Current position</p>
          <h2>Station 001 · ${escapeHtml(CASE.title)}</h2>
          <p>${escapeHtml(CASE.pattern)} · ${escapeHtml(CASE.stationType)}</p>
          <ul class="capability-list">
            ${capabilities.map((item) => `
              <li class="capability-item">
                <span class="capability-icon" data-state="${escapeHtml(item.state)}">${item.state === "demonstrated" ? "✓" : item.state === "developing" ? "△" : "○"}</span>
                <span>${escapeHtml(item.label)}</span>
                <span class="muted small">${escapeHtml(item.note)}</span>
              </li>
            `).join("")}
          </ul>
        </article>

        <aside class="stack">
          <article class="card">
            <p class="eyebrow">Next useful move</p>
            <h2>${escapeHtml(next.label)}</h2>
            <p>${escapeHtml(next.reason)}</p>
            <button class="button button-block" type="button" data-action="${escapeHtml(next.action)}" ${next.variation ? `data-variation="${escapeHtml(next.variation)}"` : ""}>${escapeHtml(next.label)}</button>
          </article>

          <article class="card">
            <h2>Variation evidence</h2>
            <ul class="capability-list">
              ${CASE.variations.map((variation) => {
                const tested = state.attempts.some((attemptItem) => attemptItem.variation === variation.id && attemptItem.reviewCompleted);
                return `
                  <li class="capability-item">
                    <span class="capability-icon" data-state="${tested ? "demonstrated" : "untested"}">${tested ? "✓" : "○"}</span>
                    <span>${escapeHtml(variation.title)}</span>
                    <span class="muted small">${tested ? "Reviewed" : "Not yet tested"}</span>
                  </li>
                `;
              }).join("")}
            </ul>
          </article>
        </aside>
      </section>

      <section class="card" style="margin-top: 18px;">
        <h2>Attempt history</h2>
        ${state.attempts.length ? `
          <div class="attempt-table-wrap">
            <table class="attempt-table">
              <thead><tr><th>Date</th><th>Mode</th><th>Variation</th><th>Duration</th><th>Action mark</th><th>Review</th></tr></thead>
              <tbody>
                ${[...state.attempts].reverse().map((item) => `
                  <tr>
                    <td>${new Date(item.finishedAt).toLocaleDateString()}</td>
                    <td>${escapeHtml(item.mode)}</td>
                    <td>${escapeHtml(CASE.variations.find((variation) => variation.id === item.variation)?.title || "Base case")}</td>
                    <td>${formatSeconds(item.durationSeconds)}</td>
                    <td>${formatSeconds(item.immediateActionSeconds)}</td>
                    <td>${item.reviewCompleted ? "Completed" : "Available"}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        ` : `<p class="muted">No attempt has been recorded yet.</p>`}
      </section>

      <section class="card card-muted" style="margin-top: 18px;">
        <h2>Local data</h2>
        <p>Your practice record is stored only in this browser. Clearing it cannot be undone.</p>
        <button class="button button-danger" type="button" data-action="clear-record">Clear practice record</button>
      </section>
    `;
  }

  function startTimerLoop() {
    updateTimers();
    if ((state.room === "station" && state.stationPhase === "reading") || (state.room === "station" && state.stationPhase === "assessment")) {
      timerHandle = window.setInterval(updateTimers, 500);
    }
  }

  function stopTimerLoop() {
    if (timerHandle) {
      window.clearInterval(timerHandle);
      timerHandle = null;
    }
  }

  function updateTimers() {
    const reading = document.getElementById("reading-timer");
    if (reading && state.readingStartedAt) {
      const remaining = Math.max(0, READING_SECONDS - elapsedSeconds(state.readingStartedAt));
      reading.textContent = formatSeconds(remaining);
      reading.dataset.ended = String(remaining === 0);
    }
    const assessment = document.getElementById("assessment-timer");
    if (assessment && state.assessmentStartedAt) {
      const remaining = Math.max(0, ASSESSMENT_SECONDS - elapsedSeconds(state.assessmentStartedAt));
      assessment.textContent = formatSeconds(remaining);
      assessment.dataset.ended = String(remaining === 0);
      if (remaining === 0 && !assessmentEndAnnounced) {
        assessmentEndAnnounced = true;
        announce("Eight minutes reached. Finish your closing statement and submit when ready.");
      }
    }
  }

  function handleAction(action, target) {
    switch (action) {
      case "open-library":
        state.libraryView = "overview";
        route("library");
        break;
      case "open-review":
        state.room = "review";
        saveState();
        render();
        break;
      case "resume-station":
        route("station");
        break;
      case "view-model":
        state.modelViewed = true;
        state.libraryView = "model";
        state.room = "library";
        saveState();
        render();
        break;
      case "view-decisions":
        state.keyDecisionsViewed = true;
        state.libraryView = "decisions";
        state.room = "library";
        saveState();
        render();
        break;
      case "library-overview":
        state.libraryView = "overview";
        saveState();
        render();
        break;
      case "start-guided":
        if (["reading", "assessment"].includes(state.stationPhase)) route("station");
        else resetCurrentRun({ mode: "guided", variation: null });
        break;
      case "start-cue":
        resetCurrentRun({ mode: "cue", variation: null });
        break;
      case "start-exam":
        resetCurrentRun({ mode: "exam", variation: null });
        break;
      case "start-delayed":
        if (delayedRetryAvailable()) resetCurrentRun({ mode: "delayed", variation: null });
        break;
      case "start-variation":
        resetCurrentRun({ mode: "exam", variation: target.dataset.variation || "normal_ecg" });
        break;
      case "start-assessment":
        state.stationPhase = "assessment";
        state.assessmentStartedAt = Date.now();
        state.eventLog.push({ type: "assessment_started", at: state.assessmentStartedAt });
        saveState();
        render();
        announce("Assessment started. Eight minutes.");
        break;
      case "reveal": {
        const id = target.dataset.reveal;
        if (!id) break;
        if (!state.openedReveals.includes(id)) {
          state.openedReveals.push(id);
          state.eventLog.push({ type: "reveal_opened", id, at: Date.now() });
        }
        state.activeReveal = state.activeReveal === id ? null : id;
        saveState();
        render();
        break;
      }
      case "mark-action":
        if (!state.immediateActionAt) {
          state.immediateActionAt = Date.now();
          state.eventLog.push({ type: "immediate_action", at: state.immediateActionAt });
          saveState();
          render();
          announce("Immediate action timing marked. Speech was not recorded or scored.");
        }
        break;
      case "mark-plan":
        if (!state.planDiscussedAt) {
          state.planDiscussedAt = Date.now();
          state.eventLog.push({ type: "plan_discussed", at: state.planDiscussedAt });
          state.activeReveal = "response_to_your_plan";
          if (!state.openedReveals.includes("response_to_your_plan")) {
            state.openedReveals.push("response_to_your_plan");
            state.eventLog.push({ type: "reveal_opened", id: "response_to_your_plan", at: Date.now() });
          }
          saveState();
          render();
          announce("Response to your plan is now available.");
        }
        break;
      case "finish-station":
        if (!state.planDiscussedAt) break;
        state.assessmentFinishedAt = Date.now();
        state.eventLog.push({ type: "station_finished", at: state.assessmentFinishedAt });
        state.stationPhase = "finished";
        state.attempts.push(buildAttempt());
        state.reviewStage = 0;
        state.reviewCompletedStages = [];
        state.reviewMode = state.attempts.length > 1 ? "fast" : "deep";
        state.room = "review";
        saveState();
        render();
        announce("Station finished. Review unlocked.");
        break;
      case "previous-review":
        state.reviewStage = Math.max(0, state.reviewStage - 1);
        saveState();
        render();
        break;
      case "next-review":
        if (!state.reviewCompletedStages.includes(state.reviewStage)) state.reviewCompletedStages.push(state.reviewStage);
        state.reviewStage = Math.min(REVIEW_STAGES.length - 1, state.reviewStage + 1);
        saveState();
        render();
        break;
      case "goto-review-stage": {
        const index = Number(target.dataset.stage);
        if (Number.isInteger(index) && (index === state.reviewStage || state.reviewCompletedStages.includes(index))) {
          state.reviewStage = index;
          saveState();
          render();
        }
        break;
      }
      case "open-deep-review":
        state.reviewMode = "deep";
        state.reviewStage = 0;
        saveState();
        render();
        break;
      case "set-retry":
        state.retryChoice = target.dataset.retry || null;
        saveState();
        render();
        break;
      case "complete-fast-review":
        completeReview();
        break;
      case "complete-review":
        completeReview();
        break;
      case "open-home":
        route("home");
        break;
      case "open-journey":
        route("journey");
        break;
      case "clear-record":
        if (window.confirm("Clear the complete local Case 001 practice record from this browser?")) {
          localStorage.removeItem(STORAGE_KEY);
          state = freshState();
          saveState();
          render();
          announce("Local practice record cleared.");
        }
        break;
      default:
        break;
    }
  }

  app.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target || target.disabled) return;
    handleAction(target.dataset.action, target);
  });

  app.addEventListener("change", (event) => {
    const target = event.target;
    if (target.name === "confidence-before") {
      state.confidenceBefore = Number(target.value);
      saveState();
    }
    if (target.name === "confidence-after") {
      state.confidenceAfter = Number(target.value);
      saveState();
    }
    if (target.name === "self-check") {
      state.selfCheck[target.value] = target.checked;
      saveState();
    }
    if (target.name === "retry-choice") {
      state.retryChoice = target.value;
      saveState();
      render();
    }
  });

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (!routeButton) return;
    route(routeButton.dataset.route);
  });

  document.getElementById("leave-attempt").addEventListener("click", () => {
    const leave = window.confirm("Leave this attempt? Your current state will remain saved in this browser.");
    if (leave) route("home");
  });

  render();
})();

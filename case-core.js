window.CP_CASE = {
  id: 'CP-C001',
  number: '001',
  title: 'Chest discomfort after lunch',
  internalTitle: 'High-risk chest pain in a 58-year-old man',
  phase: 'Critical Emergency Dominance',
  pattern: 'Chest pain',
  stationType: 'Emergency consultation',
  setting: 'GP clinic',
  readingSeconds: 120,
  assessmentSeconds: 480,
  proposedPAA: 'Management / Counselling / Education',
  confidenceTarget: 'I can protect the patient before I feel certain.',
  failureMode: 'Unsafe delay',
  memoryAnchor: 'Safety before certainty.',
  tasks: [
    'Take a concise, focused history.',
    'Request the observations or examination findings you need.',
    'Explain your concerns to David.',
    'Discuss your management plan.'
  ],
  opening: {
    speaker: 'David',
    text: 'Doctor, I think it is just indigestion, but my chest feels really tight.'
  },
  reveals: [
    {id:'pain_story', label:'Pain story', type:'patient', lines:[
      'It started about 45 minutes ago while I was carrying boxes at work.',
      'It is heavy and tight in the centre of my chest, about 8 out of 10.',
      'It goes to my left arm and jaw and it is not settling.'
    ]},
    {id:'associated_symptoms', label:'Associated symptoms', type:'patient', lines:[
      'I feel sweaty, nauseated and short of breath.',
      'I have not fainted or vomited.'
    ]},
    {id:'risk_factors', label:'Risk factors', type:'patient', lines:[
      'I smoke and I have high blood pressure and high cholesterol.',
      'My father had a heart attack in his 50s.'
    ]},
    {id:'history_medicines', label:'Past history and medicines', type:'patient', lines:[
      'I take blood-pressure tablets inconsistently and I take a cholesterol tablet.',
      'I have not had a heart attack before, I am not on a blood thinner and I have no known aspirin allergy.'
    ]},
    {id:'danger_checks', label:'Other danger checks', type:'patient', lines:[
      'No tearing pain to the back, focal weakness or speech trouble.',
      'No calf swelling, recent surgery, long flight, fever, productive cough or coughing blood.',
      'I tried an antacid and it did not help.'
    ]},
    {id:'observations', label:'Observations and examination', type:'examiner', lines:[
      'David looks pale, sweaty and uncomfortable.',
      'Pulse 104/min; blood pressure 155/92 mmHg; respiratory rate 22/min; oxygen saturation 95% on room air; temperature 36.8°C.',
      'Heart sounds are normal, chest is clear, and there are no clear signs of heart failure, calf swelling or focal neurological deficit.',
      'An ECG may be obtained if available, but must not delay ambulance transfer. Clinic blood tests are not available quickly enough to make this safe.'
    ]},
    {id:'ideas_concerns', label:'Ideas and concerns', type:'patient', lines:[
      'I thought it was indigestion, but I am worried because it is not settling.',
      'I have an important work meeting later.'
    ]},
    {id:'plan_response', label:'Response to your plan', type:'patient', requiresPlan:true, lines:[
      'An ambulance? Is it really that serious?',
      'Can I just drive myself? I have an important work meeting.',
      'Okay. Please tell my wife.'
    ]}
  ],
  keyLines: [
    'I understand why you thought it might be indigestion, but this pattern could be your heart.',
    'I am arranging an ambulance now while I continue a focused assessment.',
    'Please do not drive yourself because your condition could change suddenly.',
    'We should not wait here for clinic tests to prove it.'
  ],
  criticalActions: [
    'Recognise possible high-risk cardiac chest pain.',
    'Arrange ambulance transfer before diagnostic proof.',
    'Stop private driving and keep David resting.',
    'Do not delay transfer for clinic testing.',
    'Explain urgency calmly and prepare handover.'
  ],
  criticalMisses: [
    'Reassuring David that this is indigestion.',
    'Sending David home or allowing private driving.',
    'Waiting for clinic blood tests before transfer.',
    'Failing to arrange ambulance transfer for ongoing high-risk chest pain.'
  ],
  variations: [
    {id:'normal_ecg', title:'Normal early ECG', change:'The initial ECG is reported as normal.', unchanged:'A normal early ECG does not cancel the high-risk clinical pattern or justify transfer delay.'},
    {id:'antacid_improvement', title:'Pain improves after antacid', change:'David reports partial improvement after an antacid.', unchanged:'Symptom improvement is information, not proof of safety; urgent transfer remains appropriate when the danger pattern persists.'},
    {id:'ambulance_refusal', title:'Patient refuses ambulance', change:'David says he will not go by ambulance.', unchanged:'The danger threshold remains high. Explain the risk, check understanding, maintain the no-driving boundary and seek urgent support.'}
  ],
  repairDrills: [
    {id:'early_action', label:'Early action', seconds:45, cue:'Say the concern and ambulance action as soon as the danger threshold is crossed.'},
    {id:'no_driving', label:'No-private-driving explanation', seconds:45, cue:'Explain sudden deterioration risk and why monitored transport is safer.'},
    {id:'no_test_delay', label:'No-test-delay explanation', seconds:45, cue:'Explain why clinic tests cannot safely prove or exclude the danger here.'},
    {id:'recovery', label:'Recovery from the indigestion anchor', seconds:60, cue:'Name your initial thought, state what changed, and redirect to urgent transfer.'}
  ]
};

window.CP_CASE.reviewStages = [
  {id:'self_check', title:'Self-check', prompt:'Before seeing the safe version, identify what you actually did.', bullets:['Did you recognise possible heart danger?','Did you arrange ambulance transfer?','Did you stop private driving?','Did you avoid clinic-test delay?']},
  {id:'safety_mirror', title:'Safety mirror', prompt:'Compare your attempt with the decisive safety actions.', bullets:window.CP_CASE.criticalActions},
  {id:'what_changed', title:'What changed', prompt:'Track the update from a possible benign label to a high-risk pattern.', bullets:['Heavy central pressure','Exertional onset','Radiation to arm and jaw','Sweating, nausea and breathlessness','Cardiovascular risk factors']},
  {id:'safe_version', title:'Safe version', prompt:'Use these lines as a speakable minimum.', bullets:window.CP_CASE.keyLines},
  {id:'thinking_traps', title:'Thinking traps', prompt:'Name the mechanism without shame.', bullets:['Patient label becomes diagnosis','Question collection delays action','Ambulance feels too dramatic','Resistance weakens the safety boundary']},
  {id:'what_if_paths', title:'What-if paths', prompt:'Apply the same safety rule when one detail changes.', bullets:window.CP_CASE.variations.map(v=>`${v.title}: ${v.unchanged}`)},
  {id:'retry_decision', title:'Retry decision', prompt:'Choose the smallest practice step that fixes the remaining gap.', bullets:['Retry full station','Repeat one repair drill','Review the safe version','Move to a changed-detail attempt']}
];
window.CP_CASE.capabilities = [
  ['recognise','Recognises the high-risk pattern'],
  ['ambulance','States ambulance transfer'],
  ['driving','Stops private driving'],
  ['delay','Avoids clinic-test delay'],
  ['tasks','Completes all four tasks'],
  ['recovery','Recovers from the indigestion anchor']
];
window.CP_CASE.readinessBands = [
  ['not_started','Not started','No practice evidence yet.'],
  ['modelled','Modelled','The full model or key decisions have been reviewed.'],
  ['guided','Guided','A supported spoken run has been completed.'],
  ['independent','Independent','A timed cold attempt has been completed and reviewed.'],
  ['flexible','Flexible','At least two changed-detail attempts have been reviewed.'],
  ['retained','Retained','A delayed cold retry has been completed and reviewed.']
];

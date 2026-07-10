# Clinical Pathway V

Clinical Pathway is a focused, self-run clinical-station simulator for AMC Clinical preparation.

This repository currently contains the Case 001 reference implementation: **Chest discomfort after lunch**. It trains early recognition of high-risk chest pain, prompt ambulance transfer, prevention of private driving, focused assessment after escalation, staged review, variation practice, recovery from premature closure, and delayed retrieval.

## Run locally

```bash
python -m http.server 8000
```

Open `http://127.0.0.1:8000/`.

## Product constraints

- Speak aloud first, then reveal only the information requested.
- No speech recognition or automatic clinical scoring.
- No gamification, badges, streaks, XP, or confetti.
- Diagnosis and feedback remain hidden until the station is finished.
- Case 002 remains unavailable.

## Status

Case 001 is an executable reference build for self-reviewed practice. It is not AMC-endorsed, an examiner-verified score, a clinical certification, or an exam guarantee.

# Clinical Pathway V

Clinical Pathway is a low-distraction, self-run clinical station practice prototype.

This repository currently contains the Case 001 reference build: **Chest discomfort after lunch**.

## Run locally

No build step or package installation is required.

1. Clone the repository.
2. Open `index.html` in a modern browser, or serve the directory with a static server.

Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Case 001 workflow

- Home: next useful move
- Library: model, key decisions, guided run, cue-only run, timed run, variations, and delayed retry
- Station: two-minute reading phase and eight-minute assessment phase
- Review: seven-stage Deep Review and a Fast Review for repeat attempts
- Journey: practice evidence, variation coverage, attempt history, and next action

## Product boundaries

The prototype:

- stores progress locally in the browser
- does not use a microphone
- does not recognise or automatically score speech
- does not use gamification
- does not provide clinical certification or predict examination outcome
- is not AMC-endorsed
- keeps Case 002 unavailable

Human clinical review, accessibility review, and production deployment review remain required before release.

# Wallace Tower Assault

Interactive final-mission command board for the New Genesis campaign.

## Run it

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## What is included

- Drag-and-drop force assignment on desktop.
- Tap a force, then tap a mission on mobile.
- Situation-specific +1 to +4 bonuses for each force.
- Four assault operations in sequence.
- Manual d20 total entry.
- Cascading results: earlier operations modify later mission difficulty.
- Six result bands from Catastrophic Failure to Exceptional Success.
- Narrative consequences and final battle conditions.
- Editable team, mission and result data in `src/data.js`.
- Responsive layout for desktop and mobile.

## Adding a new team

Add another object to `teams` in `src/data.js`. Give it a unique `id`, display information, and a bonus for every mission id.

## Adding a new mission

1. Add the mission to `missions` in `src/data.js`.
2. Add that mission id to every team's `bonuses` object.
3. Add six result entries for the mission in `results`.
4. If the mission has a special icon or custom cascading modifier, add that hook in `App.jsx`.

The project is intentionally data-driven so most future campaign changes can be made in one file.

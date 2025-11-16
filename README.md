# Two-player Buzzer Quiz (static)

Simple browser-based quiz app for two players. Shows questions one word at a time. Either player can buzz in and type an answer. After a short delay, the correct answer is shown and the host marks the response correct or incorrect. Scores are tracked.

How to use

- Open `index.html` in a browser (double-click or serve with a static server).
- Controls:
  - Start / Next question: Space or click "Start Next"
  - Reveal correct answer manually: R or click "Reveal Answer"
  - Player 1 buzzer: F or click Player 1 Buzz
  - Player 2 buzzer: J or click Player 2 Buzz

Flow

1. Click Start Next (or press Space) — the question displays one word at a time.
2. Either player can buzz (F / J or click). When a player buzzes the reveal pauses and an input appears.
3. Host or player types the answer and clicks Submit. After the configured delay the correct answer is shown.
4. Host clicks Correct / Incorrect / Deduct to update scores and move to next question.

Configuration

- `Word Delay (ms)` — time between showing words (default 500ms).
- `Auto-reveal answer after submit (ms)` — delay between submit and showing correct answer.

Customization

Edit `app.js` and modify the `questions` array to add your own questions. Each entry is { q: "question text", a: "answer" }.

License: MIT

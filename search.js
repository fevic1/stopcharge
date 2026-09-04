(function () {
  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[*_./-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function looksApple(q) {
    return /itunes|apple\.com\/bill|app store|apple bill/.test(q) ||
      q.indexOf("apple com bill") !== -1 ||
      q.indexOf("itunes com") !== -1;
  }

  function looksPlay(q) {
    return /google play|googleplay|playstore|google \*/.test(q) ||
      q.indexOf("google temporary") !== -1;
  }

  function cardText(card) {
    return norm(
      (card.getAttribute("data-name") || "") + " " +
      (card.getAttribute("data-aliases") || "") + " " +
      (card.textContent || "")
    );
  }

  function matchCard(card, q, qn) {
    if (!qn) return true;
    var hay = cardText(card);
    if (hay.indexOf(qn) !== -1) return true;
    var parts = qn.split(" ");
    if (parts.length > 1 && parts.every(function (p) { return p.length > 1 && hay.indexOf(p) !== -1; })) {
      return true;
    }
    var billed = card.getAttribute("data-billed") || "";
    if (looksApple(q) && billed === "apple") return true;
    if (looksPlay(q) && billed === "play") return true;
    return false;
  }

  function applyFilter(input, grid, empty, hint) {
    if (!input || !grid) return;
    var q = input.value;
    var qn = norm(q);
    var cards = grid.querySelectorAll("[data-name]");
    var shown = 0;
    cards.forEach(function (card) {
      var ok = matchCard(card, q.toLowerCase(), qn);
      card.hidden = !ok;
      if (ok) shown += 1;
    });
    if (empty) empty.hidden = cards.length === 0 || shown !== 0;
    if (hint) {
      if (looksApple(q.toLowerCase())) {
        hint.hidden = false;
        hint.textContent = "That line often means Apple billed the plan. Cancel in Settings or Apple subscriptions, not inside the app.";
      } else if (looksPlay(q.toLowerCase())) {
        hint.hidden = false;
        hint.textContent = "That line often means Google Play billed the plan. Cancel in Play subscriptions, not inside the app.";
      } else {
        hint.hidden = true;
        hint.textContent = "";
      }
    }
  }

  function boot() {
    var input = document.getElementById("exit-search");
    var grid = document.getElementById("exit-grid");
    if (!input || !grid) return;
    var empty = document.getElementById("exit-empty");
    var hint = document.getElementById("exit-hint");

    function run() {
      applyFilter(input, grid, empty, hint);
    }

    input.addEventListener("input", run);
    input.addEventListener("search", run);
    run();

    if (window.MutationObserver) {
      new MutationObserver(run).observe(grid, { childList: true, subtree: false });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

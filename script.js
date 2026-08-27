(function () {
  document.querySelectorAll(".dots").forEach((row) => {
    const filled = Number(row.dataset.filled || 0);
    for (let i = 0; i < 6; i += 1) {
      const dot = document.createElement("span");
      if (i < filled) dot.classList.add("on");
      row.appendChild(dot);
    }
  });
})();

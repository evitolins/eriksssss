function generateTOC(
  containerSelector,
  tocSelector,
  includeTags = ["h1", "h2", "h3", "h4", "h5", "h6"]
) {
  const container = document.querySelector(containerSelector);
  const toc = document.querySelector(tocSelector);
  if (!container || !toc) return;

  const headers = container.querySelectorAll(includeTags.join(","));

  let root = document.createElement("div");
  let stack = [{ level: 0, element: root }];

  root.id = "toc";

  const lowestLevel = parseInt(includeTags[includeTags.length - 1][1]);

  headers.forEach((header) => {
    if (!header.checkVisibility()) return;

    const level = parseInt(header.tagName[1]);
    if (!header.id) {
      header.id = header.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    }

    const link = document.createElement("a");
    link.textContent = header.textContent;
    link.href = "#" + header.id;
    link.addEventListener("click", (e) => {
      e.preventDefault();
      header.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const details = document.createElement("details");
    const summary = document.createElement("summary");

    if (level === lowestLevel) {
      console.log("lowest");
      summary.style.listStyle = "none";
    }

    summary.appendChild(link);
    details.appendChild(summary);

    // adjust nesting
    while (stack.length > 1 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }
    stack[stack.length - 1].element.appendChild(details);

    stack.push({ level, element: details });
  });

  toc.appendChild(root);
}

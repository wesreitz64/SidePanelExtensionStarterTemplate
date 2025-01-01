if (!document.getElementById("sidePanel")) {
    const panel = document.createElement("div");
    panel.id = "sidePanel";
    panel.innerHTML = `
      <div class="drawer">
        <button class="toggle-btn" id="closePanel">Close</button>
        <div class="header">
          <h1>Side Panel</h1>
        </div>
        <div class="content">
          <p>Welcome to your sliding side panel!</p>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  
    const drawer = document.querySelector(".drawer");
    const closeButton = document.getElementById("closePanel");
  
    drawer.style.right = "-300px"; // Initially hidden
  
    // Show the drawer
    setTimeout(() => {
      drawer.style.transition = "right 0.3s ease";
      drawer.style.right = "0";
    }, 100);
  
    closeButton.addEventListener("click", () => {
      drawer.style.right = "-300px";
      setTimeout(() => panel.remove(), 300); // Remove the panel after hiding
    });
  }
  
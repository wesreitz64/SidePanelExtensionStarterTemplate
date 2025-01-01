if (!document.getElementById("sidePanel")) {
    const panel = document.createElement("div");
    panel.id = "sidePanel";
    panel.innerHTML = `
      <div class="drawer" id="sideDrawer">
        <div class="header">
          <h1>Side Panel</h1>
        </div>
        <div class="content">
          <p>Welcome to your sliding side panel!</p>
        </div>
      </div>
      <button class="floating-btn" id="toggleDrawer">☰</button>
    `;
    document.body.appendChild(panel);
  
    const drawer = document.getElementById("sideDrawer");
    const toggleButton = document.getElementById("toggleDrawer");
  
    // Initially hidden
    drawer.style.right = "-300px";
  
    toggleButton.addEventListener("click", () => {
      if (drawer.style.right === "0px") {
        drawer.style.right = "-300px";
      } else {
        drawer.style.right = "0px";
      }
    });
  }
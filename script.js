// Documentation functionality
let fullMarkdown = '';
let currentSection = 'install';

async function loadDocumentation() {
  try {
    const response = await fetch('./docs/documentation.md');
    if (!response.ok) {
      throw new Error('Failed to load documentation');
    }
    fullMarkdown = await response.text();
    renderSection(currentSection);
  } catch (error) {
    console.error('Error loading documentation:', error);
    document.getElementById('docs-container').innerHTML = '<div class="error">Failed to load documentation. Please check the docs folder.</div>';
  }
}

function renderSection(section) {
  const container = document.getElementById('docs-container');
  container.innerHTML = '<div class="loading">Loading documentation...</div>';

  // Split the markdown by main sections
  const sections = fullMarkdown.split(/^## /m);

  let content = '';
  if (section === 'install') {
    // Find installation guide section
    const installSection = sections.find(s => s.includes('Installation Guide'));
    if (installSection) {
      content = '## ' + installSection;
    }
  } else if (section === 'setup') {
    // Find post-install setup section
    const setupSection = sections.find(s => s.includes('Post-Install Setup'));
    if (setupSection) {
      content = '## ' + setupSection;
    }
  }

  if (content) {
    // Configure marked options for better rendering
    marked.setOptions({
      breaks: true,
      gfm: true
    });

    container.innerHTML = marked.parse(content);
  } else {
    container.innerHTML = '<div class="error">Section not found.</div>';
  }
}

function setupDocsNavigation() {
  const navButtons = document.querySelectorAll('.docs-nav-btn');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      navButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      button.classList.add('active');

      // Update current section and render
      currentSection = button.dataset.section;
      renderSection(currentSection);
    });
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.getAttribute("data-open") === "true";
    menu.setAttribute("data-open", String(!isOpen));
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav")) {
      menu.setAttribute("data-open", "false");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Close menu on link click
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.setAttribute("data-open", "false");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Keyboard support: Close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.getAttribute("data-open") === "true") {
      menu.setAttribute("data-open", "false");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
}

// Initialize documentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadDocumentation();
  setupDocsNavigation();
});

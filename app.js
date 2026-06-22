const routes = {
  "/": {
    title: "Page Street Garden",
    render: () => `
      <section class="hero" aria-labelledby="home-title">
        <div class="hero-copy">
          <p class="eyebrow">Phase 0 landing page concept</p>
          <h1 id="home-title">Page Street Garden</h1>
          <p class="mission">A welcoming garden sanctuary where neighbors can grow food, learn together, rest in nature, and connect through accessible wellness programs.</p>
          <p class="positioning">Accessible community garden + wellness space</p>
          <div class="cta-row" aria-label="Primary actions">
            <a class="button" href="/contact" data-link>Visit the Garden</a>
            <a class="button warm" href="/volunteer" data-link>Volunteer</a>
            <a class="button secondary" href="/events" data-link>View Events</a>
          </div>
          <div class="kpis" aria-label="Impact teaser">
            ${kpi("128", "Volunteer Hours")}
            ${kpi("310", "Pounds Donated")}
            ${kpi("12", "Classes Hosted")}
          </div>
        </div>
        <div class="hero-media" aria-label="Garden photo area">
          <div class="photo-frame">
            <img src="/assets/raised-beds.png" alt="Accessible raised garden beds with wide paths and colorful fencing.">
            <span class="photo-label">Raised beds, wide routes, and room to gather</span>
          </div>
          <div class="photo-frame small-grid">
            <div class="photo-frame"><img src="/assets/garden-sign.png" alt="Page Street Garden mosaic sign with bright painted fence."></div>
            <div class="photo-frame"><img src="/assets/youth-planting.png" alt="Children and adults planting together during a garden activity."></div>
          </div>
        </div>
      </section>
      <section class="section alt">
        <div class="section-head">
          <div>
            <p class="eyebrow">Phase 1 preview</p>
            <h2>More than a garden</h2>
            <p>Program discovery, events, volunteer interest, public impact metrics, gallery storytelling, and accessibility guidance are all visible in the first website release.</p>
          </div>
          <a class="button secondary" href="/programs" data-link>Explore Programs</a>
        </div>
        <div class="grid">${programCards().slice(0,3).join("")}</div>
      </section>
    `
  },
  "/about": {
    title: "About | Page Street Garden",
    render: () => pageHero("About the Garden", "A community living room, accessible retreat, and learning space rooted in food justice, wellness, and neighborhood connection.", "/assets/garden-path.png", "Garden path and plantings beside brick buildings.") + `
      <section class="section">
        <div class="split">
          <div class="panel">
            <p class="eyebrow">Mission statement</p>
            <h2>Grow access, belonging, and care.</h2>
            <p>Page Street Garden gives neighbors a place to grow food, learn practical gardening skills, join wellness activities, and experience nature in a setting designed for different bodies, senses, and abilities.</p>
            <p>The Phase 1 site should make that identity obvious before a visitor clicks anything else.</p>
          </div>
          <div class="panel">
            <h3>Launch priorities</h3>
            <p>Confirm official address, publish accessible visit details, introduce partners, and collect volunteer interest without requiring a complex database.</p>
          </div>
        </div>
      </section>`
  },
  "/programs": {
    title: "Programs | Page Street Garden",
    render: () => pageHero("Programs and Services", "A public catalog that presents the garden as a place for gardening, learning, wellness, food support, and youth engagement.", "/assets/youth-planting.png", "Youth and adults planting in a raised garden bed.") + `
      <section class="section">
        <div class="section-head">
          <div>
            <p class="eyebrow">Services / Programs</p>
            <h2>Discovery, not just contact info</h2>
          </div>
        </div>
        <div class="grid">${programCards().join("")}</div>
      </section>`
  },
  "/events": {
    title: "Events | Page Street Garden",
    render: () => pageHero("Events and Spaces", "A calendar/list hybrid for upcoming garden, wellness, volunteer, and education programs, with accessibility notes visible before RSVP.", "/assets/raised-beds.png", "Accessible raised garden beds and garden pathways.") + `
      <section class="section">
        <div class="filter-row" aria-label="Event filters">
          ${["All", "Gardening", "Wellness", "Volunteer", "Education"].map((x, i) => `<button class="chip ${i === 0 ? "is-active" : ""}" type="button">${x}</button>`).join("")}
        </div>
        <div class="timeline">
          ${eventItem("Jun", "29", "Open Garden Morning", "Gardening", "Main beds and sensory path", "Wide-path route available; shaded seating near the entrance.")}
          ${eventItem("Jul", "06", "Gentle Yoga in the Garden", "Wellness", "Brick patio", "Chair-based options and quiet arrival space provided.")}
          ${eventItem("Jul", "13", "Volunteer Harvest Shift", "Volunteer", "Raised beds", "Tools available at varied grip sizes; no heavy lifting required.")}
          ${eventItem("Jul", "20", "Youth Garden Lab", "Education", "Learning beds", "Hands-on activity with step-by-step visual instructions.")}
        </div>
      </section>`
  },
  "/volunteer": {
    title: "Volunteer | Page Street Garden",
    render: () => pageHero("Volunteer and Impact", "A friendly bridge from Phase 1 public interest to Phase 2 operational tracking.", "/assets/garden-sign.png", "Bright Page Street Garden sign.") + `
      <section class="section">
        <div class="split">
          <form class="panel" aria-label="Volunteer interest form">
            <p class="eyebrow">Volunteer interest form</p>
            <h2>Join a garden day</h2>
            <div class="form-grid">
              <label>Name<input type="text" placeholder="Your name"></label>
              <label>Email<input type="email" placeholder="you@example.org"></label>
              <label>Interest<select><option>Gardening</option><option>Events</option><option>Wellness support</option><option>Youth education</option></select></label>
              <label>Availability<input type="text" placeholder="Weekends, evenings, flexible"></label>
              <label class="span-2">Access notes or questions<textarea placeholder="Share anything that would help make volunteering comfortable."></textarea></label>
            </div>
            <div class="cta-row">
              <button class="button" type="button">Send Interest</button>
              <button class="button secondary" type="button" aria-describedby="pilot-note">Log volunteer hours</button>
            </div>
            <p id="pilot-note" class="drawer-note">Hour logging is marked as a Phase 2 pilot in this mockup.</p>
          </form>
          <div class="panel">
            <p class="eyebrow">Public impact KPIs</p>
            <div class="kpis">
              ${kpi("128", "Volunteer hours this season")}
              ${kpi("420", "Lbs harvested")}
              ${kpi("310", "Lbs donated")}
            </div>
            <div class="kpis" style="grid-template-columns:1fr">
              ${kpi("12", "Wellness events hosted")}
            </div>
          </div>
        </div>
      </section>`
  },
  "/gallery": {
    title: "Gallery | Page Street Garden",
    render: () => pageHero("Garden Gallery", "Seasonal photos build emotional connection while captions and alt text keep the experience accessible.", "/assets/garden-path.png", "Garden plantings and colorful fence tips.") + `
      <section class="section">
        <div class="gallery-grid">
          ${figure("/assets/raised-beds.png", "Accessible raised beds", "Raised beds and wide paths support more ways to garden.")}
          ${figure("/assets/garden-sign.png", "Garden identity", "The Page Street Garden sign creates an immediate place signal.")}
          ${figure("/assets/youth-planting.png", "Learning together", "Children and adults learn by planting side by side.")}
          ${figure("/assets/garden-path.png", "Seasonal plantings", "A quiet path gives visitors a sensory preview of the space.")}
        </div>
      </section>`
  },
  "/contact": {
    title: "Contact | Page Street Garden",
    render: () => pageHero("Visit, Ask, or Support", "A practical contact page for visit questions, accommodations, volunteering, and partnership interest.", "/assets/garden-sign.png", "Page Street Garden sign.") + `
      <section class="section">
        <div class="split">
          <form class="panel" aria-label="Contact form">
            <p class="eyebrow">Contact form</p>
            <h2>How can the garden help?</h2>
            <div class="form-grid">
              <label>Name<input type="text"></label>
              <label>Email<input type="email"></label>
              <label class="span-2">Reason<select><option>Plan a visit</option><option>Volunteer</option><option>Accessibility accommodation</option><option>Partner or sponsor</option></select></label>
              <label class="span-2">Message<textarea></textarea></label>
            </div>
            <div class="cta-row"><button class="button" type="button">Send Message</button></div>
          </form>
          <div class="panel">
            <h3>Before launch</h3>
            <p>The roadmap notes public address ambiguity. This page should use only client-confirmed address, map pin, email, and phone details before publishing.</p>
            <a class="button secondary" href="/accessibility" data-link>Request accommodations</a>
          </div>
        </div>
      </section>`
  },
  "/accessibility": {
    title: "Accessibility | Page Street Garden",
    render: () => pageHero("Accessibility Experience", "The site models the garden's identity: readable text, visible controls, clear visit notes, and support for different access needs.", "/assets/raised-beds.png", "Accessible garden beds and wide paths.") + `
      <section class="section">
        <div class="split">
          <div class="panel">
            <p class="eyebrow">Digital access</p>
            <h2>Controls are visible, not hidden.</h2>
            <p>Visitors can resize text, switch between light, dark, and high contrast themes, open an accessibility options drawer, and use a read-aloud action for page content.</p>
            <p>Keyboard users get a clear gold focus indicator throughout the experience.</p>
            <div class="cta-row"><button class="button" type="button" data-open-access>Open accessibility options</button></div>
          </div>
          <div class="panel">
            <p class="eyebrow">Garden access notes</p>
            <h3>Phase 1 content placeholder</h3>
            <p>Confirmed details should include raised beds, routes, seating, sensory considerations, nearby transit/parking, and who to contact for accommodations.</p>
          </div>
        </div>
      </section>`
  }
};

function kpi(value, label) {
  return `<div class="kpi-card"><strong>${value}</strong><span>${label}</span></div>`;
}

function programCards() {
  return [
    card("Community Gardening", "Shared garden plots, seasonal growing support, and neighbor-led stewardship days.", "Food + belonging"),
    card("Accessible Raised Beds", "Raised beds, wide routes, adaptive tools, seating, and visible access information.", "Access first"),
    card("Yoga and Wellness", "Gentle outdoor wellness events that connect movement, breath, and rest in nature.", "Wellness"),
    card("Classes and Workshops", "Hands-on learning for gardening, plants, food systems, and seasonal care.", "Learning"),
    card("Food Donation", "Harvest tracking and donation storytelling that supports grant-ready impact reporting.", "Food impact"),
    card("Youth Education", "Field trips, garden labs, and community education for young learners and families.", "Youth")
  ];
}

function card(title, copy, tag) {
  return `<article class="card"><span class="tag">${tag}</span><h3>${title}</h3><p>${copy}</p><a href="/contact" data-link>Ask about this program</a></article>`;
}

function pageHero(title, copy, image, alt) {
  return `<section class="page-hero"><div><p class="eyebrow">Page Street Garden</p><h1>${title}</h1><p>${copy}</p></div><div class="photo-frame"><img src="${image}" alt="${alt}"></div></section>`;
}

function eventItem(month, day, title, tag, place, access) {
  return `<article class="timeline-item">
    <div class="date-box"><span>${month}</span><span>${day}</span></div>
    <div>
      <span class="event-tag">${tag}</span>
      <h3>${title}</h3>
      <p><strong>Space:</strong> ${place}</p>
      <p><strong>Accessibility:</strong> ${access}</p>
    </div>
    <a class="button secondary" href="/contact" data-link>Learn More</a>
  </article>`;
}

function figure(src, alt, caption) {
  return `<figure><img src="${src}" alt="${alt}"><figcaption>${caption}</figcaption></figure>`;
}

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
}

function navigate(path, push = true) {
  path = normalizePath(path);
  const route = routes[path] || routes["/"];
  document.title = route.title;
  document.querySelector("#main").innerHTML = route.render();
  document.querySelectorAll("[data-link]").forEach(link => {
    const current = normalizePath(new URL(link.href).pathname) === path;
    if (current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
  if (push) history.pushState({}, "", path);
  document.querySelector("#main").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
  if (path === "/accessibility") openDrawer();
}

document.addEventListener("click", event => {
  const link = event.target.closest("[data-link]");
  if (link) {
    event.preventDefault();
    navigate(new URL(link.href).pathname);
  }

  const themeButton = event.target.closest("[data-theme]");
  if (themeButton) setTheme(themeButton.dataset.theme);

  const sizeButton = event.target.closest("[data-size]");
  if (sizeButton) setTextSize(sizeButton.dataset.size);

  if (event.target.closest("[data-open-access]")) openDrawer();
  if (event.target.closest("[data-close-access]")) closeDrawer();
  if (event.target.closest("[data-read]")) readPage();
});

document.addEventListener("change", event => {
  if (event.target.name === "theme") setTheme(event.target.value);
});

window.addEventListener("popstate", () => navigate(location.pathname, false));

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelectorAll(`input[name="theme"]`).forEach(input => {
    input.checked = input.value === theme;
  });
}

let textStep = 0;
function setTextSize(action) {
  if (action === "reset") textStep = 0;
  if (action === "plus") textStep = Math.min(3, textStep + 1);
  if (action === "minus") textStep = Math.max(-1, textStep - 1);
  document.documentElement.style.setProperty("--font-scale", String(1 + textStep * .12));
}

function openDrawer() {
  const drawer = document.querySelector("#accessDrawer");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
}

function closeDrawer() {
  const drawer = document.querySelector("#accessDrawer");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}

function readPage() {
  const text = document.querySelector("#main").innerText.replace(/\s+/g, " ").trim();
  if ("speechSynthesis" in window && text) {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text.slice(0, 900)));
  }
}

navigate(location.pathname, false);

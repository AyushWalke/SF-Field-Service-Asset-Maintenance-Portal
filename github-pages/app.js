
const D=window.FSAM_DATA;const A=document.getElementById('app');

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const nav = [
  ["overview", "Overview"],
  ["architecture", "Architecture"],
  ["data-model", "Data Model"],
  ["components", "Components"],
  ["apex", "Apex"],
  ["lwc", "LWC"],
  ["automation", "Automation"],
  ["integration", "Integration"],
  ["security", "Security"],
  ["quality", "Quality & Risks"],
  ["interview", "Interview Prep"],
  ["source", "Source & Deployment"],
];

function layout(page) {
  A.innerHTML = `
    <div class="shell">
      <aside class="sidebar">
        <div class="brand">
          <div class="logo">SF</div>

          <div>
            <h1>FSAM Portfolio</h1>
            <p>Salesforce project showcase</p>
          </div>
        </div>

        <nav class="nav">
          ${nav
            .map(
              ([id, label]) =>
                `<a href="#${id}" class="${page === id ? "active" : ""}">
                  ${label}
                </a>`
            )
            .join("")}
        </nav>

        <div class="footer">
          Generated from the uploaded FSAM repository.<br />
          Version ${esc(D.project.version)} · API ${esc(D.project.apiVersion)}
        </div>
      </aside>

      <main class="main">
        <div class="topbar">
          <span class="small muted">
            Field Service Asset Maintenance Portal
          </span>

          <input
            id="search"
            class="search"
            placeholder="Search classes, LWCs, objects, flows…"
            autocomplete="off"
          />
        </div>

        <div id="results" class="search-results"></div>

        <div class="content">
          ${pageHtml(page)}
        </div>
      </main>
    </div>
  `;

  bindSearch();
}

function pageHtml(p) {
  switch (p) {
    case "architecture":
      return architecture();

    case "data-model":
      return dataModel();

    case "components":
      return components();

    case "apex":
      return apex();

    case "lwc":
      return lwc();

    case "automation":
      return automation();

    case "integration":
      return integration();

    case "security":
      return security();

    case "quality":
      return quality();

    case "interview":
      return interview();

    case "source":
      return source();

    default:
      return overview();
  }
}

function hero(title, sub) {
  return `
    <section class="hero">
      <div class="eyebrow">FSAM · Salesforce DX portfolio</div>

      <h2>${title}</h2>

      <p>${sub}</p>
    </section>
  `;
}

function overview() {
  return (
    hero(
      "Field Service Asset Maintenance Portal",
      "A portfolio-grade view of the uploaded Salesforce DX project: its business model, layered Apex architecture, Lightning UI, Flow automation, integration design, security posture, testing approach and interview talking points."
    ) +
    `
      <div class="grid stats">
        ${[
          ["files", "Files"],
          ["apexClasses", "Apex classes"],
          ["triggers", "Triggers"],
          ["lwcs", "LWCs"],
          ["objects", "Custom objects"],
          ["flows", "Record-triggered flows"],
        ]
          .map(
            ([k, l]) => `
              <div class="card stat">
                <div class="num">${D.counts[k]}</div>
                <div class="label">${l}</div>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="hero-grid">
        <div class="card">
          <h3>What the application does</h3>

          <p class="muted">
            FSAM manages customer-owned assets, service requests, maintenance
            visits, engineer assignments, spare-parts inventory and maintenance
            history. The repository combines LWC, Apex, Flow, Salesforce
            metadata and a manufacturer REST integration.
          </p>

          <div class="pill-row">
            <span class="tag">Salesforce DX</span>
            <span class="tag">Apex Enterprise Patterns</span>
            <span class="tag">LWC</span>
            <span class="tag">Flow</span>
            <span class="tag">REST</span>
            <span class="tag">Named Credential</span>
          </div>
        </div>

        <div class="card">
          <h3>Project reality check</h3>

          <div class="callout warn">
            Version 1 contains intentional mock/static DTO data in several
            workspace controllers. The strongest fully connected backend path
            is Inventory Flow → Invocable Apex → Service → Selector.
          </div>

          <p class="small muted">
            Use this distinction in interviews instead of overstating what is
            currently live.
          </p>
        </div>
      </div>

      <section class="section">
        <h3>Architecture at a glance</h3>

        <div class="card">
          <div class="diagram">
            <div class="node">Lightning Web Components</div>
            <div class="arrow">→</div>
            <div class="node">Apex Controllers</div>
            <div class="arrow">→</div>
            <div class="node">Service Layer</div>
            <div class="arrow">→</div>
            <div class="node">Selector Layer</div>
            <div class="arrow">→</div>
            <div class="node">Salesforce Data</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>Confirmed project facts</h3>

        <div class="grid two">
          ${D.facts
            .map(
              (x) => `
                <div class="card small">
                  ✓ ${esc(x)}
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    `
  );
}

function architecture() {
  return (
    hero(
      "Layered Salesforce architecture",
      "The repository is organized around thin controllers, service classes for business operations, selectors for SOQL, DTOs for UI contracts, trigger handlers, Flow automation and an integration service."
    ) +
    `
      <div class="card">
        <div class="diagram">
          <div class="node">User</div>
          <div class="arrow">↓</div>

          <div class="node">LWC</div>
          <div class="arrow">↓</div>

          <div class="node">Apex Controller</div>
          <div class="arrow">↓</div>

          <div class="node">Service Layer</div>
          <div class="arrow">↓</div>

          <div class="node">Selector Layer</div>
          <div class="arrow">↓</div>

          <div class="node">Custom Objects</div>
        </div>
      </div>

      <div class="grid two section">
        <div class="card">
          <h3>Business logic</h3>

          <p class="muted">
            Controllers expose AuraEnabled methods. Services own operations
            such as inventory reduction and maintenance visit processing.
            Selectors centralize SOQL. Trigger handlers extend a common
            trigger framework.
          </p>
        </div>

        <div class="card">
          <h3>Automation</h3>

          <p class="muted">
            Six record-triggered flows handle status, SLA, assignment,
            inventory and maintenance-visit automation. The inventory flow
            can invoke Apex for reusable server-side logic.
          </p>
        </div>

        <div class="card">
          <h3>UI</h3>

          <p class="muted">
            Twenty-eight LWCs are split into feature workspaces and shared
            primitives such as search, pagination, status badges, spinners,
            error panels and toast behavior.
          </p>
        </div>

        <div class="card">
          <h3>Integration</h3>

          <p class="muted">
            FSAM_ManufacturerIntegrationService calls a Named Credential
            endpoint and deserializes JSON into a response DTO. Callout
            mocks cover success, invalid JSON and error paths.
          </p>
        </div>
      </div>

      <section class="section">
        <h3>Interview framing</h3>

        <div class="callout">
          “I kept controllers thin, moved business operations into services,
          centralized SOQL in selectors, and used Flow where the requirement
          was declarative. That separation makes the code easier to test and
          change.”
        </div>
      </section>
    `
  );
}

function dataModel() {
  return (
    hero(
      "Data model",
      "Six custom objects form the operational model. Master-detail relationships are used where child lifecycle/reporting depends strongly on the parent; lookups connect reusable/reference entities such as Account, User and Service Part."
    ) +
    `
      <div class="card">
        <div class="diagram">
          <div class="node">FSAM Customer Asset</div>
          <div class="arrow">↓</div>

          <div class="node">FSAM Service Request</div>
          <div class="arrow">↓</div>

          <div class="node">Maintenance Visit</div>
          <div class="arrow">↘</div>

          <div class="node">Part Replacement</div>
          <div class="arrow">↘</div>

          <div class="node">Engineer Assignment</div>
          <div class="arrow">↔</div>

          <div class="node">Service Part</div>
        </div>
      </div>

      <section class="section">
        <h3>Relationships detected from metadata</h3>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>From</th>
                <th>Field</th>
                <th>Type</th>
                <th>To</th>
              </tr>
            </thead>

            <tbody>
              ${D.relationships
                .map(
                  (r) => `
                    <tr>
                      <td>${esc(r.from)}</td>
                      <td>${esc(r.field)}</td>
                      <td>
                        <span
                          class="tag ${r.type === "MasterDetail" ? "good" : ""}"
                        >
                          ${esc(r.type)}
                        </span>
                      </td>
                      <td>${esc(r.to)}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="section">
        <h3>Object inventory</h3>

        <div class="grid two">
          ${D.objects
            .map(
              (o) => `
                <div class="card">
                  <h3>${esc(o.name)}</h3>

                  <p class="small muted">
                    ${o.fieldCount} custom fields detected.
                  </p>

                  <div class="pill-row">
                    ${o.fields
                      .slice(0, 18)
                      .map(
                        (f) =>
                          `<span class="tag">${esc(f.name)}</span>`
                      )
                      .join("")}
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <div class="callout warn section">
        <strong>Metadata detail to remember:</strong>
        FSAM_Customer_Asset__c.FSAM_Service_Contact__c is labelled
        “Service Contact” but its referenceTo is <strong>Contract</strong>,
        not Contact.
      </div>
    `
  );
}

function components() {
  return (
    hero(
      "Complete component inventory",
      "Browse the major Salesforce metadata categories discovered in the uploaded repository."
    ) +
    `
      <div class="grid stats">
        ${Object.entries(D.counts)
          .map(
            ([k, v]) => `
              <div class="card stat">
                <div class="num">${v}</div>
                <div class="label">${esc(k)}</div>
              </div>
            `
          )
          .join("")}
      </div>

      <section class="section">
        <h3>Apex classes</h3>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Path</th>
                <th>Methods</th>
              </tr>
            </thead>

            <tbody>
              ${D.classes
                .map(
                  (c) => `
                    <tr>
                      <td>${esc(c.name)}</td>

                      <td>
                        <span class="tag">
                          ${esc(c.kind)}
                        </span>
                      </td>

                      <td class="small muted">
                        ${esc(c.path)}
                      </td>

                      <td class="small">
                        ${esc(c.methods.join(", ")) || "—"}
                      </td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="section">
        <h3>Triggers</h3>

        <div class="table-wrap">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Definition</th>
                <th>Handler</th>
              </tr>
            </thead>

            <tbody>
              ${D.triggers
                .map(
                  (t) => `
                    <tr>
                      <td>${esc(t.name)}</td>

                      <td class="small">
                        ${esc(t.definition)}
                      </td>

                      <td>
                        Trigger handler framework
                      </td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>
    `
  );
}

function apex() {
  return (
    hero(
      "Apex deep dive",
      "The most interview-relevant Apex story is the layered design plus the inventory and integration implementations."
    ) +
    `
      <section class="section">
        <h3>Key classes</h3>

        <div class="grid two">
          ${D.classes
            .filter((c) =>
              [
                "Controller",
                "Service / Integration",
                "Selector",
                "Trigger Handler",
                "Callout Mock",
                "Test Data Factory",
                "Utility",
              ].some((k) => c.kind.includes(k))
            )
            .slice(0, 30)
            .map(
              (c) => `
                <div class="card">
                  <h3>${esc(c.name)}</h3>

                  <span class="tag">
                    ${esc(c.kind)}
                  </span>

                  <p class="small muted">
                    ${esc(c.path)}
                  </p>

                  ${
                    c.methods.length
                      ? `
                        <p class="small">
                          <strong>Methods:</strong>
                          ${esc(c.methods.join(", "))}
                        </p>
                      `
                      : ""
                  }
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <h3>Inventory path</h3>

        <div class="card">
          <div class="diagram">
            <div class="node">Record-triggered Flow</div>
            <div class="arrow">→</div>

            <div class="node">FSAM_InventoryInvocable</div>
            <div class="arrow">→</div>

            <div class="node">FSAM_InventoryService</div>
            <div class="arrow">→</div>

            <div class="node">FSAM_ServicePartSelector</div>
            <div class="arrow">→</div>

            <div class="node">FSAM_Service_Part__c</div>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>Important code</h3>

        ${D.snippets
          .filter(
            (s) =>
              s.path.includes("InventoryService.cls") ||
              s.path.includes("InventoryInvocable")
          )
          .map(
            (s) => `
              <div class="card">
                <p class="small muted">
                  ${esc(s.path)}
                </p>

                <div class="code">
                  <pre>${esc(s.content)}</pre>
                </div>
              </div>
            `
          )
          .join("")}
      </section>
    `
  );
}

function lwc() {
  return (
    hero(
      "Lightning Web Components",
      "Twenty-eight LWCs form feature workspaces plus reusable UI primitives. The key interview theme is component composition and Apex data retrieval."
    ) +
    `
      <div class="grid three">
        ${D.lwcs
          .map(
            (x) => `
              <div class="card">
                <h3>${esc(x.name)}</h3>

                <div class="pill-row">
                  ${x.files
                    .map(
                      (f) => `
                        <span class="tag">
                          ${esc(f)}
                        </span>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      <section class="section">
        <h3>Important frontend contracts</h3>

        <div class="grid two">
          <div class="card">
            <h3>Inventory Workspace</h3>

            <p class="muted">
              Uses @wire to call
              FSAM_InventoryController.getInventoryWorkspace(), then filters
              returned inventory items client-side.
            </p>
          </div>

          <div class="card">
            <h3>Dashboard</h3>

            <p class="muted">
              Uses connectedCallback() and imperative Apex to load the
              dashboard, with try/catch/finally for error and loading state.
            </p>
          </div>
        </div>
      </section>

      <div class="callout danger section">
        <strong>Known bug:</strong>
        fsamSearchBar emits <code>detail.value</code>, while
        fsamInventoryWorkspace reads <code>event.detail.searchTerm</code>.
        This event contract should be aligned before a production demo.
      </div>

      <section class="section">
        <h3>Code samples</h3>

        ${D.snippets
          .filter((s) => s.path.includes("/lwc/"))
          .map(
            (s) => `
              <div class="card">
                <p class="small muted">
                  ${esc(s.path)}
                </p>

                <div class="code">
                  <pre>${esc(s.content)}</pre>
                </div>
              </div>
            `
          )
          .join("")}
      </section>
    `
  );
}

function automation() {
  return (
    hero(
      "Flow & automation",
      "Six record-triggered flows are present. Declarative automation handles status, SLA, assignment, inventory and maintenance visit lifecycle events."
    ) +
    `
      <div class="grid two">
        ${D.flows
          .map(
            (f) => `
              <div class="card">
                <h3>${esc(f.label)}</h3>

                <span class="tag">
                  ${esc(f.processType)}
                </span>

                <span class="tag">
                  ${esc(f.triggerType)}
                </span>

                <p class="small muted">
                  ${esc(f.name)}
                </p>
              </div>
            `
          )
          .join("")}
      </div>

      <section class="section">
        <h3>Inventory automation</h3>

        <div class="card">
          <div class="diagram">
            <div class="node">Part Replacement / Flow</div>
            <div class="arrow">→</div>

            <div class="node">Invocable Apex</div>
            <div class="arrow">→</div>

            <div class="node">Inventory Service</div>
            <div class="arrow">→</div>

            <div class="node">Update Service Part</div>
          </div>
        </div>
      </section>
    `
  );
}

function integration() {
  return (
    hero(
      "Manufacturer REST integration",
      "The repository contains a real integration service shape: Named Credential endpoint, HTTP GET, timeout, status validation, JSON deserialization, custom integration exception and callout mocks."
    ) +
    `
      <div class="grid two">
        <div class="card">
          <h3>Runtime path</h3>

          <div class="diagram">
            <div class="node">Apex</div>
            <div class="arrow">→</div>

            <div class="node">Named Credential</div>
            <div class="arrow">→</div>

            <div class="node">Manufacturer API</div>
            <div class="arrow">→</div>

            <div class="node">JSON DTO</div>
          </div>
        </div>

        <div class="card">
          <h3>Configuration</h3>

          <p class="muted">
            Named Credential and External Credential metadata are present.
            Authentication details are kept out of the Apex endpoint itself.
          </p>
        </div>
      </div>

      <section class="section">
        <h3>Error paths</h3>

        <div class="grid three">
          <div class="card">
            <span class="tag danger">Connection</span>

            <p class="small">
              Throws FSAM_IntegrationException when http.send() fails.
            </p>
          </div>

          <div class="card">
            <span class="tag warn">HTTP status</span>

            <p class="small">
              Non-200 responses become an integration exception.
            </p>
          </div>

          <div class="card">
            <span class="tag warn">JSON parsing</span>

            <p class="small">
              Malformed response becomes an integration exception.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>Test strategy</h3>

        <p class="muted">
          FSAM_ManufacturerCalloutMock returns a 200 JSON response;
          additional mocks cover invalid JSON and manufacturer errors.
        </p>
      </section>

      <section class="section">
        <h3>Implementation</h3>

        ${D.snippets
          .filter((s) =>
            s.path.includes("ManufacturerIntegrationService.cls")
          )
          .map(
            (s) => `
              <div class="code">
                <pre>${esc(s.content)}</pre>
              </div>
            `
          )
          .join("")}
      </section>
    `
  );
}

function security() {
  return (
    hero(
      "Security posture",
      "The project documents private OWD for Customer Asset and Service Request, parent-controlled Maintenance Visit access, Permission Sets, with sharing, CRUD/FLS utilities and stripInaccessible."
    ) +
    `
      <div class="grid two">
        <div class="card">
          <h3>Record-level security</h3>

          <p class="muted">
            Several application classes use <code>with sharing</code>.
            This respects the running user's sharing rules but does not
            itself enforce object CRUD or field-level security.
          </p>
        </div>

        <div class="card">
          <h3>Metadata security</h3>

          <p class="muted">
            Permission Sets, Permission Set Groups and Profiles are present.
            The repository also includes a security utility and security
            documentation.
          </p>
        </div>
      </div>

      <section class="section">
        <h3>Interview distinction</h3>

        <div class="callout">
          CRUD = whether the user can perform an operation on an object.
          FLS = whether the user can access a field. Sharing = which records
          the user can access. <code>with sharing</code> primarily addresses
          record-level sharing, not CRUD/FLS.
        </div>
      </section>

      <section class="section">
        <h3>Recommended hardening</h3>

        <div class="grid two">
          <div class="card">
            Apply consistent CRUD/FLS enforcement at service boundaries using
            user-mode operations or stripInaccessible where appropriate.
          </div>

          <div class="card">
            Review every AuraEnabled entry point and every selector for the
            intended sharing and field-access model.
          </div>
        </div>
      </section>
    `
  );
}

function quality() {
  return (
    hero(
      "Code quality, governor limits & risks",
      "A senior interview should cover both what is well designed and what you would improve."
    ) +
    `
      <div class="grid two">
        ${D.risks
          .map(
            (r) => `
              <div class="card">
                <span class="tag ${r.severity === "High" ? "danger" : "warn"}">
                  ${esc(r.severity)}
                </span>

                <h3>${esc(r.title)}</h3>

                <p class="muted">
                  ${esc(r.detail)}
                </p>
              </div>
            `
          )
          .join("")}
      </div>

      <section class="section">
        <h3>Governor-limit checklist</h3>

        <div class="grid three">
          <div class="card">
            <h3>SOQL</h3>

            <p class="small muted">
              Selectors centralize queries; avoid query-in-loop patterns when
              extending services.
            </p>
          </div>

          <div class="card">
            <h3>DML</h3>

            <p class="small muted">
              InventoryService updates the collected parts list once, which
              is bulk-friendly.
            </p>
          </div>

          <div class="card">
            <h3>Async / callout</h3>

            <p class="small muted">
              The manufacturer service performs a synchronous callout; if
              invoked from trigger-driven work, move the callout to Queueable
              or another async boundary.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>Trigger quality</h3>

        ${D.snippets
          .filter(
            (s) =>
              s.path.endsWith(".trigger") ||
              s.path.includes("TriggerHandler.cls")
          )
          .map(
            (s) => `
              <div class="card">
                <p class="small muted">
                  ${esc(s.path)}
                </p>

                <div class="code">
                  <pre>${esc(s.content)}</pre>
                </div>
              </div>
            `
          )
          .join("")}
      </section>
    `
  );
}

function interview() {
  return (
    hero(
      "Interview prep dashboard",
      "Use the portfolio to tell the truth about the implementation, then show that you understand the trade-offs and how you would productionize Version 1."
    ) +
    `
      <section class="section">
        <h3>20 questions to master</h3>

        <div class="grid two">
          ${[
            "Walk me through the FSAM architecture.",
            "Why did you use a service and selector layer?",
            "Which parts of the application are actually querying Salesforce data?",
            "Explain the Inventory Flow → Invocable → Service path.",
            "Why is the inventory service bulk-safe?",
            "What is the duplicate-input problem in FSAM_InventoryInvocable?",
            "How would you prevent two transactions from consuming the same stock?",
            "Explain with sharing vs CRUD/FLS.",
            "Why use Named Credentials?",
            "How would you test the manufacturer callout?",
            "Why might a trigger not be the right place for an HTTP callout?",
            "What does the Service Request trigger handler currently do?",
            "What is the LWC event contract bug?",
            "Why use @wire for Inventory Workspace?",
            "Why use imperative Apex for Dashboard?",
            "How would you redesign static DTO data for production?",
            "What would you improve in the Jest tests?",
            "Why use Master-Detail for Maintenance Visit?",
            "How would you deploy this project?",
            "What would you change in Version 2?",
          ]
            .map(
              (q, i) => `
                <div class="card">
                  <span class="tag">
                    ${String(i + 1).padStart(2, "0")}
                  </span>

                  <p>${esc(q)}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <h3>30-second answer</h3>

        <div class="callout">
          “FSAM is a Salesforce DX field-service asset maintenance portal.
          It models customer assets, service requests, visits, assignments,
          parts and replacements. I used LWC for the user experience, layered
          Apex with controllers, services and selectors for reusable
          server-side logic, record-triggered Flow for declarative automation,
          and a Named Credential-based REST integration for manufacturer data.
          The architecture emphasizes separation of concerns, bulk-safe
          processing and testability. Version 1 also contains some mock DTO
          data, which I would replace with selectors/services in the next
          iteration.”
        </div>
      </section>
    `
  );
}

function source() {
  return (
    hero(
      "Source, deployment & GitHub Pages",
      "This page explains what is in the repository and what GitHub Pages is actually hosting: a static portfolio layer, not a Salesforce runtime."
    ) +
    `
      <div class="grid two">
        <div class="card">
          <h3>Salesforce DX</h3>

          <p class="muted">
            <code>sfdx-project.json</code> defines
            <code>force-app</code> as the default package directory and API
            version ${esc(D.project.apiVersion)}.
          </p>

          <a
            class="btn primary"
            href="${D.project.repo}"
            target="_blank"
            rel="noopener"
          >
            Open GitHub repository ↗
          </a>
        </div>

        <div class="card">
          <h3>GitHub Pages</h3>

          <p class="muted">
            The <code>github-pages</code> folder is a static HTML/CSS/JS
            portfolio. It can be published with GitHub Pages or GitHub Actions.
          </p>
        </div>
      </div>

      <section class="section">
        <h3>Deployment reality</h3>

        <div class="grid two">
          <div class="card">
            <span class="tag good">Present</span>

            <p>
              Salesforce DX source, scratch-org definition, deployment
              documentation and Git metadata.
            </p>
          </div>

          <div class="card">
            <span class="tag warn">Not present</span>

            <p>
              <strong>package.xml</strong> was not found in the uploaded
              project at the documented manifest path.
            </p>
          </div>

          <div class="card">
            <span class="tag warn">Not present</span>

            <p>
              <strong>GitHub Actions CI/CD workflow</strong> was not found in
              the uploaded repository.
            </p>
          </div>

          <div class="card">
            <span class="tag good">Present</span>

            <p>
              Named Credential and External Credential metadata are included
              for the integration.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <h3>Recommended Pages deployment</h3>

        <div class="code">
          <pre>Repository Settings → Pages → Deploy from a branch

Recommended source: main branch / github-pages folder

Or add a GitHub Actions workflow that uploads github-pages as the Pages artifact.</pre>
        </div>
      </section>
    `
  );
}

function bindSearch() {
  const input = document.getElementById("search");
  const box = document.getElementById("results");

  if (!input) {
    return;
  }

  const items = [
    ...D.classes.map((x) => ({
      name: x.name,
      type: x.kind,
      path: x.path,
      anchor: "#apex",
    })),

    ...D.lwcs.map((x) => ({
      name: x.name,
      type: "LWC",
      path: x.files.join(", "),
      anchor: "#lwc",
    })),

    ...D.objects.map((x) => ({
      name: x.name,
      type: "Custom Object",
      path: `${x.fieldCount} fields`,
      anchor: "#data-model",
    })),

    ...D.flows.map((x) => ({
      name: x.name,
      type: "Flow",
      path: x.label,
      anchor: "#automation",
    })),
  ];

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();

    if (!q) {
      box.style.display = "none";
      return;
    }

    const results = items
      .filter((x) =>
        `${x.name} ${x.type} ${x.path}`
          .toLowerCase()
          .includes(q)
      )
      .slice(0, 12);

    box.innerHTML = results.length
      ? results
          .map(
            (x) => `
              <a class="result" href="${x.anchor}">
                <strong>${esc(x.name)}</strong>
                <span>
                  ${esc(x.type)} · ${esc(x.path)}
                </span>
              </a>
            `
          )
          .join("")
      : `
          <div class="result">
            <span>No matches</span>
          </div>
        `;

    box.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!box.contains(e.target) && e.target !== input) {
      box.style.display = "none";
    }
  });
}

function route() {
  let p = location.hash.replace("#", "") || "overview";

  if (!nav.some((x) => x[0] === p)) {
    p = "overview";
  }

  layout(p);
}

window.addEventListener("hashchange", route);

route();

import { createFileRoute } from "@tanstack/react-router";
import { Activity, Waves } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SCADA for Water & Wastewater Treatment — A Practical Guide" },
      {
        name: "description",
        content:
          "An educational guide to designing, deploying, and maintaining SCADA systems for water and wastewater treatment plants across 15 in-depth sections.",
      },
      { property: "og:title", content: "SCADA for Water & Wastewater Treatment" },
      {
        property: "og:description",
        content:
          "Hardware, PLCs, HMI design, cybersecurity, commissioning, and scalability — everything operators and engineers need to know.",
      },
    ],
  }),
  component: Index,
});

type Section = {
  num: number;
  id: string;
  title: string;
  intro: string;
  body: string[];
  imgLabel: string;
};

const sections: Section[] = [
  {
    num: 1,
    id: "s1",
    title: "SCADA System Assessment & Documentation",
    imgLabel: "SCADA Assessment",
    intro:
      "Every successful SCADA deployment starts with a thorough assessment of the existing plant — its instruments, control loops, operator workflows, and documentation gaps.",
    body: [
      "Begin with a site survey: inventory every sensor, transmitter, motor, valve, and PLC across headworks, primary and secondary treatment, disinfection, and biosolids handling. Catalog signal types (4–20 mA, HART, Modbus, Profinet), tag names, and current calibration status.",
      "Review existing P&IDs, loop drawings, control narratives, and as-built documentation. Most plants discover discrepancies — uninstalled instruments, abandoned loops, or undocumented manual overrides — that must be reconciled before specifying SCADA scope.",
      "Produce a baseline document set: tag database, instrument index, network topology map, and a gap analysis identifying what must be added, replaced, or re-commissioned to support the new SCADA system.",
    ],
  },
  {
    num: 2,
    id: "s2",
    title: "Hardware & Network Infrastructure",
    imgLabel: "Network Infrastructure",
    intro:
      "Reliable SCADA depends on industrial-grade hardware and a resilient network designed for 24/7 operation in harsh treatment-plant environments.",
    body: [
      "Specify ruggedized servers, redundant power supplies, industrial Ethernet switches, and fiber backbones between remote process areas. UPS systems and generator backup keep critical control online during utility outages.",
      "Segment the network: a Level 0/1 control LAN for PLCs and I/O, a Level 2 supervisory LAN for SCADA servers and HMIs, and a DMZ to broker any data flowing to corporate IT or cloud historians.",
      "Use managed switches with VLANs, ring topologies (MRP / PRP / HSR) for sub-50 ms failover, and fiber where lift stations or outlying basins create long cable runs.",
    ],
  },
  {
    num: 3,
    id: "s3",
    title: "PLC Programming & Field Integration",
    imgLabel: "PLC Programming",
    intro:
      "The PLC layer executes deterministic control — pump sequencing, valve modulation, blower VFDs — and must be programmed with maintainability and safety in mind.",
    body: [
      "Adopt a structured programming standard (IEC 61131-3): Function Block Diagram for analog control, Structured Text for calculations, Ladder for discrete interlocks. Use reusable Add-On Instructions / UDFBs for pumps, valves, and motors.",
      "Define a consistent tag naming convention (e.g., AREA-EQUIPMENT-FUNCTION) so SCADA, historian, and reports all share a single source of truth.",
      "Integrate field devices over HART, Modbus TCP, EtherNet/IP, or Profinet. Validate every I/O point with a signed loop check sheet before the PLC code goes live.",
    ],
  },
  {
    num: 4,
    id: "s4",
    title: "SCADA Software Platform Selection & Setup",
    imgLabel: "SCADA Platform",
    intro:
      "Choosing the right SCADA platform shapes the project for the next 10–20 years. Evaluate platforms on openness, licensing, redundancy, and water-industry track record.",
    body: [
      "Common platforms include Ignition, Wonderware / AVEVA System Platform, iFIX, Rockwell FactoryTalk, Siemens WinCC, and ClearSCADA. Each balances cost, scalability, and ease of customization differently.",
      "Plan for redundant primary/secondary SCADA servers, hot-standby historians, and thin/web clients for operators and supervisors.",
      "Establish development, staging, and production environments. All changes flow through staging with documented test results before reaching production.",
    ],
  },
  {
    num: 5,
    id: "s5",
    title: "HMI / Graphical Interface Design",
    imgLabel: "HMI Design",
    intro:
      "Modern HMI design follows ISA-101 high-performance principles: muted backgrounds, color reserved for abnormal conditions, and information presented in context.",
    body: [
      "Use a hierarchical layout — Level 1 plant overview, Level 2 process unit, Level 3 detail, Level 4 diagnostics — so operators drill down only when needed.",
      "Replace rainbow graphics with grayscale process schematics. Color (amber, red) appears only for alarms or off-normal values, drawing the eye immediately to what matters.",
      "Embed trend mini-charts, setpoint vs. process value indicators, and contextual navigation buttons. Validate every screen with operators before go-live.",
    ],
  },
  {
    num: 6,
    id: "s6",
    title: "Process Control & Automation Logic",
    imgLabel: "Process Control",
    intro:
      "Treatment-plant control logic blends regulatory PID loops, sequencing, and model-based optimization across processes like aeration, chemical dosing, and filtration.",
    body: [
      "Tune PID loops for stable response: dissolved-oxygen control in aeration basins, chlorine residual control at the contact chamber, polymer dosing on thickeners.",
      "Implement sequencing for SBR cycles, backwash routines, and digester feeding. Use state machines with clear transition conditions and operator overrides.",
      "Add advanced strategies — feed-forward flow compensation, cascade control, ammonia-based aeration — only after baseline loops are stable.",
    ],
  },
  {
    num: 7,
    id: "s7",
    title: "Alarm Management & Notification System",
    imgLabel: "Alarm Management",
    intro:
      "A rationalized alarm system, aligned with ISA-18.2, prevents alarm floods and keeps operators focused on events that genuinely require action.",
    body: [
      "Conduct an alarm rationalization workshop: each alarm must have a defined cause, consequence, response time, and operator action. Eliminate nuisance alarms and duplicate notifications.",
      "Apply prioritization (Low / Medium / High / Critical) with target rates such as fewer than 6 alarms per operator per hour during steady state.",
      "Layer notifications: HMI banner, audible horn, SMS / email / voice callout to on-call staff, and escalation if an alarm is not acknowledged within a set window.",
    ],
  },
  {
    num: 8,
    id: "s8",
    title: "Data Historian & Reporting",
    imgLabel: "Data Historian",
    intro:
      "A historian captures every tag at sub-second resolution and unlocks compliance reporting, trend analysis, and operational decision-making.",
    body: [
      "Deploy a time-series historian (e.g., AVEVA PI, Canary, Ignition Tag Historian, InfluxDB) with deadband-based compression and long-term archival.",
      "Build regulatory reports: daily monitoring reports (DMR), turbidity logs, chlorine residual summaries, biosolids tonnage — automatically generated and signed off.",
      "Provide self-service dashboards so operators, supervisors, and managers each see the KPIs relevant to their role.",
    ],
  },
  {
    num: 9,
    id: "s9",
    title: "Cybersecurity & Compliance",
    imgLabel: "Cybersecurity",
    intro:
      "Water utilities are critical infrastructure. SCADA cybersecurity must follow NIST 800-82, AWIA, and IEC 62443 to protect public health and operational continuity.",
    body: [
      "Adopt a defense-in-depth posture: firewalls between IT and OT, unidirectional gateways where appropriate, role-based access, multi-factor authentication, and encrypted remote access.",
      "Patch management, allow-listing on HMI/SCADA hosts, removable-media controls, and centralized logging are baseline expectations.",
      "Run periodic vulnerability assessments and tabletop incident-response exercises. Maintain offline, immutable backups of PLC code, SCADA projects, and historian databases.",
    ],
  },
  {
    num: 10,
    id: "s10",
    title: "Testing, Commissioning & Startup",
    imgLabel: "Commissioning",
    intro:
      "Structured FAT, SAT, and commissioning protocols turn a working system on paper into a working plant in the field — with documented evidence at every step.",
    body: [
      "Factory Acceptance Testing (FAT): simulate every I/O point, alarm, and sequence in the integrator's shop. Owner sign-off required before shipment.",
      "Site Acceptance Testing (SAT): repeat tests with real instruments and motors. Verify failover, redundancy, and integration with existing plant systems.",
      "Commissioning: bump test motors, verify direction, calibrate loops, then commission process by process. Maintain a punch list until every item is closed.",
    ],
  },
  {
    num: 11,
    id: "s11",
    title: "Operation & Maintenance Procedures",
    imgLabel: "O&M Procedures",
    intro:
      "Well-documented O&M procedures keep the SCADA system reliable long after the integrator has demobilized.",
    body: [
      "Develop SOPs for daily checks, weekly backups, monthly UPS tests, and quarterly failover drills. Tie procedures into the plant's CMMS.",
      "Define change-management workflow: every PLC or HMI change requires a request, peer review, staged testing, and signed-off deployment.",
      "Train operations and instrumentation technicians to perform first-line troubleshooting — interpreting alarms, restarting comms, swapping I/O modules.",
    ],
  },
  {
    num: 12,
    id: "s12",
    title: "Integration with Other Systems",
    imgLabel: "Systems Integration",
    intro:
      "SCADA rarely lives alone. It must exchange data with LIMS, CMMS, GIS, billing, and increasingly with cloud analytics and digital-twin platforms.",
    body: [
      "Use standard interfaces — OPC UA, REST APIs, SQL views, MQTT Sparkplug — instead of brittle point-to-point connections.",
      "Push laboratory results from LIMS into the historian to align measured and online analyzers. Push asset health from SCADA into the CMMS to trigger work orders.",
      "For multi-site utilities, aggregate plant SCADA data into an enterprise historian for benchmarking and regional optimization.",
    ],
  },
  {
    num: 13,
    id: "s13",
    title: "Performance Monitoring & Optimization",
    imgLabel: "Performance Optimization",
    intro:
      "Continuous monitoring of KPIs — energy use per million gallons, chemical dose, effluent quality — turns SCADA data into operational improvement.",
    body: [
      "Define KPIs at plant, process, and asset levels. Visualize them on role-based dashboards with target bands and trend arrows.",
      "Identify optimization opportunities: aeration energy reduction via DO/ammonia control, blower turndown, pump scheduling against time-of-use electricity rates.",
      "Pilot advanced analytics — anomaly detection, soft sensors, predictive maintenance — using historian data before committing to plant-wide deployment.",
    ],
  },
  {
    num: 14,
    id: "s14",
    title: "Training & Knowledge Management",
    imgLabel: "Training Program",
    intro:
      "A SCADA system is only as effective as the people who run it. A structured training program preserves institutional knowledge through staff turnover.",
    body: [
      "Build role-based curricula: operators (HMI navigation, alarm response), technicians (PLC and network troubleshooting), engineers (configuration changes, programming standards).",
      "Maintain a knowledge base of P&IDs, control narratives, alarm rationalization, and lessons learned. Pair classroom training with simulator-based exercises on a non-production SCADA copy.",
      "Refresh training annually and after every major system change. Track competencies in the utility's learning management system.",
    ],
  },
  {
    num: 15,
    id: "s15",
    title: "Future Expansion & Scalability",
    imgLabel: "Future Scalability",
    intro:
      "Plants grow, regulations tighten, and technology evolves. Design today's SCADA system so tomorrow's expansion is straightforward, not disruptive.",
    body: [
      "Reserve spare PLC capacity (20–30% I/O, CPU, and memory) and structured tag namespaces so new processes plug in without re-architecting.",
      "Standardize on object-oriented SCADA templates so adding a new pump, basin, or lift station is a configuration exercise, not custom programming.",
      "Plan a technology roadmap: edge computing, MQTT-based unified namespaces, cloud historians, AI-assisted operations — adopted gradually with clear ROI at each step.",
    ],
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[oklch(0.15_0.045_255/0.85)] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--teal)] to-[var(--teal-bright)] flex items-center justify-center text-[var(--navy-deep)]">
            <Waves className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground">SCADA Guide</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
              Water &amp; Wastewater
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-[var(--teal-bright)] hover:bg-secondary rounded-md transition-colors whitespace-nowrap"
              title={s.title}
            >
              {s.num}
            </a>
          ))}
        </nav>
        <a
          href="#s1"
          className="lg:hidden text-xs px-3 py-1.5 rounded-md bg-[var(--teal)] text-[var(--teal-foreground)] font-semibold"
        >
          Start
        </a>
      </div>
    </header>
  );
}

function ImgPlaceholder({ id, label }: { id: string; label: string }) {
  return (
    <div className="img-placeholder" id={id}>
      <span className="text-2xl" aria-hidden>📷</span>
      <div className="font-medium">Image: {label}</div>
      <small className="opacity-70">(9:16 Portrait)</small>
    </div>
  );
}

function SectionBlock({ s }: { s: Section }) {
  return (
    <section id={s.id} className="py-16 sm:py-20 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--teal-bright)]">
            Section {String(s.num).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-[var(--teal)]/60 to-transparent" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5 max-w-3xl">
          {s.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
          {s.intro}
        </p>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-5 max-w-3xl">
            {s.body.map((p, i) => (
              <p key={i} className="text-base text-foreground/85 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <ImgPlaceholder id={`img-${s.id}a`} label={s.imgLabel} />
            <ImgPlaceholder id={`img-${s.id}b`} label={s.imgLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "var(--gradient-accent)" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-[var(--teal-bright)] mb-6">
            <Activity className="w-3.5 h-3.5" />
            Educational Guide · 15 Sections
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.05]">
            SCADA Systems for{" "}
            <span className="bg-gradient-to-r from-[var(--teal)] to-[var(--teal-bright)] bg-clip-text text-transparent">
              Water &amp; Wastewater
            </span>{" "}
            Treatment Plants
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From initial site assessment to long-term scalability — a practical,
            field-tested guide to designing, deploying, securing, and operating
            modern SCADA in water utilities.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#s1"
              className="px-6 py-3 rounded-lg bg-[var(--teal)] text-[var(--teal-foreground)] font-semibold hover:bg-[var(--teal-bright)] transition-colors shadow-[var(--shadow-glow)]"
            >
              Start with Section 01
            </a>
            <a
              href="#s9"
              className="px-6 py-3 rounded-lg border border-border bg-secondary/40 text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              Jump to Cybersecurity
            </a>
          </div>
        </div>
      </section>

      <main>
        {sections.map((s) => (
          <SectionBlock key={s.id} s={s} />
        ))}
      </main>

      <footer className="py-12 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto px-4">
          SCADA Guide for Water &amp; Wastewater Treatment · Educational reference
        </div>
      </footer>
    </div>
  );
}

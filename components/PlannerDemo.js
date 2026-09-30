"use client";
import { useEffect, useRef } from "react";

/**
 * PlannerDemo — the small live restock-planner embedded inline in the
 * Stockpilot case study, at the "one number, not a range" decision.
 *
 * Self-contained: markup shell rendered by React, styles scoped under
 * .sp-planner, icons inlined as SVG (no icon font), and the interaction
 * logic runs once in useEffect against this component's own DOM node.
 * The full, connected version lives at /explorations/stockpilot/prototype.
 */
const ICON = {
  "chevron-left": '<path d="M15 6l-6 6l6 6" />',
  "chevron-up": '<path d="M6 15l6 -6l6 6" />',
  "chevron-down": '<path d="M6 9l6 6l6 -6" />',
  bulb: '<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" />',
  "trending-up": '<path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" />',
  "trending-down": '<path d="M3 7l6 6l4 -4l8 8" /><path d="M21 10l0 7l-7 0" />',
  "arrow-right": '<path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" />',
};

function Icon({ name, size = 16, color, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, color, ...style }}
      dangerouslySetInnerHTML={{ __html: ICON[name] }}
    />
  );
}

export default function PlannerDemo() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const $ = (s) => root.querySelector(s);

    // inline-SVG icon helper for the strings built during render()
    const sic = (name, size, extra) => {
      const k = name.replace("ti-", "");
      const inner = ICON[k] || "";
      return (
        '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
        '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0;' +
        (extra || "") + '">' + inner + "</svg>"
      );
    };

    const items = [
      { n: "Black tote, Medium", s: "black totes", u: 120, t: 10, fc: 28, h: [16, 19, 21, 24, 27], tag: "Running low", ti: "ti-trending-up", tc: "var(--sp-warning)", tb: "var(--sp-bg-warning)", slow: false },
      { n: "Linen dress", s: "linen dresses", u: 90, t: 10, fc: 16, h: [13, 15, 14, 16, 16], tag: "Fast mover", ti: "ti-trending-up", tc: "var(--sp-accent)", tb: "var(--sp-bg-accent)", slow: false },
      { n: "Silk scarf", s: "silk scarves", u: 45, t: 12, fc: 21, h: [4, 6, 9, 13, 18], tag: "Trending up", ti: "ti-trending-up", tc: "var(--sp-accent)", tb: "var(--sp-bg-accent)", slow: false },
      { n: "Cotton top", s: "cotton tops", u: 40, t: 8, fc: 9, h: [9, 8, 9, 8, 9], tag: "Steady", ti: "ti-arrow-right", tc: "var(--sp-muted)", tb: "var(--sp-surface-1)", slow: false },
      { n: "Beaded clutch", s: "beaded clutches", u: 80, t: 4, fc: 2, h: [7, 6, 4, 3, 2], tag: "Slowing", ti: "ti-trending-down", tc: "var(--sp-muted)", tb: "var(--sp-surface-1)", slow: true },
    ];
    const slider = $("#sp-slider"), mixEl = $("#sp-mix"), totalEl = $("#sp-total"), budgetEl = $("#sp-budget"), hintEl = $("#sp-hint");
    let mult = 1; const open = {};
    const money = (n) => "AED " + Math.round(n).toLocaleString();
    const trend = (a) => { const f = a[0], l = a[a.length - 1]; return l > f * 1.12 ? "climbing" : l < f * 0.9 ? "slowing" : "steady"; };
    function chart(it) {
      const a = it.h.concat([it.fc]), w = 290, h = 54, pad = 6;
      const mn = Math.min.apply(null, a), mx = Math.max.apply(null, a), r = (mx - mn) || 1;
      const X = (i) => (i / (a.length - 1)) * w, Y = (v) => h - pad - ((v - mn) / r) * (h - 2 * pad);
      const hp = it.h.map((v, i) => X(i).toFixed(1) + "," + Y(v).toFixed(1)).join(" ");
      const lx = X(it.h.length - 1), ly = Y(it.h[it.h.length - 1]), fx = X(a.length - 1), fy = Y(it.fc);
      return '<svg width="100%" viewBox="0 0 ' + w + " " + h + '"><polyline points="' + hp + '" fill="none" stroke="' + it.tc + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="' + lx.toFixed(1) + '" y1="' + ly.toFixed(1) + '" x2="' + fx.toFixed(1) + '" y2="' + fy.toFixed(1) + '" stroke="' + it.tc + '" stroke-width="2" stroke-dasharray="3 3" opacity=".7"/><circle cx="' + fx.toFixed(1) + '" cy="' + fy.toFixed(1) + '" r="3.5" fill="' + it.tc + '"/></svg>';
    }
    function propose() { const b = +slider.value; let rem = b; items.forEach((it) => { const want = Math.round(it.t * mult); let q = Math.min(want, Math.floor(rem / it.u)); if (q < 0) q = 0; it.qty = q; rem -= q * it.u; }); }
    function render() {
      budgetEl.textContent = money(+slider.value);
      let html = "", total = 0;
      items.forEach((it, i) => {
        const cost = it.qty * it.u; total += cost; const skip = it.qty === 0;
        html += '<div class="sp-row"><div style="display:flex;gap:10px;"><div data-sp="' + i + '" style="flex:1;min-width:0;cursor:pointer;' + (skip ? "opacity:.55;" : "") + '"><div style="display:flex;align-items:center;gap:7px;margin-bottom:3px;"><span style="font-size:13.5px;font-weight:500;">' + it.n + '</span><span class="sp-tag" style="color:' + it.tc + ";background:" + it.tb + ';">' + sic(it.ti, 11) + it.tag + '</span>' + sic("ti-chevron-" + (open[i] ? "up" : "down"), 14, "color:var(--sp-muted);margin-left:auto;") + '</div><span style="font-size:11.5px;color:var(--sp-muted);">' + (skip ? "Skipped this week" : it.qty + " &times; " + money(it.u) + " = " + money(cost)) + '</span></div>' + (skip ? '<button class="sp-add" data-add="' + i + '">+ Add</button>' : '<div class="sp-stp"><button data-dec="' + i + '">&minus;</button><span>' + it.qty + '</span><button data-inc="' + i + '">+</button></div>') + "</div>";
        if (open[i]) { const want = Math.round(it.t * mult); html += '<div class="sp-exp"><div style="display:flex;justify-content:space-between;font-size:10.5px;color:var(--sp-muted);margin-bottom:4px;"><span>Last 5 weeks</span><span>Next week</span></div>' + chart(it) + '<p style="font-size:12px;color:var(--sp-secondary);margin:8px 0 0;line-height:1.5;">Sales are <b style="color:' + it.tc + ';">' + trend(it.h) + "</b>. Likely about <b>" + it.fc + "</b> next week, so I suggest around <b>" + want + "</b>.</p></div>"; }
        html += "</div>";
      });
      mixEl.innerHTML = html;
      const b = +slider.value;
      totalEl.textContent = money(total);
      totalEl.style.color = total > b + 40 ? "var(--sp-warning)" : "var(--sp-primary)";
      let under = null;
      for (let j = 0; j < items.length; j++) { const it = items[j]; if (!it.slow && it.qty < Math.round(it.t * mult)) { under = it; break; } }
      if (under) { const k = Math.round(under.t * mult) - under.qty, d = k * under.u; hintEl.textContent = "Stretch to about " + money(b + d) + " and I would add " + k + " more " + under.s + ", one of your stronger earners."; }
      else { const left = b - total; hintEl.textContent = left >= 120 ? "You have covered your best movers. I would keep about " + money(left) + " in reserve." : "This spreads your budget across your strongest movers, and leaves the slow stock alone."; }
    }
    const onInput = () => { propose(); render(); };
    const onClick = (e) => {
      const c = e.target.closest("[data-sp]"); if (c) { const i = +c.dataset.sp; open[i] = !open[i]; render(); return; }
      const b = e.target.closest("button"); if (!b) return;
      if (b.dataset.tf) { mult = +b.dataset.tf; root.querySelectorAll(".sp-chip").forEach((x) => x.classList.remove("on")); b.classList.add("on"); propose(); render(); return; }
      if (b.dataset.inc != null) { items[+b.dataset.inc].qty++; render(); return; }
      if (b.dataset.dec != null) { const it = items[+b.dataset.dec]; if (it.qty > 0) it.qty--; render(); return; }
      if (b.dataset.add != null) { const it = items[+b.dataset.add]; it.qty = Math.max(1, Math.round(it.t * mult / 2)); render(); return; }
    };
    slider.addEventListener("input", onInput);
    root.addEventListener("click", onClick);
    propose(); render();
    return () => { slider.removeEventListener("input", onInput); root.removeEventListener("click", onClick); };
  }, []);

  return (
    <div ref={ref} className="sp-planner">
      <style>{`
        .sp-planner{--sp-surface-1:#f4f3ee;--sp-surface-2:#fff;--sp-primary:#1a1a1a;--sp-secondary:#4a4842;--sp-muted:#8b897f;--sp-border:#e9e7e0;--sp-border-strong:#d3d1c8;--sp-bg-accent:#e6f2f0;--sp-accent:#0f766e;--sp-on-accent:#fff;--sp-fill-primary:#1a1a1a;--sp-on-primary:#fff;--sp-bg-warning:#fbeede;--sp-warning:#b45309;--sp-radius:8px}
        .sp-planner #sp-pl{position:relative;max-width:340px;margin:0 auto;background:var(--sp-surface-2);border:.5px solid var(--sp-border);border-radius:22px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.07);font-size:14px;color:var(--sp-primary)}
        .sp-planner input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:5px;border-radius:3px;background:var(--sp-border-strong);outline:none;margin:0}
        .sp-planner input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:var(--sp-accent);cursor:pointer;border:3px solid var(--sp-surface-2)}
        .sp-planner input[type=range]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:var(--sp-accent);cursor:pointer;border:3px solid var(--sp-surface-2)}
        .sp-planner .sp-chip{font-size:12.5px;padding:6px 12px;border:.5px solid var(--sp-border-strong);border-radius:20px;background:var(--sp-surface-2);color:var(--sp-secondary);cursor:pointer;font-family:inherit}
        .sp-planner .sp-chip.on{background:var(--sp-fill-primary);color:var(--sp-on-primary);border-color:var(--sp-fill-primary)}
        .sp-planner .sp-row{padding:11px 0;border-bottom:.5px solid var(--sp-border)}
        .sp-planner .sp-tag{font-size:10px;font-weight:500;padding:2px 7px;border-radius:20px;white-space:nowrap;display:inline-flex;align-items:center;gap:3px}
        .sp-planner .sp-stp{display:flex;align-items:center;gap:7px}
        .sp-planner .sp-stp button{width:26px;height:26px;border:.5px solid var(--sp-border-strong);border-radius:50%;background:var(--sp-surface-2);color:var(--sp-primary);font-size:15px;cursor:pointer;display:flex;align-items:center;justify-content:center}
        .sp-planner .sp-stp span{min-width:20px;text-align:center;font-size:13px;font-weight:500}
        .sp-planner .sp-add{font-size:12px;color:var(--sp-accent);cursor:pointer;border:none;background:none;font-family:inherit}
        .sp-planner .sp-exp{background:var(--sp-surface-1);border-radius:10px;padding:12px;margin-top:10px}
        .sp-planner .sp-hint{display:flex;align-items:flex-start;gap:9px;background:var(--sp-bg-accent);border:.5px solid var(--sp-border);border-radius:12px;padding:11px 13px;margin:14px 16px 0}
      `}</style>
      <div id="sp-pl">
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "15px 16px 10px" }}>
          <Icon name="chevron-left" size={20} color="var(--sp-secondary)" />
          <span style={{ fontSize: "15px", fontWeight: 500 }}>Plan restocks</span>
        </div>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "15px", lineHeight: 1.4, margin: "2px 16px 14px" }}>Here&rsquo;s where I&rsquo;d put your money this week. Slide to set your budget, tap a row to see why.</p>
        <div style={{ padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ fontSize: "12px", color: "var(--sp-muted)" }}>Budget (about)</span>
            <span id="sp-budget" style={{ fontSize: "28px", fontWeight: 600, letterSpacing: "-.02em" }}>AED 3,000</span>
          </div>
          <input id="sp-slider" type="range" min="800" max="5500" step="100" defaultValue="3000" aria-label="Budget" />
          <div style={{ display: "flex", gap: "7px", marginTop: "12px" }}>
            <button className="sp-chip on" data-tf="1">This week</button>
            <button className="sp-chip" data-tf="1.8">Next 2 weeks</button>
          </div>
        </div>
        <div style={{ padding: "14px 16px 0" }}>
          <p style={{ fontSize: "12px", color: "var(--sp-muted)", margin: "0 0 2px" }}>Suggested mix, tap a row for why</p>
          <div id="sp-mix" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0 4px" }}>
            <span style={{ fontSize: "13px", color: "var(--sp-secondary)" }}>Allocated</span>
            <span id="sp-total" style={{ fontSize: "16px", fontWeight: 600 }}>AED 0</span>
          </div>
        </div>
        <div className="sp-hint">
          <Icon name="bulb" size={17} color="var(--sp-accent)" style={{ marginTop: "1px" }} />
          <p id="sp-hint" style={{ fontSize: "12.5px", color: "var(--sp-accent)", margin: 0, lineHeight: 1.45 }} />
        </div>
        <div style={{ padding: "14px 16px 18px" }}>
          <button style={{ width: "100%", height: "40px", fontSize: "14px", background: "var(--sp-accent)", color: "var(--sp-on-accent)", border: "none", borderRadius: "var(--sp-radius)", cursor: "pointer", fontFamily: "inherit" }}>Confirm restock plan</button>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-static";

// Self-contained Sambhal prototype served directly (bypasses the site layout),
// so it renders full-screen on a phone. Icons are inline SVG, no external font.
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Sambhal, connected prototype</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&display=swap" rel="stylesheet">
<style>
:root{--surface-1:#f1eee6;--surface-2:#fbfaf7;--text-primary:#1c1b19;--text-secondary:#4d4a44;--text-muted:#8e8a80;--border:#e6e2d8;--border-strong:#cfcabd;--bg-accent:#e9ebf6;--text-accent:#3e4c8c;--fill-accent:#3e4c8c;--on-accent:#fff;--border-accent:#3e4c8c;--fill-primary:#1c1b19;--on-primary:#fff;--bg-warning:#f7e9d6;--text-warning:#a45a1c;--text-success:#3f7d4e;--radius:10px;--voice:'Fraunces','Iowan Old Style','Palatino Linotype',Georgia,serif}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
body{background:#e8e4da;font-family:'Inter',system-ui,-apple-system,sans-serif;color:var(--text-primary);display:flex;flex-direction:column;align-items:center;padding:18px 12px;-webkit-font-smoothing:antialiased}
.hint-top{max-width:420px;text-align:center;font-size:13px;color:var(--text-secondary);line-height:1.5;margin-bottom:12px}
#app{width:376px;max-width:100%;height:772px;background:var(--surface-1);border:0.5px solid var(--border);border-radius:30px;overflow:hidden;position:relative;box-shadow:0 18px 56px rgba(40,36,30,.16);display:flex;flex-direction:column}
#screen{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}
#screen::-webkit-scrollbar{width:0}
button{font-family:inherit;cursor:pointer}
.top{display:flex;align-items:center;justify-content:space-between;padding:16px 18px 8px}
.brand{display:flex;align-items:center;gap:7px;font-size:15px;font-weight:500}
.avatar{width:30px;height:30px;border-radius:50%;background:var(--bg-accent);color:var(--text-accent);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500}
.avatar.alt{background:var(--surface-1);border:0.5px solid var(--border);color:var(--text-primary)}
.av{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex:none}
.av-ahmed{background:#dde7f3;color:#2c4a6e}.av-sana{background:#f3dde7;color:#7a2c52}.av-usman{background:#e6e3f2;color:#4a3d7a}.av-bilal{background:#e2efe0;color:#2f5f36}.av-faisal{background:#f7e9d6;color:#8a4b14}.av-ali{background:#e3eef0;color:#2a5560}.av-zain{background:#efe7d8;color:#6b5020}.av-hira{background:#e8e1f0;color:#5b3d6e}.av-omar{background:#dfeae8;color:#2c5a52}.av-maryam{background:#f3e3df;color:#7a3a2c}
.day{flex:none;width:44px;display:flex;flex-direction:column;align-items:center;gap:3px;padding:7px 0 6px;border-radius:12px;cursor:pointer;color:var(--text-secondary)}
.day .d{font-size:10px;letter-spacing:.06em;text-transform:uppercase}.day .n{font-size:15px;font-weight:500}
.day .dots{display:flex;gap:2px;height:5px}.day .dots i{width:5px;height:5px;border-radius:50%;background:var(--border-strong);display:block}.day .dots i.w{background:var(--text-warning)}
.day.on{background:var(--fill-primary);color:var(--on-primary)}.day.on .dots i{background:rgba(255,255,255,.5)}.day.on .dots i.w{background:#f0b27a}
.strip{display:flex;gap:4px;padding:0 14px 12px;overflow-x:auto}.strip::-webkit-scrollbar{height:0}
.back{display:flex;align-items:center;gap:10px;padding:15px 16px 6px}
.back button{background:none;border:none;display:flex;align-items:center;justify-content:center;width:34px;height:34px;margin-left:-8px;border-radius:50%;color:var(--text-primary)}
.back button:active{background:var(--surface-1)}
.back .t{font-size:15px;font-weight:500}
.back .sub{font-size:11px;color:var(--text-muted)}
.voice{font-family:var(--voice);font-style:italic;font-size:19px;line-height:1.4;margin:8px 18px 16px;letter-spacing:-.005em}
.voice.sm{font-size:17px;margin:6px 16px 14px}
.sec{font-family:var(--voice);font-style:italic;font-size:14px;color:var(--text-secondary);margin:18px 18px 7px;display:flex;align-items:center;gap:5px}
.sec.first{margin-top:4px}
.card{margin:0 14px;background:var(--surface-2);border:0.5px solid var(--border);border-radius:14px;padding:13px 14px;box-shadow:0 1px 2px rgba(40,36,30,.04)}
.card.rec{border:1.5px solid var(--border-accent);box-shadow:0 6px 18px rgba(62,76,140,.12)}
.card.soft{background:#f6f4ee;box-shadow:none}
.card.warn{background:var(--bg-warning)}
.card+.card{margin-top:8px}
.lbl{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin:0 0 5px;color:var(--text-muted)}
.sec .lbl{font-family:'Inter',system-ui,sans-serif;font-style:normal}
.lbl.w{color:var(--text-warning)}.lbl.a{color:var(--text-accent)}.lbl.s{color:var(--text-success)}
.ttl{font-size:14.5px;font-weight:500;line-height:1.35;margin:0 0 4px}
.sub{font-size:12px;color:var(--text-secondary);line-height:1.45}
.mut{font-size:12px;color:var(--text-muted)}
.row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.btn{height:34px;padding:0 14px;font-size:12.5px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-primary)}
.btn.p{background:var(--fill-primary);color:var(--on-primary);border-color:var(--fill-primary)}
.btn{border-radius:999px}
.btn.a{background:var(--fill-accent);color:var(--on-accent);border-color:var(--fill-accent)}
.btn.full{width:100%;height:42px;font-size:14px}
.btn.sm{height:30px;padding:0 11px;font-size:12px}
.btns{display:flex;gap:8px;margin-top:10px}
.link{font-size:12.5px;color:var(--text-accent);background:none;border:none;padding:0;display:inline-flex;align-items:center;gap:3px}
.pill{font-size:11px;font-weight:500;padding:3px 8px;border-radius:20px;white-space:nowrap}
.pill.w{color:var(--text-warning);background:var(--bg-warning)}
.pill.a{color:var(--text-accent);background:var(--bg-accent)}
.pill.s{color:var(--text-success);background:var(--surface-2);border:0.5px solid var(--border)}
.pill.m{color:var(--text-secondary);background:var(--surface-1);border:0.5px solid var(--border)}
.list{margin:0 14px;background:var(--surface-2);border:0.5px solid var(--border);border-radius:14px;padding:4px 14px;box-shadow:0 1px 2px rgba(40,36,30,.04)}
.list .it{padding:9px 0;border-bottom:0.5px solid var(--border)}
.list .it:last-child{border-bottom:none}
.seg{display:flex;background:var(--surface-2);border:0.5px solid var(--border-strong);border-radius:8px;padding:3px;gap:3px}
.seg button{flex:1;text-align:center;font-size:12px;padding:6px 0;border-radius:6px;border:none;background:none;color:var(--text-secondary)}
.seg button.on{background:var(--fill-primary);color:var(--on-primary);font-weight:500}
.foot{font-size:11.5px;color:var(--text-muted);margin:10px 18px 18px;line-height:1.5;display:flex;align-items:flex-start;gap:6px}
.askbar{margin:14px 14px 10px;display:flex;align-items:center;gap:10px;height:44px;padding:0 15px;border:0.5px solid var(--border);border-radius:22px;background:var(--surface-2);cursor:pointer;box-shadow:0 1px 2px rgba(40,36,30,.04)}
.askbar span{font-size:13.5px;color:var(--text-muted);flex:1}
.nav{display:flex;justify-content:space-around;padding:8px 0 10px;border-top:0.5px solid var(--border);background:var(--surface-2);flex:none}
.nav button.on{color:var(--text-accent)}
.nav button.on span{font-weight:600}
.nav button{display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;color:var(--text-muted);font-size:10px;padding:2px 10px}
.nav button.on{color:var(--text-accent)}
.chips{display:flex;gap:6px;padding:0 14px 12px;flex-wrap:wrap}
.chip{font-size:12px;padding:5px 11px;border-radius:20px;border:0.5px solid var(--border-strong);background:var(--surface-2);color:var(--text-secondary)}
.chip.on{background:var(--fill-primary);color:var(--on-primary);border-color:var(--fill-primary)}
.ico{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;border:0.5px solid var(--border-strong);background:none;color:var(--text-muted)}
.ico.p{background:var(--fill-primary);color:var(--on-primary);border-color:var(--fill-primary)}
.toggle{width:36px;height:20px;border-radius:10px;background:var(--border-strong);position:relative;display:inline-block;flex:none;cursor:pointer}
.toggle i{position:absolute;left:2px;top:2px;width:16px;height:16px;border-radius:50%;background:var(--surface-2);transition:left .15s}
.toggle.on{background:var(--fill-accent)}.toggle.on i{left:18px}
.stp{display:flex;align-items:center;gap:7px}
.stp button{width:28px;height:28px;border:0.5px solid var(--border-strong);border-radius:50%;background:var(--surface-2);color:var(--text-primary);font-size:15px;display:flex;align-items:center;justify-content:center}
.toast{position:absolute;left:14px;right:14px;bottom:70px;background:var(--fill-primary);color:var(--on-primary);font-size:12.5px;padding:11px 14px;border-radius:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;opacity:0;transform:translateY(6px);transition:all .2s;pointer-events:none}
.toast.show{opacity:1;transform:none;pointer-events:auto}
.toast button{background:none;border:none;color:#9ad7cd;font-size:12.5px;font-weight:500}
.bubble-u{display:flex;justify-content:flex-end;margin:0 14px 8px}
.bubble-u span{font-size:13px;background:var(--fill-primary);color:var(--on-primary);padding:8px 12px;border-radius:14px 14px 4px 14px;max-width:82%}
.bubble-a{display:flex;gap:8px;align-items:flex-start;margin:0 14px 10px}
.bubble-a div{background:var(--surface-1);border:0.5px solid var(--border);padding:9px 12px;border-radius:14px 14px 14px 4px;max-width:88%;font-size:13px;line-height:1.45}
@media(max-width:520px){body{padding:0;background:var(--surface-2)}.hint-top{display:none}#app{width:100vw;height:100dvh;max-width:none;border:none;border-radius:0;box-shadow:none}}
</style>
</head>
<body>
<p class="hint-top">Connected prototype. Start from Today, decide the Ministry's hard case, take the trade, hand it to Sana, then see her side and come back. The app remembers.</p>
<div id="app"><div id="screen"></div><div id="navwrap"></div><div class="toast" id="toast"><span id="toastmsg"></span><button id="toastbtn"></button></div></div>
<script>
var TI={"topology-star-3":"<path d=\\"M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z\\" /> <path d=\\"M6 12h4\\" /> <path d=\\"M14 12h4\\" /> <path d=\\"M15 7l-2 3\\" /> <path d=\\"M9 7l2 3\\" /> <path d=\\"M11 14l-2 3\\" /> <path d=\\"M13 14l2 3\\" />","mail":"<path d=\\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\\" /> <path d=\\"M3 7l9 6l9 -6\\" />","users":"<path d=\\"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\\" /> <path d=\\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\\" /> <path d=\\"M16 3.13a4 4 0 0 1 0 7.75\\" /> <path d=\\"M21 21v-2a4 4 0 0 0 -3 -3.85\\" />","pencil":"<path d=\\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4\\" /> <path d=\\"M13.5 6.5l4 4\\" />","info-circle":"<path d=\\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\\" /> <path d=\\"M12 9h.01\\" /> <path d=\\"M11 12h1v4h1\\" />","help-circle":"<path d=\\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\\" /> <path d=\\"M12 16v.01\\" /> <path d=\\"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483\\" />","archive":"<path d=\\"M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\\" /> <path d=\\"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10\\" /> <path d=\\"M10 12l4 0\\" />","paperclip":"<path d=\\"M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5\\" />","external-link":"<path d=\\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\\" /> <path d=\\"M11 13l9 -9\\" /> <path d=\\"M15 4h5v5\\" />","brand-figma":"<path d=\\"M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\\" /> <path d=\\"M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z\\" /> <path d=\\"M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15\\" />","file-text":"<path d=\\"M14 3v4a1 1 0 0 0 1 1h4\\" /> <path d=\\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z\\" /> <path d=\\"M9 9l1 0\\" /> <path d=\\"M9 13l6 0\\" /> <path d=\\"M9 17l6 0\\" />","user":"<path d=\\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\\" /> <path d=\\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\\" />","flag":"<path d=\\"M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z\\" /> <path d=\\"M5 21v-7\\" />","heart":"<path d=\\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\\" />","message":"<path d=\\"M8 9h8\\" /> <path d=\\"M8 13h6\\" /> <path d=\\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z\\" />","inbox":"<path d=\\"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z\\" /> <path d=\\"M4 13h3l3 3h4l3 -3h3\\" />","folders":"<path d=\\"M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2\\" /> <path d=\\"M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2\\" />","shield-check":"<path d=\\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\\" /> <path d=\\"M15 19l2 2l4 -4\\" />","history":"<path d=\\"M12 8l0 4l2 2\\" /> <path d=\\"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5\\" />","plus":"<path d=\\"M12 5l0 14\\" /> <path d=\\"M5 12l14 0\\" />","clock-hour-4":"<path d=\\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\\" /> <path d=\\"M12 12l3 2\\" /> <path d=\\"M12 7v5\\" />","x":"<path d=\\"M18 6l-12 12\\" /> <path d=\\"M6 6l12 12\\" />","check":"<path d=\\"M5 12l5 5l10 -10\\" />","chevron-left":"<path d=\\"M15 6l-6 6l6 6\\" />","chevron-right":"<path d=\\"M9 6l6 6l-6 6\\" />","chevron-down":"<path d=\\"M6 9l6 6l6 -6\\" />","chevron-up":"<path d=\\"M6 15l6 -6l6 6\\" />","sparkles":"<path d=\\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z\\" />","microphone":"<path d=\\"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z\\" /> <path d=\\"M5 10a7 7 0 0 0 14 0\\" /> <path d=\\"M8 21l8 0\\" /> <path d=\\"M12 17l0 4\\" />","alert-triangle":"<path d=\\"M12 9v4\\" /> <path d=\\"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z\\" /> <path d=\\"M12 16h.01\\" />","circle-check":"<path d=\\"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\\" /> <path d=\\"M9 12l2 2l4 -4\\" />","eye":"<path d=\\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\\" /> <path d=\\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\\" />","eye-off":"<path d=\\"M10.585 10.587a2 2 0 0 0 2.829 2.828\\" /> <path d=\\"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87\\" /> <path d=\\"M3 3l18 18\\" />","bulb":"<path d=\\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\\" /> <path d=\\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\\" /> <path d=\\"M9.7 17l4.6 0\\" />","arrow-right":"<path d=\\"M5 12l14 0\\" /> <path d=\\"M13 18l6 -6\\" /> <path d=\\"M13 6l6 6\\" />","trending-up":"<path d=\\"M3 17l6 -6l4 4l8 -8\\" /> <path d=\\"M14 7l7 0l0 7\\" />","trending-down":"<path d=\\"M3 7l6 6l4 -4l8 8\\" /> <path d=\\"M21 10l0 7l-7 0\\" />","home":"<path d=\\"M5 12l-2 0l9 -9l9 9l-2 0\\" /> <path d=\\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\\" /> <path d=\\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\\" />","calendar":"<path d=\\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z\\" /> <path d=\\"M16 3v4\\" /> <path d=\\"M8 3v4\\" /> <path d=\\"M4 11h16\\" /> <path d=\\"M11 15h1\\" /> <path d=\\"M12 15v3\\" />","dots-vertical":"<path d=\\"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\\" /> <path d=\\"M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\\" /> <path d=\\"M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\\" />","phone":"<path d=\\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\\" />","send":"<path d=\\"M10 14l11 -11\\" /> <path d=\\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\\" />","brand-github":"<path d=\\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\\" />","cloud":"<path d=\\"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878\\" />","notes":"<path d=\\"M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z\\" /> <path d=\\"M9 7l6 0\\" /> <path d=\\"M9 11l6 0\\" /> <path d=\\"M9 15l4 0\\" />","arrows-exchange":"<path d=\\"M7 10h14l-4 -4\\" /> <path d=\\"M17 14h-14l4 4\\" />","user-plus":"<path d=\\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\\" /> <path d=\\"M16 19h6\\" /> <path d=\\"M19 16v6\\" /> <path d=\\"M6 21v-2a4 4 0 0 1 4 -4h4\\" />","clock-pause":"<path d=\\"M20.942 13.018a9 9 0 1 0 -7.909 7.922\\" /> <path d=\\"M12 7v5l2 2\\" /> <path d=\\"M17 17v5\\" /> <path d=\\"M21 17v5\\" />","chevrons-right":"<path d=\\"M7 7l5 5l-5 5\\" /> <path d=\\"M13 7l5 5l-5 5\\" />"};
function I(n,s,x){var k=n.replace('ti-','');var inner=TI[k]||'';return '<svg xmlns="http://www.w3.org/2000/svg" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0;'+(x||'')+'">'+inner+'</svg>';}

/* ---------- data ---------- */
var D={
 ahmed:{n:'Ahmed',s:'Deep problem-solver',k:'deep',dom:['Police','Health'],plate:[{t:'Police filters',p:'Police',d:'Wed'},{t:'iOS booking screens',p:'Health',d:'Thu'},{t:'Dashboard revision',p:'Police',d:'next Tue'}],room:'No room before Mon',care:'Carrying more than most lately, four asks this month. Worth protecting his next one.'},
 usman:{n:'Usman',s:'Deep problem-solver',k:'deep',flag:true,dom:['Education','Motorway'],plate:[{t:'Education portal',p:'Education',d:'through next week'}],room:'Free next Wed'},
 sana:{n:'Sana',s:'Deep problem-solver',k:'deep',dom:['Health','Excise','Education'],plate:[{t:'Health dashboard spec',p:'Health',d:'Tue'}],room:'Room Fri'},
 bilal:{n:'Bilal',s:'Fast executor',k:'fast',plate:[{t:'Motorway forms',p:'Motorway',d:'Thu'}],room:'Room Fri'},
 faisal:{n:'Faisal',s:'Visual craft',k:'visual',plate:[{t:'Police icon set',p:'Police',d:'Wed'}],room:'Room Thu'},
 ali:{n:'Ali',s:'Visual craft',k:'visual',plate:[{t:'Health brand assets',p:'Health',d:'Mon'}],room:'Room Tue'},
 zain:{n:'Zain',s:'Fast executor',k:'fast',plate:[],room:'Room now'},
 hira:{n:'Hira',s:'Fast executor',k:'fast',plate:[{t:'Education form',p:'Education',d:'Thu',quiet:true}],room:'Room now'},
 omar:{n:'Omar',s:'Fast executor',k:'fast',plate:[{t:'Motorway tweaks',p:'Motorway',d:'Tue'}],room:'Room Wed'},
 maryam:{n:'Maryam',s:'Visual craft',k:'visual',plate:[],room:'Room now'}
};
var ORDER=['ahmed','usman','sana','bilal','faisal','ali','zain','hira','omar','maryam'];
var S={screen:'home',tab:'home',homeView:'today',ministry:'pending',ministryVia:null,ministryTo:null,projTab:'live',got:{},policeState:'pending',policeTo:null,healthDue:'Tue',hItem1:'pending',hItem2:'pending',why:false,teamOpen:{ahmed:true},teamFilter:'all',hiraChecked:false,sanaGot:false,ahmedGot:false,teamDeadline:'Fri',loopIn:true,confirmedQueue:[],stubTitle:'',stubText:'',hist:[]};

var ST={ahmed:'edge',usman:'edge',sana:'steady',bilal:'steady',faisal:'steady',ali:'steady',zain:'room',hira:'room',omar:'room',maryam:'room'};
function stateOf(id){if(id==='sana'&&S.ministryTo==='sana')return 'edge';return ST[id];}
function roomOf(id){if(id==='sana'&&S.ministryTo==='sana')return 'No room before Fri';if(S.ministryVia==='overtime'&&id===S.ministryTo)return 'Extra hours this week';if(id==='usman')return 'New asks paused';return D[id].room;}

/* ---------- helpers ---------- */
function go(s,push){if(push!==false)S.hist.push(S.screen);S.screen=s;S.why=false;render();}
function back(){var p=S.hist.pop();S.screen=p||'home';render();}
function tab(t){S.tab=t;S.hist=[];S.screen=t;render();}
var toastT;function toast(msg,btn,fn){var el=document.getElementById('toast');document.getElementById('toastmsg').textContent=msg;var b=document.getElementById('toastbtn');b.textContent=btn||'';b.style.display=btn?'':'none';b.onclick=function(){el.classList.remove('show');if(fn)fn();};el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove('show');},3200);}
function topbar(t){return '<div class="top" style="padding-top:14px"><div><span class="brand" style="font-family:var(--voice);font-style:italic;font-weight:500;font-size:19px;letter-spacing:-.01em">'+(t||'Sambhal')+'</span>'+(t?'':'<p class="mut" style="font-size:11px;margin-top:1px;letter-spacing:.04em">WED 7 OCT &middot; LAHORE</p>')+'</div><span class="avatar" style="background:var(--fill-primary);color:var(--on-primary)">H</span></div>';}
function backbar(t,sub){return '<div class="back"><button data-a="back" aria-label="Back">'+I('ti-chevron-left',22)+'</button><div><div class="t">'+t+'</div>'+(sub?'<div class="sub">'+sub+'</div>':'')+'</div></div>';}
function nav(){var t=S.tab;var it=[['home','ti-home','Today'],['asks','ti-inbox','Asks'],['projects','ti-folders','Projects'],['team','ti-users','Team']];return '<div class="nav">'+it.map(function(x){return '<button data-tab="'+x[0]+'" class="'+(t===x[0]?'on':'')+'">'+I(x[1],21)+'<span>'+x[2]+'</span></button>';}).join('')+'</div>';}
function askbar(t){return '<div class="askbar" data-a="ask">'+I('ti-sparkles',17,'color:var(--text-accent)')+'<span>'+t+'</span>'+I('ti-microphone',18,'color:var(--text-secondary)')+'</div>';}
function plateRows(id){var d=D[id];var rows=d.plate.map(function(p){return '<p class="sub" style="display:flex;justify-content:space-between;gap:8px"><span>'+p.t+' <span class="mut">&middot; '+p.p+'</span>'+(p.quiet?' <span style="color:var(--text-muted)">&middot; quiet 3 days</span>':'')+'</span><span class="mut" style="white-space:nowrap">'+p.d+'</span></p>';});if(!rows.length)rows=['<p class="sub">Nothing due this week</p>'];return rows.join('');}

/* ---------- screens ---------- */
var V={};

V.home=function(){
 var done=S.ministry!=='pending';
 var cards='';
 if(!done){cards+='<div class="card rec"><p class="lbl w">Decide &middot; hard case &middot; due Mon</p><p class="ttl">Ministry portal concept</p><p class="sub" style="margin-bottom:9px">All three deep thinkers are spoken for. Four real options ready, the Health trade leads.</p><button class="btn p" data-go="hard">Decide</button></div>';}
 else{var mw=D[S.ministryTo];var mg=S.got[S.ministryTo];if(S.ministryVia==='overtime'){cards+='<div class="card soft"><p class="lbl s">Done today</p><p class="ttl">Ministry concept &rarr; '+mw.n+', Fri &middot; extra hours</p><p class="sub">Nothing could move, so you said so to '+mw.n+'. Logged and counted toward fairness. '+(mg?mw.n+' has it.':'Waiting for '+mw.n+'&rsquo;s &ldquo;got it.&rdquo;')+'</p></div>';}else{cards+='<div class="card soft"><p class="lbl s">Done today</p><p class="ttl">Ministry concept &rarr; Sana, Fri</p><p class="sub">Health&rsquo;s dashboard moved to Fri, Tariq agreed. '+(mg?'Sana has it.':'Waiting for Sana&rsquo;s &ldquo;got it.&rdquo;')+'</p></div>';}}
 cards+='<div class="card"><p class="lbl a">Meeting &middot; 2:00 pm</p><p class="ttl">Health portal, with Mr. Tariq</p><p class="sub" style="margin-bottom:9px">'+(done?(S.ministryVia==='trade'?'Briefing ready. The trade is already agreed, confirm the Friday date with him in the room.':'Briefing ready: on track for Monday&rsquo;s demo, one thing at risk. No trade needed today.'):'Briefing ready: on track for Monday&rsquo;s demo, one thing at risk. Good moment to raise the trade, he usually accommodates.')+'</p><button class="btn" data-go="brief">Read the brief</button></div>';
 
 cards+='<div class="card"><p class="lbl">Someone&rsquo;s at the edge</p><p class="ttl">Usman raised his flag</p><p class="sub" style="margin-bottom:9px">Education portal through next week, two asks queued behind it. I&rsquo;ve paused new asks to him until you say otherwise.</p><button class="btn" data-a="team-usman">See his plate</button></div>';
 var pulse=done?'Morning, Hamza. The Ministry is handled. One meeting to read in for, then the rest can wait.':'Morning, Hamza. Two things need you before noon, one of them is the Ministry. The rest can wait.';
 var edge=ORDER.filter(function(i){return stateOf(i)==='edge';}).length,room=ORDER.filter(function(i){return stateOf(i)==='room';}).length;
 var sw=dayStrip();
 if(S.homeView!=='today')return topbar()+sw+V.week();
 return topbar()+sw+'<p class="voice">'+pulse+'</p><p class="sec first">Needs you</p>'+cards+
 '<div class="card soft" style="margin-top:10px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" data-tab="asks"><span class="sub" style="display:flex;align-items:center;gap:7px">'+I('ti-clock-hour-4',15)+'4 more, none urgent: 2 asks to triage, 1 email to read, 1 approval to chase</span><span class="link">Review</span></div>'+
 (S.hiraChecked?'':'<div class="card soft" style="margin-top:8px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" data-go="checkin"><span class="sub" style="display:flex;align-items:flex-start;gap:7px">'+I('ti-eye',15,'margin-top:1px')+'<span>Worth a glance: Hira&rsquo;s Education form has been quiet 3 days <i>and</i> Adeel&rsquo;s Monday email is unanswered. Due Thu.</span></span>'+I('ti-chevron-right',15,'color:var(--text-muted);flex:none')+'</div>')+
 '<div class="card soft" style="margin-top:8px;display:flex;align-items:center;justify-content:space-between;cursor:pointer" data-tab="team"><span class="sub" style="display:flex;align-items:center;gap:7px">'+I('ti-users',15)+'Your team: '+edge+' at the edge, '+room+' with room</span>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div>'+
 askbar('Ask Sambhal anything')+'<div style="height:6px"></div>';
};

function weekData(){var done=S.ministry!=='pending';return [['Wed','7',[['Police filters','Ahmed'],['Police icon set','Faisal'],['Booking flow revision','Ahmed']],true],['Thu','8',[['iOS booking screens','Ahmed'],['Motorway forms','Bilal'],['Education form','Hira'],['Enrolment form fields','unassigned']]],['Fri','9',[['QA freeze, all flows','team'],done?['Ministry portal concept',D[S.ministryTo].n]:null,done&&S.ministryVia==='trade'?['Health dashboard spec','Sana']:null].filter(Boolean)],['Sat','10',[]],['Sun','11',[]],['Mon','12',[['Health demo','Mr. Tariq'],done?null:['Ministry portal concept','unassigned, hard case']].filter(Boolean)],['Tue','13',[['Motorway tweaks','Omar'],done&&S.ministryVia==='trade'?null:['Health dashboard spec','Sana'],['Dashboard revision','Ahmed']].filter(Boolean)]];}
function dayStrip(){var w=weekData();return '<div class="strip">'+w.map(function(d){var on=(S.homeView==='today'&&d[3])||S.homeView===d[1];var dots=d[2].length?'<span class="dots">'+d[2].slice(0,4).map(function(){return '<i'+(d[2].length>=4?' class="w"':'')+'></i>';}).join('')+'</span>':'<span class="dots"></span>';return '<div class="day '+(on?'on':'')+'" data-hv="'+(d[3]?'today':d[1])+'"><span class="d">'+d[0]+'</span><span class="n">'+d[1]+'</span>'+dots+'</div>';}).join('')+'</div>';}
V.week=function(){
 var done=S.ministry!=='pending';
 var w=weekData();var sel=w.filter(function(d){return d[1]===S.homeView;})[0];
 var h='<p class="voice">'+(sel?(sel[2].length?sel[2].length+' due on '+sel[0]+' '+sel[1]+(sel[2].length>=4?'. Heavy day.':'.'):'Nothing due on '+sel[0]+' '+sel[1]+'.'):'')+'</p>';
 if(sel&&sel[2].length)h+='<p class="sec first">Due</p><div class="list">'+sel[2].map(function(x){return '<div class="it row"><span class="sub" style="color:var(--text-primary)">'+x[0]+'</span><span class="mut">'+x[1]+'</span></div>';}).join('')+'</div>';
 var days=w.filter(function(d){return d[2].length;});
 h+='<p class="sec">The week</p><div class="list">'+days.map(function(d){return '<div class="it"><p class="lbl" style="margin-bottom:4px">'+d[0]+' '+d[1]+(d[2].length>=4?' <span style="color:var(--text-warning)">&middot; heavy</span>':'')+'</p>'+d[2].map(function(x){return '<p class="sub" style="display:flex;justify-content:space-between;gap:8px"><span style="color:var(--text-primary)">'+x[0]+'</span><span class="mut" style="white-space:nowrap">'+x[1]+'</span></p>';}).join('')+'</div>';}).join('')+'</div>';
 var free=ORDER.filter(function(i){return stateOf(i)==='room';}).map(function(i){return D[i].n;}).join(', ');
 var edge=ORDER.filter(function(i){return stateOf(i)==='edge';}).map(function(i){return D[i].n;}).join(', ');
 h+='<p class="sec">People</p><div class="list"><div class="it"><p class="lbl s" style="margin-bottom:2px">Room this week</p><p class="sub" style="color:var(--text-primary)">'+free+'</p></div><div class="it"><p class="lbl w" style="margin-bottom:2px">At the edge</p><p class="sub" style="color:var(--text-primary)">'+edge+'</p></div></div>';
 h+='<p class="sec">Risks</p><div class="list"><div class="it"><p class="sub" style="color:var(--text-primary)">Thursday has four deadlines, three of them Ahmed&rsquo;s and Hira&rsquo;s. If the eligibility API slips again, the iOS screens slip with it.</p></div>'+(done?'':'<div class="it"><p class="sub" style="color:var(--text-primary)">The Ministry concept is still unassigned for Monday. Decide today or it eats the weekend.</p></div>')+'</div>';
 h+='<p class="foot">'+I('ti-calendar',14,'margin-top:1px')+'Same facts as Today, laid out by day instead of by urgency. Tap today to get the ranked feed back.</p>';
 return h+'<div style="height:6px"></div>';
};

V.asks=function(){
 var h='';
 h+=topbar('Asks');
 h+='<p class="voice">'+(S.ministry==='pending'?'Three waiting on you, one email to read.':'Two waiting on you, one email to read.')+'</p>';
 h+='<p class="sec first">Waiting for you</p><div class="list">';
 if(S.ministry==='pending')h+='<div class="it" data-go="hard" style="cursor:pointer"><p class="lbl w">Hard case &middot; due Mon</p><div class="row"><p class="ttl" style="margin:0">Ministry portal concept</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">From Mr. Khan (head) &middot; coordinator Ms. Noor</p></div>';
 if(S.policeState==='pending')h+='<div class="it" data-go="triage" style="cursor:pointer"><p class="lbl">Needs design judgment &middot; due Thu</p><div class="row"><p class="ttl" style="margin:0">Update the incident dashboard with new filters</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">Police &middot; Mr. Raza (head) &middot; coordinator Ms. Hina</p></div>';
 h+='<div class="it" data-stub="edu" style="cursor:pointer"><p class="lbl">Quick &middot; due Thu</p><div class="row"><p class="ttl" style="margin:0">Revise the enrolment form fields</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">Education &middot; Ms. Farah (head) &middot; coordinator Mr. Adeel</p></div>';
 S.confirmedQueue.forEach(function(q){h+='<div class="it" data-stub="queued" style="cursor:pointer"><p class="lbl a">From the Health email &middot; team deadline '+q.d+'</p><div class="row"><p class="ttl" style="margin:0">'+q.t+'</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">Health &middot; on the project: Ahmed, Sana</p></div>';});
 h+='</div>';
 var pend=(S.hItem1==='pending'?1:0)+(S.hItem2==='pending'?1:0);
 h+='<p class="sec">Emails to read</p><div class="list"><div class="it" data-go="intake" style="cursor:pointer"><p class="lbl s">Known channel &middot; to all teams</p><div class="row"><p class="ttl" style="margin:0">Citizen Health Portal: sprint 3 updates</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">From Ms. Ayesha (coordinator) &middot; Head: Mr. Tariq &middot; '+(pend?pend+' item'+(pend>1?'s':'')+' look like yours':'all items handled')+'</p></div></div>';
 var handed=[];
 if(S.ministry!=='pending')handed.push('Ministry portal concept &rarr; '+D[S.ministryTo].n+' &middot; Fri'+(S.ministryVia==='overtime'?' &middot; extra hours':''));
 if(S.policeState==='assigned')handed.push('Incident dashboard filters &rarr; '+D[S.policeTo].n+' &middot; Tue');
 if(handed.length){h+='<p class="sec">Recently handed off</p><div class="list">'+handed.map(function(x){return '<div class="it"><p class="sub">'+x+'</p></div>';}).join('')+'</div>';}
 h+='<p class="sec">To chase</p><div class="list"><div class="it" data-stub="approval" style="cursor:pointer"><div class="row"><p class="sub">Motorway forms, sent for approval 4 days ago, no reply yet</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div></div></div>';
 return h+'<div style="height:14px"></div>';
};

V.intake=function(){
 var h=backbar('Health portal email','From Ms. Ayesha &middot; to all teams')+'<p class="voice">New email on the Health portal. '+(((S.hItem1==='pending')+(S.hItem2==='pending'))===2?'Two items look like yours.':'Here&rsquo;s where it stands.')+'</p>';
 h+='<div class="card soft"><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">'+I('ti-mail',15,'color:var(--text-secondary)')+'<span class="pill s">Known channel</span><span class="mut" style="font-size:11px">To all teams &middot; 5 items</span></div><p class="ttl" style="font-size:14px;margin-bottom:2px">Citizen Health Portal: sprint 3 updates</p><p class="mut" style="margin-bottom:8px">From Ms. Ayesha (coordinator) &middot; Head: Mr. Tariq</p><div style="display:flex;align-items:center;gap:6px">'+I('ti-users',14,'color:var(--text-muted)')+'<span class="sub">On this project: <b style="font-weight:500;color:var(--text-primary)">Ahmed, Sana</b> <span class="mut">&middot; both know Health</span></span></div></div>';
 h+='<p class="sec">For design</p><div class="list">';
 function item(key,label,lcls,title,hint,confirmP){var st=S[key];var acts='';if(st==='pending'){acts='<div style="display:flex;gap:4px;flex:none"><button class="ico '+(confirmP?'p':'')+'" data-a="hyes-'+key+'" aria-label="Confirm">'+I('ti-check',15)+'</button><button class="ico" data-a="hno-'+key+'" aria-label="Not ours">'+I('ti-x',14)+'</button></div>';}else if(st==='yes'){acts='<span class="pill a">Sent to triage</span>';}else{acts='<span class="pill m">Not ours</span>';}return '<div class="it"><p class="lbl '+lcls+'">'+label+'</p><div style="display:flex;align-items:flex-start;gap:10px"><p class="ttl" style="flex:1;margin:0;font-size:14px;'+(st==='no'?'opacity:.5':'')+'">'+title+'</p>'+acts+'</div>'+hint+'</div>';}
 h+=item('hItem1','Labeled &middot; confident','s','Revise the appointment-booking flow for the new eligibility rules','<p class="mut" style="margin-top:7px;display:flex;align-items:center;gap:5px;font-size:11.5px">'+I('ti-history',13)+'2nd revision of this flow. Last changed three weeks ago, by Ahmed.</p><div style="display:flex;align-items:center;gap:10px;margin-top:7px;flex-wrap:wrap"><span class="mut" style="font-size:11.5px">Stakeholder said <b style="color:var(--text-secondary);font-weight:500">Fri</b></span><span class="mut">&middot;</span><span style="font-size:11.5px;color:var(--text-accent);display:inline-flex;align-items:center;gap:3px">Team deadline <b style="font-weight:600">Wed</b> '+I('ti-pencil',12)+'</span></div>',true);
 h+=item('hItem2','Possibly design','w','The dashboard numbers need to be clearer','<p class="mut" style="margin-top:7px;font-size:11.5px;line-height:1.45">Unlabeled, under QA&rsquo;s point. Mentions dashboard clarity, which usually lands with you. No deadline given.</p>',false);
 h+='</div>';
 h+='<p class="sec">Kept in the project brief</p><div class="card soft"><p class="sub" style="display:flex;gap:7px"><span class="mut" style="width:52px;flex:none">Backend</span>Eligibility API ready by Wednesday</p><p class="sub" style="display:flex;gap:7px;margin-top:4px"><span class="mut" style="width:52px;flex:none">QA</span>Regression pass next week</p><p class="sub" style="display:flex;gap:7px;margin-top:4px"><span class="mut" style="width:52px;flex:none">PM</span>Demo to the head on Monday</p><button class="link" style="margin-top:9px" data-go="brief">Open the Health portal brief '+I('ti-chevron-right',14)+'</button></div>';
 h+=askbar('Ask about this project or email');
 return h+'<div style="height:6px"></div>';
};

V.triage=function(){
 var sanaBusy=S.ministryTo==='sana';var ahmedBusy=S.ministryTo==='ahmed';
 var h=backbar('New ask','Police &middot; due Thu')+'<p class="voice">A new ask just landed from Police. Here&rsquo;s my read.</p>';
 h+='<div class="card soft"><div class="row" style="margin-bottom:5px"><span class="lbl w" style="margin:0">Due Thu &middot; from the email</span>'+I('ti-pencil',13,'color:var(--text-accent)')+'</div><p class="ttl" style="font-size:15px">Update the incident dashboard with new filters</p><p class="mut" style="margin-bottom:12px">From Mr. Raza (head) &middot; Coordinator: Ms. Hina</p><p class="lbl">Kind of work</p><div class="seg"><button>Deep</button><button class="on">Defined</button><button>Visual</button></div><div class="row" style="margin-top:9px"><span class="link" data-a="why">Why this read</span>'+I(S.why?'ti-chevron-up':'ti-chevron-down',15,'color:var(--text-accent)')+'</div>'+(S.why?'<p class="sub" style="margin-top:8px">A change to a screen that exists, requirements spelled out in the email, two Police dashboards shipped before. Needs judgment, not a new concept.</p>':'')+'</div>';
 h+='<p class="sec">Who should take it</p>';
 h+='<div class="card rec"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><span class="av av-ahmed" style="width:34px;height:34px;font-size:13px">A</span><div style="flex:1"><p class="ttl" style="font-size:15px;margin:0">Ahmed</p><p class="mut" style="font-size:11.5px">Deep problem-solver &middot; Police, Health</p></div><span class="pill a">Recommended</span></div>'+
 '<div style="display:flex;flex-direction:column;gap:6px">'+
 '<p class="sub" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span><b style="color:var(--text-primary);font-weight:500">Craft:</b> strong on dashboards, this is a defined change.</span></p>'+
 '<p class="sub" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span><b style="color:var(--text-primary);font-weight:500">Domain:</b> Police work lands well with him, he&rsquo;s shipped two Police projects and knows their rules.</span></p>'+
 '<p class="sub" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span><b style="color:var(--text-primary);font-weight:500">Continuity:</b> he holds the Police context already.</span></p>'+
 '<p class="sub" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-alert-triangle',15,'color:var(--text-warning);margin-top:1px')+'<span><b style="color:var(--text-primary);font-weight:500">Capacity:</b> '+D.ahmed.plate.map(function(p){return p.t+' '+p.d;}).join(', ')+'. No room before Mon'+(ahmedBusy?', and he&rsquo;s already on extra hours for the Ministry':'')+'.</span></p>'+
 '<p class="sub" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-alert-triangle',15,'color:var(--text-warning);margin-top:1px')+'<span><b style="color:var(--text-primary);font-weight:500">Fairness:</b> he&rsquo;s carried the last three Police asks.</span></p></div>'+
 '<p style="font-family:var(--voice);font-style:italic;font-size:13.5px;margin-top:12px;line-height:1.4">Best fit, but he&rsquo;s close to the edge.</p></div>';
 h+='<div class="card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><span class="av av-sana">S</span><div style="flex:1"><p class="ttl" style="font-size:14px;margin:0">Sana</p><p class="mut" style="font-size:11.5px">Deep problem-solver &middot; Health, Excise, Education</p></div><span class="mut" style="font-size:11px">'+(sanaBusy?'Ministry Fri':'Room Fri')+'</span></div><p class="sub">'+(sanaBusy?'Strong craft, but she just took the Ministry concept for Friday. Taking this too would put her at the edge as well.':'Strong craft and real room. Her domains are Health, Excise and Education; this would be her first Police project, so expect a day of reading in.')+'</p></div>';
 h+='<div class="btns" style="margin:14px 14px 6px"><button class="btn p" style="flex:1;height:40px;font-size:13px" data-a="assign-ahmed">Assign to Ahmed</button><button class="btn" style="flex:1;height:40px;font-size:13px" data-a="assign-sana">Assign to Sana</button></div><div style="text-align:center;padding:0 14px 4px"><button class="link" data-stub="options">Other options</button></div>';
 h+='<p class="foot">'+I('ti-eye',14,'margin-top:1px')+'Whoever you pick, I&rsquo;ll let them know and keep the work visible, without them having to report back.</p>';
 return h;
};

V.hard=function(){
 var h=backbar('New ask','Ministry &middot; due Mon')+'<p class="voice">A new ask from the Ministry, and it&rsquo;s a hard one.</p>';
 h+='<div class="card soft"><div class="row" style="margin-bottom:5px"><span class="lbl w" style="margin:0">Due Mon &middot; from the email</span>'+I('ti-pencil',13,'color:var(--text-accent)')+'</div><p class="ttl" style="font-size:15px">Concept for the new citizen services portal</p><p class="mut" style="margin-bottom:12px">From Mr. Khan (head, demanding) &middot; Coordinator: Ms. Noor</p><p class="lbl">Kind of work</p><div class="seg"><button class="on">Deep</button><button>Defined</button><button>Visual</button></div><div class="row" style="margin-top:9px"><span class="link" data-a="why">Why this read</span>'+I(S.why?'ti-chevron-up':'ti-chevron-down',15,'color:var(--text-accent)')+'</div>'+(S.why?'<p class="sub" style="margin-top:8px">New section, requirements still open, nothing like it in this project yet. They also say &ldquo;high-end,&rdquo; everyone does, I&rsquo;m not weighting that.</p>':'')+'</div>';
 h+='<p class="sec">What&rsquo;s on their plates <span data-a="info" style="cursor:pointer;display:inline-flex">'+I('ti-info-circle',14)+'</span></p>';
 h+='<div class="list">'+['ahmed','sana','usman'].map(function(id){var pills={ahmed:['No room before Mon','w'],sana:['Room if Health slips','a'],usman:['Free next Wed','m']}[id];return '<div class="it"><div class="row" style="margin-bottom:3px"><span style="font-size:13.5px;font-weight:500">'+D[id].n+'</span><span class="pill '+pills[1]+'" style="padding:2px 0;background:none;border:none">'+pills[0]+'</span></div>'+plateRows(id)+(id==='sana'?'<p class="mut" style="font-size:11.5px">(4 days of slack on the Health dashboard)</p>':'')+'</div>';}).join('')+'</div>';
 h+='<p class="sec">Your real options</p>';
 h+='<div class="card rec" data-go="trade" style="cursor:pointer"><p class="lbl a">Recommended &middot; Trade with Health</p><div style="display:flex;gap:8px;align-items:flex-start"><div style="flex:1"><p class="ttl" style="font-size:14px">Slip Health&rsquo;s dashboard, free Sana</p><p class="sub">Four days of slack there, and Mr. Tariq is tagged &ldquo;flexible on dates.&rdquo; Cost: one conversation with him.</p></div>'+I('ti-chevron-right',16,'color:var(--text-muted);margin-top:2px')+'</div></div>';
 [['Pair','Ahmed directs, Zain builds','Two days of Ahmed&rsquo;s direction between his deadlines, Zain executes. Tight, but Zain gets real stretch.','pair'],['Shift','Move the Police filters off Ahmed to Hira','Frees Ahmed&rsquo;s Wednesday. Cost: Hira hasn&rsquo;t worked on Police before, so budget a day of reading in.','shift'],['Buy time','Ask the Ministry for Wednesday, or wait for Usman','Honest, but this head is demanding. Low odds either way, worth knowing it&rsquo;s on the table.','buytime']].forEach(function(o){h+='<div class="card" data-stub="'+o[3]+'" style="cursor:pointer"><p class="lbl">'+o[0]+'</p><div style="display:flex;gap:8px;align-items:flex-start"><div style="flex:1"><p class="ttl" style="font-size:14px">'+o[1]+'</p><p class="sub">'+o[2]+'</p></div>'+I('ti-chevron-right',16,'color:var(--text-muted);margin-top:2px')+'</div></div>';});
 h+='<div class="card" data-go="overtime" style="cursor:pointer;border-style:dashed"><p class="lbl w">If nothing can move &middot; extra hours</p><div style="display:flex;gap:8px;align-items:flex-start"><div style="flex:1"><p class="ttl" style="font-size:14px">Assign it anyway, on top of someone&rsquo;s week</p><p class="sub">No trade-off, just overtime. If you go this way, say so to them, and I&rsquo;ll count it so it isn&rsquo;t the same person next time.</p></div>'+I('ti-chevron-right',16,'color:var(--text-muted);margin-top:2px')+'</div></div>';
 h+='<div style="text-align:center;padding:12px 14px 4px"><button class="link" data-stub="combine">Combine options</button></div>';
 h+='<p class="foot">'+I('ti-shield-check',14,'margin-top:1px')+'Nobody gets silently overloaded. Whichever you pick, I&rsquo;ll set it up and keep it visible.</p>';
 return h;
};

V.trade=function(){
 var h=backbar('Trade with Health','Ministry concept, due Mon');
 h+='<p class="voice sm">This one is a conversation, not a tap. You talk to Mr. Tariq. I&rsquo;ll prepare the ask and set everything up once he answers.</p>';
 h+='<div class="card soft"><p class="lbl">The trade</p><div class="sub" style="display:flex;flex-direction:column;gap:6px"><p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-arrows-exchange',15,'color:var(--text-accent);margin-top:1px')+'<span>Health dashboard spec moves <b style="color:var(--text-primary);font-weight:500">Tue &rarr; Fri</b> (four days of slack, demo is Monday).</span></p><p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-user',15,'color:var(--text-accent);margin-top:1px')+'<span>Sana is free from Tuesday to take the Ministry concept for <b style="color:var(--text-primary);font-weight:500">Fri</b>, your buffer before their Monday. Citizen services is new ground for everyone, so domain doesn&rsquo;t decide this one.</span></p><p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-heart',15,'color:var(--text-accent);margin-top:1px')+'<span>Nobody is overloaded. Ahmed and Usman stay protected.</span></p></div></div>';
 h+='<p class="sec">What to say to Mr. Tariq</p><div class="card"><p class="sub" style="font-family:var(--voice);font-style:italic;font-size:14px;color:var(--text-primary)">&ldquo;Tariq, could Health&rsquo;s dashboard spec move from Tuesday to Friday? It still lands before your Monday demo, and it frees our senior designer for the Ministry&rsquo;s portal concept.&rdquo;</p><p class="mut" style="margin-top:8px;font-size:11.5px;display:flex;gap:5px;align-items:center">'+I('ti-history',13)+'Tagged flexible on dates, and the last three date moves went through. You&rsquo;re meeting him at 2:00 anyway.</p></div>';
 h+='<div style="padding:16px 14px 6px;display:flex;flex-direction:column;gap:8px"><button class="btn a full" data-a="trade-yes">Tariq agreed, set it up</button><button class="btn full" data-stub="tradeno">He said no</button></div>';
 h+='<p class="foot">'+I('ti-eye',14,'margin-top:1px')+'I never move a stakeholder&rsquo;s date on my own. You negotiate, I record the outcome.</p>';
 return h;
};

V.overtime=function(){
 var h=backbar('Assign anyway','Extra hours, no trade-off');
 h+='<p class="voice sm">Sometimes nothing can move. Then the honest option is extra hours: said out loud, counted, and not the same person every time.</p>';
 h+='<div class="card soft"><p class="lbl">The cost</p><p class="sub" style="color:var(--text-primary)">About two extra days this week, on top of their own deadlines. It is real time from someone&rsquo;s evenings, so I&rsquo;ll treat it that way.</p></div>';
 h+='<p class="sec">Who</p><div class="list">';
 var rows=[['ahmed','Four asks this month, the most on the team. Least fair pick, and citizen services is new ground for everyone.','w','Assign to Ahmed'],['sana','Two asks this month, and room from Tuesday if Health moves. Fairest pick.','s','Assign to Sana'],['usman','He raised his flag. I&rsquo;d leave him out unless you lift it.','w',null]];
 rows.forEach(function(r){var d=D[r[0]];h+='<div class="it"><div class="row" style="margin-bottom:3px"><span style="font-size:13.5px;font-weight:500">'+d.n+'</span><span style="font-size:11px;font-weight:500;color:'+(r[2]==='s'?'var(--text-success)':'var(--text-warning)')+'">'+roomOf(r[0])+'</span></div>'+plateRows(r[0])+'<p class="sub" style="margin-top:6px;display:flex;gap:6px;align-items:flex-start">'+I(r[2]==='s'?'ti-heart':'ti-alert-triangle',13,'color:'+(r[2]==='s'?'var(--text-success)':'var(--text-warning)')+';margin-top:1px')+r[1]+'</p>'+(r[3]?'<button class="btn sm" style="margin-top:8px" data-a="ot-'+r[0]+'">'+r[3]+', extra hours</button>':'<button class="btn sm" style="margin-top:8px" data-stub="unpause">Lift his flag first</button>')+'</div>';});
 h+='</div>';
 h+='<p class="sec">What I&rsquo;ll do</p><div class="list"><div class="it" style="display:flex;gap:9px;align-items:flex-start;padding:8px 0">'+I('ti-message',15,'color:var(--text-accent);margin-top:1px')+'<p class="sub" style="color:var(--text-primary)">Put it in the handoff as extra hours, in your words, not hidden inside a normal ask.</p></div><div class="it" style="display:flex;gap:9px;align-items:flex-start;padding:8px 0">'+I('ti-heart',15,'color:var(--text-accent);margin-top:1px')+'<p class="sub" style="color:var(--text-primary)">Count it toward fairness, so the next hard one goes to someone else.</p></div><div class="it" style="display:flex;gap:9px;align-items:flex-start;padding:8px 0">'+I('ti-eye',15,'color:var(--text-accent);margin-top:1px')+'<p class="sub" style="color:var(--text-primary)">Keep new asks away from them until it ships. The count shows on their plate, so you see it before I would.</p></div></div>';
 h+='<p class="foot">'+I('ti-shield-check',14,'margin-top:1px')+'Extra hours are your call to make. My job is to make sure it is visible, fair, and rare.</p>';
 return h;
};

V.handoff=function(){
 var pol=S.screen==='handoffPolice';
 var ot=!pol&&S.ministryVia==='overtime';
 var who=pol?D[S.policeTo]:D[S.ministryTo||'sana'];
 var title=pol?'Update the incident dashboard with new filters':'Concept for the new citizen services portal';
 var meta=pol?'Police &middot; Mr. Raza &middot; coordinator Ms. Hina':'Ministry &middot; Mr. Khan &middot; coordinator Ms. Noor';
 var stake=pol?'Thursday':'Monday';var team=pol?'Tuesday':S.teamDeadline==='Fri'?'Friday':S.teamDeadline;
 var ctx=pol?['The Police project brief, and the last two decisions','How Mr. Raza works: decides fast, wants one option','Ahmed&rsquo;s earlier dashboard file, and his notes','The original email thread']:['The Ministry brief: who&rsquo;s who, what they asked for','How Mr. Khan works: demanding, wants to see thinking early','The three citizen portals we&rsquo;ve shipped, for precedent','The original email thread'];
 var h=backbar('Hand off to '+who.n);
 h+='<p class="voice sm">'+(who.n==='Sana'?'She':'He')+'&rsquo;ll get this with the context '+(who.n==='Sana'?'she':'he')+' needs, not just the task.</p>';
 h+='<div class="card soft"><p class="lbl">'+meta+'</p><p class="ttl" style="margin:0">'+title+'</p></div>';
 h+='<p class="sec">Deadlines</p><div class="list"><div class="it row"><div><p class="mut" style="font-size:10.5px;margin-bottom:2px">Stakeholder said</p><p style="font-size:14px;font-weight:500;color:var(--text-secondary)">'+stake+'</p></div><span class="mut" style="font-size:11px">only you see this</span></div><div class="it row"><div><p style="font-size:10.5px;color:var(--text-accent);margin-bottom:2px">Team deadline &middot; what '+who.n+' sees</p><p style="font-size:14px;font-weight:600">'+team+'</p></div><div class="stp"><button data-a="tdm" aria-label="Earlier">&minus;</button><button data-a="tdp" aria-label="Later">+</button></div></div></div><p class="mut" style="margin:6px 18px 0;font-size:11px">Your usual buffer. Change it any time.</p>';
 h+='<p class="sec">Context going with it</p><div class="list">'+ctx.map(function(c){return '<div class="it" style="display:flex;gap:9px;align-items:center;padding:8px 0">'+I('ti-circle-check',16,'color:var(--text-success)')+'<p class="sub" style="color:var(--text-primary)">'+c+'</p></div>';}).join('')+'</div>';
 h+='<div style="margin:10px 14px 0;display:flex;flex-direction:column;gap:8px">'+(ot?'<div class="card warn" style="margin:0"><p class="lbl w">Extra hours &middot; said out loud</p><p class="sub" style="color:var(--text-primary);font-family:var(--voice);font-style:italic;font-size:13.5px">&ldquo;'+who.n+', I know this is on top of your week and nothing else could move. I&rsquo;m keeping new asks away from you until it ships, and it won&rsquo;t be you next time.&rdquo;</p><p class="mut" style="margin-top:6px;font-size:11px">In your words, editable. Goes with the handoff.</p></div>':'<div data-stub="note" style="display:flex;align-items:center;gap:9px;padding:10px 13px;border:0.5px dashed var(--border-strong);border-radius:12px;cursor:pointer">'+I('ti-message',15,'color:var(--text-muted)')+'<span class="mut" style="font-size:12.5px">Add a note for '+who.n+' (optional)</span></div>')+'<div class="row" style="padding:10px 13px;border:0.5px solid var(--border);border-radius:12px"><span class="sub" style="color:var(--text-primary)">Tell '+(pol?'Ms. Hina':'Ms. Noor')+' that '+who.n+' is on it</span><span class="toggle '+(S.loopIn?'on':'')+'" data-a="loop"><i></i></span></div></div>';
 h+='<div style="padding:14px 14px 6px"><button class="btn a full" data-a="'+(pol?'handoff-police':'handoff-ministry')+'">Hand off to '+who.n+'</button></div>';
 h+='<p class="foot">'+I('ti-eye',14,'margin-top:1px')+who.n+' taps &ldquo;got it&rdquo; and it&rsquo;s '+(who.n==='Sana'?'hers':'his')+'. I&rsquo;ll follow progress from the file, '+(who.n==='Sana'?'she':'he')+' never has to report back.</p>';
 return h;
};
V.handoffPolice=V.handoff;

V.handed=function(){
 var pol=S.lastHand==='police';var who=pol?D[S.policeTo]:D[S.ministryTo];var ot=!pol&&S.ministryVia==='overtime';
 var h=topbar()+'<p class="voice">Handed to '+who.n+'. '+(pol?'':ot?'The Ministry is off your plate. The cost is real, and now it is on the record.':'The Ministry is off your plate, and nobody got overloaded to do it.')+'</p>';
 h+='<div class="card soft"><p class="lbl s">Done</p><div class="sub" style="display:flex;flex-direction:column;gap:6px;color:var(--text-primary)"><p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span>'+who.n+' has the ask, the context and a '+(pol?'Tuesday':'Friday')+' deadline.</span></p>'+(pol?'':ot?'<p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-heart',15,'color:var(--text-warning);margin-top:1px')+'<span>Extra hours logged for '+who.n+' and counted toward fairness. New asks stay away from '+(who.n==='Sana'?'her':'him')+' until Friday.</span></p>':'<p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span>Health&rsquo;s dashboard spec now reads Fri in the brief, with the trade recorded.</span></p>')+'<p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-circle-check',15,'color:var(--text-success);margin-top:1px')+'<span>'+(pol?'Ms. Hina':'Ms. Noor')+' knows '+who.n+' is on it.</span></p><p style="display:flex;gap:8px;align-items:flex-start">'+I('ti-eye',15,'color:var(--text-accent);margin-top:1px')+'<span>I&rsquo;ll watch the Figma file. If it goes quiet near the deadline, you&rsquo;ll hear from me, not from a status report.</span></p></div></div>';
 h+='<div style="padding:16px 14px 6px;display:flex;flex-direction:column;gap:8px"><button class="btn p full" data-a="see-designer">See '+who.n+'&rsquo;s side</button><button class="btn full" data-tab="home">Back to Today</button></div>';
 h+='<p class="foot">'+I('ti-info-circle',14,'margin-top:1px')+'&ldquo;See '+who.n+'&rsquo;s side&rdquo; is a prototype switch. In the real product, '+(who.n==='Sana'?'she':'he')+' opens this on '+(who.n==='Sana'?'her':'his')+' own phone.</p>';
 return h;
};

V.designer=function(){
 var pol=S.lastHand==='police';var wid=pol?S.policeTo:S.ministryTo;var who=D[wid];var got=!!S.got[wid];var ot=!pol&&S.ministryVia==='overtime';
 var ini=who.n[0];
 var h='<div class="top" style="padding-top:14px"><div><span class="brand" style="font-family:var(--voice);font-style:italic;font-weight:500;font-size:19px">Sambhal</span><p class="mut" style="font-size:11px;margin-top:1px;letter-spacing:.04em">'+who.n.toUpperCase()+'&rsquo;S VIEW</p></div><span class="av av-'+wid+'">'+ini+'</span></div>';
 h+='<p class="voice">'+(got?'You&rsquo;re on it. Nothing to report, just do the work.':'Hamza handed you something new. Here&rsquo;s everything you need to start.')+'</p>';
 h+='<div class="card '+(got?'soft':'rec')+'"><p class="lbl w">Due '+(pol?'Tuesday':'Friday')+' &middot; '+(pol?'Police':'Ministry')+'</p><p class="ttl" style="font-size:15px">'+(pol?'Update the incident dashboard with new filters':'Concept for the new citizen services portal')+'</p><p class="mut" style="margin-bottom:10px">'+(pol?'Needs design judgment &middot; 2nd revision of this dashboard':'Deep, new work &middot; nothing like it in this project yet')+'</p><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:12px"><p class="sub" style="display:flex;align-items:center;gap:7px">'+I('ti-file-text',14,'color:var(--text-muted)')+(pol?'Police brief, last two decisions':'Ministry brief, who&rsquo;s who and what they asked for')+'</p><p class="sub" style="display:flex;align-items:center;gap:7px">'+I('ti-user',14,'color:var(--text-muted)')+(pol?'Mr. Raza decides fast, wants one option':'Mr. Khan is demanding, wants to see thinking early')+'</p><p class="sub" style="display:flex;align-items:center;gap:7px">'+I('ti-brand-figma',14,'color:var(--text-muted)')+(pol?'Ahmed&rsquo;s earlier dashboard file and notes':'The three citizen portals we&rsquo;ve shipped')+'</p></div>'+(ot?'<div class="card warn" style="margin:0 0 12px;padding:10px 12px"><p class="lbl w">From Hamza &middot; extra hours</p><p class="sub" style="color:var(--text-primary);font-family:var(--voice);font-style:italic;font-size:13px">&ldquo;I know this is on top of your week and nothing else could move. I&rsquo;m keeping new asks away from you until it ships, and it won&rsquo;t be you next time.&rdquo;</p></div>':'')+(got?'<span class="pill s">Got it &middot; it&rsquo;s yours</span>':'<button class="btn p full" style="height:40px" data-a="got-designer">Got it</button>')+'</div>';
 h+='<p class="sec">Your week</p><div class="list">'+plateRows(wid)+'</div>';
 var strengths=pol?['Deep problem-solving','Police','Health']:['Deep problem-solving','Health','Excise','Education'];
 h+='<p class="sec">Your strengths and domains <span style="font-weight:400">&middot; from what you&rsquo;ve shipped</span></p><div class="chips" style="padding-top:0">'+strengths.map(function(s,i){return '<span class="chip '+(i===0?'on':'')+'" style="'+(i===0?'background:var(--bg-accent);color:var(--text-accent);border-color:var(--bg-accent)':'')+'">'+s+'</span>';}).join('')+'</div>';
 h+='<div class="card soft" style="margin-top:4px"><div class="row" style="margin-bottom:6px"><span style="font-size:13.5px;font-weight:500;display:flex;align-items:center;gap:7px">'+I('ti-flag',16,'color:var(--text-warning)')+'I&rsquo;m at capacity</span><span class="toggle" data-stub="flag"><i></i></span></div><p class="sub" style="font-size:11.5px">Raising this pauses new asks to you and tells Hamza. No questions asked, no explanation needed.</p></div>';
 h+='<p class="foot">'+I('ti-eye-off',14,'margin-top:1px')+'You never report status here. Sambhal follows your work from the files. And you only ever see your own plate.</p>';
 h+='<div style="padding:0 14px 16px"><button class="btn full" data-a="back-lead">Back to Hamza&rsquo;s view</button></div>';
 return h;
};

V.projects=function(){
 var h=topbar('Projects')+'<p class="voice">Five in flight. One has a risk worth reading before 2:00.</p>';
 var rows=[['Citizen Health Portal','Health &middot; Mr. Tariq','On track &middot; 1 at risk','w','brief'],['Incident dashboard','Police &middot; Mr. Raza',(S.policeState==='assigned'?'2 asks, both assigned':'2 asks, 1 to triage'),'m','stub:police'],['Citizen services portal','Ministry &middot; Mr. Khan',(S.ministry==='pending'?'New &middot; hard case waiting':'New &middot; '+D[S.ministryTo].n+', Fri'),'a','stub:ministry'],['Education portal','Education &middot; Ms. Farah','Usman through next week','m','stub:education'],['Motorway forms','Motorway','Approval pending 4 days','m','stub:motorway']];
 var live=true;
 h+='<p class="sec first">In flight &middot; 5</p>';
 {h+='<div class="list">'+rows.map(function(r){var act=r[4].indexOf('stub:')===0?'data-stub="'+r[4].slice(5)+'"':'data-go="'+r[4]+'"';return '<div class="it" '+act+' style="cursor:pointer"><p class="lbl">'+r[1]+'</p><div class="row"><p class="ttl" style="margin:0;font-size:14px">'+r[0]+'</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut" style="color:'+(r[3]==='w'?'var(--text-warning)':r[3]==='a'?'var(--text-accent)':'var(--text-muted)')+'">'+r[2]+'</p></div>';}).join('')+'</div>';}
 var done=[['Excise e-licensing','Excise &middot; Mr. Saleem','Shipped Aug &middot; Sana, Faisal &middot; 2 tweaks since','completed'],['Citizen complaints app','Police &middot; Mr. Raza','Shipped Jun &middot; Ahmed, Maryam &middot; 1 tweak since','stub:done2'],['Vaccination records','Health &middot; Mr. Tariq','Shipped Mar &middot; Usman, Ali','stub:done3'],['Scholarship portal','Education &middot; Ms. Farah','Shipped Jan &middot; Sana, Bilal','stub:done4']];
 var open=S.projTab==='done';
 h+='<div class="card soft" style="margin-top:14px;cursor:pointer" data-ptab="'+(open?'live':'done')+'"><div class="row"><span class="sub" style="display:flex;align-items:center;gap:7px;color:var(--text-primary)">'+I('ti-archive',15,'color:var(--text-muted)')+'Shipped &middot; 4 <span class="mut">&middot; still yours when a tweak lands</span></span>'+I(open?'ti-chevron-up':'ti-chevron-down',15,'color:var(--text-muted)')+'</div></div>';
 if(open){h+='<div style="height:8px"></div><div class="list">'+done.map(function(r){var act=r[3].indexOf('stub:')===0?'data-stub="'+r[3].slice(5)+'"':'data-go="'+r[3]+'"';return '<div class="it" '+act+' style="cursor:pointer"><p class="lbl">'+r[1]+'</p><div class="row"><p class="ttl" style="margin:0;font-size:14px;color:var(--text-secondary)">'+r[0]+'</p>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div><p class="mut">'+r[2]+'</p></div>';}).join('')+'</div>';
 h+='<p class="foot">'+I('ti-archive',14,'margin-top:1px')+'A shipped project keeps its brief. When a sudden tweak arrives, it lands with the context and goes first to whoever built it.</p>';}
 return h+'<div style="height:14px"></div>';
};

V.completed=function(){
 var h=backbar('Excise e-licensing','Completed &middot; shipped Aug 2026');
 h+='<p class="voice sm">Live since August. Two small tweaks since, both went to Sana, both approved in one round.</p>';
 h+='<div class="card soft"><p class="lbl s">Shipped &middot; in use</p><p class="sub" style="color:var(--text-primary)">Online renewal of trade licences for the Excise department. 1.2M renewals a year.</p></div>';
 h+='<p class="sec">Who built it</p><div class="list"><div class="it"><p class="lbl" style="margin-bottom:2px">Your team</p><p class="sub" style="color:var(--text-primary)">Sana (lead), Faisal (visual) <span class="mut">&middot; a tweak goes to Sana first, she knows Excise</span></p></div><div class="it"><p class="lbl" style="margin-bottom:2px">Head</p><p class="sub" style="color:var(--text-primary)">Mr. Saleem <span class="mut">&middot; likes quick turnarounds, approves by WhatsApp</span></p></div><div class="it"><p class="lbl" style="margin-bottom:2px">Coordinator</p><p class="sub" style="color:var(--text-primary)">Mr. Imran <span class="mut">&middot; sends tweaks as one-line emails</span></p></div></div>';
 h+='<p class="sec">Since launch</p><div class="list"><div class="it"><p class="sub" style="color:var(--text-primary)">Fee table updated for the new rates.</p><p class="mut" style="font-size:11px;margin-top:2px">Sep 18 &middot; Sana &middot; approved in one round</p></div><div class="it"><p class="sub" style="color:var(--text-primary)">Added Urdu labels on the receipt.</p><p class="mut" style="font-size:11px;margin-top:2px">Aug 30 &middot; Sana &middot; approved in one round</p></div></div>';
 h+='<p class="sec">Files <span style="font-weight:400">&middot; indexed, not copied</span></p><div class="list"><div class="it row" data-stub="file" style="cursor:pointer"><div><p class="lbl" style="margin-bottom:2px">Figma</p><p class="sub" style="color:var(--text-primary);font-weight:500">Excise e-licensing, final</p><p class="mut" style="font-size:11.5px">Sana, Sep 18 &middot; v31</p></div>'+I('ti-external-link',16,'color:var(--text-accent)')+'</div><div class="it row" data-stub="file" style="cursor:pointer"><div><p class="lbl" style="margin-bottom:2px">GitHub</p><p class="sub" style="color:var(--text-primary);font-weight:500">excise-licensing / docs</p><p class="mut" style="font-size:11.5px">Last change Sep 20</p></div>'+I('ti-external-link',16,'color:var(--text-accent)')+'</div></div>';
 h+='<div style="padding:16px 14px 6px"><button class="btn p full" data-stub="tweak">Log a new tweak</button></div>';
 h+='<p class="foot">'+I('ti-history',14,'margin-top:1px')+'Decisions, people and files stay with the project after it ships, so a tweak six months later still lands with context.</p>';
 return h;
};

V.brief=function(){
 var traded=S.ministryVia==='trade';
 var h=backbar('Citizen Health Portal','Project brief &middot; updated 20 min ago');
 h+='<p class="voice sm">On track for Monday&rsquo;s demo, with one thing that could slip.</p>';
 h+='<div class="card warn" style="display:flex;gap:8px;align-items:flex-start">'+I('ti-alert-triangle',16,'color:var(--text-warning);margin-top:1px')+'<p class="sub" style="color:var(--text-primary)"><b>At risk:</b> the eligibility API (backend, due Wed) is a day late. If it slips further, Ahmed&rsquo;s booking flow can&rsquo;t be finished for Thursday.</p></div>';
 h+='<p class="sec">Commitments</p><div class="list" style="padding:0;border:2px solid var(--border-accent);overflow:hidden"><div style="padding:9px 13px;background:var(--bg-accent)"><p style="font-size:11px;font-weight:500;color:var(--text-accent)">What we committed, and to whom</p></div><div style="padding:4px 13px 6px">';
 [['iOS','Booking screens, final, by Thu <span class=mut>(Ahmed)</span>','slipping','w'],['QA','All flows frozen by Fri for regression','on track','s'],['Android','Dashboard spec by '+(traded?'<b style="font-weight:500">Fri</b> <span class=mut>(moved from Tue, Tariq agreed)</span>':'next Tue')+' <span class=mut>(Sana)</span>','on track','s']].forEach(function(c,i){h+='<div style="padding:8px 0;'+(i<2?'border-bottom:0.5px solid var(--border)':'')+'"><p class="lbl" style="margin-bottom:2px">'+c[0]+'</p><div class="row"><p class="sub" style="color:var(--text-primary)">'+c[1]+'</p><span style="font-size:11px;color:'+(c[3]==='w'?'var(--text-warning)':'var(--text-success)')+';flex:none">'+c[2]+'</span></div></div>';});
 h+='</div><div style="padding:9px 13px;background:var(--surface-1);border-top:0.5px solid var(--border)"><p style="font-size:11px;font-weight:500;color:var(--text-secondary);margin-bottom:5px">Owed to us</p><p class="lbl" style="margin-bottom:2px">Backend</p><div class="row"><p class="sub" style="color:var(--text-primary)">Eligibility API by Wed</p><span style="font-size:11px;color:var(--text-warning)">a day late</span></div></div></div>';
 h+='<p class="sec">Your items</p><div class="list"><div class="it row"><div><p class="lbl" style="margin-bottom:2px">Ahmed &middot; Wed</p><p class="sub" style="color:var(--text-primary)">Booking flow revision</p></div><span class="mut" style="font-size:11px">in progress</span></div>';
 if(S.hItem1==='yes')h+='<div class="it row"><div><p class="lbl a" style="margin-bottom:2px">From sprint 3 email &middot; Wed</p><p class="sub" style="color:var(--text-primary)">Booking flow, eligibility rules</p></div><span class="mut" style="font-size:11px;color:var(--text-accent)">in triage</span></div>';
 h+='<div class="it row"><div><p class="lbl '+(S.hItem2==='yes'?'a':'')+'" style="margin-bottom:2px">'+(S.hItem2==='yes'?'From sprint 3 email &middot; no deadline':'Unassigned &middot; no deadline')+'</p><p class="sub" style="color:var(--text-primary)">Dashboard clarity</p></div><span style="font-size:11px;color:var(--text-warning)">'+(S.hItem2==='yes'?'in triage':S.hItem2==='no'?'not ours':'unconfirmed')+'</span></div></div>';
 h+='<p class="sec">Recent decisions</p><div class="list"><div class="it"><p class="sub" style="color:var(--text-primary)">Keep booking on a single page.</p><p class="mut" style="font-size:11px;margin-top:2px">Oct 1 &middot; the head preferred one screen over steps</p></div><div class="it"><p class="sub" style="color:var(--text-primary)">Dropped the calendar picker.</p><p class="mut" style="font-size:11px;margin-top:2px">Sep 24 &middot; QA flagged it on low-end phones</p></div>'+(traded?'<div class="it"><p class="sub" style="color:var(--text-primary)">Dashboard spec moved to Friday.</p><p class="mut" style="font-size:11px;margin-top:2px">Today &middot; traded to free Sana for the Ministry, Tariq agreed</p></div>':'')+'</div>';
 h+='<p class="sec">Files <span style="font-weight:400">&middot; indexed, not copied</span></p><div class="list">';
 [['Figma','Citizen Health Portal, booking flow','Ahmed, 2 hours ago &middot; v14'],['GitHub','health-portal / docs / requirements.md','PM team, yesterday'],['Drive','Eligibility rules, final.pdf','Shared by Ms. Ayesha, Sep 28'],['Email attachment','Demo agenda, Monday.docx','From the sprint 3 thread']].forEach(function(f){h+='<div class="it row" data-stub="file" style="cursor:pointer"><div style="flex:1;min-width:0"><p class="lbl" style="margin-bottom:2px">'+f[0]+'</p><p class="sub" style="color:var(--text-primary);font-weight:500">'+f[1]+'</p><p class="mut" style="font-size:11.5px">'+f[2]+'</p></div>'+I('ti-external-link',16,'color:var(--text-accent)')+'</div>';});
 h+='</div><div style="margin:8px 18px 0"><button class="link" data-stub="attach">'+I('ti-paperclip',13)+'Attach or link a file not in these sources</button></div>';
 h+='<p class="sec">People</p><div class="list"><div class="it"><p class="lbl" style="margin-bottom:2px">Your team</p><p class="sub" style="color:var(--text-primary)">Ahmed, Sana</p></div><div class="it"><p class="lbl" style="margin-bottom:2px">Head</p><p class="sub" style="color:var(--text-primary)">Mr. Tariq <span class="mut">&middot; tagged: decides fast, one option, flexible on dates</span></p></div><div class="it"><p class="lbl" style="margin-bottom:2px">Coordinator</p><p class="sub" style="color:var(--text-primary)">Ms. Ayesha <span class="mut">&middot; daily contact, replies same day</span></p></div></div>';
 h+='<p class="sec">Your notes <span style="font-weight:400">&middot; private</span></p><div class="card soft" style="border:0.5px dashed var(--border-strong)"><p class="sub" style="color:var(--text-primary);margin-bottom:6px">Head hinted the demo may move to Tuesday. Don&rsquo;t commit Sana&rsquo;s Thursday until confirmed.</p><button class="link" data-stub="note2">'+I('ti-plus',13)+'Add a note</button></div>';
 h+='<div class="card" style="margin-top:12px;cursor:pointer" data-stub="timeline"><div class="row"><span class="sub" style="display:flex;align-items:center;gap:6px">'+I('ti-history',14)+'Timeline &middot; '+(traded?'15':'14')+' events</span>'+I('ti-chevron-right',15,'color:var(--text-muted)')+'</div></div>';
 h+=askbar('Ask about this project');
 return h+'<div style="height:6px"></div>';
};

V.team=function(){
 var f=S.teamFilter;var ids=ORDER.filter(function(i){return f==='all'||D[i].k===f;});
 var edge=ids.filter(function(i){return stateOf(i)==='edge';}),steady=ids.filter(function(i){return stateOf(i)==='steady';}),room=ids.filter(function(i){return stateOf(i)==='room';});
 var h=topbar('Your team');
 var allEdge=ORDER.filter(function(i){return stateOf(i)==='edge';}).length,allRoom=ORDER.filter(function(i){return stateOf(i)==='room';}).length;
 h+='<p class="voice sm">'+allEdge+' at the edge, '+allRoom+' with room. Usman flagged it himself.'+(S.ministryVia==='trade'?' Sana is stretched until Friday, by your call.':S.ministryVia==='overtime'?' '+D[S.ministryTo].n+' is on extra hours this week, by your call.':'')+'</p>';
 h+='<div class="chips">'+[['all','All 10'],['deep','Deep'],['fast','Fast'],['visual','Visual']].map(function(c){return '<button class="chip '+(f===c[0]?'on':'')+'" data-filter="'+c[0]+'">'+c[1]+'</button>';}).join('')+'</div>';
 function row(id){var d=D[id],open=!!S.teamOpen[id],st=stateOf(id);var pillc=st==='edge'?'var(--text-warning)':st==='room'?'var(--text-success)':'var(--text-muted)';var head='<div class="row" data-open="'+id+'" style="cursor:pointer"><div style="display:flex;gap:10px;align-items:flex-start"><span class="av av-'+id+'" style="margin-top:2px">'+d.n[0]+'</span><div><p class="mut" style="font-size:10.5px;margin-bottom:2px">'+d.s+(d.dom?' &middot; '+d.dom.join(', '):'')+(d.flag?' &middot; flagged':'')+'</p><p style="font-size:14px;font-weight:500">'+d.n+'</p>'+(open?'':'<p class="sub" style="margin-top:3px">'+(d.plate.length?d.plate[0].t+' &middot; '+d.plate[0].d+(d.plate.length>1?' <span class=mut>+'+(d.plate.length-1)+' more</span>':''):'Nothing due this week')+(d.plate[0]&&d.plate[0].quiet?' <span style="color:var(--text-muted)">&middot; quiet 3 days</span>':'')+'</p>')+'</div></div><div style="display:flex;align-items:center;gap:8px"><span style="font-size:11px;font-weight:500;color:'+pillc+';white-space:nowrap">'+roomOf(id)+'</span>'+I(open?'ti-chevron-up':'ti-chevron-down',15,'color:var(--text-muted)')+'</div></div>';if(open){head+='<div style="margin-top:9px;display:flex;flex-direction:column;gap:4px">'+plateRows(id)+'</div>'+(d.care?'<p class="sub" style="margin-top:9px;display:flex;gap:6px;align-items:flex-start">'+I('ti-heart',13,'color:var(--text-warning);margin-top:1px')+d.care+'</p>':'')+(d.flag?'<p class="sub" style="margin-top:9px;display:flex;gap:6px;align-items:flex-start">'+I('ti-flag',13,'color:var(--text-warning);margin-top:1px')+'He raised the flag himself. New asks are paused until you lift it. <button class="link" data-stub="unpause" style="font-size:12px">Lift it</button></p>':'')+(id===S.ministryTo&&S.ministryVia==='trade'?'<p class="sub" style="margin-top:9px;display:flex;gap:6px;align-items:flex-start">'+I('ti-heart',13,'color:var(--text-warning);margin-top:1px')+'Stretched by your Ministry call. I&rsquo;ll keep new asks away from her until Friday.</p>':'')+(id===S.ministryTo&&S.ministryVia==='overtime'?'<p class="sub" style="margin-top:9px;display:flex;gap:6px;align-items:flex-start">'+I('ti-heart',13,'color:var(--text-warning);margin-top:1px')+'Extra hours this week for the Ministry, by your call and said out loud. Counted toward fairness; new asks stay away until Friday.</p>':'');}return '<div class="it" style="'+(open?'background:var(--surface-1);margin:0 -13px;padding:11px 13px':'')+'">'+head+'</div>';}
 function group(lbl,cls,arr){if(!arr.length)return '';return '<p class="sec" style="margin-top:10px"><span class="lbl '+cls+'" style="margin:0">'+lbl+' &middot; '+arr.length+'</span></p><div class="list">'+arr.map(row).join('')+'</div>';}
 h+=group('At the edge','w',edge)+group('Steady','',steady)+group('Has room','s',room);
 return h+'<div style="height:14px"></div>';
};

V.checkin=function(){
 var h=backbar('Check in with Hira','Education form, due Thu');
 h+='<p class="voice sm">Two signals, not one: her file has been quiet for three days, and the coordinator&rsquo;s email is unanswered. Might be stuck, might be fine. A light touch, not a status request.</p>';
 h+='<div class="card soft"><p class="lbl">What I know</p><div class="sub" style="display:flex;flex-direction:column;gap:5px"><p style="display:flex;gap:7px;align-items:center">'+I('ti-brand-figma',14,'color:var(--text-muted)')+'Education form, last edit Friday, 2 frames changed</p><p style="display:flex;gap:7px;align-items:center">'+I('ti-mail',14,'color:var(--text-muted)')+'Mr. Adeel (coordinator) sent revised copy Monday, no reply yet</p><p style="display:flex;gap:7px;align-items:center">'+I('ti-clock-hour-4',14,'color:var(--text-muted)')+'Due Thursday, two days away</p></div></div>';
 h+='<p class="sec">A message, if you want one</p><div class="card"><p class="sub" style="font-family:var(--voice);font-style:italic;font-size:14px;color:var(--text-primary)">&ldquo;Hira, quick one: the Education form is due Thursday and I noticed Adeel sent new copy on Monday. Anything blocking you? Happy to look at it together.&rdquo;</p></div>';
 h+='<div style="padding:16px 14px 6px;display:flex;flex-direction:column;gap:8px"><button class="btn p full" data-a="checkin-send">Send on WhatsApp</button><button class="btn full" data-a="checkin-skip">I&rsquo;ll just talk to her</button></div>';
 h+='<p class="foot">'+I('ti-eye-off',14,'margin-top:1px')+'I never message your designers on my own. This goes out as you, only when you send it.</p>';
 return h;
};

V.ask=function(){
 var h=backbar('Ask Sambhal','about your projects and people');
 h+='<p class="voice sm">Ask me anything the project memory holds. I cite where the answer came from, and I say so when I don&rsquo;t know.</p>';
 h+='<div style="height:8px"></div><div class="bubble-u"><span>Get me the Figma for the Health booking flow</span></div><div class="bubble-a">'+I('ti-sparkles',15,'color:var(--text-accent);margin-top:9px')+'<div><p>Here it is. Ahmed updated it two hours ago, version 14.</p><p style="color:var(--text-accent);margin-top:6px;display:flex;align-items:center;gap:5px;font-size:12.5px">'+I('ti-brand-figma',14)+'Citizen Health Portal, booking flow '+I('ti-external-link',13)+'</p><p class="mut" style="font-size:11px;margin-top:6px">From the Health portal file index</p></div></div>';
 h+='<div class="bubble-u"><span>What did we commit to iOS?</span></div><div class="bubble-a">'+I('ti-sparkles',15,'color:var(--text-accent);margin-top:9px')+'<div><p>Final booking screens by Thursday, Ahmed&rsquo;s. It&rsquo;s marked slipping because the backend API is a day late.</p><p class="mut" style="font-size:11px;margin-top:6px">From the Health portal commitments, and the sprint 3 thread</p></div></div>';
 h+='<div class="bubble-u"><span>When is the Motorway launch?</span></div><div class="bubble-a">'+I('ti-sparkles',15,'color:var(--text-accent);margin-top:9px')+'<div><p>I don&rsquo;t have a launch date for Motorway. The last thread mentions approvals, not a launch. Want me to ask Mr. Adeel?</p></div></div>';
 h+='<div class="card soft" style="margin-top:6px"><p class="lbl">Prototype note</p><p class="sub">These three exchanges are fixed examples. The live version answers free text over the indexed emails, files and briefs, with a source under every answer.</p></div>';
 h+=askbar('Ask about a project, a person, a file');
 return h;
};

V.stub=function(){
 var h=backbar(S.stubTitle);
 h+='<div style="padding:10px 14px 0"><div class="card soft"><p class="lbl">Out of scope for this prototype</p><p class="sub" style="color:var(--text-primary);line-height:1.55">'+S.stubText+'</p></div></div>';
 h+='<div style="padding:14px 14px 0"><button class="btn full" data-a="back">Back</button></div>';
 return h;
};

var STUBS={
 done2:['Citizen complaints app','Only the Excise e-licensing brief is built as a completed-project example. Each shipped project would keep the same compact brief: who built it, how the head works, tweaks since launch, files.'],
 done3:['Vaccination records','Only the Excise e-licensing brief is built as a completed-project example.'],
 done4:['Scholarship portal','Only the Excise e-licensing brief is built as a completed-project example.'],
 tweak:['Log a new tweak','This opens a short intake for the tweak (or it arrives by email and is read like any other ask). It goes to triage with continuity weighted first: Sana built it, so she leads the recommendation, with capacity and fairness still checked. Not built here.'],
 pair:['Pair: Ahmed directs, Zain builds','This would open a handoff with two people on it: Ahmed as the thinker for two days of direction, Zain as the hands. Both would see it on their own plates, with Ahmed&rsquo;s share kept small enough not to tip him over. The case study covers the pairing logic; it isn&rsquo;t built here.'],
 shift:['Shift: Police filters to Hira','This would move the Police filters from Ahmed to Hira, tell Mr. Raza&rsquo;s coordinator, and free Ahmed&rsquo;s Wednesday for the Ministry. Because Hira hasn&rsquo;t done Police work before, Sambhal would budget a day of reading in and note the project on her domains once it ships.'],
 buytime:['Buy time','This would draft the ask to the Ministry for a Wednesday deadline, with Mr. Khan&rsquo;s history (demanding, rarely moves) shown next to it, and the fallback of waiting for Usman next Wednesday. You send it, Sambhal records the answer.'],
 combine:['Combine options','In the full product you could stack levers: trade with Health and pair Sana with Zain for the build. Sambhal would recompute everyone&rsquo;s plate as you combine. Not built here.'],
 tradeno:['He said no','Sambhal would fall back to the next-best option (the pair) with the trade struck through and the reason recorded, so the next time a Health trade comes up it knows Mr. Tariq was tight this week. The flow is out of scope here; go back and take the trade to continue the walkthrough.'],
 options:['Other options','This would show the rest of the team filtered to who can do defined dashboard work, with the same five-way read for each. Only Ahmed and Sana are modeled in this prototype.'],
 edu:['Revise the enrolment form fields','A quick, defined ask. In the full product this opens the same triage screen with a one-tap recommendation (Zain, has room now, Education&rsquo;s coordinator is easygoing). Not built here; the Police ask shows the triage pattern.'],
 queued:['Booking flow, eligibility rules','Confirmed from the Health email. In the full product this is now a normal ask in the triage queue, with Ahmed as the obvious continuity pick. Not built here.'],
 approval:['Chase an approval','Sambhal would show the thread, who it&rsquo;s waiting on (Mr. Adeel), and a one-line nudge you can send. When the approval lands, it records the review count for the learning loop.'],
 police:['Incident dashboard brief','Only the Health portal brief is built in this prototype. The Police brief would follow the same structure: status and risk, commitments by team, your items, decisions, files, people, notes, timeline.'],
 ministry:['Citizen services portal brief','A new project, so its brief starts thin: the ask, the head&rsquo;s style, the coordinator, and the three portals we shipped before as precedent. It fills as emails and files arrive. Not built here.'],
 education:['Education portal brief','Only the Health portal brief is built in this prototype.'],
 motorway:['Motorway forms brief','Only the Health portal brief is built in this prototype.'],
 file:['Open the file','This would open the file where it lives (Figma, GitHub, Drive or the mail attachment), with the source enforcing access. Sambhal indexes files, it never copies them.'],
 attach:['Attach or link a file','For the one-off file that lives nowhere connected: pick it from your phone or paste a link, and Sambhal files it under this project. Not built here.'],
 note:['Add a note','A short private note that travels with the handoff. Not built here.'],
 note2:['Add a note','Private notes live only in your brief. Designers never see them. Not built here.'],
 timeline:['Timeline','Every ask, decision, revision and approval on this project, newest first, with review-round counts. This is the substrate the learning loop reads from. Not built here.'],
 flag:['I&rsquo;m at capacity','In the real product this pauses new asks to you immediately and tells Hamza, with no explanation required. Usman&rsquo;s flag on the Team screen shows what Hamza sees.'],
 unpause:['Lift the flag','Only you can lift it, and Usman sees that you did. Not built here.']
};

/* ---------- render + events ---------- */
var lastScreen=null;
function render(){
 var isTab=['home','asks','projects','team'].indexOf(S.screen)>=0;
 var fn=V[S.screen]||V.home;
 var sc=document.getElementById('screen');
 var keep=(S.screen===lastScreen)?sc.scrollTop:0;
 sc.innerHTML=fn();
 document.getElementById('navwrap').innerHTML=isTab?nav():'';
 sc.scrollTop=keep;
 lastScreen=S.screen;
}
document.getElementById('app').addEventListener('click',function(e){
 var t=e.target.closest('[data-a],[data-go],[data-tab],[data-stub],[data-filter],[data-open],[data-ptab],[data-hv]');if(!t)return;
 if(t.dataset.ptab){S.projTab=t.dataset.ptab;render();return;}
 if(t.dataset.hv){S.homeView=t.dataset.hv;render();return;}
 if(t.dataset.tab){tab(t.dataset.tab);return;}
 if(t.dataset.go){go(t.dataset.go);return;}
 if(t.dataset.stub){var s=STUBS[t.dataset.stub]||[t.dataset.stub,'Not built in this prototype.'];S.stubTitle=s[0];S.stubText=s[1];go('stub');return;}
 if(t.dataset.filter){S.teamFilter=t.dataset.filter;render();return;}
 if(t.dataset.open){var k0=t.dataset.open;if(S.teamOpen[k0])delete S.teamOpen[k0];else S.teamOpen[k0]=true;render();return;}
 var a=t.dataset.a;
 if(a==='back'){back();return;}
 if(a==='why'){S.why=!S.why;render();return;}
 if(a==='info'){toast('All three deep problem-solvers are spoken for until after Monday. There is no clean answer, so the options below are the real ones.');return;}
 if(a==='ask'){go('ask');return;}
 if(a==='team-usman'){S.teamOpen.usman=true;S.teamFilter='all';tab('team');return;}
 if(a==='trade-yes'){S.ministry='trade';S.ministryVia='trade';S.ministryTo='sana';S.healthDue='Fri';D.sana.plate[0].d='Fri';go('handoff');return;}
 if(a==='ot-ahmed'||a==='ot-sana'){S.ministry='trade';S.ministryVia='overtime';S.ministryTo=a.slice(3);go('handoff');return;}
 if(a==='tdm'||a==='tdp'){var seq=['Wed','Thu','Fri','Sat'];var i=seq.indexOf(S.teamDeadline);if(a==='tdm'&&i>0)S.teamDeadline=seq[i-1];if(a==='tdp'&&i<seq.length-1)S.teamDeadline=seq[i+1];render();return;}
 if(a==='loop'){S.loopIn=!S.loopIn;render();return;}
 if(a==='handoff-ministry'){S.ministry='handed';S.lastHand='ministry';D[S.ministryTo].plate.push({t:'Ministry portal concept',p:'Ministry',d:S.teamDeadline+(S.ministryVia==='overtime'?' (extra)':'')});S.hist=[];go('handed',false);return;}
 if(a==='assign-ahmed'||a==='assign-sana'){S.policeTo=a==='assign-ahmed'?'ahmed':'sana';go('handoffPolice');return;}
 if(a==='handoff-police'){S.policeState='assigned';S.lastHand='police';D[S.policeTo].plate.unshift({t:'Incident dashboard filters',p:'Police',d:'Tue'});S.hist=[];go('handed',false);return;}
 if(a==='see-designer'){go('designer');return;}
 if(a==='got-designer'){var gw=S.lastHand==='police'?S.policeTo:S.ministryTo;S.got[gw]=true;render();toast(D[gw].n+' has it. Hamza can see that, nobody had to report.');return;}
 if(a==='back-lead'){S.hist=[];tab('home');return;}
 if(a==='checkin-send'||a==='checkin-skip'){S.hiraChecked=true;S.hist=[];tab('home');toast(a==='checkin-send'?'Sent as you. I’ll watch the file.':'Noted. I’ll watch the file.');return;}
 if(a.indexOf('hyes-')===0){var k=a.slice(5);S[k]='yes';if(k==='hItem1')S.confirmedQueue.push({t:'Booking flow, eligibility rules',d:'Wed'});else S.confirmedQueue.push({t:'Dashboard clarity',d:'none yet'});render();toast(k==='hItem1'?'Sent to triage. Ahmed holds this flow, so he’ll lead the recommendation.':'Sent to triage. I’ll remember that dashboard items from QA are yours.');return;}
 if(a.indexOf('hno-')===0){var k2=a.slice(4);S[k2]='no';render();toast('Noted, not ours. I’ll learn from that.');return;}
});
render();
</script>
</body>
</html>`;

export function GET() {
  return new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

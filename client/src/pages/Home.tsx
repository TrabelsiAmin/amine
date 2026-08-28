// Asphalt Pulse — scène verticale plein écran, rail technique, plaque AMINE et console de connexions.
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Copy, Disc3, Gamepad2, Instagram, Play, Power, Radio, X, Zap } from "lucide-react";

const VIDEO = "https://videos.pexels.com/video-files/32120999/13694166_1920_1080_60fps.mp4";

const socials = [
  { label: "Instagram", value: "mohamed.amine_trabelsi", href: "https://www.instagram.com/mohamed.amine_trabelsi/", icon: Instagram },
  { label: "Facebook", value: "Med Damino", href: "https://www.facebook.com/med.damino", icon: Radio },
  { label: "Discord", value: "amiiiine4444", copy: "amiiiine4444", icon: Gamepad2 },
  { label: "Valorant", value: "amiiiine#4444", copy: "amiiiine#4444", icon: Zap },
  { label: "Spotify", value: "View profile", href: "https://open.spotify.com/user/31ws3jae7wpjnysvl6l7iumoycmu", icon: Disc3 },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");

  const ignite = () => setStarted(true);
  const copyHandle = async (value: string) => {
    try { await navigator.clipboard.writeText(value); } catch { /* Clipboard may be unavailable in preview. */ }
    setCopied(value);
    window.setTimeout(() => setCopied(""), 1300);
  };

  return (
    <main className={`scene ${started ? "is-started" : ""}`}>
      <div className="video-layer" aria-hidden="true">
        <video autoPlay muted loop playsInline poster="/manus-storage/night-road-fallback_9e646231.jpg">
          <source src={VIDEO} type="video/mp4" />
        </video>
        <div className="video-color" />
        <div className="video-scrim" />
      </div>

      <div className="grain" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <aside className="rail" aria-label="Informations de session">
        <div className="rail-brand"><img src="/manus-storage/amine-mark_82fe043f.png" alt="" /><span>AMN</span></div>
        <div className="rail-track"><span /> <span /> <span /> <span /></div>
        <div className="rail-copy">TN<br /><b>JDM</b></div>
        <div className="rail-index">01 <i /> 05</div>
      </aside>

      {!started && (
        <section className="splash" aria-label="Écran de démarrage">
          <div className="splash-kicker"><span className="status-dot" /> SYSTEM READY <b>◼ 08:28</b></div>
          <div className="splash-identity"><div className="splash-plate"><div className="splash-name">AMINE</div><div className="splash-region">TN · JDM</div></div><div className="splash-meta">RUN / 24<br /><b>READY TO MOVE</b></div></div>
          <button className="ignition" onClick={ignite} aria-label="Démarrer l’expérience">
            <span className="ignition-ring" />
            <span className="ignition-core"><Power size={28} strokeWidth={1.5} /></span>
          </button>
          <p className="ignition-label">Push to <b>Start</b></p>
          <p className="splash-note">A personal transmission by AMINE</p>
        </section>
      )}

      <section className="content" aria-hidden={!started}>
        <div className="content-top"><span className="live-pill"><span /> LIVE</span><span>GTR R35 / NIGHT RUN</span></div>
        <div className="identity-block">
          <div className="eyebrow jp"><b>速い</b><span> — MOVE WITHOUT NOISE</span></div>
          <div className="plate-wrap"><div className="plate"><div className="plate-corner" /><div className="name">AMINE</div><div className="region">TN · JDM</div></div><div className="plate-tag">ID / 00444</div></div>
          <p className="quote">Wake up to reality! Nothing ever goes as planned in this accursed world.</p>
          <button className="connections" onClick={() => setOpen(true)}><span>Connections</span><ArrowDown size={17} /></button>
        </div>
        <div className="content-bottom"><span>LAT 36°48'N</span><span className="bottom-line" /><span>RUN / 24</span></div>
      </section>

      <div className={`sheet-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} />
      <section className={`sheet ${open ? "show" : ""}`} aria-label="Connexions" aria-hidden={!open}>
        <div className="sheet-top"><div><span className="sheet-kicker">CHANNELS / 05</span><h2>CONNECTIONS</h2></div><button className="close" onClick={() => setOpen(false)} aria-label="Fermer"><X size={18} /></button></div>
        <div className="cards">{socials.map(({ label, value, href, copy, icon: Icon }) => {
          const card = <div className={`social-card ${copied === copy ? "copied" : ""}`} onClick={() => copy ? copyHandle(copy) : undefined} role={copy ? "button" : undefined} tabIndex={copy ? 0 : undefined} key={label}>
            <span className="social-icon"><Icon size={18} strokeWidth={1.6} /></span><span className="social-meta"><small>{label}</small><strong>{value}</strong></span>{copy ? <span className="copy-state">{copied === copy ? "Copied" : <Copy size={14} />}</span> : <ArrowUpRight size={15} className="external" />}
          </div>;
          return href ? <a href={href} target="_blank" rel="noreferrer" key={label}>{card}</a> : card;
        })}</div>
        <div className="music"><div className="music-title"><span><Disc3 size={16} /> ON REPEAT · FAMILY</span><ArrowUpRight size={14} /></div><iframe src="https://open.spotify.com/embed/track/2JzZzZUQj3Qff7wapcbKjc?utm_source=generator&theme=0" title="Spotify track" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" /></div>
        <div className="sheet-footer">AMINE / PERSONAL TRANSMISSION <span>ESC TO CLOSE</span></div>
      </section>
    </main>
  );
}

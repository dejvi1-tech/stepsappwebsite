import './App.css'

function AppIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="iconBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a3a7c" />
          <stop offset="100%" stopColor="#0d8f9e" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="9" fill="url(#iconBg)" />
      <circle cx="20" cy="20" r="14" stroke="#4dd8e4" strokeWidth="2.2" strokeLinecap="round"
        strokeDasharray="79 9" transform="rotate(-130 20 20)" fill="none" />
      <circle cx="20" cy="6.2" r="1.6" fill="#4dd8e4" transform="rotate(140 20 20)" />
      <circle cx="20" cy="12" r="2.5" fill="white" />
      <rect x="18.8" y="14.5" width="2.4" height="6" rx="1.2" fill="white" />
      <path d="M19 16.5 L15.5 18.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M21 16.5 L24 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.5 20.5 L17 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M20.5 20.5 L23 25.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function PhoneFrame({ src, alt, className = '' }) {
  return (
    <div className={`phone-frame ${className}`}>
      <div className="phone-notch" />
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function App() {
  return (
    <div className="app-site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <nav className="top-nav reveal" style={{ '--delay': '0.06s' }}>
        <div className="brand">
          <AppIcon size={36} />
          <span className="brand-name">Steps</span>
        </div>
        <div className="nav-pill">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#download">Download</a>
        </div>
        <button className="btn btn-download-nav">Download Free</button>
      </nav>

      <main className="app-shell">

        <section className="hero reveal" style={{ '--delay': '0.12s' }}>
          <div className="hero-copy">
            <p className="eyebrow">Available on iPhone &bull; Free</p>
            <h1>Count Every Step. Reach Every Goal.</h1>
            <p className="hero-text">
              StepsApp tracks your steps, calories, and GPS workouts with beautiful charts, streaks,
              and a friends leaderboard — all in one clean app.
            </p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>
              <a href="#screenshots" className="btn btn-ghost">See Screenshots</a>
            </div>
            <div className="proof-row">
              <div className="proof-card">
                <strong>50K+</strong>
                <span>Users</span>
              </div>
              <div className="proof-card">
                <strong>4.8&#9733;</strong>
                <span>Rating</span>
              </div>
              <div className="proof-card">
                <strong>Free</strong>
                <span>Download</span>
              </div>
            </div>
          </div>

          <div className="hero-phones">
            <PhoneFrame src="/screenshots/screen-today.png" alt="StepsApp today dashboard with step counter ring" className="phone-left" />
            <PhoneFrame src="/screenshots/screen-trends.png" alt="StepsApp 7-day trends bar chart" className="phone-right" />
          </div>
        </section>

        <section className="features-section reveal" id="features" style={{ '--delay': '0.18s' }}>
          <div className="section-header">
            <p className="section-eyebrow">Built for daily movement</p>
            <h2>Everything you need to stay active</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#9889;</div>
              <h3>Today's Dashboard</h3>
              <p>A beautiful step counter ring shows your daily progress at a glance. See distance, calories, and active minutes updated in real time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128202;</div>
              <h3>7-Day Trends</h3>
              <p>Bar charts and weekly insights let you spot patterns, celebrate your best days, and understand what drives your activity levels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128197;</div>
              <h3>History &amp; Streaks</h3>
              <p>A calendar view of every day you hit your goal. Build streaks, review past months, and keep the momentum going day after day.</p>
            </div>
          </div>
        </section>

        <section className="screenshots-section reveal" id="screenshots" style={{ '--delay': '0.22s' }}>
          <div className="section-header">
            <p className="section-eyebrow">Full app preview</p>
            <h2>See Every Feature</h2>
            <p className="section-sub">A full look at what's inside</p>
          </div>
          <div className="screenshots-scroll">
            <PhoneFrame src="/screenshots/screen-welcome.png" alt="StepsApp welcome onboarding screen" />
            <PhoneFrame src="/screenshots/screen-today.png" alt="StepsApp today dashboard" />
            <PhoneFrame src="/screenshots/screen-goal.png" alt="StepsApp set daily goal screen" />
            <PhoneFrame src="/screenshots/screen-trends.png" alt="StepsApp 7-day trends" />
            <PhoneFrame src="/screenshots/screen-history.png" alt="StepsApp history calendar" />
            <PhoneFrame src="/screenshots/screen-friends.png" alt="StepsApp friends leaderboard" />
            <PhoneFrame src="/screenshots/screen-workout.png" alt="StepsApp GPS outdoor walk" />
          </div>
        </section>

        <section className="highlight-rows">
          <div className="highlight-row reveal" style={{ '--delay': '0.24s' }}>
            <div className="highlight-phone">
              <PhoneFrame src="/screenshots/screen-friends.png" alt="StepsApp friends leaderboard showing #1 rank" />
            </div>
            <div className="highlight-copy">
              <span className="highlight-tag">Social</span>
              <h2>Compete with Friends</h2>
              <p>Climb the leaderboard, challenge friends, and stay motivated with a live weekly ranking. A little friendly competition goes a long way.</p>
            </div>
          </div>

          <div className="highlight-row highlight-row-reverse reveal" style={{ '--delay': '0.28s' }}>
            <div className="highlight-copy">
              <span className="highlight-tag">Workouts</span>
              <h2>GPS Workout Tracking</h2>
              <p>Track outdoor walks, runs, cycling, and hikes with real-time GPS route maps, pace, and distance. Every route is saved to your history.</p>
            </div>
            <div className="highlight-phone">
              <PhoneFrame src="/screenshots/screen-workout.png" alt="StepsApp GPS outdoor walk tracking screen" />
            </div>
          </div>
        </section>

        <section className="cta-section reveal" id="download" style={{ '--delay': '0.32s' }}>
          <div className="cta-card">
            <p className="cta-eyebrow">Get moving today</p>
            <h2>Start your streak today</h2>
            <p className="cta-sub">Free on iPhone. No subscriptions. Just movement.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-cta">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer reveal" style={{ '--delay': '0.38s' }}>
        <div className="footer-brand">
          <AppIcon size={32} />
          <span className="brand-name">Steps</span>
          <span className="footer-copy">&copy; 2026 StepsApp</span>
        </div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App

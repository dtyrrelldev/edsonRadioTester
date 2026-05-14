import "../App.css";

// Example image imports.
// Put your images in src/assets/ and change these filenames to match yours.
import joel from "../assets/joel.png";
import helisunset from "../assets/heli.png";
import campfire from "../assets/campfire.jpg";

export function Page3() {
  return (
    <div className="season-page">
      <header className="season-hero">
        <p className="season-kicker">Edson Radio Tester</p>
        <h1>Edson Wildfire Scrapbook</h1>
        <p className="season-hero-text">
          Some sick memories and some good advice:
        </p>
      </header>

      <section className="quote-grid">
        <article className="quote-card featured-quote">
          <p className="quote-mark">“</p>
          <blockquote>
            Don't go with vikings. Bite the bullet and buy haix off the bat. Your feet will thank you
          </blockquote>
          <p className="quote-author"> David T / HAC 2 2026 / Edson</p>
        </article>

        <article className="quote-card">
          <p className="quote-mark">“</p>
          <blockquote>
            Edson Forestry, flame height is length of your average condo
          </blockquote>
          <p className="quote-author">— Glue Guy</p>
        </article>

        <article className="quote-card">
          <p className="quote-mark">“</p>
          <blockquote>
            Oh shrek
          </blockquote>
          <p className="quote-author">— G</p>
        </article>
      </section>

      <section className="season-gallery">
        <div className="season-photo-card">
          {
            <img src={campfire} alt="Crew photo from the season" />
          }
        </div>

        <div className="season-photo-card">
          <img src={helisunset} alt="Radio tower from the season" />
        </div>

        <div className="season-photo-card">
          <img src={joel} alt="Field work during the season" />
        </div>
      </section>

      <section className="season-feature">
        <div>
          <p className="season-kicker">Season Reflection</p>
          <h2>What this app is for</h2>
          <p>
            This page is meant to showcase Edson Wildfire memories. If you have quotes, photos, or anything you want featured, email them to me at: david.tyrrell04@icloud.com
          </p>
        </div>

        <div className="feature-stat">
          <span>15</span>
          <p>Radio tower locations to learn</p>
        </div>
      </section>
    </div>
  );
}
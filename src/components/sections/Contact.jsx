import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import PageHeading from '../PageHeading';

export default function Contact() {
  const { personal } = portfolioData;
  const [copyStatus, setCopyStatus] = useState('');
  const timer = useRef();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  async function copyEmail() {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Copy unavailable. Select the email address, or use the email link.');
    }
    timer.current = window.setTimeout(() => setCopyStatus(''), 5000);
  }
  function composeEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry: ${data.get('projectType')}`;
    const body = `Hi Gangaprasad,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <section className="contact-page section container">
      <PageHeading
        label="Good conversations lead to good things"
        title="Something in mind?"
        accent="Let’s make it happen."
        aside="Open to projects & opportunities"
      >
        A big idea, a small question, or a new opportunity. There’s a good chance we can build
        something great together.
      </PageHeading>
      <div className="contact-grid">
        <div className="contact-information">
          <span className="availability">
            <span className="status-dot" /> Open to projects & opportunities
          </span>
          <div className="direct-email">
            <span>Drop me a line</span>
            <a href={`mailto:${personal.email}`}>
              {personal.email}
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
            <button type="button" className="text-link copy-email" onClick={copyEmail}>
              {copyStatus === 'Email address copied.' ? (
                <Check size={15} aria-hidden="true" />
              ) : (
                <Copy size={15} aria-hidden="true" />
              )}{' '}
              Copy email address
            </button>
            <p className="copy-status" role="status">
              {copyStatus}
            </p>
          </div>
          <div className="contact-location">
            <MapPin size={19} aria-hidden="true" />
            <div>
              <strong>Nanded, Maharashtra, India</strong>
              <span>Working remotely, with US Eastern overlap.</span>
            </div>
          </div>
          <div className="contact-socials">
            <a href={personal.social.github} target="_blank" rel="noreferrer">
              <Github size={19} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={19} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={composeEmail}>
          <h2>A little about your idea.</h2>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                placeholder="Alex Morgan"
                autoComplete="name"
                required
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="alex@company.com"
                autoComplete="email"
                required
                maxLength={200}
              />
            </label>
          </div>
          <label>
            What brings you here?
            <select name="projectType" defaultValue="A new project">
              <option>A new project</option>
              <option>A role or collaboration</option>
              <option>A technical conversation</option>
              <option>Just saying hello</option>
            </select>
          </label>
          <label>
            What do you have in mind?
            <textarea
              name="message"
              rows={5}
              placeholder="A little context, what you’re working on, and how I could help…"
              required
              maxLength={2000}
            />
          </label>
          <button type="submit" className="button button-primary">
            Compose email <Mail size={17} aria-hidden="true" />
          </button>
          <p className="form-note">
            Opens a draft in your email app. You can review it before sending.
          </p>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import SectionBand from "./ui/SectionBand";
import { siteConfig } from "../lib/site";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = digits.match(/.{1,2}/g) ?? [];
  return parts.join(" ");
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SectionBand id="contact" tone="neutral" className="animate-fade-up">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Demander un diagnostic
          </h2>
          <p className="mt-4 text-gray-200">
            Réponse professionnelle, diagnostic cadré et proposition claire.
          </p>
          <p className="mt-3 text-sm text-gray-400">Réponse sous 24-48h ouvrées.</p>
          <div className="mt-6 space-y-2 text-sm text-gray-200">
            {siteConfig.contact.email ? (
              <p>
                <span className="text-gray-100">Email :</span>{" "}
                {siteConfig.contact.email}
              </p>
            ) : null}
            {siteConfig.contact.phone ? (
              <p>
                <span className="text-gray-100">Téléphone :</span>{" "}
                {siteConfig.contact.phone}
              </p>
            ) : null}
            {siteConfig.contact.area ? (
              <p>
                <span className="text-gray-100">Zone :</span>{" "}
                {siteConfig.contact.area}
              </p>
            ) : null}
          </div>
        </div>
        <form
          className="glass-card rounded-2xl p-6"
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            const honeypot = formData.get("company_website");

            if (honeypot) {
              return;
            }

            const email = String(formData.get("email") ?? "");
            const phoneValue = String(formData.get("phone") ?? "");
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const phoneValid = !phoneValue || /^[0-9+()\s.-]{6,}$/.test(phoneValue);

            if (!emailValid || !phoneValid) {
              setSent(false);
              setError("Merci de vérifier les champs requis (email/téléphone).");
              return;
            }

            setError("");
            fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                company: formData.get("company"),
                equipment: formData.get("equipment"),
                email,
                phone: phoneValue,
                message: formData.get("message"),
                company_website: formData.get("company_website"),
              }),
            })
              .then(() => setSent(true))
              .catch(() => {
                setSent(false);
                setError("Une erreur est survenue. Réessayez plus tard.");
              });
          }}
        >
          <div className="grid gap-4">
            <input
              className="hidden"
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div>
              <label className="text-sm text-gray-200" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="text-sm text-gray-200" htmlFor="company">
                Société
              </label>
              <input
                id="company"
                name="company"
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="Nom de l'entreprise"
              />
            </div>
            <div>
              <label className="text-sm text-gray-200" htmlFor="equipment">
                Type d&apos;équipement (optionnel)
              </label>
              <input
                id="equipment"
                name="equipment"
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="Pont, cabine, compresseur..."
              />
            </div>
            <div>
              <label className="text-sm text-gray-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="contact@entreprise.fr"
              />
            </div>
            <div>
              <label className="text-sm text-gray-200" htmlFor="phone">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="06 00 00 00 00"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
              />
            </div>
            <div>
              <label className="text-sm text-gray-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                placeholder="Type d'équipement, contexte, urgence."
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="btn-primary w-full" aria-label="Envoyer la demande">
              Envoyer la demande
            </button>
          </div>
          {error ? (
            <p className="mt-4 text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-4 text-sm text-accent" role="status">
              Merci, votre demande est enregistrée. Nous revenons vers vous rapidement.
            </p>
          ) : null}
        </form>
      </div>
    </SectionBand>
  );
}

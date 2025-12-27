"use client";

import { useState } from "react";
import Container from "./Container";
import { siteConfig } from "../lib/site";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-32 py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className="animate-fade-up">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Demander un devis
            </h2>
            <p className="mt-4 text-gray-200">
              Réponse professionnelle, diagnostic cadré et proposition claire.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Réponse sous 24–48h ouvrées.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-200">
              <p>
                <span className="text-gray-100">Email :</span> {siteConfig.contact.email}
              </p>
              <p>
                <span className="text-gray-100">Téléphone :</span> {siteConfig.contact.phone}
              </p>
              <p>
                <span className="text-gray-100">Zone :</span> {siteConfig.contact.zone}
              </p>
            </div>
          </div>
          <form
            className="glass-card rounded-2xl p-6 animate-fade-up"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4">
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
                  className="mt-2 w-full rounded-md border border-white/10 bg-primary/70 px-3 py-2 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="06 00 00 00 00"
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
              <button type="submit" className="btn-primary w-full">
                Envoyer la demande
              </button>
            </div>
            {sent ? (
              <p className="mt-4 text-sm text-accent" role="status">
                Merci, votre demande est enregistrée. Nous revenons vers vous rapidement.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}

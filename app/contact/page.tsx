'use client';

import { useState } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export default function ContactPage() {
  return (
    <div className="relative">
      <HeroSection />
      <SegmentedSection />
      <DetailsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <Section>
      <Container className="space-y-6 text-center">
        <Badge className="w-fit mx-auto bg-accent/10 text-white">CONTACT</Badge>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Contactez FAST Tech Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Choisissez votre type de demande : FAST Remote pour diagnostic immédiat, intervention terrain pour la région parisienne, ou contrat/audit.
        </p>
      </Container>
    </Section>
  );
}

function SegmentedSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* FAST Remote */}
          <Card className="glass-card border-2 border-accent/40">
            <Badge className="bg-accent/20 text-white">Prioritaire</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-white">FAST Remote</h2>
            <p className="mt-2 text-sm text-gray-200">
              Diagnostic guidé à distance. Verdict rapide sans intervention terrain coûteuse.
            </p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Temps de réponse</p>
                <p className="text-sm text-gray-100">Généralement dans les 2 heures</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Couverture</p>
                <p className="text-sm text-gray-100">France entière</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Idéal pour</p>
                <p className="text-sm text-gray-100">Pannes urgentes, décision rapide, préventif</p>
              </div>
            </div>
            <Link href="/fast-remote" className="mt-6 block btn btn-primary">
              Remplir le formulaire FAST Remote
            </Link>
          </Card>

          {/* Intervention Terrain */}
          <Card className="glass-card">
            <Badge className="bg-white/10 text-gray-300">Sur demande</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-white">Intervention Terrain</h2>
            <p className="mt-2 text-sm text-gray-200">
              Dépannage, maintenance, remise en conformité sur site.
            </p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Temps de réponse</p>
                <p className="text-sm text-gray-100">Selon urgence et planning</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Couverture</p>
                <p className="text-sm text-gray-100">Région parisienne (IDF)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Idéal pour</p>
                <p className="text-sm text-gray-100">Actions correctives, maintenance planifiée</p>
              </div>
            </div>
            <Link href="#form-terrain" className="mt-6 block btn btn-secondary">
              Demander une intervention
            </Link>
          </Card>

          {/* Contrats & Audits */}
          <Card className="glass-card">
            <Badge className="bg-white/10 text-gray-300">Partenariat</Badge>
            <h2 className="mt-4 text-2xl font-semibold text-white">Contrats & Audits</h2>
            <p className="mt-2 text-sm text-gray-200">
              Maintenance planifiée, audits sécurité, contrats de support.
            </p>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Temps de réponse</p>
                <p className="text-sm text-gray-100">Devis sous 48h</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Couverture</p>
                <p className="text-sm text-gray-100">Région parisienne + télétravail</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Idéal pour</p>
                <p className="text-sm text-gray-100">Partenariats long terme, conformité</p>
              </div>
            </div>
            <Link href="#form-contrat" className="mt-6 block btn btn-secondary">
              Demander un devis
            </Link>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function DetailsSection() {
  const [terrainData, setTerrainData] = useState({ nom: '', tel: '', entreprise: '', description: '' });
  const [contratData, setContratData] = useState({ nom: '', tel: '', entreprise: '', type: '', details: '' });
  const [terrainLoading, setTerrainLoading] = useState(false);
  const [terrainSuccess, setTerrainSuccess] = useState(false);
  const [terrainError, setTerrainError] = useState<string | null>(null);
  const [contratLoading, setContratLoading] = useState(false);
  const [contratSuccess, setContratSuccess] = useState(false);
  const [contratError, setContratError] = useState<string | null>(null);

  const handleTerrainChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTerrainData({ ...terrainData, [e.target.name]: e.target.value });
  };

  const handleContratChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContratData({ ...contratData, [e.target.name]: e.target.value });
  };

  const handleTerrainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTerrainError(null);
    setTerrainSuccess(false);

    if (!terrainData.nom || !terrainData.tel || !terrainData.description) {
      setTerrainError('Veuillez remplir tous les champs requis');
      return;
    }

    setTerrainLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...terrainData, formType: 'terrain' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setTerrainSuccess(true);
      setTerrainData({ nom: '', tel: '', entreprise: '', description: '' });
      setTimeout(() => setTerrainSuccess(false), 5000);
    } catch (err) {
      setTerrainError(err instanceof Error ? err.message : 'Erreur serveur');
    } finally {
      setTerrainLoading(false);
    }
  };

  const handleContratSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContratError(null);
    setContratSuccess(false);

    if (!contratData.nom || !contratData.tel || !contratData.entreprise || !contratData.type || !contratData.details) {
      setContratError('Veuillez remplir tous les champs requis');
      return;
    }

    setContratLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...contratData, formType: 'contrat' }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      setContratSuccess(true);
      setContratData({ nom: '', tel: '', entreprise: '', type: '', details: '' });
      setTimeout(() => setContratSuccess(false), 5000);
    } catch (err) {
      setContratError(err instanceof Error ? err.message : 'Erreur serveur');
    } finally {
      setContratLoading(false);
    }
  };

  return (
    <Section>
      <Container className="space-y-12">
        {/* Intervention Terrain Form */}
        <div id="form-terrain" className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Intervention sur site</h2>
          <p className="text-gray-200">
            Région parisienne (IDF). Décrivez votre situation pour un devis rapide.
          </p>
          <Card className="glass-card p-6">
            {terrainSuccess && (
              <div className="mb-4 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-300">
                ✓ Demande d&apos;intervention envoyée ! Nous vous recontacterons rapidement.
              </div>
            )}
            {terrainError && (
              <div className="mb-4 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-300">
                ✗ {terrainError}
              </div>
            )}
            <form onSubmit={handleTerrainSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-white">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={terrainData.nom}
                    onChange={handleTerrainChange}
                    required
                    className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white">Téléphone *</label>
                  <input
                    type="tel"
                    name="tel"
                    value={terrainData.tel}
                    onChange={handleTerrainChange}
                    required
                    className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Entreprise</label>
                <input
                  type="text"
                  name="entreprise"
                  value={terrainData.entreprise}
                  onChange={handleTerrainChange}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Nom de votre garage/atelier"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Description du besoin *</label>
                <textarea
                  name="description"
                  value={terrainData.description}
                  onChange={handleTerrainChange}
                  required
                  rows={4}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Équipements concernés, type d&apos;intervention, délais..."
                />
              </div>
              <button
                type="submit"
                disabled={terrainLoading}
                className="w-full rounded bg-accent px-4 py-3 font-semibold text-primary transition hover:bg-accent-soft disabled:opacity-50"
              >
                {terrainLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </form>
          </Card>
        </div>

        {/* Contrats Form */}
        <div id="form-contrat" className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Contrats & Audits</h2>
          <p className="text-gray-200">
            Maintenance planifiée, audits conformité, support technique durée.
          </p>
          <Card className="glass-card p-6">
            {contratSuccess && (
              <div className="mb-4 rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-300">
                ✓ Demande de devis envoyée ! Nous vous répondrons sous 48h.
              </div>
            )}
            {contratError && (
              <div className="mb-4 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-300">
                ✗ {contratError}
              </div>
            )}
            <form onSubmit={handleContratSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-white">Nom *</label>
                  <input
                    type="text"
                    name="nom"
                    value={contratData.nom}
                    onChange={handleContratChange}
                    required
                    className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white">Téléphone *</label>
                  <input
                    type="tel"
                    name="tel"
                    value={contratData.tel}
                    onChange={handleContratChange}
                    required
                    className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                    placeholder="+33 6 00 00 00 00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Entreprise *</label>
                <input
                  type="text"
                  name="entreprise"
                  value={contratData.entreprise}
                  onChange={handleContratChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Nom de votre garage/atelier"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Type de contrat souhaité *</label>
                <select
                  name="type"
                  value={contratData.type}
                  onChange={handleContratChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                >
                  <option value="">-- Sélectionner --</option>
                  <option value="maintenance">Maintenance préventive planifiée</option>
                  <option value="audit">Audit sécurité / conformité</option>
                  <option value="support">Support technique annuel</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Détails *</label>
                <textarea
                  name="details"
                  value={contratData.details}
                  onChange={handleContratChange}
                  required
                  rows={4}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Équipements, fréquence souhaitée, objectifs..."
                />
              </div>
              <button
                type="submit"
                disabled={contratLoading}
                className="w-full rounded bg-accent px-4 py-3 font-semibold text-primary transition hover:bg-accent-soft disabled:opacity-50"
              >
                {contratLoading ? 'Envoi en cours...' : 'Demander un devis'}
              </button>
            </form>
          </Card>
        </div>

        {/* Direct Contact Info */}
        <div className="border-t border-white/10 pt-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Informations de contact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="glass-card">
              <h3 className="text-lg font-semibold text-white">Téléphone</h3>
              <p className="mt-3 text-2xl text-accent font-semibold">Disponible sur demande</p>
              <p className="mt-2 text-sm text-gray-300">Horaires : Lun-Ven, 8h-18h</p>
            </Card>
            <Card className="glass-card">
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="mt-3 text-lg text-accent">Disponible sur demande</p>
              <p className="mt-2 text-sm text-gray-300">Réponse sous 24h ouvrables</p>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

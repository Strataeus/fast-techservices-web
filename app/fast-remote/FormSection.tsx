'use client';

import { useState } from 'react';
import Container from '../../components/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';

export default function FormSection() {
  const [formData, setFormData] = useState({
    nom: '',
    société: '',
    email: '',
    tel: '',
    ville: '',
    urgence: '',
    équipement: '',
    marque: '',
    symptôme: '',
    autorisation: false,
    conditions: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!formData.nom || !formData.email || !formData.tel) {
      setError('Veuillez remplir tous les champs requis');
      return;
    }

    if (!formData.autorisation || !formData.conditions) {
      setError('Vous devez accepter les conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'fast-remote',
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi');
      }

      setSuccess(true);
      setFormData({
        nom: '',
        société: '',
        email: '',
        tel: '',
        ville: '',
        urgence: '',
        équipement: '',
        marque: '',
        symptôme: '',
        autorisation: false,
        conditions: false,
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="formulaire" className="bg-primary/60">
      <Container className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Démarrer une session FAST Remote
          </h2>
          <p className="text-gray-200">
            Remplissez ce formulaire pour une pré-qualification immédiate. Nous vous confirmerons
            faisabilité et planning dans les 2 heures ouvrables.
          </p>
        </div>
        <Card className="glass-card space-y-4">
          {success && (
            <div className="rounded-lg border border-green-500/50 bg-green-500/10 p-4 text-green-300">
              ✓ Formulaire envoyé avec succès ! Nous vous recontacterons rapidement.
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-300">
              ✗ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white">Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Société</label>
                <input
                  type="text"
                  name="société"
                  value={formData.société}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Téléphone *</label>
                <input
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="+33 6 00 00 00 00"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white">Ville</label>
                <input
                  type="text"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Ville / région"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Urgence *</label>
                <select
                  name="urgence"
                  value={formData.urgence}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                >
                  <option value="">-- Sélectionner --</option>
                  <option value="immédiate">Arrêt total immédiat</option>
                  <option value="dégradée">Mode dégradé (partiellement bloqué)</option>
                  <option value="préventive">Préventif / contrôle</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white">Type d&apos;équipement *</label>
                <select
                  name="équipement"
                  value={formData.équipement}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                >
                  <option value="">-- Sélectionner --</option>
                  <option value="pont">Pont élévateur</option>
                  <option value="compresseur">Compresseur / air comprimé</option>
                  <option value="cabine">Cabine peinture / ventilation</option>
                  <option value="electroméca">Électromécanique / automatisme</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white">Marque / modèle (si connu)</label>
                <input
                  type="text"
                  name="marque"
                  value={formData.marque}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                  placeholder="Ex: Someca SP3200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white">Symptôme / Problème *</label>
              <textarea
                name="symptôme"
                value={formData.symptôme}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-gray-500 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent/50"
                placeholder="Décrivez le symptôme observé : bruits, dysfonctionnements, messages erreur, etc."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="autorisation"
                name="autorisation"
                checked={formData.autorisation}
                onChange={handleChange}
                required
                className="rounded border border-white/10"
              />
              <label htmlFor="autorisation" className="text-sm text-gray-300">
                Je confirme qu&apos;un opérateur habilité sera disponible pour manipuler l&apos;équipement
                pendant la session *
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="conditions"
                name="conditions"
                checked={formData.conditions}
                onChange={handleChange}
                required
                className="rounded border border-white/10"
              />
              <label htmlFor="conditions" className="text-sm text-gray-300">
                J&apos;accepte les conditions de sécurité et protocole FAST Remote *
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-accent px-4 py-3 font-semibold text-primary transition hover:bg-accent-soft disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : 'Soumettre ma demande'}
            </button>
          </form>
        </Card>
      </Container>
    </Section>
  );
}

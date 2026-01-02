"use client";

import { useState, useEffect } from "react";
import { useFormSubmit } from "../hooks/useFormSubmit";

interface Props {
  initialSelectedTab?: "fast-remote" | "onsite" | "maintenance";
}

type FormType = "fast-remote" | "onsite" | "maintenance";

const URGENCE_OPTIONS = [
  { value: "arret-total", label: "Arrêt total (production figée)" },
  { value: "degrade", label: "Mode dégradé (fonctionnement limité)" },
  { value: "preventif", label: "Maintenance préventive (pas d'urgence)" },
];

const EQUIPEMENT_OPTIONS = [
  "Pont élévateur",
  "Compresseur",
  "Cabine de peinture",
  "Touret / Meuleuse",
  "Contrôleur de charge",
  "Autre équipement",
];

const DISPONIBILITE_OPTIONS = [
  "Immédiatement (aujourd'hui)",
  "Demain",
  "Cette semaine",
  "Semaine prochaine",
];

export default function FormFastRemote({ initialSelectedTab = "fast-remote" }: Props) {
  const [selectedTab, setSelectedTab] = useState<FormType>(initialSelectedTab);
  const { loading, success, error, submitForm, reset } = useFormSubmit();

  // Form states for Fast Remote
  const [fastRemoteForm, setFastRemoteForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    urgence: "degrade",
    equipement: EQUIPEMENT_OPTIONS[0],
    symptome: "",
    disponibilite: DISPONIBILITE_OPTIONS[0],
    consentement: false,
    societe: "",
    marque: "",
    acces: false,
  });

  // Form states for Onsite
  const [onsiteForm, setOnsiteForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    equipement: EQUIPEMENT_OPTIONS[0],
    symptome: "",
    consentement: false,
    societe: "",
  });

  // Form states for Maintenance
  const [maintenanceForm, setMaintenanceForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    ville: "",
    codePostal: "",
    type: "contrat",
    consentement: false,
    societe: "",
  });

  // Reset form after successful submission
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        if (selectedTab === "fast-remote") {
          setFastRemoteForm({
            nom: "",
            telephone: "",
            email: "",
            ville: "",
            codePostal: "",
            urgence: "degrade",
            equipement: EQUIPEMENT_OPTIONS[0],
            symptome: "",
            disponibilite: DISPONIBILITE_OPTIONS[0],
            consentement: false,
            societe: "",
            marque: "",
            acces: false,
          });
        } else if (selectedTab === "onsite") {
          setOnsiteForm({
            nom: "",
            telephone: "",
            email: "",
            ville: "",
            codePostal: "",
            equipement: EQUIPEMENT_OPTIONS[0],
            symptome: "",
            consentement: false,
            societe: "",
          });
        } else {
          setMaintenanceForm({
            nom: "",
            telephone: "",
            email: "",
            ville: "",
            codePostal: "",
            type: "contrat",
            consentement: false,
            societe: "",
          });
        }
        reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, selectedTab, reset]);

  const handleTabChange = (tab: FormType) => {
    setSelectedTab(tab);
    reset();
  };

  const handleFastRemoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(fastRemoteForm, "fast-remote", {
      onError: () => {
        // Error message already set in hook
      },
    });
  };

  const handleOnsiteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(onsiteForm, "onsite");
  };

  const handleMaintenanceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(maintenanceForm, "maintenance");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 mb-8 overflow-x-auto">
        {[
          { id: "fast-remote", label: "FAST Remote", badge: "Prioritaire" },
          { id: "onsite", label: "Intervention terrain" },
          { id: "maintenance", label: "Contrat / Audit" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id as FormType)}
            className={`pb-3 px-4 whitespace-nowrap font-medium transition-colors relative ${
              selectedTab === tab.id
                ? "text-accent border-b-2 border-accent"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Success Message */}
      {success && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-green-400">
            ✓ Demande reçue. On revient vers toi rapidement…
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
          <p className="text-red-300/70 text-xs mt-2">
            Tu peux aussi nous appeler ou envoyer un email directement.
          </p>
        </div>
      )}

      {/* FAST Remote Form */}
      {selectedTab === "fast-remote" && (
        <form onSubmit={handleFastRemoteSubmit} className="space-y-4">
          {/* Row 1: Nom + Téléphone */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom *"
              required
              value={fastRemoteForm.nom}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, nom: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Téléphone *"
              required
              value={fastRemoteForm.telephone}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, telephone: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Row 2: Email + Ville */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email *"
              required
              value={fastRemoteForm.email}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, email: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Ville *"
              required
              value={fastRemoteForm.ville}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, ville: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Row 3: Code Postal + Société (optionnel) */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Code postal (5 chiffres) *"
              required
              maxLength={5}
              value={fastRemoteForm.codePostal}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, codePostal: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Société (optionnel)"
              value={fastRemoteForm.societe}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, societe: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Row 4: Urgence + Équipement */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              required
              value={fastRemoteForm.urgence}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, urgence: e.target.value as "arret-total" | "degrade" | "preventif" })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-accent"
            >
              <option value="" disabled>
                Urgence *
              </option>
              {URGENCE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <select
              required
              value={fastRemoteForm.equipement}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, equipement: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-accent"
            >
              {EQUIPEMENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Marque/Modèle (optionnel) + Accès machine (checkbox) */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Marque / Modèle (optionnel)"
              value={fastRemoteForm.marque}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, marque: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <label className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                checked={fastRemoteForm.acces}
                onChange={(e) =>
                  setFastRemoteForm({ ...fastRemoteForm, acces: e.target.checked })
                }
                className="w-4 h-4 rounded border-white/10 bg-white/5"
              />
              <span className="text-sm text-gray-300">
                Accès machine pendant l&rsquo;appel
              </span>
            </label>
          </div>

          {/* Symptôme */}
          <textarea
            placeholder="Symptôme / Défaut observé *"
            required
            rows={3}
            value={fastRemoteForm.symptome}
            onChange={(e) =>
              setFastRemoteForm({ ...fastRemoteForm, symptome: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
          />

          {/* Disponibilité */}
          <select
            required
            value={fastRemoteForm.disponibilite}
            onChange={(e) =>
              setFastRemoteForm({ ...fastRemoteForm, disponibilite: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-accent"
          >
            {DISPONIBILITE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          {/* Consent */}
          <label className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/10">
            <input
              type="checkbox"
              required
              checked={fastRemoteForm.consentement}
              onChange={(e) =>
                setFastRemoteForm({ ...fastRemoteForm, consentement: e.target.checked })
              }
              className="w-4 h-4 rounded border-white/10 bg-white/5"
            />
            <span className="text-sm text-gray-300">
              Je consens à être recontacté par téléphone ou email *
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi en cours…" : "Demander un diagnostic"}
          </button>
        </form>
      )}

      {/* ONSITE Form */}
      {selectedTab === "onsite" && (
        <form onSubmit={handleOnsiteSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom *"
              required
              value={onsiteForm.nom}
              onChange={(e) => setOnsiteForm({ ...onsiteForm, nom: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Téléphone *"
              required
              value={onsiteForm.telephone}
              onChange={(e) =>
                setOnsiteForm({ ...onsiteForm, telephone: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email *"
              required
              value={onsiteForm.email}
              onChange={(e) => setOnsiteForm({ ...onsiteForm, email: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Ville *"
              required
              value={onsiteForm.ville}
              onChange={(e) => setOnsiteForm({ ...onsiteForm, ville: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Code postal (5 chiffres) *"
              required
              maxLength={5}
              value={onsiteForm.codePostal}
              onChange={(e) =>
                setOnsiteForm({ ...onsiteForm, codePostal: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Société (optionnel)"
              value={onsiteForm.societe}
              onChange={(e) => setOnsiteForm({ ...onsiteForm, societe: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <select
            required
            value={onsiteForm.equipement}
            onChange={(e) =>
              setOnsiteForm({ ...onsiteForm, equipement: e.target.value })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-accent"
          >
            {EQUIPEMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Symptôme / Défaut observé *"
            required
            rows={3}
            value={onsiteForm.symptome}
            onChange={(e) => setOnsiteForm({ ...onsiteForm, symptome: e.target.value })}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
          />

          <label className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/10">
            <input
              type="checkbox"
              required
              checked={onsiteForm.consentement}
              onChange={(e) =>
                setOnsiteForm({ ...onsiteForm, consentement: e.target.checked })
              }
              className="w-4 h-4 rounded border-white/10 bg-white/5"
            />
            <span className="text-sm text-gray-300">
              Je consens à être recontacté par téléphone ou email *
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi en cours…" : "Demander une intervention"}
          </button>
        </form>
      )}

      {/* MAINTENANCE Form */}
      {selectedTab === "maintenance" && (
        <form onSubmit={handleMaintenanceSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom *"
              required
              value={maintenanceForm.nom}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, nom: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Téléphone *"
              required
              value={maintenanceForm.telephone}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, telephone: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email *"
              required
              value={maintenanceForm.email}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, email: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Ville *"
              required
              value={maintenanceForm.ville}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, ville: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Code postal (5 chiffres) *"
              required
              maxLength={5}
              value={maintenanceForm.codePostal}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, codePostal: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Société (optionnel)"
              value={maintenanceForm.societe}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, societe: e.target.value })
              }
              className="px-4 py-2 bg-white/5 border border-white/10 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
            />
          </div>

          <select
            required
            value={maintenanceForm.type}
            onChange={(e) =>
              setMaintenanceForm({ ...maintenanceForm, type: e.target.value as "contrat" | "audit" | "maintenance" })
            }
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded text-white focus:outline-none focus:border-accent"
          >
            <option value="contrat">Contrat de maintenance</option>
            <option value="audit">Audit de sécurité</option>
            <option value="maintenance">Maintenance ponctuelle</option>
          </select>

          <label className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/10">
            <input
              type="checkbox"
              required
              checked={maintenanceForm.consentement}
              onChange={(e) =>
                setMaintenanceForm({ ...maintenanceForm, consentement: e.target.checked })
              }
              className="w-4 h-4 rounded border-white/10 bg-white/5"
            />
            <span className="text-sm text-gray-300">
              Je consens à être recontacté par téléphone ou email *
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi en cours…" : "Demander un devis"}
          </button>
        </form>
      )}
    </div>
  );
}

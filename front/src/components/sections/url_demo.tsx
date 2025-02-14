'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Train, Building, GraduationCap } from 'lucide-react';

const MAX_TRIALS = 3;
const TRIALS_KEY = 'demo_trials_count';
const apiUrl: string | undefined = process.env.NEXT_PUBLIC_Owneo_API_URL;

interface PropertyData {
  prix: number;
  surface: number;
  type_appartement: string;
  etage: number | null;
  chauffage: string | null;
  etat: string | null;
  dpe: string | null;
  ges: string | null;
  quartier: {
    transport: {
      note: number;
      details: string[];
    };
    commerces: {
      note: number;
      details: string[];
    };
    ecoles: {
      note: number;
      details: string[];
    };
    description: string;
  };
}

const calculateEnrichment = (data: PropertyData) => {
  const loyerEstime = Math.round((data.surface * 15) * 1.1);
  const rentabiliteBrute = ((loyerEstime * 12) / data.prix) * 100;
  const prixM2 = Math.round(data.prix / data.surface);
  const prixMarcheM2 = 4200;
  const vsMarche = ((prixM2 - prixMarcheM2) / prixMarcheM2) * 100;

  const travauxEnergetiques = {
    necessaire: false,
    message: 'Non communiqué',
    details: [] as string[]
  };

  if (data.dpe && data.dpe !== 'Non communiqué') {
    const dpeClasse = data.dpe.charAt(0);
    const dpeMatch = data.dpe.match(/^[A-G] \((\d+) kWh\/m²\/an\)$/);

    if (dpeMatch) {
      const consommation = parseInt(dpeMatch[1], 10);
      if (consommation >= 150 || ['E', 'F', 'G'].includes(dpeClasse)) {
        travauxEnergetiques.necessaire = true;
        travauxEnergetiques.details.push('Isolation thermique nécessaire');
      }
    } else if (['E', 'F', 'G'].includes(dpeClasse)) {
      travauxEnergetiques.necessaire = true;
      travauxEnergetiques.details.push('Amélioration énergétique conseillée');
    }
  }

  if (data.ges && data.ges !== 'Non communiqué') {
    const gesClasse = data.ges.charAt(0);
    const gesMatch = data.ges.match(/^[A-G] \((\d+) kgCO2\/m²\/an\)$/);

    if (gesMatch) {
      const emissions = parseInt(gesMatch[1], 10);
      if (emissions >= 35 || ['E', 'F', 'G'].includes(gesClasse)) {
        travauxEnergetiques.necessaire = true;
        travauxEnergetiques.details.push('Système de chauffage à moderniser');
      }
    } else if (['E', 'F', 'G'].includes(gesClasse)) {
      travauxEnergetiques.necessaire = true;
      travauxEnergetiques.details.push('Amélioration du système de chauffage conseillée');
    }
  }

  if (data.etat === 'À rénover' || data.etat === 'À rafraîchir') {
    travauxEnergetiques.necessaire = true;
    travauxEnergetiques.details.push(data.etat);
  }

  if (travauxEnergetiques.details.length > 0) {
    travauxEnergetiques.message = travauxEnergetiques.details.join(', ');
  } else if (data.dpe !== 'Non communiqué' || data.ges !== 'Non communiqué') {
    travauxEnergetiques.message = 'Pas de travaux nécessaires';
  }

  return {
    loyerEstime,
    rentabiliteBrute: rentabiliteBrute.toFixed(1),
    travauxEnergetiques,
    prixM2,
    vsMarche: vsMarche.toFixed(1)
  };
};

const ScoreBar = ({ score }: { score: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map(i => (
      <div
        key={i}
        className={`w-6 h-1.5 rounded-full ${i <= score ? 'bg-green-500' : 'bg-gray-200'
          }`}
      />
    ))}
  </div>
);

export const UrlDemoSection = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [hasTrialsLeft, setHasTrialsLeft] = useState(true);

  useEffect(() => {
    const trials = localStorage.getItem(TRIALS_KEY);
    if (trials !== null) {
      const trialCount = parseInt(trials);
      setHasTrialsLeft(trialCount < MAX_TRIALS);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasTrialsLeft) {
      window.location.href = '/auth';
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/real-estate/analyze-url`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Erreur lors de l\'analyse de l\'URL');
      }

      const data = await response.json();
      setPropertyData(data);
      setShowPreview(true);

      const currentTrials = parseInt(localStorage.getItem(TRIALS_KEY) || '0');
      const newTrials = currentTrials + 1;
      localStorage.setItem(TRIALS_KEY, newTrials.toString());

      if (newTrials >= MAX_TRIALS) {
        setHasTrialsLeft(false);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const enrichment = propertyData ? calculateEnrichment(propertyData) : null;

  const renderNeighborhoodSection = (propertyData: PropertyData) => (
    <div className="bg-white h-full rounded-xl p-6">
      <h4 className="font-semibold text-gray-800 mb-4">Analyse du quartier</h4>
      <div className="space-y-6">
        {/* Description générale */}
        <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
          {propertyData.quartier.description}
        </p>

        {/* Transports */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Train className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Transports</span>
            </div>
            <ScoreBar score={propertyData.quartier.transport.note} />
          </div>
          {propertyData.quartier.transport.details.length > 0 && (
            <ul className="text-sm text-gray-500 ml-7 list-disc">
              {propertyData.quartier.transport.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Commerces */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Commerces</span>
            </div>
            <ScoreBar score={propertyData.quartier.commerces.note} />
          </div>
          {propertyData.quartier.commerces.details.length > 0 && (
            <ul className="text-sm text-gray-500 ml-7 list-disc">
              {propertyData.quartier.commerces.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Écoles */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Écoles</span>
            </div>
            <ScoreBar score={propertyData.quartier.ecoles.note} />
          </div>
          {propertyData.quartier.ecoles.details.length > 0 && (
            <ul className="text-sm text-gray-500 ml-7 list-disc">
              {propertyData.quartier.ecoles.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Analysez n'importe quel bien en un clic</h2>
          <p className="text-xl text-gray-600">Collez simplement l'URL d'une annonce immobilière et laissez notre IA faire le reste</p>
        </div>

        {/* URL Input Section */}
        <div className={`max-w-3xl mx-auto ${showPreview ? 'mb-16' : ''}`}>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={hasTrialsLeft ? "Collez l'URL d'une annonce (SeLoger, Leboncoin, PAP...)" : "Connectez-vous pour analyser d'autres biens"}
              className="w-full px-6 py-4 pr-48 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={!hasTrialsLeft || isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-2 bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analyse en cours...
                </>
              ) : hasTrialsLeft ? (
                <>
                  Analyser
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </>
              ) : (
                <>
                  Se connecter
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl">
              Erreur lors de l'analyse
            </div>
          )}

          {/* Sites supportés */}
          <div className="mt-4 flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-center text-sm text-gray-500">
            <span>Sites supportés :</span>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Image src="/logos/seloger.png" alt="SeLoger" className="opacity-50 hover:opacity-100 transition-opacity mr-2 h-5 md:h-10 md:py-2" loading="lazy" width={100} height={100} />
                <Image src="/logos/leboncoin.png" loading="lazy" alt="LeBonCoin" className="opacity-50 hover:opacity-100 transition-opacity h-5 md:h-10 md:py-2" width={100} height={100} />
                <Image src="/logos/orpi.png" alt="Orpi" loading="lazy" className="opacity-50 hover:opacity-100 transition-opacity h-5 md:h-10 md:py-2" width={50} height={100} />
              </div>
              <span>et + encore...</span>
            </div>
          </div>
        </div>

        {showPreview && propertyData && (
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-500" />
              Enrichissement IA
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Données extraites reste identique */}

              {/* Enrichissement IA */}
              {enrichment && (
                <>
                  <div>
                    <div className="bg-white h-full rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Estimation des revenus locatifs</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Loyer estimé</p>
                          <p className="font-semibold">{enrichment.loyerEstime} € /mois</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Rentabilité brute</p>
                          <p className="font-semibold">{enrichment.rentabiliteBrute}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Prix au m²</p>
                          <p className="font-semibold">{enrichment.prixM2} €</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Vs. prix du marché</p>
                          <p className={`font-semibold ${Number(enrichment.vsMarche) < 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {Number(enrichment.vsMarche) > 0 ? '+' : ''}{enrichment.vsMarche}%
                          </p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">Travaux à prévoir</p>
                          <p className={`font-semibold ${enrichment.travauxEnergetiques.necessaire ? 'text-orange-600' : enrichment.travauxEnergetiques.message === "Non communiqué" ? 'text-black' : 'text-green-600'
                            }`}>
                            {enrichment.travauxEnergetiques.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {renderNeighborhoodSection(propertyData)}
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-900 transition-colors">
                Créer mon dossier d'investissement
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
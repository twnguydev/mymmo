import React, { useState } from 'react';
import { Check, Star, AlertCircle } from 'lucide-react';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (monthlyPrice: number): string => {
    if (monthlyPrice === 0) return "0";
    const annualPrice = monthlyPrice * 12 * 0.8;
    const value = isAnnual ? (annualPrice / 12).toFixed(2) : monthlyPrice.toFixed(2);
    return value.replace(".", ",");
  };

  const premiumModules = [
    {
      name: 'Archivage illimité & OCR',
      price: 4.90,
      description: 'Numérisation et recherche intelligente de vos documents'
    },
    {
      name: 'Gestion avancée des SCI',
      price: 6.90,
      description: 'Répartition des revenus et comptabilité spécialisée'
    },
    {
      name: 'Analyse d\'investissement',
      price: 7.90,
      description: 'Simulateur de rentabilité et prévisionnel détaillé'
    },
    {
      name: 'Formation gestion locative',
      price: 49,
      oneShot: true,
      description: 'Maîtrisez tous les aspects de la gestion locative'
    }
  ];

  const subscriptions = [
    {
      name: 'Starter',
      price: 0,
      priceDescription: "Démarrez gratuitement",
      description: 'Pour découvrir la gestion locative simplifiée',
      mainFeature: 'Idéal pour 2 lots maximum',
      features: [
        'Jusqu\'à 2 lots inclus',
        '5 états des lieux numériques par an',
        '50 Mo de stockage sécurisé',
        'Signature électronique (5/mois)',
        'Modèles de documents à jour',
        'Support par email'
      ]
    },
    {
      name: 'Professional',
      price: 6.90,
      priceDescription: "Le plus populaire",
      popular: true,
      description: 'La solution complète pour les bailleurs et SCI',
      mainFeature: 'Tout gérer jusqu\'à 10 lots',
      features: [
        'Jusqu\'à 10 lots gérés',
        'États des lieux illimités',
        '500 Mo de stockage',
        'Signature électronique illimitée',
        'Suivi automatique des paiements',
        'Relances automatisées',
        'Connexion bancaire incluse',
        '3 utilisateurs inclus',
        'Support prioritaire'
      ]
    },
    {
      name: 'Business',
      price: 14.90,
      priceDescription: "Pour les professionnels",
      description: 'La puissance maximale pour votre patrimoine',
      mainFeature: 'Gestion illimitée et collaborateurs',
      features: [
        'Nombre de lots illimité',
        'États des lieux illimités',
        '5 Go de stockage extensible',
        'Utilisateurs illimités',
        'Tableau de bord personnalisable',
        'Scoring locataire',
        'Prévisions de loyers',
        'Export comptable automatisé',
        'Archivage OCR inclus',
        'Support dédié'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24 rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 transform">
        <div className="absolute top-12 -left-4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-12 -right-4 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-8 left-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" /> Offre de lancement : 3 mois gratuits pour les 500 premiers inscrits
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Une offre adaptée à chaque besoin</h2>
          <p className="text-xl text-gray-600 mb-8">Gérez sereinement votre patrimoine immobilier</p>

          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>Mensuel</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ backgroundColor: isAnnual ? '#3B82F6' : '#E5E7EB' }}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-5' : 'translate-x-0'
                  }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
              Annuel (-20%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative mb-24">
          {subscriptions.map((sub) => (
            <div
              key={sub.name}
              className={`
                bg-white rounded-3xl shadow-xl flex flex-col justify-between p-8
                transform transition-all duration-200
                ${sub.popular ? 'ring-2 ring-blue-500 scale-105' : ''}
              `}
            >
              <div className="flex-grow">
                {sub.popular && (
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-800">{sub.name}</h3>
                <p className="text-gray-600 mt-2">{sub.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gray-900">
                    {sub.price === 0 ? 'Gratuit' : `${calculatePrice(sub.price)}€`}
                  </span>
                  {sub.price !== 0 && (
                    <span className="text-gray-500 ml-2">
                      /mois {isAnnual && '(facturé annuellement)'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">{sub.priceDescription}</p>

                <div className="mt-8 mb-4 py-4 border-y border-gray-100">
                  <p className="font-medium text-gray-900">{sub.mainFeature}</p>
                </div>

                <ul className="space-y-4">
                  {sub.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full mt-8 px-6 py-4 rounded-full text-lg font-medium transition-all
                  ${sub.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {sub.price === 0 ? 'S\'inscrire maintenant' : 'Choisir cette formule'}
              </button>
            </div>
          ))}
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Modules Premium</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {premiumModules.map((module) => (
              <div key={module.name} className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold mb-2">{module.name}</h4>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">
                    {module.price}€
                    {!module.oneShot && <span className="text-sm text-gray-500 ml-1">/mois</span>}
                  </span>
                  <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors">
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Pourquoi choisir <span className="text-blue-500">Owneo</span> ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Spécialiste SCI</h4>
                <p className="text-gray-600">Gestion des parts et comptabilité adaptée aux besoins spécifiques des SCI</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Intelligence artificielle</h4>
                <p className="text-gray-600">Scoring locataire et prévisions de loyers par IA</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Optimisation fiscale</h4>
                <p className="text-gray-600">Déclarations automatisées et optimisation du cashflow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { FileText, User, ChartPie, Building, ChevronRight } from 'lucide-react';
import { investmentData } from '@/shared/investmentData';

export const InvestmentSupportSection = () => {
  const getDebtRatioStatus = (ratio: number) => {
    if (ratio <= 25) return 'good';
    if (ratio <= 30) return 'warning';
    if (ratio <= 35) return 'critical';
    return 'danger';
  };

  const debtRatioStatus = getDebtRatioStatus(investmentData.performance.debtRatio);

  const statusColors = {
    good: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      bold: 'text-green-700',
      circle: 'bg-green-500',
      circleBg: 'bg-green-100'
    },
    warning: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      bold: 'text-yellow-700',
      circle: 'bg-yellow-500',
      circleBg: 'bg-yellow-100'
    },
    critical: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      bold: 'text-orange-700',
      circle: 'bg-orange-500',
      circleBg: 'bg-orange-100'
    },
    danger: {
      bg: 'bg-red-50',
      text: 'text-red-600',
      bold: 'text-red-700',
      circle: 'bg-red-500',
      circleBg: 'bg-red-100'
    }
  };

  const colors = statusColors[debtRatioStatus];

  return (
    <div className="bg-gray-50 rounded-xl py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          <span className="text-blue-500">Concrétisez</span> chaque nouveau projet avec sérénité
        </h2>
        <p className="text-xl text-gray-600 mb-16 text-center">Augmentez vos chances d'obtenir votre prochain financement avec des rapports détaillés</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Partie gauche - Explications */}
          <div className="space-y-8">
            <div className="bg-white h-full p-4 md:p-8 rounded-3xl">
              <h3 className="text-2xl font-bold p-4 md:p-0 text-gray-800 mb-6">Personnalisez votre dossier</h3>

              <div className="space-y-6">
                {/* Paramètres du bien */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Détails du bien</h4>
                    <p className="text-gray-600">{`${investmentData.property.type} ${investmentData.property.location}`}</p>
                    <p className="text-gray-600">{`${investmentData.property.price.toLocaleString()}€ - ${investmentData.property.surface}m²`}</p>
                    <p className="text-gray-600">Prix au m² : {investmentData.property.pricePerM2.toLocaleString()}€</p>
                  </div>
                </div>

                {/* Profil investisseur */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Profil investisseur</h4>
                    <p className="text-gray-600">Revenus mensuels : {investmentData.investor.monthlyIncome.toLocaleString()}€</p>
                    <p className="text-gray-600">Apport : {investmentData.investor.contribution.toLocaleString()}€</p>
                    <p className="text-gray-600">Capacité d'emprunt : {investmentData.investor.borrowingCapacity.toLocaleString()}€/mois</p>
                  </div>
                </div>

                {/* Financement */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Plan de financement</h4>
                    <p className="text-gray-600">Crédit sur {investmentData.financing.duration} ans</p>
                    <p className="text-gray-600">Taux : {investmentData.financing.rate}%</p>
                    <p className="text-gray-600">Assurance : {investmentData.financing.insurance}%</p>
                  </div>
                </div>

                {/* Rentabilité */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center shrink-0">
                    <ChartPie className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Indicateurs de performance</h4>
                    <p className="text-gray-600">Rentabilité brute : {investmentData.performance.grossYield}%</p>
                    <p className="text-gray-600">Cash-flow mensuel : +{investmentData.performance.monthlyCashflow}€</p>
                    <p className="text-gray-600">ROI : {investmentData.performance.roi}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partie droite - Preview PDF */}
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-gray-600 px-4 py-2 rounded-full shadow-lg text-sm">
              Aperçu d'une partie du rapport
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="border-b pb-6 mb-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Rapport d'investissement</h4>
                <p className="text-gray-600">{`${investmentData.property.type} ${investmentData.property.location} - ${new Date().toLocaleString('fr-FR', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('fr-FR', { month: 'long' }).slice(1)} ${new Date().getFullYear()}`}</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h5 className="font-semibold text-gray-800 mb-2">Synthèse de l'opération</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Prix d'achat</p>
                      <p className="font-semibold">{investmentData.property.price.toLocaleString()}€</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Loyer mensuel</p>
                      <p className="font-semibold">{investmentData.performance.monthlyRent.toLocaleString()}€</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Mensualité crédit</p>
                      <p className="font-semibold">{investmentData.financing.monthlyPayment.toLocaleString()}€</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cash-flow mensuel</p>
                      <p className="font-semibold text-green-600">+{investmentData.performance.monthlyCashflow}€</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800">Plan de financement</h5>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Apport personnel</td>
                        <td className="py-2 text-right font-semibold">{investmentData.investor.contribution.toLocaleString()}€</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Montant emprunté</td>
                        <td className="py-2 text-right font-semibold">{investmentData.financing.borrowed.toLocaleString()}€</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Frais de notaire</td>
                        <td className="py-2 text-right font-semibold">{investmentData.financing.notaryFees.toLocaleString()}€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={`${colors.bg} p-4 rounded-xl`}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`text-sm ${colors.text}`}>Taux d'endettement</p>
                      <p className={`text-xl font-bold ${colors.bold}`}>
                        {investmentData.performance.debtRatio}%
                        {debtRatioStatus === 'danger' &&
                          <span className="text-sm ml-2">(Refus probable)</span>
                        }
                      </p>
                    </div>
                    <div className={`h-12 w-12 ${colors.circleBg} rounded-full flex items-center justify-center`}>
                      <div className={`h-8 w-8 ${colors.circle} rounded-full`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 font-medium text-lg shadow-lg group">
            Je crée mon dossier d'investissement
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
    </div>
  );
};
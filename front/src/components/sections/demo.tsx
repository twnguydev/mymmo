import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { investmentData } from '@/shared/investmentData';

export const DemoSection = () => {
  const [viewType, setViewType] = useState('annual');

  const calculateMonthlyCharges = (cashflow: number) => {
    return (
      cashflow * 0.05 +
      investmentData.performance.monthlyCharges.assurance +
      investmentData.performance.monthlyCharges.copropriete +
      investmentData.performance.monthlyCharges.fraisGestion
    );
  };

  const calculateAnnualCharges = (cashflow: number) => {
    return (
      cashflow * 0.05 +
      (investmentData.performance.monthlyCharges.assurance +
        investmentData.performance.monthlyCharges.copropriete +
        investmentData.performance.monthlyCharges.fraisGestion) * 12
    );
  };

  const annualData = Array.from({ length: 5 }, (_, i) => {
    const year = 2020 + i;
    const baseGrossYield = 4.2 + (i * 0.3);
    const baseCashflow = (250 + (i * 30)) * 12;

    return {
      period: year.toString(),
      Rendement: baseGrossYield,
      Cashflow: baseCashflow,
      Charges: calculateAnnualCharges(baseCashflow / 12),
    };
  });

  const monthlyData = Array.from({ length: 19 }, (_, i) => {
    const quarters = ['Jan', 'Avr', 'Juil', 'Oct'];
    const year = Math.floor(i / 4) + 20;
    const quarter = quarters[i % 4];
    const progressionRate = i * 0.075;
    const baseCashflow = 240 + (i * 7.5);

    return {
      period: `${quarter} ${year}`,
      Rendement: 4.0 + progressionRate,
      Cashflow: baseCashflow,
      Charges: calculateMonthlyCharges(baseCashflow),
    };
  });

  const kpiData = [
    {
      name: 'Rendement locatif',
      value: `${investmentData.performance.grossYield}%`,
      description: 'Ratio entre le loyer annuel et le prix d\'achat du bien immobilier.',
    },
    {
      name: 'Cash-flow mensuel',
      value: `${investmentData.performance.monthlyCashflow}€`,
      description: 'Différence entre les loyers perçus, les charges et la mensualité du crédit',
    },
    {
      name: 'ROI',
      value: `${investmentData.performance.roi}%`,
      description: 'Ratio entre le cash-flow annuel et l\'investissement initial.',
    },
    {
      name: 'Rentabilité nette',
      value: `${investmentData.performance.netYield}%`,
      description: 'Ratio entre le cash-flow annuel et le prix d\'achat du bien immobilier.',
    },
    {
      name: 'Charges annuelles',
      value: `${calculateAnnualCharges(investmentData.performance.monthlyCashflow).toLocaleString()}€`,
      description: 'Ensemble des charges liées à la gestion du bien immobilier.',
      details: [
        {
          label: 'Précaution (5%)',
          value: `${Math.round(investmentData.performance.monthlyCashflow * 12 * 0.05).toLocaleString()}€`,
        },
        {
          label: 'Assurances',
          value: `${(investmentData.performance.monthlyCharges.assurance * 12).toLocaleString()}€`
        },
        {
          label: 'Copropriété',
          value: `${(investmentData.performance.monthlyCharges.copropriete * 12).toLocaleString()}€`
        },
        {
          label: 'Frais de gestion',
          value: `${(investmentData.performance.monthlyCharges.fraisGestion * 12).toLocaleString()}€`
        },
      ],
    },
    {
      name: 'Effet de levier',
      value: '21.4%',
      description: 'Ratio entre le rendement de l\'investissement et du capital propre.',
      details: [
        { label: 'Apport (20%)', value: `${investmentData.investor.contribution.toLocaleString()}€` },
        { label: 'Mensualité', value: `${investmentData.financing.monthlyPayment.toLocaleString()}€` },
        {
          label: 'Cash-flow annuel',
          value: `${(investmentData.performance.monthlyCashflow * 12).toLocaleString()}€`
        },
      ],
    },
  ];

  return (
    <div className="bg-white py-24 rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Visualisez la performance de vos investissements</h2>
        <p className="text-xl text-gray-600 mb-16 text-center">Analysez l'évolution de vos biens immobiliers pour maximiser votre rentabilité</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Graphique d'évolution */}
          <div className="bg-gray-50 rounded-3xl">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-6">
              <h3 className="text-2xl p-8 pb-0 md:pb-8 font-bold text-gray-700">Évolution de la performance</h3>
              <div className="p-4 md:p-8">
                <div className="flex bg-white rounded-full p-1">
                  <button
                    onClick={() => setViewType('annual')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${viewType === 'annual'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Analyses annuelles
                  </button>
                  <button
                    onClick={() => setViewType('monthly')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${viewType === 'monthly'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    Analyses mensuelles
                  </button>
                </div>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer>
                <LineChart
                  data={viewType === 'annual' ? annualData : monthlyData}
                  margin={{ top: 10, right: 30, left: 10, bottom: 65 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="period"
                    angle={viewType === 'monthly' ? -45 : 0}
                    textAnchor={viewType === 'monthly' ? 'end' : 'middle'}
                    height={60}
                    interval={0}
                    tickMargin={30}
                    scale="point"
                  />
                  <YAxis
                    yAxisId="left"
                    tickCount={5}
                    domain={['dataMin - 1', 'dataMax + 1']}
                    padding={{ top: 20, bottom: 20 }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickCount={5}
                    domain={['dataMin - 50', 'dataMax + 50']}
                    padding={{ top: 20, bottom: 20 }}
                  />
                  <Tooltip />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="Charges"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Charges (€)"
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="Rendement"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Rendement (%)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="Cashflow"
                    stroke="#16a34a"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Cash-flow (€)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-8 p-4 md:p-8 lg:pt-0">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-600">Rendement locatif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600">Cash-flow</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <span className="text-sm text-gray-600">Charges</span>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-4">
            {kpiData.map((kpi) => (
              <div key={kpi.name} className="flex flex-col bg-gray-50 p-6 rounded-3xl">
                <div className={kpi.name !== 'Effet de levier' ? 'flex-grow' : ''}>
                  <p className="text-gray-600 text-lg mb-2">{kpi.name}</p>
                  <p className="text-xs text-gray-500 mb-2">{kpi.description}</p>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{kpi.value}</p>
                {kpi.details && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {kpi.details.map((detail, index) => (
                      <div key={index} className="flex flex-col md:flex-row justify-between md:items-center mb-1">
                        <span className="text-sm text-gray-500">{detail.label}</span>
                        <span className="text-sm font-medium text-gray-700">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-900 transition-colors">
            Simuler mon investissement
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
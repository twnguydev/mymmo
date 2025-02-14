interface InvestmentData {
  property: {
    type: string;
    location: string;
    price: number;
    surface: number;
    pricePerM2: number;
  };
  investor: {
    monthlyIncome: number;
    contribution: number;
    borrowingCapacity: number;
  };
  financing: {
    duration: number;
    rate: number;
    insurance: number;
    monthlyPayment: number;
    notaryFees: number;
    borrowed: number;
  };
  performance: {
    monthlyRent: number;
    monthlyCharges: {
      assurance: number;
      copropriete: number;
      fraisGestion: number;
    };
    grossYield: number;
    netYield: number;
    monthlyChargesTotal: number;
    monthlyExpenses: number;
    monthlyCashflow: number;
    roi: number;
    debtRatio: number;
  };
}

export const investmentData: InvestmentData = {
  property: {
    type: 'T3',
    location: 'Centre-ville Bordeaux',
    price: 250000,
    surface: 65,
    pricePerM2: 3846,
  },
  investor: {
    monthlyIncome: 4500,
    contribution: 50000,
    borrowingCapacity: 1500,
  },
  financing: {
    duration: 20,
    rate: 3.8,
    insurance: 0.34,
    monthlyPayment: 770,
    notaryFees: 17500,
    borrowed: 200000,
  },
  performance: {
    monthlyRent: 950,
    monthlyCharges: {
      assurance: 80,
      copropriete: 200,
      fraisGestion: 250,
    },
    grossYield: 5.4,
    netYield: 4.2,
    monthlyExpenses: 770,
    monthlyChargesTotal: 530,
    monthlyCashflow: 180,
    roi: 12.8,
    debtRatio: 28,
  },
};
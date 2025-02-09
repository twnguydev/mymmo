import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Star, Users, ChartBar, Shield, ArrowRight, Check } from 'lucide-react';

const LoginUI = () => {
  const features = [
    { icon: Shield, text: "Sécurité renforcée" },
    { icon: Users, text: "Multi-utilisateurs" },
    { icon: ChartBar, text: "Tableau de bord avancé" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex-1 hidden lg:flex items-center justify-center relative">
        <div className="max-w-2xl px-8">
          {/* Value Proposition */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Offre de lancement : 3 mois gratuits</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              La gestion locative{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                intelligente
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez plus de 30 propriétaires qui optimisent leur patrimoine avec Owneo.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4 mb-12">
            {[
              "Documents automatisés et états des lieux",
              "Suivi des paiements et relances",
              "Tableau de bord personnalisable",
              "Accès multi-utilisateurs",
              "Support client dédié",
              "Données sécurisées",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <feature.icon className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-4 relative">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="mb-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bienvenue sur Owneo</h2>
              <p className="text-gray-600">Accédez à votre espace de gestion</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="exemple@email.com"
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Mot de passe oublié ?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="bg-white"
                />
              </div>

              <Button className="w-full bg-gray-900 hover:bg-blue-600 transition-colors group">
                <span>Se connecter</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Essayer gratuitement
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Pas encore de compte ?{' '}
                  <a href="/auth/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                    Créer un compte
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginUI;
'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Home, Upload, PlusCircle, X } from 'lucide-react';

const PropertyFormModal = () => {
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    size: '',
    rooms: '',
    floor: '',
    constructionYear: '',
    price: '',
    notaryFees: '',
    rental: '',
    charges: [] as Array<{type: string, amount: string}>,
    loan: '',
    loanInsurance: ''
  });

  const [open, setOpen] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addCharge = () => {
    setFormData(prev => ({
      ...prev,
      charges: [...prev.charges, { type: '', amount: '' }]
    }));
  };

  const removeCharge = (index: number) => {
    setFormData(prev => ({
      ...prev,
      charges: prev.charges.filter((_, i) => i !== index)
    }));
  };

  const updateCharge = (index: number, field: 'type' | 'amount', value: string) => {
    setFormData(prev => ({
      ...prev,
      charges: prev.charges.map((charge, i) => 
        i === index ? { ...charge, [field]: value } : charge
      )
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <PlusCircle className="w-4 h-4 mr-2" />
          Ajouter un bien
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <Home className="w-8 h-8 text-blue-600" />
            <div>
              <DialogTitle>Enregistrer un bien immobilier</DialogTitle>
              <p className="text-sm text-gray-500">Renseignez les informations du bien</p>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="infos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="infos">Informations générales</TabsTrigger>
            <TabsTrigger value="financial">Informations financières</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="infos">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type">Type de bien</Label>
                  <Select name="type" onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Appartement</SelectItem>
                      <SelectItem value="house">Maison</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="commercial">Local Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="size">Superficie (m²)</Label>
                  <Input
                    type="number"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    placeholder="75"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rooms">Nombre de pièces</Label>
                  <Input
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    placeholder="3"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="floor">Étage</Label>
                  <Input
                    type="number"
                    name="floor"
                    value={formData.floor}
                    onChange={handleInputChange}
                    placeholder="2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="constructionYear">Année de construction</Label>
                  <Input
                    type="number"
                    name="constructionYear"
                    value={formData.constructionYear}
                    onChange={handleInputChange}
                    placeholder="1985"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Adresse complète</Label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 rue de Paris, 75001 Paris"
                  />
                </div>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="financial">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">Prix d'achat (€)</Label>
                  <Input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="250000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notaryFees">Frais de notaire (€)</Label>
                  <Input
                    type="number"
                    name="notaryFees"
                    value={formData.notaryFees}
                    onChange={handleInputChange}
                    placeholder="20000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loan">Mensualité crédit (€)</Label>
                  <Input
                    type="number"
                    name="loan"
                    value={formData.loan}
                    onChange={handleInputChange}
                    placeholder="800"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanInsurance">Assurance crédit (€)</Label>
                  <Input
                    type="number"
                    name="loanInsurance"
                    value={formData.loanInsurance}
                    onChange={handleInputChange}
                    placeholder="30"
                  />
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Charges récurrentes</Label>
                    <Button type="button" variant="outline" size="sm" onClick={addCharge}>
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Ajouter une charge
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {formData.charges.map((charge, index) => (
                      <div key={index} className="flex items-end gap-4">
                        <div className="flex-1 space-y-2">
                          <Label>Type de charge</Label>
                          <Select
                            value={charge.type}
                            onValueChange={(value) => updateCharge(index, 'type', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez le type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="copro">Charges de copropriété</SelectItem>
                              <SelectItem value="assurance">Assurance PNO</SelectItem>
                              <SelectItem value="taxe">Taxe foncière</SelectItem>
                              <SelectItem value="autre">Autre charge</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex-1 space-y-2">
                          <Label>Montant (€)</Label>
                          <Input
                            type="number"
                            value={charge.amount}
                            onChange={(e) => updateCharge(index, 'amount', e.target.value)}
                            placeholder="100"
                          />
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeCharge(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="documents">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DocumentUpload title="Acte de propriété" />
                <DocumentUpload title="Diagnostic DPE" />
                <DocumentUpload title="Assurance PNO" />
                <DocumentUpload title="Taxe foncière" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-4 mt-8">
          <Button variant="outline" onClick={() => setOpen(false)}>Annuler</Button>
          <Button onClick={handleSubmit}>Enregistrer le bien</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface DocumentUploadProps {
  title: string;
}

const DocumentUpload = ({ title }: DocumentUploadProps) => (
  <div className="border-2 border-dashed rounded-lg p-4 text-center space-y-2">
    <Upload className="w-8 h-8 mx-auto text-gray-400" />
    <h3 className="font-medium">{title}</h3>
    <p className="text-sm text-gray-500">Glissez ou cliquez pour télécharger</p>
    <Button variant="outline" size="sm" className="w-full">Parcourir</Button>
  </div>
);

export default PropertyFormModal;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { MapPin, FileText, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Generate = () => {
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "",
    email: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission and redirect to loading page
    setTimeout(() => {
      navigate('/loading');
    }, 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Generate Your Property Pack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your property details below to receive a comprehensive risk assessment report
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Address Input */}
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    Property Address / Postcode
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="e.g. 123 High Street, London SW1A 1AA"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="input-primary"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter the full address or postcode for accurate results
                  </p>
                </div>

                {/* Property Type */}
                <div className="space-y-2">
                  <Label htmlFor="propertyType" className="text-sm font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    Property Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('propertyType', value)} required>
                    <SelectTrigger className="input-primary">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="input-primary"
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    We'll send the completed report to this email address
                  </p>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="btn-hero w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Generate Pack"}
                </Button>
              </form>

              {/* Disclaimer */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> Automated pre-search summary using public data. 
                  Not a substitute for official searches. For legal transactions, please obtain 
                  official conveyancing searches from licensed providers.
                </p>
              </div>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Energy Performance Certificate (EPC) data</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Flood risk assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Mining and subsidence risks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Environmental considerations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Planning applications nearby</span>
                </li>
              </ul>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">Pricing</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Residential Property</span>
                  <span className="font-semibold text-primary">£30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Commercial Property</span>
                  <span className="font-semibold text-primary">£100</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground">
                  Payment processed securely. Reports delivered within 2-5 minutes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
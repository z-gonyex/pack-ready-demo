import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, AlertTriangle, Info, Star } from "lucide-react";

const Results = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate PDF download
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger actual PDF download
      window.open('/sample-property-pack.pdf', '_blank');
    }, 2000);
  };

  const riskItems = [
    {
      category: "Energy Performance",
      status: "C Rating",
      risk: "medium",
      details: "EPC score of 69 - Good energy efficiency",
      icon: <Info className="w-5 h-5" />
    },
    {
      category: "Flood Risk",
      status: "Low Risk",
      risk: "low",
      details: "Property is in Flood Zone 1 with very low probability",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      category: "Mining Risk",
      status: "Medium Risk",
      risk: "medium",
      details: "Historical coal mining activity within 1km radius",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      category: "Environmental",
      status: "No Issues",
      risk: "low",
      details: "No landfills or contaminated land nearby",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Property Pack is Ready
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've analyzed multiple data sources for <strong>123 High Street, London SW1A 1AA</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Download Section */}
            <Card className="card-elevated p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Complete Report</h2>
                  <p className="text-muted-foreground">
                    Comprehensive 12-page property risk assessment
                  </p>
                </div>
                <Button 
                  onClick={handleDownload}
                  className="btn-hero"
                  disabled={isDownloading}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {isDownloading ? "Preparing..." : "Download Report"}
                </Button>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Report sent to:</strong> your.email@example.com<br />
                  <strong>Generated:</strong> {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
                </p>
              </div>
            </Card>

            {/* Risk Summary */}
            <Card className="card-elevated p-8">
              <h2 className="text-2xl font-semibold mb-6">Risk Summary</h2>
              <div className="space-y-4">
                {riskItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${getRiskColor(item.risk)}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.category}</h3>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getRiskColor(item.risk)}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upsell */}
            <Card className="card-elevated p-6 border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-primary mr-2" />
                <h3 className="font-semibold text-lg">Upgrade Available</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Need the official searches? Get a complete conveyancing pack with:
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Local Authority Search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Land Registry Title
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Water & Drainage Search
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Environmental Search
                </li>
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">£349</div>
                <Button className="btn-hero w-full">
                  Upgrade to Full Pack
                </Button>
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">Next Steps</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <span>Review the full report for detailed findings</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <span>Share with your solicitor or property advisor</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <span>Consider official searches for legal transactions</span>
                </div>
              </div>
            </Card>

            {/* Support */}
            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-4">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Have questions about your report? Our team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>

        {/* Generate Another */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="btn-outline"
            onClick={() => window.location.href = '/generate'}
          >
            Generate Another Pack
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
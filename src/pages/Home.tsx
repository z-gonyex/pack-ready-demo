import { ArrowDown, Clock, FileCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-legal-tech.jpg";

const Home = () => {
  const handleGenerateClick = () => {
    const element = document.getElementById('generate-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Enter Address",
      description: "Simply input the property address or postcode"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Automated Checks",
      description: "We scan public databases and official records"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Instant PDF",
      description: "Receive a comprehensive report in minutes"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern office buildings" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get a Property Risk Report in 
                <span className="text-primary"> Minutes</span>, Not Weeks
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Automated pre-search packs for solicitors and buyers. Fast, affordable, solicitor-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGenerateClick} className="btn-hero">
                  Generate Property Pack
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="btn-outline">
                  View Sample Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="card-elevated p-8 bg-card/80 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4">Quick Demo</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">EPC Rating: C (69)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Flood Risk: Low</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Mining Risk: Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="generate-section" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get comprehensive property insights in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="card-simple p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex justify-center mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-hero" onClick={() => window.location.href = '/generate'}>
              Start Your Property Pack
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Pay-As-You-Go */}
            <Card className="card-simple p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Pay-As-You-Go</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">£30</span>
                <span className="text-muted-foreground"> / residential</span>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">£100</span>
                <span className="text-muted-foreground"> / commercial</span>
              </div>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* Professional */}
            <Card className="card-elevated p-8 text-center border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">£299</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
              <p className="text-muted-foreground mb-6">Unlimited packs, 1-2 users</p>
              <Button className="btn-hero w-full">
                Start Free Trial
              </Button>
            </Card>

            {/* Enterprise */}
            <Card className="card-simple p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">£499+</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
              <p className="text-muted-foreground mb-6">Custom solutions, analytics</p>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => window.location.href = '/pricing'}>
              View Full Pricing Details
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
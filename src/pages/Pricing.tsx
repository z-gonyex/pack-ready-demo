import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Zap, BarChart3 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Pay-As-You-Go",
      description: "Perfect for occasional use",
      price: "£30",
      period: "per residential report",
      commercialPrice: "£100",
      commercialPeriod: "per commercial report",
      features: [
        "Comprehensive property risk report",
        "EPC and flood risk analysis",
        "Mining and environmental checks",
        "PDF delivery within 5 minutes",
        "Email support"
      ],
      cta: "Get Started",
      popular: false,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Professional",
      description: "Best for solicitors and agents",
      price: "£299",
      period: "per month",
      features: [
        "Unlimited property packs",
        "1-2 user accounts",
        "Dashboard with report history",
        "Priority processing (2-3 minutes)",
        "Phone and email support",
        "Bulk address upload",
        "API access",
        "Monthly usage analytics"
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <Users className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      description: "For large firms and organizations",
      price: "£499+",
      period: "per month",
      features: [
        "Unlimited property packs",
        "Unlimited user accounts",
        "White-label reports",
        "Custom branding",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom integrations",
        "Training and onboarding"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const handlePlanClick = (planName: string) => {
    if (planName === "Pay-As-You-Go") {
      window.location.href = '/generate';
    } else {
      // Scroll to contact form for now
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include comprehensive property risk reports with no hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                plan.popular 
                  ? 'card-elevated border-2 border-primary' 
                  : 'card-simple'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <div className="text-muted-foreground">{plan.period}</div>
                {plan.commercialPrice && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold text-primary">
                      {plan.commercialPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">{plan.commercialPeriod}</div>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={plan.popular ? "btn-hero w-full" : "btn-outline w-full"}
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-3">What's included in the property pack?</h3>
              <p className="text-muted-foreground text-sm">
                Each pack includes EPC data, flood risk assessment, mining risks, environmental considerations, 
                and nearby planning applications - all compiled into a professional PDF report.
              </p>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-3">How quickly do I receive the report?</h3>
              <p className="text-muted-foreground text-sm">
                Reports are typically generated within 2-5 minutes. Professional plan users get priority 
                processing with 2-3 minute delivery times.
              </p>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-3">Is this a substitute for official searches?</h3>
              <p className="text-muted-foreground text-sm">
                No, our reports are pre-search summaries using public data. For legal transactions, 
                you'll still need official conveyancing searches from licensed providers.
              </p>
            </Card>

            <Card className="card-simple p-6">
              <h3 className="font-semibold mb-3">Can I cancel my subscription anytime?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, both Professional and Enterprise plans can be cancelled at any time. 
                You'll continue to have access until the end of your billing period.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact-section" className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Large organization? Special requirements? Let's discuss a tailored solution for your needs.
          </p>
          <Button 
            className="btn-hero"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
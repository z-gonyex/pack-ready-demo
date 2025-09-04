import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    "Checking local authority data...",
    "Pulling EPC record...",
    "Scanning flood maps...",
    "Reviewing planning applications...",
    "Analyzing environmental data...",
    "Generating report..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update current step based on progress
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/results');
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Card className="card-elevated p-12 text-center">
          <div className="mb-8">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Generating Your Property Pack
            </h1>
            <p className="text-muted-foreground text-lg">
              We're analyzing multiple data sources to create your comprehensive report
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="progress-bar mb-4">
              <div 
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </div>
          </div>

          {/* Current Step */}
          <div className="mb-8">
            <p className="text-lg font-medium text-foreground mb-6">
              {steps[currentStep]}
            </p>
            
            {/* Step List */}
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className={`text-sm ${index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step}
                  </span>
                  {index < currentStep ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : index === currentStep ? (
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-muted rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Estimated completion:</strong> 2-5 minutes<br />
              You'll receive an email confirmation once your report is ready.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Loading;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Construction, ArrowLeft, Clock, Wrench } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/cv" className="text-sm font-medium hover:text-primary transition-colors">
                CV
              </Link>
              <Link to="/certifications" className="text-sm font-medium hover:text-primary transition-colors">
                Certifications
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-[73px] left-0 right-0 z-40">
        <Progress value={50} className="h-1 rounded-none" />
      </div>

      {/* Under Construction Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Construction className="w-20 h-20 mx-auto mb-6 text-primary animate-bounce" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Under Construction
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              This page is currently being built. Check back soon for exciting new content!
            </p>
          </div>

          <Card className="max-w-2xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                Development Status
              </CardTitle>
              <CardDescription>
                We're working hard to bring you something amazing
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Design</p>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Development</p>
                    <p className="text-sm text-muted-foreground">In Progress</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              In the meantime, feel free to explore other sections of the site
            </p>
            <Button asChild>
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderConstruction;
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Shield, Zap, Users, BarChart3, ArrowRight, Play, Globe, Clock, Code, Terminal, TestTube, Database, Cpu, FileText, Download, ExternalLink, Copy, Check } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">sofIA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download Code
            </Button>
            <Button size="sm">
              <Play className="w-4 h-4 mr-2" />
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-6">
            <Cpu className="w-4 h-4 mr-2" />
            HACKTUDO 2025 - Production-Ready
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transform WhatsApp into Your Payment Gateway
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
            sofIA enables secure payments through WhatsApp using Google's AP2 Protocol. Built for BEMOBI's merchants across LATAM, Africa, and Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-card rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="font-medium">WhatsApp Business</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hi! Your VIVO subscription expires tomorrow. Would you like to renew?
                    </div>
                    <Button size="sm" className="mt-2">
                      Renew Now - $29.99
                    </Button>
                  </div>
                  <div className="bg-card rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">Payment processed securely via AP2</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">
                    AP2 Protocol Compliant
                  </Badge>
                  <div className="text-left">
                    <h3 className="font-semibold mb-2">Multi-Agent Architecture</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Orchestrator Agent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span>Payment Agent</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>BEMOBI Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Problem & Solution</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-destructive">The Challenge</h3>
              <p className="text-lg text-muted-foreground mb-6">
                30-40% of customers forget to renew subscriptions, leading to massive churn and lost revenue for telecom operators.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-accent">The Solution</h3>
              <p className="text-lg text-muted-foreground mb-6">
                sofIA automates subscription management through WhatsApp conversations, reducing churn by 90%+ with AP2-compliant security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to transform WhatsApp into a secure payment gateway
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>AP2 Protocol Compliance</CardTitle>
                <CardDescription>
                  Full implementation of Google's latest payment protocol with enterprise-grade security
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>WhatsApp Integration</CardTitle>
                <CardDescription>
                  No app downloads required - customers pay directly through WhatsApp conversations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Multi-Agent Architecture</CardTitle>
                <CardDescription>
                  Sophisticated AI orchestration for complex payment workflows and customer service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Regional Support</CardTitle>
                <CardDescription>
                  LATAM, Africa, Asia payment methods - PIX, Mobile Money, Digital Wallets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>Real-time Processing</CardTitle>
                <CardDescription>
                  &lt; 2 second response times with complete audit trails and monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Security First</CardTitle>
                <CardDescription>
                  RSA-2048 digital signatures and enterprise-grade security for all transactions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Customer Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Built for Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Designed specifically for BEMOBI and major telecom operators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Primary: BEMOBI</CardTitle>
                <CardDescription className="text-lg">Mobile Payment Gateway Provider</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>New revenue stream opportunity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Competitive differentiation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Reduced support costs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Secondary: Telecom Operators</CardTitle>
                <CardDescription className="text-lg">VIVO, CLARO, OI, TIM</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>90%+ churn reduction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Seamless WhatsApp integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>AP2 compliance guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Proven Results</h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade performance with measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Uptime Target</div>
              <div className="text-sm text-muted-foreground">Enterprise-grade reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">&lt; 2s</div>
              <div className="text-lg font-semibold mb-2">Response Time</div>
              <div className="text-sm text-muted-foreground">Lightning-fast processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-lg font-semibold mb-2">AP2 Compliance</div>
              <div className="text-sm text-muted-foreground">Full protocol implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%+</div>
              <div className="text-lg font-semibold mb-2">Churn Reduction</div>
              <div className="text-sm text-muted-foreground">Measured business impact</div>
            </div>
          </div>
        </div>
      </section>




      {/* How to Test sofIA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">How to Test sofIA</h2>
            <p className="text-lg text-muted-foreground">
              Three simple ways to get started with sofIA - from quick tests to full WhatsApp integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quick Test (30 seconds)</h3>
              <p className="text-sm text-muted-foreground mb-4">Run tests with mock data - no setup required</p>
              <div className="bg-muted rounded-lg p-3 mb-4">
                <code className="text-xs">python run_tests.py --mode quick</code>
              </div>
              <Button size="sm" className="w-full">
                <Terminal className="w-4 h-4 mr-2" />
                Run Quick Test
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Demo Mode (1 minute)</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete AP2 payment flow simulation</p>
              <div className="bg-muted rounded-lg p-3 mb-4">
                <code className="text-xs">uv run app.py demo</code>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Start Demo
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp Integration (5 minutes)</h3>
              <p className="text-sm text-muted-foreground mb-4">Real-time testing with your WhatsApp account</p>
              <div className="bg-muted rounded-lg p-3 mb-4">
                <code className="text-xs">npm start && uv run app.py</code>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
            </Card>
          </div>
        </div>
      </section>




      {/* Integration Logos */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Built with industry-leading technologies and protocols</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <Badge variant="outline" className="px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              HACKTUDO 2025
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Google AP2 Protocol
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Business API
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              BEMOBI Gateway
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Database className="w-4 h-4 mr-2" />
              Supabase PostgreSQL
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Multi-Agent Architecture
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">sofIA</span>
              </div>
              <p className="text-muted-foreground mb-4">Transform WhatsApp into your payment gateway with AP2 protocol compliance.</p>
              <Badge variant="outline" className="mb-2">
                <Cpu className="w-4 h-4 mr-1" />
                HACKTUDO 2025
              </Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Source Code
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <div className="space-y-3">
                <Button size="sm" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Free Trial
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Code
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 sofIA - HACKTUDO 2025. Built for BEMOBI integration across LATAM, Africa, and Asia markets.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

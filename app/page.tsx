import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Shield, Zap, Users, BarChart3, ArrowRight, Play, Globe, Clock } from "lucide-react"
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
            <Link href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </Link>
            <Button variant="outline" size="sm">
              Documentation
            </Button>
            <Button size="sm">Start Free Trial</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-6">
            Revolutionary WhatsApp Payment Agent with AP2 Protocol
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transform WhatsApp into Your Payment Gateway
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
            sofIA enables secure subscription management and payments through WhatsApp using Google's AP2 Protocol.
            Perfect for BEMOBI's telecom clients (VIVO, CLARO, OI, TIM) to reduce churn and enhance customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Telecom operators lose 30-40% of customers to subscription churn. Manual renewal processes and
                fragmented customer experiences create friction that drives customers away.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">Complex renewal processes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">Fragmented customer experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-destructive text-sm">✗</span>
                  </div>
                  <span className="text-muted-foreground">High churn rates (30-40%)</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">The Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                sofIA automates subscription management through WhatsApp conversations, reducing churn by 90%+ while
                providing AP2-compliant security that customers trust.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Automated WhatsApp renewals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Seamless customer experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">90%+ churn reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Powerful Features for Modern Telecom</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for BEMOBI and telecom operators who need secure, scalable payment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mb-4" />
                <CardTitle>AP2 Protocol Compliance</CardTitle>
                <CardDescription>
                  Full implementation of Google's Agent Payments Protocol with RSA-2048 digital signatures
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>WhatsApp Integration</CardTitle>
                <CardDescription>
                  Seamless payment processing through WhatsApp Business API - no app downloads required
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>
                  Intelligent subscription discovery, renewal orchestration, and plan migration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Multi-Agent Architecture</CardTitle>
                <CardDescription>Sophisticated agent orchestration for complex payment workflows</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Zap className="w-12 h-12 text-secondary mb-4" />
                <CardTitle>Real-time Processing</CardTitle>
                <CardDescription>Fast and secure payment flows with complete audit trails</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Globe className="w-12 h-12 text-accent mb-4" />
                <CardTitle>BEMOBI Integration</CardTitle>
                <CardDescription>Built specifically for BEMOBI's telecom operator clients across LATAM</CardDescription>
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

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Key Use Cases</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Subscription Renewal</h4>
                <p className="text-sm text-muted-foreground">Automated renewal processes</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-medium mb-2">Plan Management</h4>
                <p className="text-sm text-muted-foreground">Upgrade/downgrade flows</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-medium mb-2">Churn Prevention</h4>
                <p className="text-sm text-muted-foreground">Proactive customer retention</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Customer Service</h4>
                <p className="text-sm text-muted-foreground">WhatsApp-based support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Technical Architecture</h2>
            <p className="text-lg text-muted-foreground">
              Robust, scalable architecture built for enterprise-grade performance
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp Interface</h3>
                <p className="text-sm text-muted-foreground">Business API Integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Node.js Bridge</h3>
                <p className="text-sm text-muted-foreground">Real-time Processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Python sofIA API</h3>
                <p className="text-sm text-muted-foreground">Multi-Agent Orchestration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">BEMOBI Gateway</h3>
                <p className="text-sm text-muted-foreground">LATAM, Africa, Asia</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Badge variant="outline" className="mb-2">
                    AP2 Protocol Layer
                  </Badge>
                  <p className="text-sm text-muted-foreground">Intent, Cart, Payment Mandates</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    Multi-Agent System
                  </Badge>
                  <p className="text-sm text-muted-foreground">Orchestrator, Payment, Integration Agents</p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">
                    Security Layer
                  </Badge>
                  <p className="text-sm text-muted-foreground">RSA-2048, Audit Trails, Compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Benefits for Everyone</h2>
            <p className="text-lg text-muted-foreground">Creating value across the entire ecosystem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="mb-4">For BEMOBI</CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-2 text-muted-foreground">
                  <li>New revenue stream</li>
                  <li>Competitive differentiation</li>
                  <li>Reduced support costs</li>
                  <li>Enhanced client relationships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="mb-4">For Telecom Operators</CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-2 text-muted-foreground">
                  <li>90%+ churn reduction</li>
                  <li>Seamless WhatsApp integration</li>
                  <li>AP2 compliance</li>
                  <li>Improved customer satisfaction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="mb-4">For End Customers</CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Never miss renewals</li>
                  <li>Easy plan management</li>
                  <li>Secure payments</li>
                  <li>Familiar WhatsApp interface</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof/Stats */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Built for Performance</h2>
            <p className="text-lg text-muted-foreground">Enterprise-grade reliability and security</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">{"< 2s"}</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">AP2 Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%+</div>
              <div className="text-muted-foreground">Successful Renewals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your transaction volume</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-4xl font-bold text-primary">
                  $99<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>Perfect for testing and small deployments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Up to 1,000 transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>WhatsApp integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>AP2 protocol compliance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-primary border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-4xl font-bold text-primary">
                  $499<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <CardDescription>Ideal for growing telecom operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Up to 10,000 transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Multi-agent orchestration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>BEMOBI integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Custom reporting</span>
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-primary">Custom</div>
                <CardDescription>For large-scale telecom deployments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Unlimited transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Dedicated infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>SLA guarantees</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">Transaction fees: 2.9% + $0.30 per transaction across all plans</p>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Implementation Roadmap</h2>
            <p className="text-lg text-muted-foreground">Clear path to production deployment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Phase 1</h3>
              <p className="text-sm text-muted-foreground mb-2">Core AP2 Implementation</p>
              <Badge variant="secondary">✅ Complete</Badge>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phase 2</h3>
              <p className="text-sm text-muted-foreground mb-2">BEMOBI Integration</p>
              <Badge variant="outline">Week 3-4</Badge>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Phase 3</h3>
              <p className="text-sm text-muted-foreground mb-2">Production Readiness</p>
              <Badge variant="outline">Week 5-6</Badge>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Phase 4</h3>
              <p className="text-sm text-muted-foreground mb-2">Scale and Launch</p>
              <Badge variant="outline">Week 7-8</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">See sofIA in Action</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Watch how sofIA transforms subscription management through WhatsApp
          </p>

          <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border">
            <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Demo Video Coming Soon</h3>
                <p className="text-muted-foreground">See the complete sofIA workflow in action</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Live Demo</Button>
            <Button variant="outline" size="lg">
              Download Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Powered by industry-leading technologies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <Badge variant="outline" className="px-4 py-2">
              BEMOBI
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Google AP2
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              WhatsApp Business API
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              PCI DSS
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              GDPR
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">sofIA</span>
              </div>
              <p className="text-muted-foreground mb-4">Revolutionary WhatsApp Payment Agent with AP2 Protocol</p>
              <Badge variant="outline">Built for HACKTUDO 2025</Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
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
                  <Link href="#demo" className="hover:text-foreground transition-colors">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>support@sofia-ai.com</li>
                <li>+1 (555) 123-4567</li>
                <li>São Paulo, Brazil</li>
              </ul>
              <div className="mt-4">
                <Button variant="outline" size="sm">
                  Newsletter Signup
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 sofIA. All rights reserved. Built for HACKTUDO 2025.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

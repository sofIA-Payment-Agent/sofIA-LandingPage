"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Shield, Zap, Users, BarChart3, ArrowRight, Play, Globe, Clock, Code, Terminal, TestTube, Database, Cpu, FileText, Download, ExternalLink, Copy, Check } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const startSofiaChat = () => {
    // Pre-filled message for sofIA
    const message = "Hello sofIA! I'm interested in learning about your payment solutions. Can you show me how it works?";
    
    // WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-4xl font-bold text-primary">sofIA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-7">
            <Link href="#features" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-base text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Button variant="outline" size="default" asChild>
              <a href="https://github.com/sofIA-Payment-Agent/sofIA-payment-agent" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="default">
              <Download className="w-5 h-5 mr-2" />
              Download Code
            </Button>
            <Button size="default">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-20 px-1 overflow-hidden bg-white">
        <div className="container mx-auto max-w-15xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            
            {/* Left Side - Text Content */}
            <div className="order-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block mb-2">
                <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 border border-purple-200 text-purple-800">
                  <Cpu className="w-4 h-4 mr-2" />
                  HACKTUDO 2025
                </Badge>
              </div>
              
              {/* Main Headline */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-balance leading-[0.9] tracking-tight text-gray-900">
                  <span className="block">Transforme</span>
                  <span className="block sofia-gradient-text-cool">o WhatsApp</span>
                  <span className="block">em seu</span>
                  <span className="block sofia-gradient-text-warm">Gateway de</span>
                  <span className="block sofia-gradient-text-cool">Pagamento</span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                sofIA permite <span className="font-bold text-purple-700">pagamentos seguros</span> através do WhatsApp usando o <span className="font-bold text-purple-700">Protocolo AP2 do Google</span>. Construído para comerciantes BEMOBI em toda LATAM, África e Ásia.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-3">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 font-bold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="mr-3 w-6 h-6" />
                  Iniciar Teste Grátis
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 font-bold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
                  onClick={() => startSofiaChat()}
                >
                  <MessageSquare className="mr-3 w-6 h-6" />
                  Chat com sofIA
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center p-2 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl md:text-3xl font-black sofia-gradient-text-cool mb-1">99.9%</div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Uptime</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl md:text-3xl font-black sofia-gradient-text-warm mb-1">&lt; 2s</div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Resposta</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl md:text-3xl font-black sofia-gradient-text-cool mb-1">100%</div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">AP2</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl md:text-3xl font-black sofia-gradient-text-warm mb-1">90%+</div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Menos Churn</div>
                </div>
              </div>
            </div>

            {/* Right Side - Video Placeholder */}
            <div className="order-2">
              <div className="relative">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-300 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-purple-700 font-semibold text-lg">Video Placeholder</p>
                    <p className="text-purple-600 text-sm">Your video will go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-purple-100/50">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">O Problema e a Solução</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">O Desafio</h3>
              <p className="text-lg text-muted-foreground mb-6">
                30-40% dos clientes esquecem de renovar assinaturas, causando grande churn e perda de receita para operadoras de telecomunicações.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 sofia-gradient-text-cool">A Solução</h3>
              <p className="text-lg text-muted-foreground mb-6">
                sofIA automatiza o gerenciamento de assinaturas através de conversas no WhatsApp, reduzindo churn em 90%+ com segurança compatível com AP2.
              </p>
                  </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Principais Recursos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Tudo que você precisa para transformar o WhatsApp em uma gateway de pagamento segura
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-bold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
              onClick={() => startSofiaChat()}
            >
              <MessageSquare className="mr-3 w-6 h-6" />
              Try sofIA - Start a conversation
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-purple-400/50 transition-colors bg-gradient-to-br from-purple-50 to-purple-100/30">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Conformidade com Protocolo AP2</CardTitle>
                <CardDescription>
                  Implementação completa do mais recente protocolo de pagamento do Google com segurança de nível empresarial
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-500/50 transition-colors bg-gradient-to-br from-purple-100 to-purple-200/30">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-purple-700 mb-4" />
                <CardTitle>Integração WhatsApp</CardTitle>
                <CardDescription>
                  Nenhum download de app necessário - clientes pagam diretamente através de conversas no WhatsApp
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-600/50 transition-colors bg-gradient-to-br from-purple-200 to-purple-300/30">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-800 mb-4" />
                <CardTitle>Arquitetura Multi-Agente</CardTitle>
                <CardDescription>
                  Orquestração sofisticada de IA para fluxos de trabalho de pagamento complexos e atendimento ao cliente
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-400/50 transition-colors bg-gradient-to-br from-purple-50 to-purple-100/30">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Suporte Regional</CardTitle>
                <CardDescription>
                  Métodos de pagamento LATAM, África, Ásia - PIX, Mobile Money, Carteiras Digitais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-500/50 transition-colors bg-gradient-to-br from-purple-100 to-purple-200/30">
              <CardHeader>
                <Zap className="w-12 h-12 text-purple-700 mb-4" />
                <CardTitle>Processamento em Tempo Real</CardTitle>
                <CardDescription>
                  Tempos de resposta &lt; 2 segundos com trilhas de auditoria completas e monitoramento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-600/50 transition-colors bg-gradient-to-br from-purple-200 to-purple-300/30">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-800 mb-4" />
                <CardTitle>Segurança em Primeiro Lugar</CardTitle>
                <CardDescription>
                  Assinaturas digitais RSA-2048 e segurança de nível empresarial para todas as transações
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>






      {/* How to Use sofIA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Como Usar sofIA</h2>
            <p className="text-lg text-muted-foreground">
              Veja como sofIA transforma conversas do WhatsApp em pagamentos seguros e automáticos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
              <h3 className="font-semibold mb-2 text-center">1. Cliente Recebe Notificação</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                sofIA envia automaticamente uma mensagem no WhatsApp quando uma assinatura está prestes a expirar
                  </p>
              <div className="bg-white rounded-lg p-4 border shadow-sm">
                <div className="text-sm text-gray-700">
                  <strong>sofIA:</strong> "Oi! Sua assinatura VIVO expira em 2 dias. Gostaria de renovar por R$ 29,99?"
                </div>
                  </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-100/50 to-purple-200/50 border-purple-300">
              <div className="w-12 h-12 bg-purple-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-700" />
                  </div>
              <h3 className="font-semibold mb-2 text-center">2. Cliente Confirma Pagamento</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                O cliente responde "sim" e sofIA processa o pagamento usando o protocolo AP2 do Google
                  </p>
              <div className="bg-white rounded-lg p-4 border shadow-sm">
                <div className="text-sm text-gray-700">
                  <strong>Cliente:</strong> "Sim, quero renovar"<br/>
                  <strong>sofIA:</strong> "Perfeito! Processando pagamento..."
                </div>
                  </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-200/50 to-purple-300/50 border-purple-400">
              <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-800" />
                </div>
              <h3 className="font-semibold mb-2 text-center">3. Pagamento Processado</h3>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                sofIA confirma o pagamento e atualiza automaticamente a assinatura do cliente
              </p>
              <div className="bg-white rounded-lg p-4 border shadow-sm">
                <div className="text-sm text-gray-700">
                  <strong>sofIA:</strong> "✅ Pagamento aprovado! Sua assinatura foi renovada por mais 30 dias."
          </div>
                </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-8 border border-purple-300">
              <h3 className="text-xl font-semibold mb-4 sofia-gradient-text-warm">Resultado: 90%+ Redução de Churn</h3>
              <p className="text-muted-foreground">
                Clientes que recebem notificações automáticas no WhatsApp têm 90% mais chances de renovar suas assinaturas
              </p>
          </div>
          </div>
        </div>
      </section>




      {/* Integration Logos */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-100/30 to-purple-200/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Construído com tecnologias e protocolos líderes da indústria</p>
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
              <p className="text-muted-foreground mb-4">Transforme o WhatsApp em sua gateway de pagamento com conformidade ao protocolo AP2.</p>
              <Badge variant="outline" className="mb-2">
                <Cpu className="w-4 h-4 mr-1" />
                HACKTUDO 2025
                </Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground transition-colors">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground transition-colors">
                    Preços
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Código Fonte
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Começar Agora</h3>
              <div className="space-y-3">
                <Button size="sm" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Iniciar Teste Grátis
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Código
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 sofIA - HACKTUDO 2025. Construído para integração BEMOBI em mercados LATAM, África e Ásia.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300 animate-pulse"
          onClick={() => startSofiaChat()}
        >
          <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
        </Button>
      </div>

    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Shield, Zap, Users, BarChart3, ArrowRight, Play, Globe, Clock, Code, Terminal, TestTube, Database, Cpu, FileText, Download, ExternalLink, Copy, Check, ChevronDown, AlertTriangle } from "lucide-react"
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
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-gradient-to-br from-purple-100 to-purple-100/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-3xl font-bold text-primary">sofIA</span>
          </div>
           <nav className="hidden md:flex items-center space-x-8">
             <a href="#hero" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
               Home
             </a>
             <a href="#features" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
               Features
             </a>
             <a href="#how-it-works" className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
               How it Works
             </a>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/sofIA-Payment-Agent/sofIA-payment-agent" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </Button>
            <Button size="sm" onClick={() => startSofiaChat()}>
              <Play className="w-4 h-4 mr-2" />
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section id="hero" className="full-screen-section bg-gradient-to-br from-purple-50 to-white">
        <div className="full-screen-content">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-block mb-6">
                  <Badge variant="secondary" className="text-sm px-4 py-2 bg-purple-100 border border-purple-200 text-purple-800">
                    <Cpu className="w-4 h-4 mr-2" />
                    HACKTUDO 2025
                  </Badge>
                </div>
                
                {/* Main Headline */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-balance leading-[0.9] tracking-tight text-gray-900">
                    <span className="block">Transforme</span>
                    <span className="block sofia-gradient-text-cool">o WhatsApp</span>
                    <span className="block">em seu</span>
                    <span className="block sofia-gradient-text-warm">Gateway de</span>
                    <span className="block sofia-gradient-text-cool">Pagamento</span>
                  </h1>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  sofIA permite <span className="font-bold text-purple-700">pagamentos seguros</span> através do WhatsApp usando o <span className="font-bold text-purple-700">Protocolo AP2 do Google</span>. Construído para comerciantes BEMOBI em toda LATAM, África e Ásia.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0">
                  <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-xl md:text-2xl font-black sofia-gradient-text-cool mb-1">99%+</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Taxa de Sucesso</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-xl md:text-2xl font-black sofia-gradient-text-warm mb-1">&lt; 2s</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Tempo de Resposta</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-xl md:text-2xl font-black sofia-gradient-text-cool mb-1">99.9%</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Uptime</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-xl md:text-2xl font-black sofia-gradient-text-warm mb-1">90%</div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Redução de Abandono</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video Placeholder */}
              <div>
                <div className="relative">
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl border-2 border-purple-300 shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-purple-700 font-semibold text-lg">Video Placeholder</p>
                      <p className="text-purple-600 text-sm">Your video will go here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-600" />
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      {/* Section 0: Jury Attraction - What is sofIA */}
      <section className="full-screen-section bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="full-screen-content">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - What is sofIA */}
              <div className="text-center lg:text-left">
                {/* AP2 Badge */}
                <div className="inline-block mb-6">
                  <Badge variant="secondary" className="text-sm px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300 text-blue-800 font-bold">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    AP2-COMPLIANT MULTI-AGENT
                  </Badge>
                </div>
                
                {/* Main Headline */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-balance leading-[0.9] tracking-tight text-gray-900">
                    <span className="block">O Futuro dos</span>
                    <span className="block text-blue-600">Pagamentos é</span>
                    <span className="block text-purple-600">uma Conversa</span>
                  </h1>
                </div>
                
                {/* Subheadline */}
                <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Experimente o primeiro sistema de pagamento multi-agente compatível com AP2 do mundo. 
                  Processe <span className="font-bold text-blue-700">pagamentos seguros e conversacionais</span> através do WhatsApp em <span className="font-bold text-purple-700">30 segundos</span>. 
                  Sem apps. Sem formulários. Apenas comércio puro.
                </p>

                {/* Problem Statement */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200 mb-8">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-bold text-red-800">O Problema que Resolvemos</h3>
                  </div>
                  <p className="text-lg text-red-700 font-bold mb-2">70% dos clientes abandonam checkouts online. Isso é um problema de $2.8 trilhões.</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">❌</span>
                      <span>Processos complexos</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">❌</span>
                      <span>Preocupações de segurança</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">❌</span>
                      <span>Downloads forçados</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <span className="mr-2">❌</span>
                      <span>Múltiplos redirecionamentos</span>
                    </div>
                  </div>
                </div>

                {/* Solution Benefits */}
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200 mb-8">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-green-800">A Solução sofIA</h3>
                  </div>
                  <p className="text-lg text-green-700 font-bold mb-4">Pagamentos tão simples quanto enviar uma mensagem no WhatsApp.</p>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✅</span>
                      <span><strong>Transações de 30 segundos</strong></span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✅</span>
                      <span><strong>Segurança bancária com Protocolo AP2</strong></span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✅</span>
                      <span><strong>Nenhum download de app necessário</strong></span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✅</span>
                      <span><strong>Funciona em qualquer idioma</strong></span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <span className="mr-2">✅</span>
                      <span><strong>Métodos de pagamento globais</strong></span>
                    </div>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="text-2xl font-black text-blue-600 mb-1">GOOGLE</div>
                    <div className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Protocolo AP2 Oficial</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="text-2xl font-black text-purple-600 mb-1">50+</div>
                    <div className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Merchants Prontos</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="text-2xl font-black text-green-600 mb-1">$1M+</div>
                    <div className="text-sm font-semibold text-green-700 uppercase tracking-wide">Volume Mensal</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="text-2xl font-black text-orange-600 mb-1">4.5★</div>
                    <div className="text-sm font-semibold text-orange-700 uppercase tracking-wide">Satisfação</div>
                  </div>
                </div>

              </div>

              {/* Right Side - sofIA Chat Demo */}
              <div>
                <div className="relative">
                  {/* Chat Screenshot */}
                  <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl p-6">
                    <div className="bg-purple-500 text-white p-3 rounded-t-xl flex items-center space-x-2 mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                        <img 
                          src="/macacaProfile.png" 
                          alt="sofIA Profile" 
                          className="w-full h-full object-cover rounded-full"
                          style={{width: '100%', height: '100%'}}
                          onLoad={() => console.log('Image loaded successfully')}
                          onError={(e) => {
                            console.error('Image failed to load:', e);
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                          <MessageSquare className="w-4 h-4 text-purple-500" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">sofIA</div>
                        <div className="text-xs opacity-90">online</div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">Quero comprar um café</p>
                        <div className="text-xs text-gray-500 mt-1">14:32</div>
                      </div>
                      
                      <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">Perfeito! Aqui estão nossas opções:</p>
                        <div className="mt-2 space-y-1">
                          <div className="text-xs bg-white p-2 rounded border">☕ Cappuccino - R$ 8,50</div>
                          <div className="text-xs bg-white p-2 rounded border">☕ Latte - R$ 9,00</div>
                          <div className="text-xs bg-white p-2 rounded border">☕ Expresso - R$ 6,00</div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">14:32</div>
                      </div>
                      
                      <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                        <p className="text-sm text-gray-700 font-bold">Vou querer o cappuccino</p>
                        <div className="text-xs text-gray-500 mt-1">14:33</div>
                      </div>
                      
                      <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">Ótimo! Total: R$ 8,50</p>
                        <p className="text-sm text-gray-700">Como deseja pagar?</p>
                        <div className="mt-2 space-y-1">
                          <div className="text-xs bg-white p-2 rounded border">💳 PIX</div>
                          <div className="text-xs bg-white p-2 rounded border">💳 Cartão</div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">14:33</div>
                      </div>
                      
                      <div className="bg-green-100 rounded-lg p-3 max-w-xs ml-auto">
                        <p className="text-sm text-gray-700 font-bold">PIX, por favor</p>
                        <div className="text-xs text-gray-500 mt-1">14:34</div>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-700">✅ Pagamento concluído! Seu cappuccino estará pronto em 5 minutos.</p>
                        <div className="text-xs text-gray-500 mt-1">14:34</div>
                      </div>
                    </div>

                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>


      {/* Section 2: Problem/Solution */}
      <section className="full-screen-section bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="full-screen-content">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
            
            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mb-8">
              <Badge variant="outline" className="px-6 py-3 bg-green-50 border-green-200 text-green-800 font-bold">
                <div className="text-center">
                  <div className="text-lg font-black text-green-600">MASTERCARD</div>
                  <div className="text-xs font-semibold text-green-700 uppercase tracking-wide">Apoio Oficial</div>
                </div>
              </Badge>
              <Badge variant="outline" className="px-6 py-3 bg-orange-50 border-orange-200 text-orange-800 font-bold">
                <div className="text-center">
                  <div className="text-lg font-black text-orange-600">PAYPAL</div>
                  <div className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Parceiro Estratégico</div>
                </div>
              </Badge>
            </div>

            {/* Title Section */}
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-gray-900">O Problema e a Solução</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Entenda o desafio global dos pagamentos online e como sofIA revoluciona a experiência
              </p>
              
            </div>
            
            {/* Main Content Cards */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Problem Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-red-600">O Problema que Resolvemos</h3>
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200 mb-4">
                    <p className="text-lg text-red-700 font-bold mb-2">70% dos clientes abandonam checkouts online. Isso é um problema de $2.8 trilhões.</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Sistemas de pagamento tradicionais estão quebrados, causando perda massiva de receita para empresas em todo o mundo.
                    </p>
                  </div>
                  
                  {/* Problem Details */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="flex items-center text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                      <span className="mr-1">❌</span>
                      <span className="font-semibold">Processos complexos</span>
                    </div>
                    <div className="flex items-center text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                      <span className="mr-1">❌</span>
                      <span className="font-semibold">Preocupações de segurança</span>
                    </div>
                    <div className="flex items-center text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                      <span className="mr-1">❌</span>
                      <span className="font-semibold">Downloads forçados</span>
                    </div>
                    <div className="flex items-center text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">
                      <span className="mr-1">❌</span>
                      <span className="font-semibold">Múltiplos redirecionamentos</span>
                    </div>
                  </div>

                  {/* Problem Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-100 rounded-lg p-3 border border-red-200">
                      <div className="text-2xl font-bold text-red-600 mb-1">70%</div>
                      <div className="text-red-700 font-semibold">Abandono de Checkout</div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3 border border-red-200">
                      <div className="text-2xl font-bold text-red-600 mb-1">$2.8T</div>
                      <div className="text-red-700 font-semibold">Problema Global</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Solution Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">A Solução sofIA</h3>
                  <div className="bg-green-50 rounded-2xl p-4 border border-green-200 mb-4">
                    <p className="text-lg text-green-700 font-bold mb-2">Pagamentos tão simples quanto enviar uma mensagem no WhatsApp.</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      sofIA é o primeiro sistema de pagamento multi-agente compatível com AP2 do mundo, processando pagamentos seguros e conversacionais em 30 segundos.
                    </p>
                  </div>
                  
                  {/* Solution Benefits */}
                  <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
                    <div className="flex items-center text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                      <span className="mr-1">✅</span>
                      <span className="font-semibold"><strong>Transações de 30 segundos</strong></span>
                    </div>
                    <div className="flex items-center text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                      <span className="mr-1">✅</span>
                      <span className="font-semibold"><strong>Segurança bancária com Protocolo AP2</strong></span>
                    </div>
                    <div className="flex items-center text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                      <span className="mr-1">✅</span>
                      <span className="font-semibold"><strong>Nenhum download de app necessário</strong></span>
                    </div>
                    <div className="flex items-center text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                      <span className="mr-1">✅</span>
                      <span className="font-semibold"><strong>Funciona em qualquer idioma</strong></span>
                    </div>
                    <div className="flex items-center text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">
                      <span className="mr-1">✅</span>
                      <span className="font-semibold"><strong>Métodos de pagamento globais</strong></span>
                    </div>
                  </div>

                  {/* Solution Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-100 rounded-lg p-3 border border-green-200">
                      <div className="text-2xl font-bold text-green-600 mb-1">90%</div>
                      <div className="text-green-700 font-semibold">Redução de Abandono</div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 border border-green-200">
                      <div className="text-2xl font-bold text-green-600 mb-1">30s</div>
                      <div className="text-green-700 font-semibold">Transações Completas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      {/* Section 2.5: Business Impact */}
      <section className="full-screen-section bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="full-screen-content">
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
            
            {/* Title Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-gray-900">Resultados Revolucionários</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                Dados reais que comprovam o impacto transformador do sofIA no mercado de pagamentos
              </p>
            </div>
            
            {/* Business Impact Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-green-600 mb-2">$10M+</div>
                  <div className="text-green-700 font-bold text-sm mb-1">Potencial ARR</div>
                  <div className="text-xs text-gray-600">Oportunidade massiva de receita</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
                  <div className="text-blue-700 font-bold text-sm mb-1">Comerciantes</div>
                  <div className="text-xs text-gray-600">Prontos para os primeiros 6 meses</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-purple-600 mb-2">$1M+</div>
                  <div className="text-purple-700 font-bold text-sm mb-1">Volume Mensal</div>
                  <div className="text-xs text-gray-600">Processamento escalável de transações</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-orange-600 mb-2">4.5+</div>
                  <div className="text-orange-700 font-bold text-sm mb-1">Avaliação</div>
                  <div className="text-xs text-gray-600">Satisfação excepcional dos comerciantes</div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Comparison */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Vantagem Competitiva</h3>
                <p className="text-lg text-gray-700">Comparado aos sistemas de pagamento tradicionais</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-green-600 mb-2">90%</div>
                  <div className="text-green-700 font-bold text-sm mb-1">Menos Checkouts Abandonados</div>
                  <div className="text-xs text-gray-600">vs sistemas tradicionais</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600 mb-2">0</div>
                  <div className="text-blue-700 font-bold text-sm mb-1">Downloads de Apps</div>
                  <div className="text-xs text-gray-600">necessários</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-600 mb-2">100%</div>
                  <div className="text-purple-700 font-bold text-sm mb-1">Conformidade AP2</div>
                  <div className="text-xs text-gray-600">Primeiro no mercado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>

      {/* Section 3: Key Features */}
      <section id="features" className="full-screen-section bg-gradient-to-br from-purple-50/30 to-purple-100/20">
        <div className="full-screen-content">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Principais Recursos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tudo que você precisa para transformar o WhatsApp em uma gateway de pagamento segura
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Conformidade com Protocolo AP2</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Implementação completa do mais recente protocolo de pagamento do Google com segurança de nível empresarial
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Integração WhatsApp</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Nenhum download de app necessário - clientes pagam diretamente através de conversas no WhatsApp
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Arquitetura Multi-Agente</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Orquestração sofisticada de IA para fluxos de trabalho de pagamento complexos e atendimento ao cliente
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Suporte Regional</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Métodos de pagamento LATAM, África, Ásia - PIX, Mobile Money, Carteiras Digitais
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Processamento em Tempo Real</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Tempos de resposta &lt; 2 segundos com trilhas de auditoria completas e monitoramento
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Segurança em Primeiro Lugar</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    Assinaturas digitais RSA-2048 e segurança de nível empresarial para todas as transações
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      {/* Section 4: How to Use sofIA */}
      <section id="how-it-works" className="full-screen-section bg-gradient-to-br from-purple-50 to-purple-100/50">
        <div className="full-screen-content">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Como Usar sofIA</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Veja como sofIA transforma conversas do WhatsApp em pagamentos seguros e automáticos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">1. Cliente Recebe Notificação</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 text-sm">
                    sofIA envia automaticamente uma mensagem no WhatsApp quando uma assinatura está prestes a expirar
                  </CardDescription>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-purple-600">sofIA:</span> "Oi! Sua assinatura VIVO expira em 2 dias. Gostaria de renovar por R$ 29,99?"
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">2. Cliente Confirma Pagamento</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 text-sm">
                    O cliente responde "sim" e sofIA processa o pagamento usando o protocolo AP2 do Google
                  </CardDescription>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <div className="text-sm text-gray-700 leading-relaxed space-y-2">
                      <div><span className="font-semibold text-gray-600">Cliente:</span> "Sim, quero renovar"</div>
                      <div><span className="font-semibold text-purple-600">sofIA:</span> "Perfeito! Processando pagamento..."</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:border-purple-200">
                <CardHeader className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">3. Pagamento Processado</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4 text-sm">
                    sofIA confirma o pagamento e atualiza automaticamente a assinatura do cliente
                  </CardDescription>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <div className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-purple-600">sofIA:</span> "✅ Pagamento aprovado! Sua assinatura foi renovada por mais 30 dias."
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl p-8 shadow-sm border border-purple-300 max-w-4xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Simples, Rápido e Seguro</h3>
                <p className="text-lg text-purple-700 leading-relaxed max-w-2xl mx-auto">
                  É tão fácil quanto parece - qualquer pessoa pode usar sofIA para transformar conversas em pagamentos automáticos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>

      {/* Section 5: Integration & Technology */}
      <section className="full-screen-section bg-gradient-to-br from-purple-100/30 to-purple-200/20">
        <div className="full-screen-content">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Tecnologia e Integração</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Construído com tecnologias e protocolos líderes da indústria
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <Cpu className="w-4 h-4 mr-2" />
                HACKTUDO 2025
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Google AP2 Protocol
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Business API
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                BEMOBI Gateway
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <Database className="w-4 h-4 mr-2" />
                Supabase PostgreSQL
              </Badge>
              <Badge variant="outline" className="px-6 py-3 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Multi-Agent Architecture
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Arquitetura Robusta</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  sofIA é construído com uma arquitetura multi-agente que garante alta disponibilidade, 
                  escalabilidade e segurança para processar milhares de transações simultâneas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700"><strong>99.9% de uptime</strong> - Confiabilidade de nível empresarial</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700"><strong>&lt; 2 segundos</strong> - Processamento ultrarrápido</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700"><strong>100% conformidade AP2</strong> - Primeira implementação no mercado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700"><strong>Assinaturas RSA-2048</strong> - Segurança de nível bancário</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-8 border border-purple-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-900 mb-4">Pronto para Produção</h4>
                  <p className="text-purple-700 leading-relaxed">
                    Implementação completa com monitoramento, logs de auditoria e suporte 24/7 para operadoras de telecomunicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xl font-bold">sofIA</span>
              </div>
              <p className="text-sm text-gray-300">
                Transforme o WhatsApp em sua gateway de pagamento com conformidade ao protocolo AP2.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-white">Links Rápidos</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sofIA-Payment-Agent/sofIA-payment-agent" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Código Fonte
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-white">Tecnologia</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Protocolo AP2 do Google</li>
                <li>WhatsApp Business API</li>
                <li>Multi-Agent Architecture</li>
                <li>BEMOBI Gateway</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-white">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>24/7 Monitoramento</li>
                <li>Logs de Auditoria</li>
                <li>Conformidade AP2</li>
                <li>Suporte Regional</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
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
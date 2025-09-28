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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance sofia-gradient-text-warm leading-tight">
            Transforme o WhatsApp em Sua Gateway de Pagamento
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
            sofIA permite pagamentos seguros através do WhatsApp usando o Protocolo AP2 do Google. Construído para comerciantes BEMOBI em toda LATAM, África e Ásia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Iniciar Teste Grátis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 w-5 h-5" />
              Ver Demonstração
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="sofia-gradient-warm rounded-2xl p-8 border border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-white/90 rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">WhatsApp Business</span>
                    </div>
                    <div className="text-sm text-gray-700">
                      Oi! Sua assinatura VIVO expira amanhã. Gostaria de renovar?
                    </div>
                    <Button size="sm" className="mt-2 sofia-purple">
                      Renovar Agora - R$ 29,99
                    </Button>
                  </div>
                  <div className="bg-white/90 rounded-lg p-4 border shadow-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-sm text-gray-700">Pagamento processado com segurança via AP2</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit bg-white/90 text-primary border-primary">
                    Compatível com Protocolo AP2
                  </Badge>
                  <div className="text-left">
                    <h3 className="font-semibold mb-2 text-white">Arquitetura Multi-Agente</h3>
                    <div className="space-y-2 text-sm text-white/90">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>Agente Orquestrador</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                        <span>Agente de Pagamento</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span>Integração BEMOBI</span>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para transformar o WhatsApp em uma gateway de pagamento segura
            </p>
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
    </div>
  )
}

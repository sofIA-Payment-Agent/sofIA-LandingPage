# sofIA Landing Page

A modern, responsive landing page for sofIA - the revolutionary WhatsApp payment orchestration system using Google's AP2 Protocol.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive Layout**: Works perfectly on all device sizes
- **AP2 Protocol Focus**: Showcases Google's Agent Payments Protocol
- **Multi-Agent Architecture**: Highlights sophisticated AI orchestration
- **BEMOBI Integration**: Designed for telecom operators across LATAM, Africa, and Asia
- **Performance Optimized**: Fast loading with Next.js 14

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.25
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Geist Sans & Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sofia-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e40af` (HSL: 221.2 83.2% 45%)
- **Secondary Blue**: `#4271B7` (HSL: 220 47% 49%)
- **Accent Green**: `#10b981` (HSL: 142.1 76.2% 36.3%)
- **Text**: Dark gray for maximum readability
- **Background**: Pure white for clean appearance

### Typography
- **Headings**: Geist Sans, bold weights
- **Body Text**: Geist Sans, regular weight
- **Code**: Geist Mono

## 📁 Project Structure

```
sofia-landing-page/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main landing page
├── components/            # Reusable UI components
│   └── ui/               # Base UI components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/                  # Utility functions
│   └── utils.ts          # Class name utilities
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🎯 Key Sections

1. **Hero Section**: Main value proposition and CTA
2. **Problem/Solution**: Telecom churn challenges and sofIA solutions
3. **Features**: AP2 Protocol, WhatsApp Integration, Multi-Agent Architecture
4. **Target Customers**: BEMOBI and telecom operators
5. **Technical Architecture**: System components and flow
6. **Benefits**: Value for all stakeholders
7. **Performance Metrics**: Uptime, response time, compliance
8. **Pricing**: Transparent pricing tiers
9. **Implementation Roadmap**: Clear deployment phases

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization
- Colors can be modified in `app/globals.css`
- Components are in `components/ui/`
- Main page content is in `app/page.tsx`

## 📄 License

This project is part of the HACKTUDO 2025 competition.

## 🤝 Contributing

This is a competition project for HACKTUDO 2025. For questions or support, please contact the development team.

---

**Built for HACKTUDO 2025** | **sofIA - Revolutionary WhatsApp Payment Agent**

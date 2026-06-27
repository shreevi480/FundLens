# FundLens 🔍
### Smart Mutual Fund Comparison Dashboard

A modern, data-driven web application built with React that allows investors to search, compare, and analyze mutual funds side by side — with interactive charts, key insights, and winner detection.

## ✨ Features

### 🏠 Home Page
- Hero section with call-to-action
- Key features overview with animated cards
- Visual "How It Works" timeline
- Why comparison matters — live fund A vs Fund B demo with colored risk indicators
- Popular mutual funds grid with real scheme codes

### 🔍 Compare Page
- Live search across **37,000+ mutual funds** from MF API India
- Up to **3 fund slots** with add/remove functionality
- Real-time dropdown with instant filtering as you type
- Smart Compare button that activates only when 2+ funds are selected

### 📊 Comparison Results
- **Fund Summary Cards** — NAV, 1Y returns, expense ratio, risk level with 30-day sparkline trend chart
- **Returns Line Chart** — Normalized % returns over 12 months for all selected funds
- **Asset Allocation Donut Charts** — Portfolio composition per fund
- **Key Insights** — Auto-generated colored insight cards (highest return, lowest risk, expense analysis)
- **Winner Section** — Best fund per category with gold/blue/green winner cards

### 📖 About Page
- Project story and mission
- Interactive accordion for key financial metrics explained
- Animated 3D tech stack badges
- Disclaimer section

### 📬 Contact Page
- Two-column layout with contact form
- Real email delivery via **EmailJS** (no backend required)
- Contact information panel with social links

---

## 🛠️ Tech Stack

Category - Technology 

Frontend Framework - React 18 (JSX in .js files) |
Routing - React Router DOM v6 
Charts - Recharts 
Icons - React Icons 
Email - EmailJS 
Data Source - MF API India (api.mfapi.in) 
Styling - CSS3 with Custom Variables 


---

## 📁 Project Structure

```
fundlens/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── compare/
│   │       ├── FundSummaryCard.js
│   │       ├── ReturnsLineChart.js
│   │       ├── AllocationDonutChart.js
│   │       ├── KeyInsights.js
│   │       └── WinnerSection.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Compare/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── FundDetail/
│   │
│   ├── utils/
│   │   └── formatters.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.js
│   └── index.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed on your system:

- Node.js (v16 or above) 
- npm (comes with Node.js)
- Git

---

### Installation

**Step 1 — Clone the repository**
git clone https://github.com/shreevi480/fundlens.git


**Step 2 — Navigate into the project folder**
cd fundlens


**Step 3 — Install all dependencies**
npm install


**Step 4 — Start the development server**
npm start

The app will open automatically at `http://localhost:3000`

---

### Dependencies Installed

When you run `npm install`, these packages are installed automatically:

react-router-dom    → page navigation
recharts            → interactive charts
react-icons         → icon library
@emailjs/browser    → contact form email delivery

---

## 🔑 Environment Setup (EmailJS)

The contact form uses EmailJS to send emails. If you want to use your own EmailJS account:

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service and note your **Service ID**
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. Note your **Template ID** and **Public Key**
5. Update these values in `src/pages/Contact/Contact.js`:

```js
emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    templateParams,
    "YOUR_PUBLIC_KEY"
)
```

## 🔑 Environment Setup

Create a `.env` file in the root folder:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for reference.

> ⚠️ Note: The current credentials in the code are for the developer's account. Please replace with your own for personal use.

---

## 📡 API Used

**MF API India** — Free, open, no authentication required

```
Base URL: https://api.mfapi.in/mf

All funds list:     GET /mf
Fund details:       GET /mf/{schemeCode}
```

- Returns 37,000+ mutual fund schemes
- Provides complete NAV history
- No API key needed
- Free to use

---

## 📊 Data & Limitations

- **Returns, NAV, category** — Real data from MF API India
- **Expense ratio** — Estimated based on SEBI category guidelines
- **Risk level** — Derived from fund category classification
- **Asset allocation** — Representative mock data based on fund category

> This is an educational portfolio project. Data shown is for informational purposes only and should not be considered financial advice.

---

## 👩‍💻 Author

**Shreevi Patel**

- GitHub: [@shreevi480](https://github.com/shreevi480)
- LinkedIn: [Shreevi Patel](https://www.linkedin.com/in/shreevi-patel-57960630a)
- Email: shreevindia02@gmail.com

---

## 📄 Disclaimer

FundLens is an educational and portfolio project created to demonstrate frontend development and financial data visualization concepts. The information presented is intended for informational purposes only and should not be considered financial or investment advice. Always consult a qualified financial professional before making investment decisions.

---

*Built with ❤️ as a frontend portfolio project*

/*Small helper functions used everywhere.
    Example:
        formatReturns(0.1823) → "18.23%"
        formatDate("2024-01-15") → "Jan 2024" */

// utils/formatters.js

export const getExpenseRatio = (category = "") => {
    const cat = category.toLowerCase()
    if (cat.includes("index")) return "0.20%"
    if (cat.includes("large cap")) return "0.85%"
    if (cat.includes("mid cap")) return "1.05%"
    if (cat.includes("small cap")) return "0.95%"
    if (cat.includes("flexi")) return "0.90%"
    if (cat.includes("debt")) return "0.50%"
    return "1.00%"
}

export const getRiskLevel = (category = "") => {
    const cat = category.toLowerCase()
    if (cat.includes("small cap")) return "High"
    if (cat.includes("mid cap")) return "Moderate-High"
    if (cat.includes("large cap")) return "Moderate"
    if (cat.includes("index")) return "Moderate"
    if (cat.includes("flexi")) return "Moderate-High"
    if (cat.includes("debt")) return "Low"
    if (cat.includes("liquid")) return "Low"
    return "Moderate"
}

export const formatNav = (nav) => {
    return `₹${parseFloat(nav).toFixed(2)}`
}

export const calculateReturn = (data) => {
    if (!data || data.length < 366) return "N/A"
    const latestNav = parseFloat(data[0].nav)
    const yearAgoNav = parseFloat(data[365].nav)
    return ((latestNav - yearAgoNav) / yearAgoNav * 100).toFixed(2)
}


export const formatCategory = (category = "") => {
    if (!category) return "General"

    // Pattern 1 — Modern format with separator
    // "Equity Scheme - Large Cap Fund" → "Large Cap Fund"
    if (category.includes(" - ")) {
        const formatted = category.split(" - ").pop().trim()
        return formatted.length > 20
            ? formatted.substring(0, 20) + "..."
            : formatted
    }

    // Pattern 2 — Known long names
    const shortNames = {
        // Old category names (pre-2017)
        "Income": "Debt Fund",
        "Growth": "Equity Fund",
        "Balanced": "Hybrid Fund",
        "Gilt": "Gilt Fund",
        "ELSS": "Tax Saver",
        "Liquid": "Liquid Fund",

        // Modern long names without separator
        "Dynamic Asset Allocation or Balanced Advantage": "Balanced Advantage",
        "Equity Linked Savings Scheme": "ELSS Tax Saver",
        "Solution Oriented Scheme": "Goal Based",
        "Multi Asset Allocation": "Multi Asset",
        "Overnight Fund": "Overnight",
        "Money Market Fund": "Money Market",
        "Ultra Short Duration Fund": "Ultra Short",
        "Low Duration Fund": "Low Duration",
        "Arbitrage Fund": "Arbitrage",
        "Floater Fund": "Floater",
        "Index Funds": "Index Fund",
        "Fund of Funds": "FoF",
    }

    if (shortNames[category]) {
        return shortNames[category]
    }

    // Pattern 3 — Remove common words and trim
    const cleaned = category
        .replace("Scheme", "")
        .replace(" Fund", "")
        .trim()

    return cleaned.length > 20
        ? cleaned.substring(0, 10) + "..."
        : cleaned || "General"
}
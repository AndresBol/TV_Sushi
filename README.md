<p align="center">
  <img src="media/tvSushi/logo.png" alt="TV Sushi Banner" width="400"/>
</p>

<h1 align="center">TV Sushi</h1>

<p align="center">
  A responsive website for a Costa Rican artisanal sushi restaurant featuring a dynamic menu, interactive conveyor belt showcase, real-time search, and integration with government and third-party APIs.
  <br/>
  <strong>Web Application Design Final Project</strong> Universidad Técnica Nacional (UTN)
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Semantic-orange?logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Bootstrap-5.0.2-purple?logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/jQuery-Minified-0769AD?logo=jquery&logoColor=white" alt="jQuery"/>
  <img src="https://img.shields.io/badge/APIs-Hacienda%20%2B%20EmailJS%20%2B%20Maps-green" alt="APIs"/>
</p>

---

## About

TV Sushi CR is a multi-page responsive website built for a real artisanal sushi restaurant located in Patarrá, San José, Costa Rica. The site serves as a digital storefront showcasing the menu, providing detailed product views, offering an interactive registration form, and presenting contact and location information with an embedded map.

The product catalog is externalized to a GitHub-hosted JSON file, allowing menu updates without redeploying. The frontend integrates with Costa Rica's Hacienda API for national ID verification, EmailJS for serverless email delivery, and the Google Maps Embed API for an interactive satellite map.

This project was developed as an academic assignment, demonstrating skills in responsive web design, API consumption, DOM manipulation, and modern frontend architecture all without a traditional backend.

## Features

- **Interactive conveyor belt carousel**: Animated 8-frame sushi conveyor belt with synchronized product names, navigation links, and background audio playback
- **Advertisement carousel**: Rotating promotional banners with smooth transitions
- **Dynamic menu page**: Product cards rendered from an external JSON API with image, name, portion size, and price
- **Real-time search filter**: Instant client-side filtering of menu items by name as the user types
- **Product detail page**: URL parameter-driven detail view with description, ingredients, price, and hover-zoom image effect
- **Customer registration form**: Input masks (cédula `0-0000-0000`, phone `0000-0000`), automatic age calculation, and field validation
- **National ID auto-fill**: Integration with Costa Rica's [Hacienda API](https://api.hacienda.go.cr) to retrieve legal names from national identification numbers
- **Serverless email delivery**: Registration confirmation emails sent via EmailJS no backend required
- **Embedded Google Maps**: Satellite view centered on the restaurant with a direct navigation link
- **Sushi types video**: Embedded HTML5 video inside a Japanese-themed decorative frame with bamboo pattern overlay
- **Responsive design**: Bootstrap 5 grid system adapting across mobile, tablet, and desktop breakpoints
- **Japanese-inspired branding**: Bamboo textures, gold accents, decorative wooden frames.

## Pages

| Page               | File              | Description                                                            |
| ------------------ | ----------------- | ---------------------------------------------------------------------- |
| **Home**           | `Index.html`      | Ad carousel, conveyor belt showcase, sushi types video, audio player   |
| **Menu**           | `menu.html`       | Full product catalog with live search and dynamic card rendering       |
| **Product Detail** | `Meal.html`       | Individual product view with description, ingredients, price, and zoom |
| **About Us**       | `AboutUs.html`    | Schedule, contact info, restaurant photo, embedded Google Maps         |
| **Registration**   | `formulario.html` | Customer form with ID auto-fill, masks, age calculation, and email     |

## Tech Stack

| Layer           | Technology                                                                       |
| --------------- | -------------------------------------------------------------------------------- |
| Markup          | HTML5 (semantic elements, `<video>`, `<audio>`)                                  |
| Styling         | CSS3 + Bootstrap 5.0.2 (local)                                                   |
| Icons           | Bootstrap Icons 1.9.1 (CDN)                                                      |
| Scripting       | Vanilla JavaScript (ES6+, Fetch API, URLSearchParams)                            |
| DOM Library     | jQuery (minified, local)                                                         |
| Input Masks     | jQuery Mask Plugin 1.14.16 (CDN)                                                 |
| Email           | EmailJS v3 (CDN)                                                                 |
| Maps            | Google Maps Embed API                                                            |
| ID Verification | Costa Rica Hacienda API                                                          |
| Data Source     | GitHub-hosted JSON ([TV_Sushi_Data](https://github.com/AndresBol/TV_Sushi_Data)) |

## Architecture

The project follows a static frontend architecture with external data sources and third-party service integrations:

```
TV_Sushi/
├── Index.html               # Home carousels, conveyor belt, video
├── menu.html                # Menu dynamic product grid with search
├── Meal.html                # Product detail parameterized view
├── AboutUs.html             # Contact, schedule, map
├── formulario.html          # Registration form
├── css/
│   ├── site.css             # Custom styles (Japanese theme, animations)
│   ├── bootstrap.css        # Bootstrap 5.0.2
│   ├── bootstrap-grid.css   # Grid utilities
│   ├── bootstrap-reboot.css # CSS reset
│   └── bootstrap-utilities.css
├── js/
│   ├── site.js              # Home page: carousel sync, audio, product fetch
│   ├── filtromenu.js         # Menu: product loading + real-time search filter
│   ├── meal.js              # Product detail: URL param parsing + data fetch
│   ├── formulario.js        # Form: Hacienda API, EmailJS, age calculation
│   └── bootstrap.js         # Bootstrap 5 JS bundle
├── jquery/
│   ├── jquery.min.js        # jQuery library
│   └── masks.js             # Input mask configuration (cédula, phone)
└── media/
    ├── Advertisement/       # Ad carousel images (4 WebP banners)
    ├── ConveyorBelt/        # Conveyor belt frames (8 PNG slides)
    ├── ProductImages/       # Product photos (10 PNG images)
    └── tvSushi/             # Branding: logos, restaurant photo, video, audio
```

**External APIs & Services:**

| Service                    | Purpose                                                                  |
| -------------------------- | ------------------------------------------------------------------------ |
| **GitHub Raw JSON**        | Product catalog data (name, description, ingredients, price, image path) |
| **Hacienda API (CR)**      | National ID → legal name auto-fill                                       |
| **EmailJS**                | Serverless registration confirmation emails                              |
| **Google Maps Embed**      | Interactive satellite map of restaurant location                         |
| **Google Maps Directions** | One-click navigation to the restaurant                                   |

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (required for external APIs, CDN resources, and product data)

## Getting Started

1. **Visit the live site**

   The project is deployed on GitHub Pages:

   **https://andresbol.github.io/TV_Sushi/Index.html**

2. _(Optional)_ **Clone the repository locally**

   ```bash
   git clone https://github.com/AndresBol/TV_Sushi.git
   ```

   Then open `Index.html` directly in your browser.

3. **Navigate the site**
   - Browse the home page carousel and conveyor belt
   - Explore the full menu with real-time search
   - Click any product for a detailed view
   - Visit About Us for location, schedule, and embedded map
   - Try the registration form with a Costa Rican cédula for auto-fill

> **Note:** Some features (Hacienda API auto-fill, EmailJS emails) require an active internet connection and valid Costa Rican identification numbers.

## Authors

- **Andrés Bolaños** Student ID: 119090051
- **Josué Calderón** Student ID: 207770303

Universidad Técnica Nacional (UTN)

---

<p align="center">
  <sub>Built as an academic project - 2025</sub>
</p>

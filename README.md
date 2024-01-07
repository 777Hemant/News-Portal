# News Hub React App

## Overview
A responsive News Portal built with React, fetching real-time data using the News API. Categorized by topics.

## Project Structure
- **App.js:** Main component managing routes and layout.
- **components/Navbar.js:** Navigation bar for easy category navigation.
- **components/Hero.js:** Hero section displaying the app name and description.
- **components/FetchData.js:** Component fetching and displaying news data.
- **components/Footer.js:** Footer displaying developer information.

## Routing
- `/`: Home page with a hero section and general news.
- `/general`, `/business`, `/entertainment`, `/health`, `/science`, `/sports`, `/technology`: Category-specific pages.

## API Integration
- Utilizes the News API for fetching real-time news data based on categories.

## Dependencies
- `react-router-dom`: For handling client-side routing.
- `fetch`: For making API requests.
- `newsapi.org`: API key required for fetching news data.

## Running the App
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Add your News API key in `FetchData.js`.
4. Run the app: `npm start`.

## Styles
- Responsive design with smooth scrolling.
- Custom styling for Navbar, Hero, FetchData, and Footer components.

## Developer
- **Name:** Hemant Mishra
- **GitHub:** [hemantmishra0331](https://github.com/hemantmishra0331)

Feel free to explore different news categories seamlessly with this React News Hub app!

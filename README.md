# Weather-Forecast-App

A simple and responsive weather application that provides real-time weather updates for any city using the **OpenWeatherMap API**. The app displays temperature, humidity, wind speed, and dynamic weather conditions.

---

## Table of Contents

- [Weather-Forecast-App](#weather-forecast-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)
  - [How to Use](#how-to-use)
  - [API Key Setup](#api-key-setup)
  - [Screenshots](#screenshots)
    - [Main Interface:](#main-interface)
    - [Example Weather Details:](#example-weather-details)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

---

## Features

- Fetches **live weather data** from the OpenWeatherMap API.
- Displays:
   - Current temperature.
   - Humidity percentage.
   - Wind speed.
   - Weather conditions with dynamic icons (e.g., clear, cloudy, rain).
- Clean and modern **user interface**.
- Fully responsive design.

---

## Technologies Used

- **HTML5** – Page structure.
- **CSS3** – Styling and layout design.
- **JavaScript** – Handles API requests and DOM updates.
- **OpenWeatherMap API** – Provides real-time weather data.

---

## Project Structure

```
weather-app/
│
├── index.html      # Main HTML page
├── styles.css      # CSS for layout and styling
├── script.js       # JavaScript logic
├── images/         # Weather icons (e.g., clouds.png, clear.png, etc.)
│   ├── search.png
│   ├── clouds.png
│   ├── clear.png
│   ├── rain.png
│   ├── drizzle.png
│   ├── haze.png
│   ├── mist.png
│   ├── snow.png
│
└── README.md       # Project documentation
```

---

## Setup and Installation

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Open the project**:
   Open the `index.html` file in any modern web browser.

3. **Install dependencies**:
   No additional dependencies are required as the app uses vanilla JavaScript, HTML, and CSS.

---

## How to Use

1. Open the app in a browser by launching `index.html`.
2. Enter the **name of a city** (e.g., "London") in the input field.
3. Click on the **Search** button.
4. View the weather details, including:
   - Temperature (in Celsius)
   - Humidity
   - Wind speed
   - Weather conditions with relevant icons.

---

## API Key Setup

To fetch live weather data, you need an **API Key** from OpenWeatherMap:

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/).
2. Generate an **API Key** from your dashboard.
3. Replace the placeholder `apiKey` in the `script.js` file with your API Key:
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

---

## Screenshots

### Main Interface:
![Main UI](images/demo.png)

### Example Weather Details:
- **City**: New York
- **Temperature**: 22°C
- **Humidity**: 50%
- **Wind Speed**: 15 km/h

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project.

---

## Acknowledgments

- **OpenWeatherMap** for providing the weather API.
- Icons and design inspired by modern weather applications.

---

Enjoy the Weather App and feel free to contribute! 🚀


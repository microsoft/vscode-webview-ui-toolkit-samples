// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

// Main function that gets executed once the webview DOM loads
function main() {
  const checkWeatherButton = document.getElementById("check-weather-button");
  checkWeatherButton.addEventListener("click", checkWeather);

  setVSCodeMessageListener();
}

function checkWeather() {
  const locationValue = document.getElementById("location").value;
  const unitValue = document.getElementById("unit").value;

  // Passes a message back to the extension context with the location that
  // should be searched for and the degree unit (F or C) that should be returned
  vscode.postMessage({
    command: "weather",
    location: locationValue,
    unit: unitValue,
  });
}

// Sets up an event listener to listen for messages passed from the extension context
// and executes code based on the message that is recieved
function setVSCodeMessageListener() {
  window.addEventListener("message", (event) => {
    const command = event.data.command;
    const weatherData = JSON.parse(event.data.payload);

    switch (command) {
      case "weather":
        displayWeatherData(weatherData);
        break;
    }
  });
}

function displayWeatherData(weatherData) {
  const icon = document.getElementById("icon");
  const summary = document.getElementById("summary");
  summary.textContent = getWeatherSummary(weatherData);
  icon.textContent = getWeatherIcon(weatherData);
}

function getWeatherSummary(weatherData) {
  const skyText = weatherData.current.skytext;
  const temperature = weatherData.current.temperature;
  const degreeType = weatherData.location.degreetype;

  return `${skyText}, ${temperature}${degreeType}`;
}

function getWeatherIcon(weatherData) {
  const skyText = weatherData.current.skytext.toLowerCase();
  let icon = "";

  switch (skyText) {
    case "sunny":
      icon = "☀️";
      break;
    case "mostly sunny":
      icon = "🌤";
      break;
    case "partly sunny":
      icon = "🌥";
      break;
    case "clear":
      icon = "☀️";
      break;
    case "fair":
      icon = "🌥";
      break;
    case "mostly cloudy":
      icon = "☁️";
      break;
    case "cloudy":
      icon = "☁️";
      break;
    case "rain showers":
      icon = "🌦";
      break;
    default:
      icon = "✨";
  }

  return icon;
}

// To access the VS Code API object, call 'acquireVsCodeApi()' inside the webview.
// This function can only be invoked once per session.
// You must hang onto the instance of the VS Code API returned by this method,
// and hand it out to any other functions that wish to use it.
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// to load before we can reference any of the components
window.addEventListener('load', main);

function main() {
  const location = document.getElementById('location');
  const unit = document.getElementById('unit');
  const icon = document.getElementById('icon');
  const summary = document.getElementById('summary');

  const checkWeatherButton = document.getElementById("check-weather-button");
  checkWeatherButton.addEventListener("click", () => {
      checkWeather(location, unit);
  });

  window.addEventListener('message', event => {
    const command = event.data.command;
    const weatherForecastData = JSON.parse(event.data.payload);

    switch (command) {
      case "weather":
        summary.textContent = getWeatherSummary(weatherForecastData);
        icon.textContent = getWeatherIcon(weatherForecastData);
        break;
    }
  });
};

function checkWeather(location, unit) {
  vscode.postMessage({
    command: 'weather',
    location: location.value,
    unit: unit.value
  });
}

function getWeatherSummary(weather){
  const skyText = weather["current"]["skytext"];
  const temperature = weather["current"]["temperature"];
  const degreeType = weather["location"]["degreetype"];
  console.log(weather["location"]);

  return `${skyText}, ${temperature}${degreeType}`;
}

function getWeatherIcon(weather){
  const skyText = weather["current"]["skytext"].toLowerCase();
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
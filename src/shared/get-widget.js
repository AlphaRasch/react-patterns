// widgetStrategies.js
export const widgetStrategies = {
  clock: ({ data, config }) => <ClockWidget time={data.time} />,
  weather: ({ data, config, isLoading }) => 
    isLoading ? <Spinner /> : <WeatherWidget data={data} city={config.city} />,
  notes: ({ data, config, onUpdate }) => 
    <NotesWidget notes={data} onUpdate={onUpdate} />,
};

// Или через Map для динамической регистрации
const strategyMap = new Map([
  ['clock', ClockStrategy],
  ['weather', WeatherStrategy],
]);
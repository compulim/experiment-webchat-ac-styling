test('should load', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { AdaptiveCardPlayer, AdaptiveCardPlayerWithAzureBotServices } = require('./index');

  expect(AdaptiveCardPlayer).toBeTruthy();
  expect(AdaptiveCardPlayerWithAzureBotServices).toBeTruthy();
});

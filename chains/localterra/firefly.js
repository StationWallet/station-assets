module.exports = {
  chainID: 'firefly-1',
  lcd: 'http://localhost:41117',
  gasAdjustment: 1.75,
  gasPrices: { ufire: 0.15 },
  prefix: 'firefly',
  coinType: '118',
  baseAsset: 'ufire',
  name: 'Firefly',
  icon: process.env.CF_PAGES_URL + '/img/chains/Firefly.png',
  channels: {
    'localterra': 'channel-0',
    'silverbolt-1': 'channel-1',
    'skydive-1': 'channel-2',
  },
  explorer: {
    address: process.env.FND_BASE_URL + '/v1/firefly/address/{}',
    tx: process.env.FND_BASE_URL + '/v1/firefly/tx/{}',
    validator: process.env.FND_BASE_URL + '/v1/firefly/validator/{}',
    block: process.env.FND_BASE_URL + '/firefly/block/{}',
  },
  tokens: [
    {
      token: 'ufire',
      symbol: 'FIRE',
      name: 'Firefly',
      icon: process.env.CF_PAGES_URL + '/img/chains/Firefly.png',
      decimals: 6,
    },
  ],
}
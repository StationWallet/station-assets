module.exports = {
  chainID: 'osmosis-1',
  lcd: 'https://osmosis-1.terra.dev',
  gasAdjustment: 2.2,
  gasPrices: {
    uosmo: {
      type: 'OSMOSIS',
      url: '/osmosis/txfees/v1beta1/cur_eip_base_fee',
      adjustment: 5,
      // value to be used if the request to the LCD fails
      defaultValue: 0.0025 * 5,
    },
  },
  prefix: 'osmo',
  coinType: '118',
  baseAsset: 'uosmo',
  name: 'Osmosis',
  icon: process.env.CF_PAGES_URL + '/img/chains/Osmosis.svg',
  channels: {
    'phoenix-1': 'channel-251',
    'axelar-dojo-1': 'channel-208',
    'carbon-1': 'channel-188',
    'akashnet-2': 'channel-1',
    'cheqd-mainnet-1': 'channel-108',
    'chihuahua-1': 'channel-113',
    'comdex-1': 'channel-87',
    'cosmoshub-4': 'channel-0',
    'crescent-1': 'channel-297',
    'mainnet-3': 'channel-181',
    'juno-1': 'channel-42',
    'kaiyo-1': 'channel-259',
    'mars-1': 'channel-557',
    'migaloo-1': 'channel-642',
    'stride-1': 'channel-326',
    'archway-1': 'channel-1429',
    'neutron-1': 'channel-874',
    'noble-1': 'channel-750',
    'pacific-1': 'channel-782',
    'injective-1': 'channel-122',
  },
  explorer: {
    address: 'https://www.mintscan.io/osmosis/account/{}',
    tx: 'https://www.mintscan.io/osmosis/txs/{}',
    validator: 'https://www.mintscan.io/osmosis/validators/{}',
    block: 'https://www.mintscan.io/osmosis/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uosmo',
      symbol: 'OSMO',
      name: 'Osmosis',
      icon: process.env.CF_PAGES_URL + '/img/coins/Osmo.svg',
      decimals: 6,
    },
    {
      token: 'uion',
      symbol: 'ION',
      name: 'Ion',
      icon: process.env.CF_PAGES_URL + '/img/coins/Ion.svg',
      decimals: 6,
    },
    {
      token:
        'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      symbol: 'IBCX',
      name: 'IBCX',
      icon: process.env.CF_PAGES_URL + '/img/coins/Ibcx.svg',
      decimals: 6,
    },
  ],
}

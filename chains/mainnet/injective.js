module.exports = {
  chainID: 'injective-1',
  lcd: 'https://lcd-injective.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { inj: 1000000000 },
  prefix: 'inj',
  coinType: '60',
  baseAsset: 'inj',
  name: 'Injective',
  version: '0.46',
  icon: process.env.CF_PAGES_URL + '/img/chains/Injective.svg',
  channels: {
    'phoenix-1': 'channel-151',
    'axelar-dojo-1': 'channel-84',
    'cosmoshub-4': 'channel-1',
    'crescent-1': 'channel-90',
    'migaloo-1': 'channel-102',
    'osmosis-1': 'channel-8',
    'stride-1': 'channel-89',
    'kaiyo-1': 'channel-98',
    'kava_2222-10': 'channel-143',
  },
  explorer: {
    address: 'https://www.mintscan.io/injective/account/{}',
    tx: 'https://www.mintscan.io/injective/txs/{}',
    validator: 'https://www.mintscan.io/injective/validators/{}',
    block: 'https://www.mintscan.io/injective/blocks/id/{}',
  },
  tokens: [
    {
      token: 'inj',
      symbol: 'INJ',
      name: 'Injective',
      icon: process.env.CF_PAGES_URL + '/img/coins/Injective.svg',
      decimals: 18,
    },
    {
      token: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
      symbol: 'AUTISM',
      name: 'AUTISM',
      icon: process.env.CF_PAGES_URL + '/img/coins/AUTISM.png',
      decimals: 6,
    },
    {
      token: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
      symbol: 'ampINJ',
      name: 'ERIS Amplified INJ',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampINJ.png',
      decimals: 6,
    },
    {
      token: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
      name: 'Dog wif nunchucks',
      symbol: 'NINJA',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/ninja.png',
    },
    {
      token: 'factory/inj1esz96ru3guug4ctmn5chjmkymt979sfvufq0hs/PUNK',
      name: 'Punk DAO Token',
      symbol: 'PUNK',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/PunkDAO.png',
    },
    {
      token: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
      name: 'WGMI',
      symbol: 'WGMI',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/wgmi.png',
    },
    {
      token: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      symbol: 'GLTO',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/glto.svg',
    },
    {
      token: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
      name: 'Hava Coin',
      symbol: 'HAVA',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/hava.png',
    },
    {
      token: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
      name: 'Ninpo',
      symbol: 'NINPO',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/ninpo.png',
    },
    {
      token: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
      name: 'Judo',
      symbol: 'JUDO',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/judo.png',
    },
    {
      token: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      symbol: 'BEAST',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/beast.png',
    },
  ],
}

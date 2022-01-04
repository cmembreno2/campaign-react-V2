import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x77A8311f6bC59B88899ac4181313f336eE72d10B'
);

export default instance;

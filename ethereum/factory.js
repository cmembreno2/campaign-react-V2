import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9aaE4832E2f7e06457d367A85bBb63D50945680B'
);

export default instance;

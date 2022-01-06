import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x35E3557fae9A088326741641D17e9c08D235CAca'
);

export default instance;

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x72de59e77cd43ae4b185754c6250d4b2bBCEe120'
);

export default instance;

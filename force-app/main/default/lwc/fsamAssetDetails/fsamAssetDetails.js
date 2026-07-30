import { LightningElement, api } from 'lwc';

export default class FsamAssetDetails extends LightningElement {
    @api asset;

    get warrantyStatus(){
        return this.asset?.warrantyActive ? 'Active' : 'Expired';
    }
}
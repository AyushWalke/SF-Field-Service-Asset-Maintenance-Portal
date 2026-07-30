import { LightningElement, api } from 'lwc';

export default class FsamAssetDetails extends LightningElement {
    @api assets;

    get warrantyStatus(){
        return this.assets?.warrantyActive ? 'Active' : 'Expired';
    }
}
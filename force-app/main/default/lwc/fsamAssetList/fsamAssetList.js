import { LightningElement, api } from 'lwc';

export default class FsamAssetList extends LightningElement {

    @api assets = [];

    @api selectedAssetId;

    get hasAssets() {
        return this.assets?.length > 0;
    }

    get assetViewModels() {
        return this.assets.map(asset => ({
            ...asset,
            cssClass:
                asset.id === this.selectedAssetId
                    ? 'asset-item asset-item_selected'
                    : 'asset-item'
        }));
    }

    handleAssetSelection(event) {

        const assetId = event.currentTarget.dataset.id;

        this.dispatchEvent(
            new CustomEvent('assetselect', {
                detail: {
                    assetId
                }
            })
        );

    }

}
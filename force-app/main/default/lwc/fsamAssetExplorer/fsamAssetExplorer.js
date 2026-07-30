import { LightningElement, wire } from 'lwc';
import getAssets from '@salesforce/apex/FSAM_AssetExplorerController.getAssets';

export default class FsamAssetExplorer extends LightningElement {

    assetExplorer;

    filteredAssets = [];

    selectedAsset;

    selectedAssetId;

    searchTerm = '';

    @wire(getAssets)
    wiredAssets({ error, data }) {

        if (data) {

            this.assetExplorer = data;

            this.filteredAssets = [...data.assets];

            this.selectedAsset = data.selectedAsset;

            this.selectedAssetId = data.selectedAsset?.id;

        } else if (error) {

            // TODO: Replace with reusable toast component in future sprint
            console.error(error);

        }

    }

    get summary() {

        return this.assetExplorer?.summary || {};

    }

    get maintenanceHistory() {

        return this.selectedAsset?.maintenanceHistory || [];

    }

    handleSearch(event) {

        this.searchTerm = event.detail.searchTerm.toLowerCase();

        this.filteredAssets = this.assetExplorer.assets.filter(asset =>

            asset.assetName.toLowerCase().includes(this.searchTerm) ||

            asset.serialNumber.toLowerCase().includes(this.searchTerm)

        );

    }

    handleAssetSelection(event) {

        const assetId = event.detail.assetId;

        this.selectedAssetId = assetId;

        this.selectedAsset = this.assetExplorer.assets.find(

            asset => asset.id === assetId

        );

    }

}
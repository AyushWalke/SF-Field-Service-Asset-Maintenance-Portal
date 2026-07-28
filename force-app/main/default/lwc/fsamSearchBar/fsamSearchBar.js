import { LightningElement, api } from 'lwc';

export default class FsamSearchBar extends LightningElement {
    @api placeholder = 'Search...';
    @api value = '';
    @api debounceDelay = 300;

    debounceTimeout;

    handleInput(event){
        this.value = event.target.value;
        window.clearTimeout(this.debounceTimeout);

        this.debounceTimeout = window.setTimeout(() => {
            this.dispatchEvent(
                new CustomEvent('Search', {
                    detail: {
                        value: this.value
                    }
                })
            );
        }, this.debounceDelay);
    }

    disconnectCallback(){
        window.clearTimeout(this.debounceTimeout);
    }
}
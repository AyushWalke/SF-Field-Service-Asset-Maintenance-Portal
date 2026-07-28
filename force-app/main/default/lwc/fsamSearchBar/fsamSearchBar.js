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
                new CustomEvent('search', {
                    detail: {
                        value: this.value
                    }
                })
            );
        }, this.debounceDelay);
    }

    disconnectedCallback(){
        window.clearTimeout(this.debounceTimeout);
    }
}
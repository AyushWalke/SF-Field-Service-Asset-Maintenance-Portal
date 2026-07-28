import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const VALID_VARIANTS = ['success', 'error', 'warning', 'info'];
const VALID_MODES = ['dismissible', 'sticky', 'pester'];

export default class FsamToast extends LightningElement {
    @api label;
    @api message;
    @api variant = 'info';
    @api mode = 'dismissible';

    @api
    show() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: this.label || '',
                message: this.message || '',
                variant: this.getVariant(),
                mode: this.getMode()
            })
        );
    }

    getVariant() {
        return VALID_VARIANTS.includes(this.variant)
            ? this.variant
            : 'info';
    }

    getMode() {
        return VALID_MODES.includes(this.mode)
            ? this.mode
            : 'dismissible';
    }
}
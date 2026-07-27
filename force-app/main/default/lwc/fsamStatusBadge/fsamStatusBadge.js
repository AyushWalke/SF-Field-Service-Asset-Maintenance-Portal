import { api, LightningElement } from 'lwc';

const STATUS_CONFIG =  {
    'New': {
        label: 'New',
        className: 'slds-badge slds-theme_info'
    },
    'Assigned': {
        label: 'Assigned',
        className: 'slds-badge slds-theme_warning'
    },
    'In Progress': {
        label: 'In Progress',
        className: 'slds-badge slds-theme_alt-inverse'
    },
    'Completed': {
        label: 'Completed',
        className: 'slds-badge slds-theme_success'
    },
    'On Hold': {
        label: 'On Hold',
        className: 'slds-badge slds-theme_offline'
    },
    'Cancelled': {
        label: 'Cancelled',
        className: 'slds-badge slds-theme_error'
    }
};

const DEFAULT_STATUS = {
    label: 'Unknown',
    className: 'slds-badge slds-theme_lightest'
}

export default class FsamStatusBadge extends LightningElement {
    @api ststus;

    get statusConfig(){
        return STATUS_CONFIG[this.ststus] || DEFAULT_STATUS;
    }

    get displayStatus(){
        return this.statusConfig.label;
    }

    get badgeClass(){
        return this.statusConfig.className;
    }
}
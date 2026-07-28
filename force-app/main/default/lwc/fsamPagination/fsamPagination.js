import { LightningElement, api } from 'lwc';

export default class FsamPagination extends LightningElement {
    @api currentPage = 1;
    @api totalPages = 1;

    get hasPrevious() {
        return this.currentPage > 1;
    }

    get hasNext() {
        return this.currentPage < this.totalPages;
    }

    get isFirstPage() {
        return !this.hasPrevious;
    }

    get isLastPage() {
        return !this.hasNext;
    }

    handlePrevious() {
        if (this.isFirstPage) {
            return;
        }

        this.currentPage -= 1;
        this.dispatchPageChange();
    }

    handleNext() {
        if (this.isLastPage) {
            return;
        }

        this.currentPage += 1;
        this.dispatchPageChange();
    }

    dispatchPageChange() {
        this.dispatchEvent(
            new CustomEvent('pagechange', {
                detail: {
                    page: this.currentPage
                }
            })
        );
    }
}
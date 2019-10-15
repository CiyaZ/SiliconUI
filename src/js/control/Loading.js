export default class Loading {

    constructor({domId}) {
        this.domNode = document.getElementById(domId);
        if (this.domNode === null) {
            throw 'DOM节点ID不存在';
        }
    }

    showLoading() {
        this.domNode.style.display = 'block';
    }

    hideLoading() {
        this.domNode.style.display = 'none';
    }

    toggleLoading() {
        if (this.domNode.style.display === 'none') {
            this.domNode.style.display = 'block';
        } else {
            this.domNode.style.display = 'none';
        }
    }
}

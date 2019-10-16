export default class LayerPopup {
    constructor({domId}) {
        this.domNode = document.getElementById(domId);
        if (this.domNode === null) {
            throw 'DOM节点ID不存在';
        }
    }

    showLayerPopup() {
        this.domNode.style.display = 'block';
    }

    hideLayerPopup() {
        this.domNode.style.display = 'none';
    }

    toggleLayerPopup() {
        if (this.domNode.style.display === 'block') {
            this.hideLayerPopup();
        } else {
            this.showLayerPopup();
        }
    }
}
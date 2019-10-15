import GraphicsUtil from "../util/GraphicsUtil";

export default class Dropdown {
    constructor({domId, relativeDomId}) {
        this.domNode = document.getElementById(domId);
        if (this.domNode === null) {
            throw 'DOM节点ID不存在';
        }
        this.hasRelative = false;
        if (relativeDomId !== undefined && relativeDomId !== null) {
            this.relativeDomNode = document.getElementById(relativeDomId);
            if (this.relativeDomNode !== null) {
                this.hasRelative = true;
            }
        }
    }

    showDropdown() {
        // 设定垂直间隔为3px
        let verticalGap = 3;
        this.domNode.style.display = 'inline-block';

        if (this.hasRelative) {
            // 有相对元素时计算布局位置
            let clientWidth = document.body.clientWidth;
            let clientHeight = document.body.clientHeight;

            let xMin = this.relativeDomNode.offsetLeft;
            let xMax = xMin + this.relativeDomNode.offsetWidth;
            let yMin = this.relativeDomNode.offsetTop;
            let yMax = yMin + this.relativeDomNode.offsetHeight;

            if (xMin < clientWidth / 2 && yMin < clientHeight / 2) {
                let oLeftTarget = xMin;
                let oTopTarget = yMax + verticalGap;
                this.domNode.style.left = oLeftTarget + 'px';
                this.domNode.style.top = oTopTarget + 'px';
            } else if (xMin > clientWidth / 2 && yMin < clientHeight / 2) {
                let oLeftTarget = xMax;
                let oTopTarget = yMax + verticalGap;
                this.domNode.style.left = oLeftTarget - this.domNode.clientWidth + 'px';
                this.domNode.style.top = oTopTarget + 'px';
            } else if (xMin < clientWidth / 2 && yMin > clientHeight / 2) {
                let oLeftTarget = xMin;
                let oTopTarget = yMin - verticalGap;
                this.domNode.style.left = oLeftTarget + 'px';
                this.domNode.style.top = oTopTarget - this.domNode.clientHeight + 'px';
            } else if (xMin > clientWidth / 2 && yMin > clientHeight / 2) {
                let oLeftTarget = xMax;
                let oTopTarget = yMin - verticalGap;
                this.domNode.style.left = oLeftTarget - this.domNode.clientWidth + 'px';
                this.domNode.style.top = oTopTarget - this.domNode.clientHeight + 'px';
            }


        }
    }

    hideDropdown() {
        this.domNode.style.display = 'none';
    }

    toggleDropdown() {
        if (this.domNode.style.display === 'none') {
            this.showDropdown();
        } else {
            this.hideDropdown();
        }
    }

    checkPos({x, y}) {
        return this.domNode.style.display === 'inline-block' &&
            GraphicsUtil.isPosInRect(x, y, this.domNode.getBoundingClientRect());
    }

    checkPosWithRelativeNode({x, y}) {
        if (this.hasRelative) {
            return this.domNode.style.display === 'inline-block' &&
                (GraphicsUtil.isPosInRect(x, y, this.domNode.getBoundingClientRect()) ||
                    GraphicsUtil.isPosInRect(x, y, this.relativeDomNode.getBoundingClientRect()));
        } else {
            return this.checkPos({x, y});
        }

    }
}
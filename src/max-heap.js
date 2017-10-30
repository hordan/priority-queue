const Node = require('./node');
class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}
	push(data, priority) {
		var obj = new Node(data,priority);
		this.insertNode(obj);
		this.shiftNodeUp(obj);
	}
	pop() {
		if(this.isEmpty()){
		 return;
	 }
	 else{
		  return this.parentNodes[0].data;
	 }

	//restoreRootFromLastInsertedNode( detachRoot());
	//shiftNodeDown(this.root);
	}
	detachRoot() {
		this.root= null;
		this.parentNodes.shift();
	}
	restoreRootFromLastInsertedNode(detached) {
	}
	size() {
	}
	isEmpty() {
		if(this.parentNodes.length === 0 && this.root == null){
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.parentNodes.length=0;
	}

	insertNode(node) {
		 if(this.isEmpty()){
			this.parentNodes.push(node);
			this.root = node;
		}
		else{
			this.parentNodes[0].appendChild(node);
			if(this.parentNodes[0].right){
				this.parentNodes.shift();
			}
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		let parentIndex = this.parentNodes.indexOf(node.parent);
		let nodeIndex = this.parentNodes.indexOf(node);
		if(node.parent != null && node.priority > node.parent.priority){
				parentIndex = this.parentNodes.indexOf(node.parent);
				nodeIndex = this.parentNodes.indexOf(node);
				if(nodeIndex>=0){
						this.parentNodes.splice(nodeIndex, 1, node.parent);
				}
				if(parentIndex>=0){
							this.parentNodes.splice(parentIndex, 1, node);
				}
		node.swapWithParent();
		this.shiftNodeUp(node);
		}
		if(node.parent === null){
			this.root = node;
		}
	}
/////////////////////////////////////////

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;

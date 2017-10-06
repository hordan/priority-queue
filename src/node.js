class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(!this.left){
			this.left = node;
			node.parent = this;
		}
		else if (!this.right) {
			this.right = node;
			node.parent = this;
		}
		else{
			return;
		}
}
	removeChild(node) {
		if(this.left === node){
			this.left = null;
			node.parent = null;
		}
		else if(this.right === node){
			this.right = null;
			node.parent = null;
		}
		else if( (this.right != node) && (this.left != node) ){
			throw new exception;
		}

}
	remove() {
		if(!this.parent){
			return;
		}
		else {
		this.parent.removeChild(this);
	}
	}

	swapWithParent() {
		if(!this.parent){
			return;
		}
		var parent = this.parent;
		var pleft = parent.left;
		var pright = parent.right;
		parent.left = this.left;
		parent.right = this.right;
		if (this.left)
			this.left.parent = parent;
		if (this.right)
			this.right.parent = parent;
		if(this === pleft){
			this.left = this.parent;
			this.right = pright;
			if (pright)
				pright.parent = this;
		}
		else{
		  this.right = this.parent
			this.left = pleft;
			if (pleft)
				pleft.parent = this;
		}
		if (parent.parent) {
			if (parent.parent.left == parent)
				parent.parent.left = this;
			else
				parent.parent.right = this;
		}
		this.parent = parent.parent;
		parent.parent = this;
	}
}
module.exports = Node;

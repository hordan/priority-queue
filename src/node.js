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
			return null;
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
		var ptr = this.parent;
		var ptrleft = ptr.left;
		var ptrright = ptr.right;
		ptr.left = this.left;
		ptr.right = this.right;
		if (this.left)
			this.left.parent = ptr;//swap
		if (this.right)
			this.right.parent = ptr;//swap
		if(this === ptrleft){
			this.left = this.parent;
			this.right = ptrright;
			if (ptrright)
				ptrright.parent = this;
		}
		else{
		  this.right = this.parent
			this.left = ptrleft;
			if (ptrleft)
				ptrleft.parent = this;
		}
		if (ptr.parent) {
			if (ptr.parent.left == ptr)
				ptr.parent.left = this;
			else
				ptr.parent.right = this;
		}
		this.parent = ptr.parent;
		ptr.parent = this;
	}
}
module.exports = Node;

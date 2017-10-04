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
			this.left =node
		}
		else if (!this.right) {
			this.right = node;
		}
		else{
			return;
		}
}
	removeChild(node) {
		if(this.left === node){
			this.left = null;
		}
		else if(this.right === node){
			this.right = null;
		}
		else if( (this.right != node) && (this.left != node) ){
			throw new exception;
		}
			//this.right.parent = 0;
			//this.left.parent =0;
}
	remove() {
		if(!this.parent){
			return;
		}
	}

	swapWithParent() {
		if(!this.parent){
			return;
		}
		this.parent.parent=this.parent; 
	}
}
module.exports = Node;

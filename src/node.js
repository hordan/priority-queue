class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (node !== null){
			if(this.left == null)
			{
				this.left = node;
				node.parent = this;
			}else if (this.right == null){
				this.right = node;
				node.parent = this;
			}
		}
	}

	removeChild(node) {
		if(this.left == node)
		{
			this.left = null;
			node.parent = null;
		}
		else if(this.right == node)
		{
			this.right = null;
			node.parent = null;
		}
		else throw new Error('Error in removeChild');
	}

	remove() {
		if(this.parent !== null){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent !== null){
			var _parent = this.parent;
			var pparent = this.parent.parent;

			var lflag = false;
			var save_child = _parent.left;
			if(this.parent.left == this){
				lflag = true;
				save_child = _parent.right;
			}

			this.remove();
			_parent.remove();

			if(pparent !== null)
				pparent.appendChild(this);
			_parent.left = _parent.right = null;
			_parent.appendChild(this.left);
			_parent.appendChild(this.right);

			this.left = this.right = null;
			if(lflag)
			{
				this.appendChild(_parent);
				this.appendChild(save_child);
			}
			else
			{
				this.appendChild(save_child);
				this.appendChild(_parent);
			}
		}
	}
}

module.exports = Node;

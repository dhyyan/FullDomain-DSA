class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.head=null
    }
    insert(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left=newNode
                    return
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode
                    return
                }
                current=current.right
            }
        }
    }


    include(value){
        if(!this.head)return
        let current=this.head
        while(current){
            if(current.value==value)return true
            if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }

     secondsmall(){
        if(!this.head)return
        let current=this.head
        let secsmall=null
        while(current.left){
            secsmall=current
            current=current.left
        }
        
        if(current.right){
            let node=current.right
            while(node.left){
                node=node.left
            }
            return node.value
        }else{
           return secsmall.vlaue
        }
        
    }
    
    depth(value){
        if(!this.head)return
        let current=this.head
        let deep=0
        while(current){
            if(value==current.value)return deep
            if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        deep++
        }
    }



    degree(value){
        if(!this.head)return
        let current=this.head
        while (current){
            if(value==current.value){
                let degre=0
                if(current.left)degre++
                if(current.right)degre++
                return degre
            }
            if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
        return -1
    }
 
    height(current=this.head){
        if(!current)return -1
        let left=this.height(current.left)
        let right=this.height(current.right)
        return Math.max(left,right) + 1
    }
    

    smallest(){
        if(!this.head)return
        let current=this.head
        while(current.left){
            
                current=current.left
        }
        return current.value
    }

   levelOrder(){
        if(!this.head)return
        let queue=[this.head]
        while(queue.length>0){
            let node=queue.shift()
            console.log(node.value)
        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)
        }
    }

    PreOder(current=this.head){
        if(!current)return
        console.log(current.value)
            this.PreOder(current.left)
            this.PreOder(current.right)
        
    }


    inOrder(current = this.root, result = []) {
        if (!current) return result;
        this.inOrder(current.left, result);
        result.push(current.value);
        this.inOrder(current.right, result);
        return result;
    }

    // ✅ Find kth smallest element
    kthSmallest(k) {
        let result = this.inOrder(); // sorted array of values
        if (k <= 0 || k > result.length) {
            return null; // invalid k
        }
        return result[k - 1];
    }

    isPerfect(current=this.root){
        if(!current)return
        //we already implemented the height method
        let height=this.height()
        
        function check(node,depth=0){
            if(!node)return 
            
            if(!node.left&&!node.right){
                return depth==height
            }
            
            if(!node.left||!node.right){
                return false
            }
            
            return check(node.left,depth+1)&&check(node.right,depth+1)
                            
        }
        
        return check(current)
    }


}


const h=new BST()
h.insert(13)
h.insert(1)                                                                                                            
h.insert(3)
h.insert(143)
h.insert(1346)
h.insert(17)
h.insert(134)

// h.PreOder()
console.log(h.smallest())
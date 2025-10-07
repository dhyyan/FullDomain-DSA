    class Heap{
        constructor(){
            this.heap=[]
        }

        left(index){
            return (index*2)+1
        }

        right(index){
            return (index*2)+2
        }

        parent(index){
            return Math.floor((index-1)/2)
        }

        insert(value){
            this.heap.push(value)
            this.heapifyUp(this.heap.length-1)
        }

        heapifyUp(index){
            let parent=this.parent(index)
            let heap=this.heap
            while(heap[index]<heap[parent]){
                [heap[index],heap[parent]]=[heap[parent],heap[index]]
                index=parent
                this.heapifyUp(index)
            }
        }

        delete(){
            if(this.heap.length==0)return false
            if(this.heap.length==1)return this.heap.pop()
            let deleted=this.heap[0]
            this.heap[0]=this.heap.pop()
            this.heapifydown(0)
            return deleted
        }

        heapifydown(index){
            let left=this.left(index)
            let right=this.right(index)
            let small=index
            let heap=this.heap
            if(left<heap.length&&heap[left]<heap[small]){
                small=left
            }
            if(right<heap.length&&heap[right]<heap[small]){
                small=right
            }
            if(small!==index){
                [heap[small],heap[index]]=[heap[index],heap[small]]
                this.heapifydown(small)
            }
        }

        sort(){
            let heap=this.heap
            let sort=[]
            while(this.heap.length){
                sort.push(this.delete())
            }
            this.heap=heap
            console.log(sort)
        }

        display(){
            console.log(this.heap)
        }
    }

    const h=new Heap()
    h.insert(5675)
    h.insert(55)
    h.insert(675)
    h.insert(375)
    h.insert(5)
    h.sort()
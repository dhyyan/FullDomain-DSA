class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class List{
    constructor(){
        this.head=null
    }
    insert(val){
        
        const newNode=new Node(val)
        if(!this.head){
            
            this.head=newNode
            
            return
        }
        
        let current=this.head
        while(current.next){
            
            current=current.next
        }
        current.next=newNode
        return
    }

    mid(){
        if(!this.head)return
        let fast=this.head
        let slow =this.head
        let prev=null
        while(fast&&fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        console.log(prev.value)
    }

    display(){
        if(!this.head)return
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
}
const l=new List()
l.insert(12)
l.insert(32)
l.insert(15)
l.insert(1362)
l.insert(127)
l.insert(128)
l.mid()
l.display()
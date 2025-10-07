class Stack{
    constructor(){
        this.stack=[]
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }

    size(){
        return this.stack.length
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack)
    }
}
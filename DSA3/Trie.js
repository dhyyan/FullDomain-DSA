class TrieNode{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    
    insert(word){
        let node=this.root
        for(let val of word){
            if(!node.children[val]){
                node.children[val]=new TrieNode()
            }
            node=node.children[val]
        }
        return node.isEnd=true
    }
    
    search(word){
        let node=this.root
        for(let val of word){
            if(!node.children[val])return false
            node=node.children[val]
        }
        return node.isEnd
    }
    
    
    autoCompletion(prefix){        
        let node =this.root
        for(let val of prefix){
            if(!node.children[val])return
            node=node.children[val]
        }
        let result=[]
        let dfs=(currentWord,currentNode)=>{
            if(currentNode.isEnd){
                result.push(currentWord)
            }
            for(let val in currentNode.children){
                dfs(currentWord+val,currentNode.children[val])
            }
        }
        dfs(prefix,node)
        console.log(result)
    }
}

let v= new Trie()
v.insert("apple")
v.insert("app")
v.insert("cat")
v.insert("camel")
v.insert("candle")
v.insert("ant")
console.log(v.search("cat"))
v.autoCompletion("c")



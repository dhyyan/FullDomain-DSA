class Graph{
    constructor(){
        this.adjcentList={}
    }

    addVertex(vertex){
        if(this.adjcentList[vertex]) return
        this.adjcentList[vertex]=new Set()
        return 
    }

    addEdge(v1,v2){
        if(!this.adjcentList[v1])this.addVertex(v1)
        if(!this.adjcentList[v2])this.addVertex(v2)

            this.adjcentList[v1].add(v2)
            this.adjcentList[v2].add(v1)
    }

    deleteVertex(vertex){
        if(!this.adjcentList[vertex])return

        for(let v of this.adjcentList[vertex]){
            this.deleteEdge(vertex,v)
        }

        delete this.adjcentList[vertex]
    }

    deleteEdge(v1,v2){
        if(!this.adjcentList[v1])return
        if(!this.adjcentList[v2])return
        
        this.adjcentList[v1].delete(v2)
        this.adjcentList[v2].delete(v1)
    }


    dfs(start,visited=new Set()){
         if(!this.adjcentList[start])return
         visited.add(start)
         console.log(start)
         for(let v of this.adjcentList[start]){
             if(!visited.has(v)){
                 this.dfs(v,visited)
             }
         }
     }
     
     bfs(start){
         let visited=new Set()
         let queue=[]   
         queue.push(start)
         visited.add(start)
         while(queue.length){
             let visit=queue.shift()
             console.log(visit)
             for(let v of this.adjcentList[visit]){
                 if(!visited.has(v)){
                     visited.add(v)
                     queue.push(v)
                 }
             }
         }
     }
     
    shortestDistance(source,target){
        let queue=[]
        let visited=new Set()
        queue.push([source,0])
        visited.add(source)
        while(queue.length){
            const [vertex,distance]=queue.shift()
            if(vertex==target){
                return distance
            }
            for(let val of this.adjcentList[vertex]){
                if(!visited.has(val)){
                    visited.add(val)
                    queue.push([val,distance+1])
                }
            }
        }
        return -1
    }


    display(){
        for(let v in this.adjcentList){
            console.log(v+ "--->"+[...this.adjcentList[v]])
        }
    }

}

const g=new Graph()
g.addVertex("a")
g.addVertex("b")
g.addVertex("n")
g.addVertex("m")
g.addVertex("d")
g.addEdge("a","b")
g.addEdge("a","n")
g.addEdge("m","b")
g.addEdge("n","d")
g.deleteVertex("a")
g.display()
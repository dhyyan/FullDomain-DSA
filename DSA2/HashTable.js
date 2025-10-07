class HashTable{
    constructor(size){
        this.size=size
        this.table= new Array(this.size)
    }

    //hash function

    hash(key){
        let index=0
        for(let i=0;i<key.length;i++){
            index+=key.charCodeAt(i)
        }
        return index%this.size
    }

    insert(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let val=bucket.find((item)=>item[0]==key)
            if(val){
                val[1]=value
            }else{
                bucket.push([key,value])
            }
        }

    }

    search(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket)return
        let val=this.bucket.find((item)=>item[0]==key)
        if(val){
            return val[1]
        }
    }
    
    delete(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket)return
        this.table[index]=bucket.filter((item)=>item[0]!==key)
        return true
    }

    display(){
       for(let i=0;i<this.size;i++){
        console.log(this.table[i])
       }
    }
     
    }


    const h=new HashTable(10)
    h.insert("name","Dhyan")
    h.insert("agie","Dhyane")
    h.insert("agei","2")
    h.insert("Placei","Kannur")
    h.delete("agei")
    h.display()
/*    10
  4      20 
2   8  17  170 */

class Node{
    constructor(value){
        this.left=null;
        this.rigth=null;
        this.value=value;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode = new Node(value); 
        if(this.root===null){
            this.root=newNode;
        }else{
            let currentNode=this.root;
            while(true){                
                if(currentNode.value>value){
                    if(!currentNode.left){
                        currentNode.left=newNode;
                        return this;
                    }
                    currentNode=currentNode.left;
                }else{
                    if(!currentNode.rigth){
                        currentNode.rigth=newNode;
                        return this;
                    }
                    currentNode=currentNode.rigth;                
                }
            }
        }
    }
    search(value){
        if(this.root===null){
            console.log("vacio");
            return undefined;
        }else{
            let currentNode=this.root;
            while(true){
                if(currentNode.value===value){
                    return currentNode;
                }else{
                    if(currentNode.value > value){
                        if(currentNode.left===null){
                            console.log("El valor no existe.")
                            return undefined;
                        }else{
                            currentNode=currentNode.left;
                        }
                    }else{
                        if(currentNode.rigth===null){
                            console.log("El valor no existe.")
                            return undefined;
                        }else{
                            currentNode=currentNode.rigth;
                        }
                    }
                }
            }
        }
    }
}
const myBinarySearchTree= new BinarySearchTree();
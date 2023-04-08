
function Queue(){
    //define array
    var items = []

    //methods to add and remove elements in a way that follow the FIFO principle
    this.enqueue = function(...element){
        items.push(element)

    } 

    this.dequeue = function(){
        return items.shift()
    }

    //to check for index 0 element 
    this.front = function(){
        return items[0]
    }

    //check for the size of the queue
    this.size = function(){
        return items.length
    }

    //to check whether the queue is empty
    this.isEmpty = function(){
        return items.length === 0
    }

    //to clear the queue

    this.clear = function(){
        return items = []
    }

    this.print = function(){
        console.log(items.toString())
    }

}

var queue = new Queue()

queue.enqueue("John", "caleb")

console.log(queue.isEmpty())

queue.print()
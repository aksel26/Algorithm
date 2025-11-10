class minHeap {
    constructor(){
        this.heap = []
        
    }
    
    
    size () {
        return this.heap.length 
    }
    
    
    swap(idx1, idx2){
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
    }
    
    push(value){
        this.heap.push(value)        
        this.bubbleUp()
    }
    
    bubbleUp(){
        let currentIdx = this.heap.length - 1
        while(currentIdx > 0){
            const parentIdx = Math.floor((currentIdx - 1) / 2)
            
            if(this.heap[parentIdx] > this.heap[currentIdx]){
                this.swap(currentIdx , parentIdx)
                
                currentIdx = parentIdx
            }else{
                break;
            }            
        }
        
        
        
    }
    
    pop(){
        
        if(this.heap.lenght === 0) return null;
        
        if(this.heap.length === 1) return this.heap.pop()
        
        const minValue = this.heap[0]
        
        this.heap[0] = this.heap.pop()
        
        
        this.bubbleDown()
        
        return minValue
    
    }
    
    
    
    bubbleDown(){
                let currentIdx = 0;
        while(true){
            
            const leftChildIdx = currentIdx *2 + 1
            const rightChildIdx = currentIdx *2 + 2
            let smallestIdx = currentIdx
            
            
            if(this.heap[leftChildIdx] && this.heap[leftChildIdx] < this.heap[smallestIdx]){
                smallestIdx = leftChildIdx
            }
            
            if(this.heap[rightChildIdx] && this.heap[rightChildIdx] < this.heap[smallestIdx]){
                smallestIdx = rightChildIdx
            }
            
            if(smallestIdx=== currentIdx) break;
            
            this.swap(currentIdx, smallestIdx)
            
            currentIdx = smallestIdx
            
            
        }
        
    }
    
    peek(){
        return this.heap[0]
    }
}


function solution(k, score) {
    
    
        let result = []
        const fame = new minHeap()
        
        for(let i = 0 ; i < score.length ; i++){
            
            const currentScore = score[i]
            
            if(fame.size() < k){
                fame.push(currentScore)
                
            }else if(currentScore > fame.peek()){
                fame.pop()
                fame.push(currentScore)
                
            }
            
            result.push(fame.peek())
            
            
            
        }

    
    return result
        
}
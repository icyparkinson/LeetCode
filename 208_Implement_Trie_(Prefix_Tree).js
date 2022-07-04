class Trie {
    constructor(children, isWord){
        this.children = {}
        // this.isWord = false
    }
    
    insert(word){
        let curr = this
        for (let i = 0; i < word.length; i++){
            let char = word[i]
            if (!curr.children[char]) curr.children[char] = new Trie()
            curr = curr.children[char]
        }
        curr.isWord = true
    }
    
    search(word){
        let curr = this
        for (let i = 0; i < word.length; i++){
            let char = word[i]
            if (!curr.children[char]) return false
            curr = curr.children[char]
        }
        return curr.isWord === true
        
    }
    
    startsWith(prefix){
        let curr = this
        for (let i = 0; i < prefix.length; i++){
            let char = prefix[i]
            if (!curr.children[char]) return false
            curr = curr.children[char]
        }
        return true
    }
    
    
}

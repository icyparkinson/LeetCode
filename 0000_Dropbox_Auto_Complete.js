Dropbox has tasked you with gathering some qualitative metrics regarding a simple text search auto-complete feature. You'll be given a set of documents, each having a title and a body of text.

Every word in the documents can be assigned a numeric score. The score is defined as follows:

    Each occurrence in the title: 10
    Each occurrence in the body: 1

Note that the scores should be computed across all documents.

For example, given two documents

	Title 	Body
Document A 	ANIMALS 	ANT ANTELOPE CAMEL CAT DOG
Document B 	DOG FACTS 	FURRY FURRY LOYAL

    ANIMALS has a score of 10, because it appears once in a document's title
    CAT has a score of 1, because it appears once in a document's body
    DOG has a score of 11, because it appears once in a docurnent's body, and once in a document's title
    FURRY has a score of 2, because it appears twice in a document's body

You'll then be given a set of user queries, each a string with no whitespace. For each query, compute the highest score among all the words that could be auto-completed from it. For instance, among the set of words above, the query 'AN' could be auto-completed into ANIMALS, ANT, and ANTELOPE. If no such words exist, the score is 0.

For example, given these following queries:

    AN would output 10, because it can auto-complete into ANIMAL (which has a higher score than ANT and ANTELOPE)
    DO would output 11, because it can auto-complete into DOG
    FUR would output 2, because it can auto-complete into FURRY
    ELEPH would output 0, because it cannot auto-complete into any of the words

You can assume text and queries are comprised of A-Z characters. In documents, words are separated by a space; there is no other whitespace.

public static List<Integer> getAutocompleteScores(List<String> documentTitles, List<String> documentBodies, List<String> queries) {
	// todo
}

Constraints

    N: the number of documents 1 <= N < 1,000
    Q: the number of queries 1 <= Q < 300,000




JAVA SOLUTION //////////////

class Result {

    /*
     * Complete the 'getAutocompleteScores' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts following parameters:
     *  1. STRING_ARRAY documentTitles
     *  2. STRING_ARRAY documentBodies
     *  3. STRING_ARRAY queries
     */
    
    public static List<Integer> getAutocompleteScores(List<String> documentTitles, List<String> documentBodies, List<String> queries) {
        List<Integer> scores = new ArrayList<Integer>();
        // String[] splitted;
        Trie trie = new Trie();
        int i, j = 0;
    
        // loop thru the document titles
        for(i = 0; i < documentTitles.size(); i++){
            // split the string into its respective words by space
            String[] splitted = documentTitles.get(i).split("\\s+");
    
            // loop thru the split words
            for(j = 0; j < splitted.length; j++){
                trie.insert(splitted[j], 10);
            }
        }
    
        // loop thru the document bodies
        for(i = 0; i < documentBodies.size(); i++){
            // split the string into its respective words by space
            String[] splitted = documentBodies.get(i).split("\\s+");
    
            // loop thru the split words
            for(j = 0; j < splitted.length; j++){
                trie.insert(splitted[j], 1);
            }
        }
    
        // loop thru the queries and add scores to integer list
        for(i = 0; i < queries.size(); i++){
            scores.add(trie.search(queries.get(i)));
        }
    
        // return the integer list
        return scores;
    }
    
    }
    
    // make a trie, store all words from all documents with their respective scores, search when necessary
    class Trie{
    private Node root;
    // memoize getting the scores
    private HashMap<Node, Integer> scores;
    
    public Trie(){
        root = new Node();
        scores = new HashMap<Node, Integer>();
    }
    
    // insert word from top level, add points
    public void insert(String word, int points){
        root.insert(word.toCharArray(), points);
    }
    // search word from top level, memoized
    public int search(String word){
        return root.search(word, scores);
    }
    
    }
    
    class Node{
    public HashMap<Character, Node> children;
    
    public int leafPoints;
    public int totalPoints;
    
    public Node(){
        leafPoints = 0;
        totalPoints = 0;
        children = new HashMap<Character, Node>();
    }
    
    // search until the end of the word, and return the totalPoints as created by insert
    public int search(String word, HashMap<Node, Integer> scores){
        Node node = this;
        // find the node which needs to be scored
        for(char c: word.toCharArray()){
            // can't find character in the trie, score is 0
            if(!node.children.containsKey(c))
                return 0;
            // iterate to next node
            node = node.children.get(c);
        }
        // return memoized score
        return node.score(scores);
    }
    
    // insert word into trie with points added at the leaf node
    public void insert(char[] word, int points){
        Node node = this;
        int index = 0;
        
        // iterate thru word
        for(char c: word){
            // if character doesn't exist yet, put it
            if(!node.children.containsKey(c))
                node.children.put(c, new Node());
            // if it's the last character in the word, set the points (leaf & total)
            if(index == word.length - 1){
                node.children.get(c).leafPoints += points;
                node.children.get(c).totalPoints = Math.max(node.children.get(c).leafPoints, node.children.get(c).totalPoints);
            }
            // iterate thru word
            node = node.children.get(c);
            index++;
        }
    }
    
    // get the score of this node, memoized
    public int score(HashMap<Node, Integer> scores){
        // if map contains this node, get its score and return it
        if(scores.containsKey(this))
            return scores.get(this);
        
        // otherwise, first time this node is being discovered, and needs to be found manually
        int score = this.totalPoints;
        
        // recurse thru max scores of all this node's children
        for(Node node: this.children.values()){
            score = Math.max(score, node.score(scores));
        }
        // add the score to the map so it doesnt need to be searched again in the future
        if(!scores.containsKey(this)){
            scores.put(this, score);
        }
       
        return score;
    }
    
    }





    #include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);


#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>


class Node {
 public:
    bool isLeaf;
    int leafPoints;
    int totalPoints;
    unordered_map<char, Node *> children;

    Node(): isLeaf(false), leafPoints(0), totalPoints(0) {}

    int search(const string &word, size_t index) {
        if (index == word.size()) {
            return this->totalPoints;
        }

        char c = word[index];
        return  children.find(c) == children.end() ? 0 : children[c]->search(word, index + 1);
    }

    void insert(const string& word, size_t index, int points) {
        char c = word[index];
        if (children.find(c) == children.end()) {
            children[c] = new Node();
        }

        if (index == word.size() - 1) {
            children[c]->isLeaf = true;
            children[c]->leafPoints += points;
            children[c]->totalPoints = max(children[c]->leafPoints, children[c]->totalPoints);
        }
        else {
            children[c]->insert(word, index + 1, points);
        }

        this->totalPoints = max(this->totalPoints, children[c]->totalPoints);
    }
};

class Trie {
private:
    Node *root;
public:
    Trie() {
        root = new Node();
    }

    int search(string word) {
        return root->search(word, 0);
    }

    void insert(string word, int points) {
        root->insert(word, 0, points);
    }
};


/*
 * Complete the 'getAutocompleteScores' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY documentTitles
 *  2. STRING_ARRAY documentBodies
 *  3. STRING_ARRAY queries
 */

vector<int> getAutocompleteScores(vector<string> documentTitles, vector<string> documentBodies, vector<string> queries) {
     Trie trie;
    for (int i = 0; i < documentTitles.size(); ++i) {
        std::string buf;                 // Have a buffer string
        std::stringstream ss(documentTitles[i]);       // Insert the string into a stream

        std::vector<std::string> tokens; // Create vector to hold our words

        while (ss >> buf)
            tokens.push_back(buf);

        for(int j=0;j<tokens.size();j++)
            trie.insert(tokens[j], 10);
    }

    for (int i = 0; i < documentBodies.size(); ++i) {
        std::string buf;                 // Have a buffer string
        std::stringstream ss(documentBodies[i]);       // Insert the string into a stream

        std::vector<std::string> tokens; // Create vector to hold our words

        while (ss >> buf)
            tokens.push_back(buf);
        for(int j=0;j<tokens.size();j++)
            trie.insert(tokens[j], 1);
    }
    vector<int> answer;
    for(int i=0;i< queries.size();i++){
        answer.push_back(trie.search(queries[i]));
    }
    return answer;

}


I just tried to implement it using trie.

In each node I stored the accumulated leaf points in case that node is the end of a word and also the total accumulated points.

I assumed that the input could be a vector<vector<string>> since it was not specified.

I hope it helps :)

#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

using namespace std;

class Node {
 public:
    bool isLeaf;
    int leafPoints;
    int totalPoints;
    unordered_map<char, Node *> children;

    Node(): isLeaf(false), leafPoints(0), totalPoints(0) {}

    int search(const string &word, size_t index) {
        if (index == word.size()) {
            return this->totalPoints;
        }

        char c = word[index];
        return  children.find(c) == children.end() ? 0 : children[c]->search(word, index + 1);
    }

    void insert(const string& word, size_t index, int points) {
        char c = word[index];
        if (children.find(c) == children.end()) {
            children[c] = new Node();
        }

        if (index == word.size() - 1) {
            children[c]->isLeaf = true;
            children[c]->leafPoints += points;
            children[c]->totalPoints = max(children[c]->leafPoints, children[c]->totalPoints);
        }
        else {
            children[c]->insert(word, index + 1, points);
        }

        this->totalPoints = max(this->totalPoints, children[c]->totalPoints);
    }
};

class Trie {
private:
    Node *root;
public:
    Trie() {
        root = new Node();
    }

    int search(string word) {
        return root->search(word, 0);
    }

    void insert(string word, int points) {
        root->insert(word, 0, points);
    }
};

int main() {
    vector<vector<string>> titles = {{"animals"}, {"dog", "facts"}};
    vector<vector<string>> body = {{"ant", "antelope", "camel", "cat", "dog"}, {"furry", "furry", "loyal"}};

    Trie trie;
    for (int i = 0; i < titles.size(); ++i) {
        for (int j = 0; j < titles[i].size(); ++j) {
            trie.insert(titles[i][j], 10);
        }
    }

    for (int i = 0; i < body.size(); ++i) {
        for (int j = 0; j < body[i].size(); ++j) {
            trie.insert(body[i][j], 1);
        }
    }
    
    cout << "an has score " << trie.search("an") << endl;
    cout << "cat has score " << trie.search("cat") << endl;
    cout << "dog has score " << trie.search("dog") << endl;
    cout << "furry has score " << trie.search("furry") << endl;
    cout << "do has score " << trie.search("do") << endl;
    cout << "fur has score " << trie.search("fur") << endl;
    cout << "eleph has score " << trie.search("eleph") << endl;
}

This is the output

"an has score 10"
"cat has score 1"
"dog has score 11"
"furry has score 2"
"do has score 11"
"fur has score 2"
"eleph has score 0"

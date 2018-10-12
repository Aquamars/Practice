/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {    
    public List<Integer> preorder(Node root) {   
        List<Integer> res = new ArrayList<Integer>();
        Stack<Node> stack = new Stack<Node>();
        
        if(root == null) return res;
        
        stack.add(root);
        
        while(!stack.isEmpty()){
            Node node = stack.pop();
            
            res.add(node.val);
            
            for(int i=node.children.size()-1; i>=0; i--){
                stack.add(node.children.get(i));
            }            
        }
        return res;
    }
}
// Write your test here
// Write your test here
// Write your test here
// Write your test here
// Write your test here
const Tree = require("./challenge01")
describe ("test",()=>{
    it("test",()=>{
const tree =Tree([3,9,20,15,7],[9,3,15,20,7])
expect(tree.value).toEqual(3);
expect(tree.left.value).toEqual(9);
expect(tree.right.value).toEqual(20);
expect(tree.right.value).toEqual(20);
expect(tree.right.left.value).toEqual(15);

})
it("test",()=>{
const tree=Tree([-1],[-1])
expect(tree.value).toEqual(-1)
})

})
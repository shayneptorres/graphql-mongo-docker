export const resolvers = {
    Query: {
        test(root,args){
            return {
                name: "Test",
                desc: "This is a test query"
            }
        }
    }
}
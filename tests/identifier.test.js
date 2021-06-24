const {isWhiteSpace , isWord  } =require('../src/identifiers')

describe(isWord, ()=>{
    
    it('return true if input is someword',() =>{
        const input = "someword"
        expect(isWord(input)).toBe(true)
    })
    it("return false if input does not starts with alphabet ",() =>{
        const input = "1saurabh"
        expect(isWord(input)).toBe(false)
    } )
    it("return false if input does not ends with alphabet ",() =>{
        const input = "saurabh1"
        expect(isWord(input)).toBe(false)
    })
})
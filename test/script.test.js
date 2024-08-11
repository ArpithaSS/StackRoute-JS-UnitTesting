// import { Add , person} from '../script.js';
// import { assert } from 'chai';
// describe("Chai and Mocha demo with sample modules",()=>{
//     it("Test add functionality", ()=>{
//         let result= Add(10,20);
//         assert.equal(result,30);
//     });
//     it("Test Object Person", ()=>{
//         assert.isObject(person);
//     })
// });

import { add, isEven,findLargest, reverseString, capitalizeWords,factorial,mergeSortedArrays,isPalindrome} from '../script.js';
import { assert } from 'chai';

describe("Test add function", ()=>{
    it("Check if the function correctly adds two positive numbers", ()=>{
        let result=add(10,0);
        assert.equal(result,10);
    });
    it("Check if the function correctly adds two positive numbers-Example2", ()=>{
        let result=add(1,1);
        assert.equal(result,2);
    });
    it("Check if the function correctly adds two positive numbers-Example3", ()=>{
        let result=add(10,1);
        assert.equal(result,11);
    });

    it("Check if the function correctly adds two negative numbers", ()=>{
        let result=add(-10,-1);
        assert.equal(result,-11);
    });
    it("Check if the function correctly adds two negative numbers-Example2", ()=>{
        let result=add(-6,-1);
        assert.equal(result,-7);
    });
    it("Check if the function correctly adds two negative numbers-Example3", ()=>{
        let result=add(-1,-11);
        assert.equal(result,-12);
    });
    it("Check if the function correctly adds a positive and a negative number", ()=>{
        let result= add(12,-1);
        assert.equal(result,11);
    });
    it("Check if the function correctly adds a positive and a negative number-Example2", ()=>{
        let result= add(0,-1);
        assert.equal(result,-1);
    });
    it("Check if the function correctly adds a positive and a negative number-Example3", ()=>{
        let result= add(-1,-0);
        assert.equal(result,-1);
    });
});

describe("Test isEven function", ()=>{
    it("Check if the function correctly identifies even numbers", ()=>{
        let result=isEven(2);
        assert.equal(result,true);
    });
    it("Check if the function correctly identifies even numbers-Example2", ()=>{
        let result=isEven(8);
        assert.equal(result,true);
    });
    it("Check if the function correctly identifies even numbers-Example3", ()=>{
        let result=isEven(12);
        assert.equal(result,true);
    });
    it("Check if the function correctly identifies odd numbers",()=>{
        let result=isEven(7);
        assert.equal(result,false);
    });
    it("Check if the function correctly identifies odd numbers-Example2",()=>{
        let result=isEven(-5);
        assert.equal(result,false);
    });
    it("Check if the function correctly identifies odd numbers-Example3",()=>{
        let result=isEven(11);
        assert.equal(result,false);
    });
});

describe("Test findLargest function", ()=>{
    it("Check if the function returns the largest number in a non-empty array", ()=>{
        let result=findLargest([1,2,3,4,5,6,7])
        assert.equal(result,7);
    });
    it("Check if the function returns the largest number in a non-empty array-Example2", ()=>{
        let result=findLargest([1,2,3,0,5,6,7])
        assert.equal(result,7);
    });
    it("Check if the function returns the largest number in a non-empty array-Example3", ()=>{
        let result=findLargest([1,2,3,4,5,6,-7])
        assert.equal(result,6);
    });
    it("Check if the function returns null for an empty array",()=>{
        let result=findLargest([])
        assert.equal(result,null);
    });
});

describe("Test reverseString function", ()=>{
    it("Check if the function correctly reverses a non-empty string", ()=>{
        let result=reverseString('Arpitha');
        assert.equal(result,'ahtiprA');
    });
    it("Check if the function correctly reverses a non-empty string-Example2", ()=>{
        let result=reverseString('Noon');
        assert.equal(result,'nooN');
    });
    it("Check if the function correctly reverses a non-empty string-Example2", ()=>{
        let result=reverseString('NodeJS');
        assert.equal(result,'SJedoN');
    });
    it("Check if the function correctly handles an empty string", ()=>{
        let result=reverseString('');
        assert.equal(result,'');
    });
});

describe("Test capitalizeWords function", ()=>{
    it("Check if the function correctly capitalizes each word in a sentence",()=>{
        let result=capitalizeWords('This is a function');
        assert.equal(result,'This Is A Function');
    });
    it("Check if the function correctly capitalizes each word in a sentence-Example2",()=>{
        let result=capitalizeWords('Check tHIS OuT');
        assert.equal(result,'Check This Out');
    });
    it("Check if the function correctly capitalizes each word in a sentence-Example3",()=>{
        let result=capitalizeWords('request HANDLING');
        assert.equal(result,'Request Handling');
    });
    it("Check if the function correctly handles a string with a single word",()=>{
        let result=capitalizeWords('Arpitha');
        assert.equal(result, 'Arpitha');
    });
    it("Check if the function correctly handles a string with a single word-Example2",()=>{
        let result=capitalizeWords('asseRTION');
        assert.equal(result,'Assertion');
    });
});


describe("Test factorial function", ()=>{
    it("Check if the function correctly computes the factorial of a positive number",()=>{
        let result=factorial(5);
        assert.equal(result,120);
    });
    it("Check if the function correctly computes the factorial of a positive number-Example2",()=>{
        let result=factorial(2);
        assert.equal(result,2);
    });
    it("Check if the function correctly computes the factorial of a positive number-Example3",()=>{
        let result=factorial(1);
        assert.equal(result,1);
    });
    it("Check if the function returns 1 for the factorial of 0",()=>{
        let result=factorial(0);
        assert.equal(result,1);
    });
    it("Check if the function handles negative numbers correctly",()=>{
        let result=factorial(-10);
        assert.equal(result,undefined);
    });
    it("Check if the function handles negative numbers correctly-Example2",()=>{
        let result=factorial(-0);
        assert.equal(result,1);
    });
});

describe("Test mergeSortedArrays function", ()=>{
    it("Check if the function correctly merges two sorted arrays",()=>{
        let result=mergeSortedArrays([1,2],[3,4]);
        assert.deepEqual(result,[1,2,3,4]);
    });
    it("Check if the function correctly merges two sorted arrays-Example2",()=>{
        let result=mergeSortedArrays([-1,2],[-4,3]);
        assert.deepEqual(result,[-4,-1,2,3]);
    });
    it("Check if the function correctly merges two sorted arrays-Example3",()=>{
        let result=mergeSortedArrays([1,2,6],[3,4,5]);
        assert.deepEqual(result,[1,2,3,4,5,6]);
    });
    it("Check if the function handles empty arrays correctly",()=>{
        let result=mergeSortedArrays([],[]);
        assert.deepEqual(result,[]);
    });
});

describe("Test isPalindrome function", ()=>{
    it("Check if the function correctly identifies a palindrome", ()=>{
        let result=isPalindrome('Mom');
        assert.equal(result,true);
    });
    it("Check if the function correctly identifies a palindrome-Example2", ()=>{
        let result=isPalindrome('Dad');
        assert.equal(result,true);
    });
    it("Check if the function correctly identifies a non-palindrome", ()=>{
        let result=isPalindrome('Now');
        assert.equal(result,false);
    });
    it("Check if the function correctly identifies a non-palindrome-Example2", ()=>{
        let result=isPalindrome('Sun');
        assert.equal(result,false);
    });
    it("Check if the function correctly handles special characters and spaces", ()=>{
        let result=isPalindrome('N,o!o?n');
        assert.equal(result,true);
    });
    it("Check if the function correctly handles special characters and spaces-Example2",()=>{
        let result=isPalindrome('E____v_e');
        assert.equal(result,true);
    })
    it("Check if the function correctly handles special characters and spaces-Space",()=>{
        let result=isPalindrome('L E   V    E       L');
        assert.equal(result,true);
    })
});
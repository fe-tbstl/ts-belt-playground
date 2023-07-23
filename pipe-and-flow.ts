import {A, flow, O, pipe, S} from "@mobily/ts-belt";

const a= pipe(
    [1,2,3,4,5],
    A.dropExactly(2),
    O.flatMap(A.head),
);

console.log(a);
console.log(typeof  a);

const clean = flow(S.removeAll('X'), S.toLowerCase)

const value1= pipe(
    ['HellXXXo', 'wOrXXLd'],
    A.map(clean),
    A.join('  ')
)
console.log(value1)

const value2= pipe(
    ['HellXXXo', 'wOrXXLd'],
    A.map(S.removeAll('X')),
    A.map(S.toLowerCase),
    A.join('  ')
)
console.log(value2)
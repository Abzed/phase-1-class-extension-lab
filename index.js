class Polygon{
    constructor(array = []){
        this.array = array
    }
    
    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce((partialSum, a) => partialSum + a, 0);
    }
}
const polygon = new Polygon( [ 5, 5, 5 ] )
console.log(polygon);


class Triangle extends Polygon{

    constructor(...args){
        super(...args)
    }

    get isValid(){
        const result = this.array.every(element => {
            if (element === this.array[0]) {
              return true;
            }
          });
        
          return result;
    }
}

const triangle = new Triangle( [ 5, 5, 5 ] )
const triangle2 = new Triangle( [ 15, 10, 1 ] )

console.log(triangle);
console.log(triangle2);


class Square extends Polygon{

    constructor(...args){
        super(...args)
    }

    get area(){
        return this.array[0] * this.array[1]
    }

    get isValid(){
        const result = this.array.every(element => {
            if (element == this.array[0]) {
                return true
            }
        })

        return result
    }
}

let square = new Square( [ 5, 5, 5, 6 ] )

console.log(square);











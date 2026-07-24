
function wrapInArray<T> (item : T) :T[]{
    return [item];
};

wrapInArray("masala")
wrapInArray(45)
wrapInArray([44 , 34 , 53])

function pair<A , B> ( a : A , b : B) :[A , B]{
    return [a , b];
};


pair("masala" , "lemon")
pair("Ginger tea" , 30 )
pair("tea" , { ginger : 34 , lemon : 20});


// Generics interface 

interface Box<T> {
    content : T;
};

const numberBox : Box<number> ={ content : 34}
const numberBoxCup: Box<string> ={ content : "34"};


// also work partial , pick , omit 

// real world uses --> apiResopnse , form state 

interface apiPromise<T> {
    status : number,
    data : T 
};

const res : apiPromise<{ flavour : string}> = {
     status : 200,
     data : { flavour : "masala"}
}
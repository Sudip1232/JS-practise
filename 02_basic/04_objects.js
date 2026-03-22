//const tinderUser = new Object()


const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfuliname: {
            firstname: "hitesh",
            lastname: "choudhary"

            }
        }
    }
//console.log(regularuser.fullname);

const objl = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = { objl, obj2}
//const obj3 = Object.assign({}, objl, obj2)
const obj3 ={...objl,...obj2} //combine obj1 and obj 2 use (...a)
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "Sudip@gmail.com"
    },
    {
        id: 2,
        email: "sss@gmail.com"
    },
    {
        id: 3,
        email: "qz2de@gmail.com"
    },
]
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

//*********************************************************
const course = {
coursename: "math",
price: "999",
courseInstructor: "Sudip"

}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
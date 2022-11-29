interface IPerson {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
}

const person: IPerson = {
                //обяснение интерфейса
    /*{name: string; age: number;...}*/
    name: 'slava',
    age: 35,
    hobbies: ['sport', 'sex'],
    role: [2, 'author']
};

person.role.push('admin');
// person.role[1] = 10;

let favorites: string[];

favorites = ['str', 'str2']

console.log(person.name) //несуществующее сойство выдаст ошибку
for (let hobbie of person.hobbies) {
    console.log(hobbie)
    console.log(person.role)
}
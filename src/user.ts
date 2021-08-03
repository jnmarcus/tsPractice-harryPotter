import faker from "faker";

interface User {
  name: string;
  id: number;
}

const users: Array<User> = [
  {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    id: faker.datatype.number()
  }
];

const user1 = () => {
  const person = users[0] as User;
  // is the above needed if T<U> declaration exists?
  console.log(person);
  console.log(`hello ${person.name}`);
};

export default user1;

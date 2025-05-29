import { pool } from "./db"; // Pool bhi aa gaya
import { User } from "./user"; // interface

export async function createUser(name: string, email: string): Promise<User> {
  const { rows } = await pool.query(
    `INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *`, // This will return all the user details
    [name, email]
  );

  return rows[0];
}

export async function getUserById(id: number): Promise<User | null> {
 const { rows } = await pool.query(
   `SELECT * FROM users WHERE id = $1`,
   [id]
 );
 return rows[0] ?? null;
}

export async function getAllUsers(): Promise<User[]> {
 const { rows } = await pool.query(
   `SELECT * FROM users`
 );
 return rows;
}


(async function (){
    // console.log("Creating User");
    // const user = await createUser("Kartik Mathur","kartik3@gmail.com");
    // console.log(user);

    console.log("Reading user with id : 3");
    const user = await getUserById(3);
    console.log(user);

    console.log("Reading all users");
    const users = await getAllUsers();
    for (const item of users) {
        console.log(item);
    }
    
    
})()
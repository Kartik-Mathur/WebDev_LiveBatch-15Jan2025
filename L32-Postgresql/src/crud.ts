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
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  return rows[0] ?? null;
}

export async function getAllUsers(): Promise<User[]> {
  const { rows } = await pool.query(`SELECT * FROM users`);
  return rows;
}

export async function updateUser(
  id: number,
  name: string,
  email: string
): Promise<User | null> {
  const { rows } = await pool.query<User>(
    `UPDATE users
    SET name = $1, email = $2
    WHERE id = $3
    RETURNING *`,
    [name, email, id]
  );
  return rows[0] ?? null;
}

export async function deleteUser(id: number): Promise<User | null> {
 const { rows } = await pool.query<User>(
   `DELETE FROM users WHERE id = $1 RETURNING *`,
   [id]
 );
 return rows[0] ?? null;
}


(async function () {
  console.log("Creating User");
  const user = await createUser("Kartik Mathur","kartik3@gmail.com");
  console.log(user);

  // console.log("Reading user with id : 3");
  // const user = await getUserById(3);
  // console.log(user);

  // console.log("Reading all users");
  // const users = await getAllUsers();
  // for (const item of users) {
  //   console.log(item);
  // }

  // console.log("Updating User: ");
  // const updatedData = await updateUser(3, "Aashish", "ashish@gmail.com");
  // console.log(updatedData);

  // console.log("Deleting User: ");
  // const deletedUser = await deleteUser(3);
  // console.log(deletedUser);

})();

import { pool } from "../db";

export interface UserOrder {
  user_id: number;
  user_name: string;
  user_email?: string;
  order_id?: number | null;
  product?: string | null;
  order_date?: Date | null;
}

// export async function insertRandomOrders(): Promise<string> {
//   const { rows } = await pool.query<UserOrder>(`
//    INSERT INTO orders (user_id, product)
//    VALUES
//     (1, 'Laptop'),
//     (2, 'Orange'),
//     (2, 'Guava'),
//     (1, 'Mouse'),
//     (1, 'Keyboard');
//  `);
//   return "Insertion successfull";
// }

// insertRandomOrders();

export async function fetchOrdersWithUsers(): Promise<UserOrder[]> {
  const { rows } = await pool.query<UserOrder>(`
   SELECT
     u.id    AS user_id,
     u.name  AS user_name,
     u.email AS user_email,
     o.id    AS order_id,
     o.product,
     o.order_date
   FROM orders o
   INNER JOIN users u ON o.user_id = u.id
   ORDER BY o.order_date DESC;
 `);
  return rows;
}

export async function fetchOrdersWithUsersLeftJOIN(): Promise<UserOrder[]> {
  const { rows } = await pool.query(`
   SELECT
     u.id   AS user_id,
     u.name AS user_name,
     u.email AS user_email,
     o.id   AS order_id,
     o.product
   FROM users u
   LEFT JOIN orders o ON u.id = o.user_id;
 `);
  return rows;
}

(async function () {
  const innerJoinData = await fetchOrdersWithUsers();
  console.log(innerJoinData);

  const LeftJoinData = await fetchOrdersWithUsersLeftJOIN();
  console.log(LeftJoinData);
})();

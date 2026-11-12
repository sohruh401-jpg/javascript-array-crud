
// // ==========================================
// // 1. BOSHLANG'ICH USERS ARRAY
// // ==========================================

// const users = [
//     {
//         id: 1,
//         firstName: "Ali",
//         lastName: "Valiyev",
//         age: 24,
//         email: "ali@gmail.com",
//         role: "admin",
//         isActive: true,
//         balance: 1500
//     },
//     {
//         id: 2,
//         firstName: "Vali",
//         lastName: "Karimov",
//         age: 19,
//         email: "vali@gmail.com",
//         role: "user",
//         isActive: true,
//         balance: 300
//     },
//     {
//         id: 3,
//         firstName: "Sardor",
//         lastName: "Ahmedov",
//         age: 28,
//         email: "sardor@gmail.com",
//         role: "moderator",
//         isActive: false,
//         balance: 750
//     },
//     {
//         id: 4,
//         firstName: "Madina",
//         lastName: "Sobirova",
//         age: 22,
//         email: "madina@gmail.com",
//         role: "user",
//         isActive: true,
//         balance: 500
//     },
//     {
//         id: 5,
//         firstName: "Aziz",
//         lastName: "Rasulov",
//         age: 31,
//         email: "aziz@gmail.com",
//         role: "admin",
//         isActive: false,
//         balance: 2200
//     },
//     {
//         id: 6,
//         firstName: "Malika",
//         lastName: "Toshmatova",
//         age: 26,
//         email: "malika@gmail.com",
//         role: "user",
//         isActive: true,
//         balance: 900
//     },
//     {
//         id: 7,
//         firstName: "Jasur",
//         lastName: "Ergashev",
//         age: 21,
//         email: "jasur@gmail.com",
//         role: "moderator",
//         isActive: true,
//         balance: 400
//     },
//     {
//         id: 8,
//         firstName: "Shahnoza",
//         lastName: "Aliyeva",
//         age: 29,
//         email: "shahnoza@gmail.com",
//         role: "user",
//         isActive: false,
//         balance: 1200
//     }
// ];



// // 2. CREATE - YANGI USER QO'SHISH

// function createUser(newUser) {

//     // Ism tekshirish
//     if (
//         typeof newUser.firstName !== "string" ||
//         newUser.firstName.trim() === ""
//     ) {
//         return "First name bo'sh bo'lishi mumkin emas";
//     }

//     // Familiya tekshirish
//     if (
//         typeof newUser.lastName !== "string" ||
//         newUser.lastName.trim() === ""
//     ) {
//         return "Last name bo'sh bo'lishi mumkin emas";
//     }

//     // Yosh tekshirish
//     if (
//         typeof newUser.age !== "number" ||
//         !Number.isFinite(newUser.age) ||
//         newUser.age < 18
//     ) {
//         return "Yosh kamida 18 bo'lishi kerak";
//     }

//     // Email formatini tekshirish
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (
//         typeof newUser.email !== "string" ||
//         !emailRegex.test(newUser.email.trim())
//     ) {
//         return "Email formati noto'g'ri";
//     }

//     // Email takrorlanmasligini tekshirish
//     const emailExists = users.some(function(user) {
//         return user.email.toLowerCase() === newUser.email.trim().toLowerCase();
//     });

//     if (emailExists) {
//         return "Bu email allaqachon mavjud";
//     }

//     // Role tekshirish
//     const roles = ["admin", "moderator", "user"];

//     if (!roles.includes(newUser.role)) {
//         return "Role noto'g'ri";
//     }

//     // Balance tekshirish
//     if (
//         typeof newUser.balance !== "number" ||
//         !Number.isFinite(newUser.balance) ||
//         newUser.balance < 0
//     ) {
//         return "Balance manfiy bo'lmasligi kerak";
//     }

//     // Eng katta ID ni topish
//     let maxId = 0;

//     users.forEach(function(user) {
//         if (user.id > maxId) {
//             maxId = user.id;
//         }
//     });

//     // Yangi user yaratish
//     const user = {
//         id: maxId + 1,
//         firstName: newUser.firstName.trim(),
//         lastName: newUser.lastName.trim(),
//         age: newUser.age,
//         email: newUser.email.trim(),
//         role: newUser.role,
//         isActive: newUser.isActive ?? true,
//         balance: newUser.balance
//     };

//     // Arrayga qo'shish
//     users.push(user);

//     return "Foydalanuvchi muvaffaqiyatli qo'shildi";
// }


// // ==========================================
// // 3. READ - BARCHA USERLARNI KO'RISH
// // ==========================================

// function getUsers() {

//     users.forEach(function(user) {

//         console.log("ID:", user.id);

//         console.log(
//             "Name:",
//             user.firstName + " " + user.lastName
//         );

//         console.log("Email:", user.email);

//         console.log("Role:", user.role);

//         console.log(
//             "Status:",
//             user.isActive ? "Active" : "Inactive"
//         );

//         console.log("Balance: $" + user.balance);

//         console.log("----------------------");

//     });

//     return users;
// }


// // ==========================================
// // 4. ID ORQALI BITTA USERNI TOPISH
// // ==========================================

// function getUserById(id) {

//     const user = users.find(function(user) {
//         return user.id === id;
//     });

//     if (!user) {
//         return "User not found";
//     }

//     return user;
// }


// // ==========================================
// // 5. ROLE BO'YICHA USERLARNI AJRATISH
// // ==========================================

// function getUsersByRole(role) {

//     const result = users.filter(function(user) {
//         return user.role === role;
//     });

//     return result;
// }


// // ==========================================
// // 6. UPDATE - USER MA'LUMOTLARINI YANGILASH
// // ==========================================

// function updateUser(id, updatedData) {

//     // Userni topish
//     const user = users.find(function(user) {
//         return user.id === id;
//     });

//     if (!user) {
//         return "User not found";
//     }

//     // ID ni o'zgartirishga ruxsat yo'q
//     const newData = { ...updatedData };
//     delete newData.id;

//     // O'zgartiriladigan maydonlarni tekshirish
//     const allowedFields = [
//         "firstName",
//         "lastName",
//         "age",
//         "email",
//         "role",
//         "isActive",
//         "balance"
//     ];

//     const fields = Object.keys(newData);

//     for (let field of fields) {
//         if (!allowedFields.includes(field)) {
//             return "Bunday maydonni o'zgartirish mumkin emas: " + field;
//         }
//     }

//     // Yangi ma'lumotlarni eski ma'lumotlar bilan birlashtirish
//     const updatedUser = {
//         ...user,
//         ...newData,
//         id: user.id
//     };

//     // Ism tekshirish
//     if (
//         typeof updatedUser.firstName !== "string" ||
//         updatedUser.firstName.trim() === ""
//     ) {
//         return "First name bo'sh bo'lishi mumkin emas";
//     }

//     // Familiya tekshirish
//     if (
//         typeof updatedUser.lastName !== "string" ||
//         updatedUser.lastName.trim() === ""
//     ) {
//         return "Last name bo'sh bo'lishi mumkin emas";
//     }

//     // Yosh tekshirish
//     if (
//         typeof updatedUser.age !== "number" ||
//         !Number.isFinite(updatedUser.age) ||
//         updatedUser.age < 18
//     ) {
//         return "Yosh kamida 18 bo'lishi kerak";
//     }

//     // Email formatini tekshirish
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (
//         typeof updatedUser.email !== "string" ||
//         !emailRegex.test(updatedUser.email.trim())
//     ) {
//         return "Email formati noto'g'ri";
//     }

//     // Email boshqa userda mavjudligini tekshirish
//     const emailExists = users.some(function(item) {
//         return (
//             item.id !== id &&
//             item.email.toLowerCase() === updatedUser.email.trim().toLowerCase()
//         );
//     });

//     if (emailExists) {
//         return "Bu email boshqa foydalanuvchida mavjud";
//     }

//     // Role tekshirish
//     const roles = ["admin", "moderator", "user"];

//     if (!roles.includes(updatedUser.role)) {
//         return "Role noto'g'ri";
//     }

//     // Balance tekshirish
//     if (
//         typeof updatedUser.balance !== "number" ||
//         !Number.isFinite(updatedUser.balance) ||
//         updatedUser.balance < 0
//     ) {
//         return "Balance manfiy bo'lmasligi kerak";
//     }

//     // Active status tekshirish
//     if (typeof updatedUser.isActive !== "boolean") {
//         return "isActive true yoki false bo'lishi kerak";
//     }

//     // Ma'lumotlarni asl userga yozish
//     Object.assign(user, updatedUser);

//     return users;
// }


// // ==========================================
// // 7. DELETE - USERNI O'CHIRISH
// // ==========================================

// function deleteUser(id) {

//     // User indeksini topish
//     const index = users.findIndex(function(user) {
//         return user.id === id;
//     });

//     // User topilmasa
//     if (index === -1) {
//         return "User not found";
//     }

//     // Adminni o'chirish mumkin emas
//     if (users[index].role === "admin") {
//         return "Admin foydalanuvchisini o'chirish mumkin emas";
//     }

//     // Userni arraydan o'chirish
//     users.splice(index, 1);

//     return users;
// }


// // ==========================================
// // 8. TESTLAR - CREATE
// // ==========================================

// console.log("========== CREATE TEST ==========");

// console.log(createUser({
//     firstName: "Bobur",
//     lastName: "Hasanov",
//     age: 25,
//     email: "bobur@gmail.com",
//     role: "user",
//     balance: 600
// }));

// // Takroriy email
// console.log(createUser({
//     firstName: "Ali",
//     lastName: "Test",
//     age: 25,
//     email: "ali@gmail.com",
//     role: "user",
//     balance: 100
// }));

// // 16 yoshli user
// console.log(createUser({
//     firstName: "Test",
//     lastName: "User",
//     age: 16,
//     email: "test@gmail.com",
//     role: "user",
//     balance: 100
// }));

// // Noto'g'ri role
// console.log(createUser({
//     firstName: "Test",
//     lastName: "User",
//     age: 25,
//     email: "test2@gmail.com",
//     role: "superadmin",
//     balance: 100
// }));


// // ==========================================
// // 9. TESTLAR - READ
// // ==========================================

// console.log("========== READ TEST ==========");

// // Barcha userlar
// getUsers();

// // ID orqali qidirish
// console.log(getUserById(3));

// console.log(getUserById(100));

// // Adminlarni chiqarish
// console.log(getUsersByRole("admin"));

// // Moderatorlarni chiqarish
// console.log(getUsersByRole("moderator"));


// // ==========================================
// // 10. TESTLAR - UPDATE
// // ==========================================

// console.log("========== UPDATE TEST ==========");

// // Yosh va balance o'zgartirish
// console.log(updateUser(2, {
//     age: 20,
//     balance: 800
// }));

// // Ism va email o'zgartirish
// console.log(updateUser(4, {
//     firstName: "Madina",
//     email: "madina.new@gmail.com"
// }));

// // Noto'g'ri role
// console.log(updateUser(1, {
//     role: "superadmin"
// }));


// // ==========================================
// // 11. TESTLAR - DELETE
// // ==========================================

// console.log("========== DELETE TEST ==========");

// // Moderatorni o'chirish
// console.log(deleteUser(3));

// // Adminni o'chirishga urinish
// console.log(deleteUser(1));

// // Mavjud bo'lmagan user
// console.log(deleteUser(100));


// // ==========================================
// // 12. YAKUNIY USERS ARRAY
// // ==========================================

// console.log("========== FINAL USERS ARRAY ==========");

// console.log(users);

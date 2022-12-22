import { writable } from "svelte/store";
import FilterUser from "./lib/FilterUser.svelte";

export const users = writable(
    [
        {
            id: 1,
            img: "/src/assets/profile.png",
            name: "Parth Sharma",
            email: "parthsharma@gmail.com",
            active: true,
        },
        {
            id: 2,
            img: "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
            name: "Martin Luther",
            email: "martin@gmail.com",
            active: true,
        },
        {
            id: 3,
            img: "https://cdn-icons-png.flaticon.com/512/506/506185.png",
            name: "John Lee",
            email: "john@gmail.com",
            active: false,
        },
        {
            id: 4,
            img: "https://cdn-icons-png.flaticon.com/512/2102/2102633.png",
            name: "Aryan Sathe",
            email: "aryan@gmd.com",
            active: true,
        },
        {
            id: 5,
            img: "https://cdn-icons-png.flaticon.com/512/552/552909.png",
            name: "Khushal Bhatt",
            email: "kushal@google.com",
            active: false,
        }
    ]
);

export const remove = ({ detail }) => {
    users.update((_user) => _user.filter(user => user.id !== detail))
}

// let AddNewUser = ({ detail }) => {
//     $users = [
//         {
//             id: Number($users.length + 1),
//             img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
//             ...detail,
//         },
//         ...$users,
//     ];
// };
export const AddNewUser = ({ detail }) => {
    users.update(_user => [
        {
            id: Number(_user.length + 1),
            img: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
            ...detail,
        },
        ..._user,
    ])
}
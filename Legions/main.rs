#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate serde;

mod first;

use rocket_contrib::json::Json;
use simplebase::engine::*;

#[macro_export]
macro_rules! hash {
    ($value:expr) => {{
        use crypto::digest::Digest;
        use crypto::sha3::Sha3;
        let mut h = Sha3::sha3_512();
        h.input_str($value.as_ref());
        h.result_str()
    }};
}

fn main() {
    first::init();
    rocket::ignite().mount("/", routes![login, add]).launch();
}

#[derive(Debug, Serialize, Deserialize)]
struct Login {
    user: String,
    pass: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct User {
    id: String,
    plastic: f64,
    credits: f64,
}

#[derive(Debug, Serialize, Deserialize)]
struct Message {
    message: String,
    passed: bool,
    user: User,
}

#[post("/login", format = "application/json", data = "<user>")]
fn login(user: Json<Login>) -> Json<Message> {
    let user = user.into_inner();
    let hash = hash!(format!("{:?}", user));
    let mut database = if cfg!(target_family = "windows") {
        load_hash_database("data\\data.txt")
    } else {
        load_hash_database("data/data.txt")
    };
    let result = database.find(hash.as_ref());
    if result.is_empty() {
        let message = Message {
            message: String::from("Welcome New User"),
            passed: true,
            user: User {
                id: hash.clone(),
                plastic: 0.0,
                credits: 0.0,
            },
        };
        database.add_record(
            serde_json::to_string(&User {
                id: hash,
                plastic: 0.0,
                credits: 0.0,
            })
            .unwrap(),
        );
        if cfg!(target_family = "windows") {
            database.save_database("data\\data.txt");
        } else {
            database.save_database("data/data.txt");
        };
        Json(message)
    } else if result.len() == 2 {
        Json(Message {
            message: String::from("Welcome Back"),
            passed: true,
            user: serde_json::from_str(result[1].as_ref()).unwrap(),
        })
    } else {
        Json(Message {
            message: String::new(),
            passed: false,
            user: User {
                id: String::new(),
                plastic: 0.0,
                credits: 0.0,
            },
        })
    }
}

#[get("/add/<id>/<plastic>")]
fn add(id: String, plastic: f64) -> Json<User> {
    let mut database = if cfg!(target_family = "windows") {
        load_hash_database("data\\data.txt")
    } else {
        load_hash_database("data/data.txt")
    };
    let result = database.find(id.as_ref());
    if result.len() == 2 {
        let mut user: User = serde_json::from_str(result[1].as_ref()).unwrap();
        user.plastic += plastic;
        user.credits = user.plastic.log(2.0).abs();
        database.delete_record(result[0].parse().unwrap());
        database.add_record(serde_json::to_string(&user).unwrap());
        if cfg!(target_family = "windows") {
            database.save_database("data\\data.txt");
        } else {
            database.save_database("data/data.txt");
        };
        Json(user)
    } else {
        panic!("Could not find user")
    }
}

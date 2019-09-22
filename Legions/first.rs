use simplebase::engine::*;
use std::fs;

pub fn init() {
    let database = new_empty_database();

    if cfg!(target_family = "windows") {
        fs::create_dir_all("data").unwrap();
        database.save_database("data\\data.txt");
    } else {
        fs::create_dir_all("data").unwrap();
        database.save_database("data/data.txt");
    }
}

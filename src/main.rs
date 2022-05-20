///Here is a list of the most common Rust types: i32, i64, u32, u64, f32, f64, char, bool, String, Vec, Option, Result, and Slice.
/// Rust is a statically typed language, which means that the types of all variables must be known at compile time.
/// Rust is also a compiled language, which means that the compiler can do type inference and do optimizations based on the types of the variables.
/// Rust is a compiled language, which means that the compiler can do type inference and do optimizations based on the types of the variables.
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused_assignments)]
#[allow(unused_mut)]
#[warn(missing_docs)]
#[warn(unused_extern_crates)]
#[warn(unused_import_braces)]

// crate mod utils;
// crate mod types;
// crate mod functions;
// crate mod loops;
// crate mod conditionals;
// crate mod pointers;
// crate mod structs;
// crate mod enums;
// crate mod generics;
// crate mod traits;
// crate mod lifetimes;
// crate mod modules;
// crate mod macros;
// crate mod closures;

fn main() {
    println!("Hello, world!");
}

struct Point {
    // Language
    x: i32,
    y: i32,
}

mod foo {
    // Language: rust
    // Path: src\foo\main.rs
    fn main() {
        println!("Hello, world!");
    }
}

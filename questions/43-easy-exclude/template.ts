// 条件类型与泛型一起使用时，如果传入为联合类型，那么会对每一个类型进行判断和赋类型
type MyExclude<T, U> = T extends U ? never: T

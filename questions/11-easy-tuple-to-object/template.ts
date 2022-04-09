type TupleToObject<T extends readonly string[]> = {
    [P in T[number]]: P  // T[number]把元祖类型转换为联合类型
}


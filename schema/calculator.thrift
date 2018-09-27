exception InvalidOperation {
  1: string message
}

service Calculator {
  i32 add(1:i32 num1, 2:i32 num2) throws (1:InvalidOperation err)
}

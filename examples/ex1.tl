function square(:x) [
  return :x * :x
]

:x = 10
repeat 4 [
  forward :x
  left 90
  :x = square(:x)
]


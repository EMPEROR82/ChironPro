function square(:x) [
  return :x * :x
]

:y = 10
square(:y)
printf(:y)

:y = square(:y)


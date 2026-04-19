function factorial(:n) [
    if(:n == 1) [
        return 1
    ] else [
        :temp = factorial(:n - 1)
        return :n * :temp
    ]
]

:x = 5

printf("The factorial of ", :x, " is ", factorial(:x))
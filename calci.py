print("----My Calculator----")

num1 = float (input("Enter your first number: "))
num2 = float (input("Enter your second number: "))

print("press 1 for Addition! \n press 2 for Subtraction! \n press 3 for Multiplication! \n press 4 for Divison! \n")
choice = int(input("Enter your preference from 1-4: "))

if choice == 1:
    print("The Addition of given 2 number is: ",num1 + num2)
elif choice == 2:
    print("The Subtraction of given 2 number is: ",num1 - num2)
elif choice == 3:
    print("The Multiplication of given 2 number is: ",num1 * num2)
elif choice == 4:
    print("The Divison of given 2 number is: ",num1 / num2)
else:
    print("Invalid input!")

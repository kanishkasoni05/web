Menu = {
    "Burger": {
    'Aloo tikki': 40,
    'Veg burger':50,
    'Veg paneer burger': 70,
    'Paneer burger':60,
    },
    "Sandwich": {
    'Veg sandwich': 50,
    'Cheese grill sandwich': 70,
    'Masala sandwich': 50,
    'Cheese sandwich': 40,
    },
    "Pizza": {
    'Veg cheese pizza': 100,
    'Veg pizza': 90,
    'Veg Corn Pizza': 120,
    'Vegetable cheese pizza': 100,
    },
    "Manchurian": {
    'Dry manchurian': 60,
    'Gravy manchurian': 60,
    'Manchurian with choumin': 70,
    }
}

print("Welcome to The Coding Restro, Here's the menu")
Menu = """
Burger: 
- Aloo tikki: Rs40
- Veg burger: Rs50
-Veg paneer burger: Rs70
Paneer burger: Rs60\n
Sandwich: 
-Veg sandwich: Rs50
-Cheese grill sandwich: Rs70
-Masala sandwich: Rs50
-Cheese sandwich: Rs40\n
Pizza: 
-Veg cheese pizza: Rs100
-Veg pizza: Rs90
Veg Corn Pizza: Rs120
Vegetable cheese pizza: Rs100\n
Manchurian: 
Dry manchurian: Rs60
Gravy manchurian: Rs60
Manchurian with choumin: Rs70\n
"""
print(Menu)

print("Hey dear! Please place your order")

menu = {
    1: {'item': 'Aloo tikki', 'price': 40},
    2: {'item': 'Veg burger', 'price': 50},
    3: {'item': 'Veg paneer burger', 'price': 70},
    4: {'item': 'Paneer burger', 'price': 60},
    5: {'item': 'Veg sandwich', 'price': 50},
    6: {'item': 'Cheese grill sandwich', 'price': 70},
    7: {'item': 'Masala sandwich', 'price': 50},
    8: {'item': 'Cheese sandwich', 'price': 40},
    9: {'item': 'Veg cheese pizza', 'price': 100},
    10: {'item': 'Veg pizza', 'price': 90},
    11: {'item': 'Veg corn pizza', 'price': 120},
    12: {'item': 'Vegetable cheese pizza', 'price': 100},
    13: {'item': 'Dry manchurian', 'price': 60},
    14: {'item': 'Gravy manchurian', 'price': 60},
    15: {'item': 'Manchurian with choumin', 'price': 70}
}

# Displaying the menu
for key in menu:
    print(f"{key}. {menu[key]['item']} - Rs{menu[key]['price']}")

# Taking orders
order = []

while True:
    choice = input("\nEnter item number to order (or 'done' to finish): ")
    
    if choice.lower() == 'done':
        break
    elif choice.isdigit():
        choice = int(choice)
        if choice in menu:
            quantity = int(input(f"Enter quantity for {menu[choice]['item']}: "))
            order.append((menu[choice], quantity))
        else:
            print("Sorry! Item not available.")
    else:
        print("Invalid input. Please enter a valid item number.")

# Displaying order summary
print("\n------- Your Total Order -------")
total = 0
for item, qty in order:
    price = item['price'] * qty
    print(f"{item['item']} x {qty} = Rs{price}")
    total += price

print(f"\nTotal Bill: Rs{total}")
   
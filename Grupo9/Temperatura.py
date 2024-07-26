def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Preguntar al usuario si desea convertir de Celsius a Fahrenheit
convertir_celsius = input("¿Desea convertir de Celsius a Fahrenheit? (S/N): ")

if convertir_celsius.upper() == "S":
    celsius = float(input("Ingrese la temperatura en grados Celsius: "))
    fahrenheit = celsius_to_fahrenheit(celsius)
    print(f"{celsius} grados Celsius son equivalentes a {fahrenheit} grados Fahrenheit")

# Preguntar al usuario si desea convertir de Fahrenheit a Celsius
convertir_fahrenheit = input("¿Desea convertir de Fahrenheit a Celsius? (S/N): ")

if convertir_fahrenheit.upper() == "S":
    fahrenheit = float(input("Ingrese la temperatura en grados Fahrenheit: "))
    celsius = fahrenheit_to_celsius(fahrenheit)
    print(f"{fahrenheit} grados Fahrenheit son equivalentes a {celsius} grados Celsius")
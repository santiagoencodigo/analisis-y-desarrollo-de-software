from ejercicios_y_datos import datos

nombre, ficha, nota1, nota2 = datos()

print(f"nombre {nombre}")
print(f"ficha {ficha}")
print(f"nota1 {nota1}")
print(f"nota2 {nota2}")

promedio = nota1 + nota2

print()
print("Su promedio es", promedio)

if promedio < 5:
    print(f"No aprobo su nota es: {promedio}, vuelve a intentarlo...")
else:
    print(f"Felicitaciones, aprobo y su nota es: {promedio}")

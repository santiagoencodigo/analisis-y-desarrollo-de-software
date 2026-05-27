from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages

# Create your views here.

# Ahora continuamos entonces con las funciones. Inicialmente por home:

def home(request):
    return render(request, 'usuarios\home.html')

# Ahora para temas de registro:

def registro(request):
    # Como habra un formulario de registro para tener un nuevo usuario.

    # Verifica que sea POST por protocolos de seguridad
    if request.method == 'POST':
        form=UserCreationForm(request.POST)
        if form.is_valid(): 
            form.save()
            messages.success(request, "Usuario creado correctamente")
            return redirect('login')
        else:
            form=UserCreationForm()

        return render(request, 'usuarios/registro.html', {'form':form})
    
# Ahora vamos con tema de autenticación.

def login_view(request):
    # Temas de usuario y contraseña
    # Veremos los datos que estaran en el modelo.

    if request.method == 'POST':
        username=request.POST['username']        
        password=request.POST['password']

        # Llamaremos al metodo de autenticación

        # En caso de que sean igual, que se haga la autenticación.
        user=authenticate(request, username=username, password=password)


        # Para definir si entra o no entra.        
        if user is not None:            
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, "Credenciales Incorrectas")

    return render(request, 'usuarios\login.html')


# Ultima view, para logout

def logout_view(request):
    logout(request)
    return redirect('login')
        

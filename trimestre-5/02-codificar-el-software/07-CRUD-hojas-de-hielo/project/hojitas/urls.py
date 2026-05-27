from django.urls import path
from . import views
urlpatterns=[
    path('',views.inicio, name='inicio'),

    path('nosotros',views.nosotros, name='nosotros'),#el primer nosotros es el de la url
    path('hojas',views.hojas, name='hojas'), #la funcion es la de views.hojas
    path('hojas/crear',views.crearh, name='crearh'),
    path('hojas/editar',views.editarh, name='editarh'),
]
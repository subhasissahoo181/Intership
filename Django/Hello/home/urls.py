 # from turtle import home
from django.contrib import admin
from django.urls import path, include
from home import views
urlpatterns = [
    path('admin/', admin.site.urls),
    # path(' ',include(home.url));
     path("",views.index,name='home'),
     path("about",views.about,name='about'),
     path("services",views.services,name='services'),
     path("contact/",views.contact,name='contact'),
    #  path("submitcontact",views.contact,name='contact'),
    #  path("staticdile",views.index,name='staticfile'),  
    #   path("template",views.index,name='template'),
]
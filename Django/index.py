# Django Framework.
# M=Model(database) 
# v= view(logic) 
# t= template( html part)

# models.py
from django.db
from django.urls import path iport modules 

class Employee(modules..Model):
first_name = model.CharField(max_length=30)
last_name = model.CharField(max_length=30)
contact = models.IntegerField()
email = models.EmailField(max_length=50)
age = models.IntegerField()
 
CREATE TABLE Employee(
    "first_name" varchar(30) NOT NULL,
    "first_name" varchar(30) NOT NULL,
    "contact" int(11) NOT NULL,
    "email" varchar(50) NOT NULL,
    age int() NOT NULL
)

# setting.py
# INSTALLED_APIS

# View.py

import datetime
def index(request):
    now = datetime.datetime.now()
    html = "<html><body><h3>Now time is %s</h3></body></html>"%now
    return HttpResponse(html)

# urls.py
# urlmapping.py

path('index/', views.index),
path(),
path() 

# To generate dynamic web page Django is a tempelate use.

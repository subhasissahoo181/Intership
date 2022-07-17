# from multiprocessing import context
# from django.shortcuts import render, HttpResponse
from multiprocessing import context
from django.template import RequestContext
# from setuptools import required
from django.http import HttpResponse
from django.shortcuts import render,redirect
# from.forms import usersForm
from datetime import datetime
from home.models import Contact
from django.contrib import messages

# Create your views here.
def index(request):
    # context = {
    #     "variable1":"Subhasis sahoo",
    #     "variable2":"Chandan sahoo"
    # }
    messages.success(request,"This is the text message")
    
    # return HttpResponse("This is HomePage"),
    return render(request,'index.html')
def about(request):
    # return HttpResponse("This is AboutPage")
    return render(request,'about.html')

def services(request):
    # return HttpResponse("This is ServicesPage")
    return render(request,'services.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        text = request.POST.get('text')
        contact = Contact(name=name, email=email, phone=phone, text=text, date=datetime.today())
        contact.save()
        messages.success(request, 'Your message sucessfully sent.')
    return render(request,'contact.html')
    # return HttpResponse("This is ContactPage")
    

# def blog(request):
    # context = {
    #     "variable1":"Subhasis sahoo",
    #     "variable2":"Chandan sahoo"
    # }
    


# messages.debug(request, '%s SQL statements were executed.' % count)
# messages.info(request,'Three credits remain in your account.')
# messages.success(request, 'profile details updated.')
# messages.waring(request, 'your account expires in three days.')
# messages.error(request,'document deleted.')
# from django.shortcuts import render

# Create your views here.
# from asyncore import write
# from django.shortcuts import render
# from django.http import HttpResponse
from multiprocessing import context
from django.shortcuts import render, HttpResponse

post = [
    {
           'author':'Amitabh',
           'title':'Blog post',
            'content':'phorography is now a day very handy...',
            'date_post':'October 28, 2009'
    },
    {
           'author':'Amit',
           'title':'Blog post2',
            'content':'phorography is now a day very handy...',
            'date_post':'April 28, 2003'
    },
    {
           'author':'Anil',
           'title':'Blog post3',
            'content':'phorography is now a day very handy...',
            'date_post':'June 20, 2010'
    },

    
]

def bio(request):
    # context = {'post':post}
    return HttpResponse("This is HomePage")
    # return render(request,'bio/home.html',context)

def index(request):
    # return HttpResponse("This is HomePage")
    return render(request,'bio/about.html',{'title':'About'})

# python manage.py makemigrations
# python manage.py migrate
# python manage.py createsuperuser
